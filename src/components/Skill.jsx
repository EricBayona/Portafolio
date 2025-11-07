import FadeInSection from "./FadeInSection";

const skills = [
  { name: "Docker", img: "/skill/DockerLogo.png" },
  { name: "CSS", img: "/skill/Css.png" },
  { name: "Aptugo", img: "/skill/Aptugo.png" },
  { name: "Express", img: "/skill/ExpressJS.png" },
  { name: "Firebase", img: "/skill/Firebase.png" },
  { name: "Git", img: "/skill/Git.png" },
  { name: "GitHub", img: "/skill/GitHub.png" },
  { name: "HTML", img: "/skill/Html.png" },
  { name: "JavaScript", img: "/skill/Js.png" },
  { name: "MongoDB", img: "/skill/MongoDB.png" },
  { name: "SASS", img: "/skill/Sass.png" },
];

export default function Skill() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 px-6 sm:px-12 md:px-20 lg:px-32"
    >
      <FadeInSection>
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Skills
        </h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
              />
              <p className="mt-3 text-blue-900 font-medium text-sm sm:text-base">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
