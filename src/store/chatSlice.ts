import { ChatState, Message } from "@/types/chatbot";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const loadChatFromLocalStorage = (): Message[] => {
    if (typeof window !== "undefined") {
      const savedChats = localStorage.getItem("chatHistory");
      return savedChats ? JSON.parse(savedChats) : [];
    }
    return [];
  }

const initialState: ChatState = {
  messages: loadChatFromLocalStorage(),
  isTyping: false,
};


const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
      localStorage.setItem("chatHistory", JSON.stringify(state.messages));
    },
    clearChat: (state) => {
        state.messages = [];
        localStorage.removeItem("chatHistory");
      },
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
  },
});

export const { addMessage, setTyping,clearChat } = chatSlice.actions;
export default chatSlice.reducer;
