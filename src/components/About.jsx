import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white px-8">
      <FadeInSection>
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Sobre mí
        </h3>
        <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
          Soy un desarrollador web con experiencia en aplicaciones interactivas
          y funcionales. Manejo de React, Node.js, Express, Firebase, MongoDB.
          Me gusta aprender tecnologías nuevas, construir proyectos prácticos y
          trabajar en soluciones que aporten valor real.
        </p>
      </FadeInSection>
    </section>
  );
}
