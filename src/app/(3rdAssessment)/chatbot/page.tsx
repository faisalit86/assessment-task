"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getGeminiResponse } from "@/services/geminiService";
import { addMessage, setTyping } from "@/store/chatSlice";
import { RootState } from "@/store/store";
import { Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AiResponse from "../components/AiResponse";
import ChatbotHeader from "../components/ChatbotHeader";
import TypingIndicator from "../components/TypingIndicator";
import UserResponse from "../components/UserResponse";

export default function Chatbot() {
  const { messages, isTyping } = useSelector((state: RootState) => state.chat);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setInput("");

    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user" as const,
    };
    dispatch(addMessage(userMessage));
    setInput("");

    dispatch(setTyping(true));

    const botResponse = await getGeminiResponse(input);
    dispatch(setTyping(false));

    const botMessage = {
      id: Date.now().toString(),
      text: botResponse,
      sender: "bot" as const,
    };
    dispatch(addMessage(botMessage));
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="uppercase font-bold text-[22px] leading-[31.5px] my-11 font-manrope">
        AI Chatbot for Pizza shop
      </h2>
      <Card className="w-full !mx-3 md:mx-0 md:w-[520px] h-[600px] flex flex-col shadow-lg rounded-lg overflow-hidden">
        <ChatbotHeader />

        {messages.length == 0 && (
          <div className="flex flex-col items-center justify-center gap-y-3 w-full mt-3">
            <Image
              src={"/assets/chatbot.png"}
              width={100}
              height={100}
              alt="bot-icon"
              className="w-[75px]"
            />
            <h2 className="font-manrope font-semibold text-[18px]">
              Welcome To Pizza Hut
            </h2>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) =>
            msg.sender === "user" ? (
              <UserResponse key={index} message={msg.text} />
            ) : (
              <AiResponse key={index} message={msg.text} />
            )
          )}
          {isTyping && <TypingIndicator />}
          <div ref={chatEndRef}></div>
        </div>

        <div className="p-4 flex gap-2 border-t">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button onClick={handleSend} className="bg-blue-500">
            <Send size={18} />
          </Button>
        </div>
      </Card>
    </div>
  );
}
