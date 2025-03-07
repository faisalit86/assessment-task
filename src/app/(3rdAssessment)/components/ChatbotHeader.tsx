import { clearChat } from "@/store/chatSlice";
import { Paintbrush } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteChatHistoryModal from "./DeleteChatHistoryModal";

export default function ChatbotHeader() {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = () => {
    setShowDeleteModal(false);
    dispatch(clearChat());
  };
  return (
    <>
      <div className="bg-gray-300 border-b border-black text-black p-4 font-bold font-manrope flex justify-between">
        <div className="flex gap-x-2 items-end">
          <Image
            src={"/assets/chatbot.png"}
            width={100}
            height={100}
            alt="bot-icon"
            className="w-[35px]"
          />
          Pizza Hut 🍕
        </div>
        <button
          title="Clear your chat history"
          onClick={() => setShowDeleteModal(true)}
        >
          <Paintbrush />
        </button>
      </div>
      {showDeleteModal && (
        <DeleteChatHistoryModal
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
          isOpen={showDeleteModal}
        />
      )}
    </>
  );
}
