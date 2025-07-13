// src/components/MessageBubble.jsx
import { DeviceMobile, Globe } from "@phosphor-icons/react";
import dayjs from "dayjs";

export default function MessageBubble({ msg }) {
  const isMobile = msg.from === "mobile";

  return (
    <div
      className={`rounded-sm p-4 shadow-sm text-sm ${
        isMobile ? "bg-[#FFE3DE] ml-auto" : "bg-gray-100"
      }`}
    >
      <div className="text-gray-700 break-words">{msg.content}</div>
      <div className=" flex space-x-2 text-[12px] text-gray-500 justify-end mt-1">
        <div>{isMobile ? <DeviceMobile size={16} /> : <Globe size={16} />}</div>
        {dayjs(msg.timestamp).format("DD MMM, hh:mm A")}
      </div>
    </div>
  );
}
