import Button from "./Button";

const CourseCard = ({ title, desc, credits, prereq, status, colorClass, buttonVariant }) => {
  // Determine background for status badge
  const statusBg = status?.bg || "bg-gray-200"; // fallback if undefined
  const statusText = status?.text || "text-gray-700";

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg border-t-4 ${colorClass} p-6`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <span className={`text-xs px-3 py-1 rounded-full font-bold ${statusBg} ${statusText}`}>
          {status?.label || "N/A"}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <p className="text-gray-500 text-xs mb-2">📌 {credits} Credits</p>
      {prereq && <p className="text-gray-500 text-xs mb-4">📋 Prereq: {prereq}</p>}
      <Button variant={buttonVariant} className="w-full">Add Course</Button>
    </div>
  );
};

export default CourseCard;
