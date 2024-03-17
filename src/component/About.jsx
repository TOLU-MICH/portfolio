import hero from "../assets/man.png";
import Container from "./Container";

const data = [
  "Head of the product Design & Ux",
  "18+ year of User Interaction Experience",
  "15+ years of leading Web-Based Software Engineering, and Agile/Scrum Development",
  "4 year of Managing a Team of Remote UI Designers and Mentoring a Team of Product Managers",
];

const bio = [
  { title: "Age", desc: 24 },
  { title: "Residence", desc: "USA" },
  { title: "Freelance", desc: "Available" },
  { title: "Address", desc: "California, USA" },
];

const About = () => {
  return (
    <Container title={"About me"}>
      <div className="flex flex-wrap">
        <div className=" md:p-[30px] md:max-w-[49.998%] w-full pt-[30px] text-base">
          <strong>Hello! I’m Tyrone Ryan.</strong> Designer & Photographer from
          USA, California. I have rich experience in web site design and
          photography. I love to talk with you about our unique.
        </div>
        <div className="md:max-w-[49.998%] w-full py-[30px] md:p-[30px] boder-r">
          {bio.map((item, index) => (
            <span className="w-full py-[11px] flex justify-between boder last:after:!h-0 text-[14px] md:!text-[16px]">
              <strong className="p-[1px_8px] mr-[8px] bg-[#a1c568] rounded-sm">
                {item.title}:
              </strong>{" "}
              <span className="text-[16px]">{item.desc}</span>
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
