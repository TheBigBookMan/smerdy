import { skills } from "../utils/skillsData";

const Skills = () => {
  return (
    <ul className="flex mx-auto gap-[50px]">
      {skills.map((skill) => (
        <li className=" flex flex-col gap-1">
          <h3 className="text-zinc-400 text-xl">{skill.skillTitle}</h3>
          <ul className="text-zinc-50 flex flex-col gap-2">
            {skill.skills.map((skillArr) => (
              <li>{skillArr}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
