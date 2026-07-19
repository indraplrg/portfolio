const Button = ({ children, classname = "" }) => {
  return (
    <button
      className={`font-bricolage-grotesque hover:translate-y-1px flex cursor-pointer gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transition-all hover:translate-x-1 hover:shadow-none ${classname}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
