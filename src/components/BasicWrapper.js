const BasicWrapper = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1280px] px-32">{children}</div>
    </div>
  );
};

export default BasicWrapper;
