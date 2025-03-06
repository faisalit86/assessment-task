export interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
  }
  
export  interface ChatState {
    messages: Message[];
    isTyping: boolean;
  }
  