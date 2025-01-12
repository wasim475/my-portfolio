import { TbBrandMongodb, TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
     const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Redux", icon: <TbBrandRedux className="text-violet-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
        { name: "Mongodb", icon: <SiMongodb className="text-green-500" /> },
        { name: "Mongoose", icon: <TbBrandMongodb className="text-red-100" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      ];
  return (
    <>
      <section className=" py-12 border-b-2">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase text-yellow-300">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white flex items-center gap-x-2 justify-center text-gray-500 p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
