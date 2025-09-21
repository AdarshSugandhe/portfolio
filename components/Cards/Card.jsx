"use client";

import Image from "next/image";
import CertificateModal from "./CertificateModal";

const Card = (props) => {
  const {
    type,
    logoUrl,
    position,
    duration,
    description,
    company,
    institution,
    qualification,
    certificate,
    name,
    icon,
  } = props;

  return (
    <div className="w-full h-[300px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[270px] rounded-[12px] border border-transparent bg-gradient-to-br from-[#2c2c3e] via-[#3a3a52] to-[#2c2c3e] text-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-[80px] xl:h-[68px] flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[12px] rounded-tr-[12px] bg-[#4e4e6b] shadow-custom-[0px 0px 12px 0px #000000]">
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/journey/shape.svg"
                width={16}
                height={16}
                alt=""
              />
              <h3 className="text-lg font-semibold text-accent">
                {type === "experience"
                  ? position
                  : type === "education"
                  ? qualification
                  : duration}
              </h3>
            </div>
            <p className="text-base">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:flex-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              {type === "skills" ? (
                <div className="w-max xl:w-[300px] h-full flex items-center justify-center">
                  <div className="text-5xl">{icon}</div>
                </div>
              ) : (
                <div className="relative w-[300px] h-[70px] xl:h-[80px]">
                  <Image src={logoUrl} className="object-contain" fill alt="" />
                </div>
              )}

              <div className="xl:border-l xl:border-secondary/20 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 text-accent">
                  {type === "experience"
                    ? company
                    : type === "education"
                    ? institution
                    : type === "skills"
                    ? name
                    : null}
                </h3>
                <p className="text-base max-w-[660px]">{description}</p>
                {certificate && <CertificateModal imgUrl={certificate} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
