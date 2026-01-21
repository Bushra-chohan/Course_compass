const QuickStatCard = ({ label, value, bgColor, textColor }) => {
  return (
    <div className={`rounded-xl p-5 border shadow-sm ${bgColor} ${textColor}`}>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
};

export default QuickStatCard;
