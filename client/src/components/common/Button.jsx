import clsx from "clsx";

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={clsx(
        "my-4 px-4 w-full py-2 tracking-widest text-lg transition duration-200 text-sm border font-semibold shadow-lgb cursor-pointer",
        "bg-white text-black hover:bg-gray-800 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
