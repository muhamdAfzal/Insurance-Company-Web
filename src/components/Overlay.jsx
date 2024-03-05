const Overlay = ({ onToggle }) => {
  return (
    <div
      className="absolute top-0 left-0 h-full w-full backdrop-blur-xl z-30"
      onClick={onToggle}
    ></div>
  );
};

export default Overlay;
