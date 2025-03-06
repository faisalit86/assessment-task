import React from "react";

interface UserResponseProps {
  message: string;
}

export default function UserResponse({ message }: UserResponseProps) {
  return (
    <div
      className={`p-2 rounded-lg w-max bg-blue-500 self-end ml-auto font-manrope text-white`}
    >
      {message}
    </div>
  );
}
