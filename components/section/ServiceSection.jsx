import MyChip from "../ui/MyChip";
import ServiceCard from "../ui/ServiceCard";

function ServiceSection() {
  const services = [
    {
      title: "UI/UX Design",
      description:
        "We design beautiful and intuitive user interfaces for web and mobile apps.",
      image: "uiux",
    },
    {
      title: "Web Development",
      description:
        "We build high quality web apps with the latest technology stack.",
      image: "web",
    },
    {
      title: "Mobile Development",
      description:
        "We build high quality mobile apps with the latest technology stack.",
      image: "mobile",
    },
  ];

  return (
    <section className="h-screen w-screen px-[8vw] 2xl:pt-[10vh]" id="services">
      <div className="mt-2">
        <MyChip title="Services" />
        <div className="mt-12">
          <h1 className="text-6xl font-bold pr-[10vw] leading-[4rem]">
            <strong className="font-bold bg-[#D940C0] px-2">
              Empower Your Business
            </strong>{" "}
            with our Web & Mobile Apps expertise
          </h1>
        </div>

        <div className="mt-12 flex gap-14 justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
