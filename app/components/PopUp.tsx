import { FC } from "react";

interface PopupProps {
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ onClose }) => {
  return (
    
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mt-6">
        <h2 className="text-xl font-semibold mb-4">Pop-up Content</h2>
        <p>This is a dynamically imported pop-up!</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
   
  );
};

export default Popup;
