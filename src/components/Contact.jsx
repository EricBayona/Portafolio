import { send } from "emailjs-com";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeInSection from "./FadeInSection";

export default function Contact() {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    reply_to: "",
    asunto: "",
    message: "",
  });

  const handleChange = (e) =>
    setToSend({ ...toSend, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      import.meta.env.VITE_SERVICE_EMAIL,
      import.meta.env.VITE_TEMPLATE_EMAIL,
      toSend,
      import.meta.env.VITE_PUBLIC_KEY_EMAIL
    )
      .then(() => {
        toast.success("Mensaje enviado correctamente");
        setToSend({
          first_name: "",
          last_name: "",
          reply_to: "",
          asunto: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Error al enviar el mensaje");
      });
  };
  return (
    <section id="contact" className="py-16 px-8 bg-white text-center">
      <FadeInSection>
        <h3 className="text-3xl font-bold text-blue-800 mb-6">Contacto</h3>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            name="first_name"
            placeholder="Nombre"
            value={toSend.first_name}
            onChange={handleChange}
            required
          />
          <input
            name="last_name"
            placeholder="Apellido"
            value={toSend.last_name}
            onChange={handleChange}
            required
          />
          <input
            name="reply_to"
            type="email"
            placeholder="Correo electrónico"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <input
            name="asunto"
            placeholder="Asunto"
            value={toSend.asunto}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Ingrese su mensaje..."
            value={toSend.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            Enviar
          </button>
          <ToastContainer autoClose={2000} />
        </form>
      </FadeInSection>
    </section>
  );
}
