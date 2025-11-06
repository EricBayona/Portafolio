import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo una vez
    threshold: 0.2, // Se activa cuando el 10% del elemento es visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
