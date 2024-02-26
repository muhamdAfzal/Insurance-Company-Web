const Heading = ({ element, smallText, largeText }) => {
  return (
    <h2
      className={`${smallText} ${largeText} font-bold leading-[70px] text-primary`}
    >
      {element}
    </h2>
  );
};

export default Heading;
