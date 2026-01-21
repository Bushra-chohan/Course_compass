const ProgressCard = ({ title, icon, progress, total, earned, graduation }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-purple-600 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">{icon}</span> {title}
      </h2>
      <div className="mb-5">
        <div className="flex justify-between mb-3">
          <span className="text-gray-600 font-medium">{earned}/{total} credits earned</span>
          <span className="font-bold text-purple-600 text-lg">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <p className="text-sm text-gray-600 font-medium">
        🎓 Estimated graduation: <span className="text-purple-600">{graduation}</span>
      </p>
    </div>
  );
};

export default ProgressCard;
