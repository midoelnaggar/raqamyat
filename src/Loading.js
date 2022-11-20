import { CircleLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      className="contact_us_page"
      initial={{ opacity: 0}}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ scale: 0 }}
    >
      <div
        style={{
          paddingTop: "30vh",
          paddingBottom: "30vh",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircleLoader
          color="#0093de"
          size="20vh"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </motion.div>
  );
}
