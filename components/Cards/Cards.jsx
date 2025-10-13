"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { journey } from "@/lib/journeyData";

const Cards = () => {
  return (
    <>
      <Tabs defaultValue="skills" className="w-full flex flex-col items-center">
        <TabsList className="max-w-max mb-[30px]">
          {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
          <TabsTrigger
            className="text-white data-[state=active]text-white"
            value="skills"
          >
            My Skills
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]text-white"
            value="education"
          >
            Education
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "experience")
                .map((card, index) => (
                  <Card key={index} {...card} />
                ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent> */}

        <TabsContent value="education" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.6 }}
            >
              {journey
                .filter((item) => item.type === "education")
                .map((card, index) => (
                  <Card key={index} {...card} />
                ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {journey
                .filter((item) => item.type === "skills")
                .map((card, index) => (
                  <Card key={index} {...card} />
                ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
