const TabButton = ({ label, active, onClick }) => {
  const base = "pb-4 font-semibold border-b-4 transition";
  const classes = active ? `${base} border-purple-600 text-purple-600` : `${base} border-transparent text-gray-600 hover:text-purple-600`;
  return <button className={classes} onClick={onClick}>{label}</button>;
};

export default TabButton;
