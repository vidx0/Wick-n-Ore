import "./Black.css";
import { motion } from "framer-motion";
function Black() {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
        id="blackScreen"
      ></motion.div>
    </>
  );
}
export default Black;
