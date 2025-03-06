import { motion } from "framer-motion";
import Image from "next/image";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1">
      <Image
        src={"/assets/chatbot.png"}
        alt="bot-icon"
        width={100}
        height={100}
        className="w-[25px] bg-cover"
      />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-gray-500 rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;
