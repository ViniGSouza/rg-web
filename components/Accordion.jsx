import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai"

export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2 border border-gray-300 rounded-md">
      <div
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold">{title}</h2>
        <AiOutlineArrowDown size={16} className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
      </div>
      {isOpen && (
        <div className="p-3 border-t border-gray-300">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;