const Button = ({ element }) => {
  return (
    <button className="py-3 px-6 text-white text-base md:text-2xl font-normal md:font-medium bg-green hover:bg-primary rounded transition-all duration-500">
      {element}
    </button>
  );
};

export default Button;
