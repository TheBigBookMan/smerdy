import { skills } from "../utils/skillsData";

const Skills = () => {
  return (
    <ul className="flex flex-col md:gap-[50px]">
      {skills.map((skill) => (
        <li key={skill.skillTitle} className="group relative flex flex-col ">
          <h3 className="relative text-zinc-400 text-xl transition-all cursor-pointer group-hover:text-zinc-50">
            {skill.skillTitle}
          </h3>
          <ul className="text-green-400 flex flex-col gap-2 duration-1000">
            {skill.skills.map((skillArr, index) => (
              <li
                key={index}
                className=" top-0 left-0 h-0 opacity-0 group-hover:h-full group-hover:opacity-100 duration-300 "
              >
                {skillArr}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
