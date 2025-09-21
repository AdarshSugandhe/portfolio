import Image from "next/image";

const services = [
  {
    icon: "assets/services/icon-2.svg",
    title: "Web Development",
    description: "Developing robust, scalable websites for all devices.",
  },
  {
    icon: "assets/services/icon-1.svg",
    title: "UI UX Design",
    description: "Designing compelling engaging user experiences.",
  },
  {
    icon: "assets/services/icon-3.svg",
    title: "E-commerce Solutions",
    description: "Building secure, user-freendly online stores to drive sales.",
  },
  {
    icon: "assets/services/icon-4.svg",
    title: "Care & Support",
    description: "Providing updated, security, and support for performance.",
  },
];

const Services = () => {
  return (
    <section className="relative z-40 bg-black">
      <div className="container mx-auto px-2 md:px-4">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => (
            <li
              className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              key={index}
            >
              <Image
                src={service.icon}
                width={48}
                height={48}
                alt=""
                className="mb-4"
              />
              <h3 className="text-[20px] tex-primary font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-[15px]">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
