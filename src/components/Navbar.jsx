export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-8 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-800">
        <a href="#">Eric Bayona</a>
      </h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-blue-600">
          Sobre mí
        </a>
        <a href="#skills" className="hover:text-blue-600">
          Skills
        </a>
        <a href="#projects" className="hover:text-blue-600">
          Proyectos
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contacto
        </a>
      </div>
    </nav>
  );
}
