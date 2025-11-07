// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] text-center px-4">
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/Eric.png"
          alt="Eric"
          className="w-62 h-62 sm:w-62 sm:h-62 md:w-62 md:h-62 object-contain"
        />
      </motion.div>
      <motion.h2
        className="text-4xl sm:text-6xl font-bold text-blue-900 mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hola, soy <span className="text-blue-700">Eric Bayona</span>
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl text-gray-600 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Desarrollador Full Stack especializado en React, Node.js. Me apasiona
        crear aplicaciones funcionales, escalables y atractivas.
      </motion.p>
    </section>
  );
}
