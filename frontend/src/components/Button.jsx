const Button = ({ children, variant = "primary", onClick }) => {
  let classes = "px-4 py-2 rounded-lg font-semibold transition shadow-md ";

  switch(variant) {
    case "primary":
      classes += "bg-purple-600 text-white hover:bg-purple-700";
      break;
    case "secondary":
      classes += "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50";
      break;
    case "success":
      classes += "bg-teal-500 text-white hover:bg-teal-600";
      break;
    case "danger":
      classes += "bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      classes += "bg-gray-200";
  }

  return <button className={classes} onClick={onClick}>{children}</button>;
};

export default Button;
