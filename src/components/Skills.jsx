import { skills } from "../utils/skillsData";

const Skills = () => {
  return (
    <ul className="flex mx-auto gap-[50px]">
      {skills.map((skill) => (
        <li className="group relative flex flex-col gap-1">
          <h3 className="relative text-zinc-400 text-xl transition-all cursor-pointer group-hover:text-green-400">
            {skill.skillTitle}
          </h3>
          <ul className="text-zinc-50 flex flex-col gap-2 duration-1000">
            {skill.skills.map((skillArr) => (
              <li className=" top-0 left-0 h-0 opacity-0 group-hover:h-full group-hover:opacity-100 duration-1000 ">
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
