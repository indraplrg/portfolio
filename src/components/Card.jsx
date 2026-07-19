const Card = ({ children, classname = "" }) => {
  return (
    <div
      className={`font-bricolage-grotesque flex gap-2 border-2 border-black bg-[#f5f5f7] p-3 shadow-[8px_6px_0px_0px_rgba(34,34,34,1)] ${classname}`}
    >
      {children}
    </div>
  );
};

export default Card;
