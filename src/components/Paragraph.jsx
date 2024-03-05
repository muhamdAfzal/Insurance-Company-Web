const Paragraph = ({ text, color = "text-gray-600" }) => {
  return <p className={`text-[17px] xl:text-[20px] ${color}`}>{text}</p>;
};

export default Paragraph;
