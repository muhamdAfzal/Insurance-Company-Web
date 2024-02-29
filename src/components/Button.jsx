const Button = ({ element }) => {
  return (
    <button className="py-3 md:py-4 px-6 text-white text-xl font-normal md:font-medium bg-green hover:bg-primary rounded-md transition-all duration-500">
      {element}
    </button>
  );
};

export default Button;
