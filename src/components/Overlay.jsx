const Overlay = ({ onToggle }) => {
  return (
    <div
      className="absolute top-0 left-0 h-full w-full bg-overlayBg backdrop-blur-2xl z-30"
      onClick={onToggle}
    ></div>
  );
};

export default Overlay;
