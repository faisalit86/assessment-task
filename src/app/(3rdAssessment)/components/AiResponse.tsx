import Image from "next/image";
import React from "react";

interface AiResponseProps {
  message: string;
}

export default function AiResponse({ message }: AiResponseProps) {
  return (
    <div className="flex items-end gap-x-1">
      <Image
        src={"/assets/chatbot.png"}
        alt="bot-icon"
        width={100}
        height={100}
        className="w-[25px] bg-cover"
      />
      <div
        className={` p-2 rounded-lg max-w-[80%] bg-gray-300 self-start text-black font-manrope`}
      >
        {message}
      </div>
    </div>
  );
}
