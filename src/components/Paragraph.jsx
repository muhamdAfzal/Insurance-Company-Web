const Paragraph = ({ element, color = "text-gray-600" }) => {
  return <p className={`text-[17px] xl:text-[20px] ${color}`}>{element}</p>;
};

export default Paragraph;
