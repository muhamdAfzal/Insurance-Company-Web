const Title = ({
  children,
  bgColor = "border-green",
  txtColor = "text-green",
}) => {
  return (
    <h3
      className={`border ${bgColor} rounded-full px-5 py-2 ${txtColor} text-lg md:text-xl font-medium flex flex-row gap-x-2`}
    >
      {children}
    </h3>
  );
};

export default Title;
