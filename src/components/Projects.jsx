import FadeInSection from "./FadeInSection";

export default function Projects() {
  const projects = [
    {
      name: "Priotti Concep",
      desc: "Tienda online de indumentaria femenina con login, carrito persistente y pagos con MercadoPago. Backend desarrollado con Node.js y Express.",
      link: "https://priotticoncept.netlify.app/",
      img: "/priottiConcep.png",
      gitHub: [
        "https://github.com/EricBayona/Priotti-Concept-FrontEnd",
        "https://github.com/EricBayona/Priotti-Concept-Backend",
      ],
    },
    {
      name: "Macaneros",
      desc: "Tienda online de pijamas con autenticación de usuarios, gestión de productos, carrito persistente y sistema de pagos integrado con Firebase.",
      link: "https://macaneros.netlify.app/",
      img: "/macaneros.png",
      gitHub: "https://github.com/EricBayona/Macaneros",
    },
    {
      name: "Submarino Amarillo",
      desc: "Sitio de Arte Terapia informativo con  JavaScript vanilla.",
      link: "https://silvana-arte-terapia.netlify.app/",
      img: "/submarinoAmarillo.png",
      gitHub: "https://github.com/EricBayona/SubmarinoAmarillo",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 px-8">
      <FadeInSection>
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Proyectos
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                {p.name}
              </h4>
              <img src={p.img} alt="" />
              <p className="text-gray-600 mb-3">{p.desc}</p>
              <p>
                demo online:
                <a href={p.link} target="_blank">
                  <span className="text-blue-600 hover:underline">
                    {" "}
                    {p.link}
                  </span>
                </a>
              </p>
              <p className="mt-2">
                Repositorio:
                {Array.isArray(p.gitHub) ? (
                  p.gitHub.map((url, idx) => (
                    <span key={idx}>
                      {" "}
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {idx === 0 ? " Frontend" : " Backend"}
                      </a>
                    </span>
                  ))
                ) : (
                  <a
                    href={p.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ver repositorio
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
