import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import { data } from "@/lib/data";

const Work = () => {
  const uniqueCategories = Array.from(
    new Set(data.map((item) => item.category))
  );

  const tabData = [
    { category: "all" },
    ...uniqueCategories.map((category) => ({ category })),
  ];

  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);

  const filterWork =
    tabValue === "all"
      ? data.filter((item) => item.category !== "all")
      : data.filter((item) => item.category === tabValue);

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <section className="pt-24 min-h-[1000px] bg-black" id="work">
      <div className="container mx-auto px-2 md:px-4">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0 text-accent"
            />

            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0 border border-transparent md:border-accent/40 p-1 rounded-full">
              {tabData.map((item, index) => (
                <TabsTrigger
                  value={item.category}
                  key={index}
                  className="capitalize w-[120px] inlilne-flex items-center justify-center whitespace-normal h-[40px] rounded-full px-4 text-sm transition-all outline-none data-[state=active]:bg-accent text-white data-[state=active]:text-primary font-bold"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filterWork.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {visibleItems < filterWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load more
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
