"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("@/app/components/PopUp"), { ssr: false });

export default function PopUpDisplay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  ">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Open Pop-up
      </button>

      {isOpen && <Popup onClose={() => setIsOpen(false)} />}
    </div>
  );
}
