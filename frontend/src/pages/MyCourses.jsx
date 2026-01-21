import { useState } from "react";
import Button from "../components/Button";

import TabButton from "../components/TabButton";

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const tabs = [
    { id: "completed", label: "✓ Completed (15)" },
    { id: "in-progress", label: "📚 In Progress (2)" },
    { id: "planned", label: "📅 Planned (3)" },
  ];

  const coursesData = {
    completed: [
      { code: "CMPUT 174", title: "Intro to Computing I", term: "Fall 2023", grade: "A" },
      { code: "CMPUT 175", title: "Intro to Computing II", term: "Winter 2024", grade: "A-" },
      { code: "CMPUT 267", title: "Machine Learning", term: "Fall 2024", grade: "A" },
    ],
    inProgress: [
      { code: "CMPUT 291", title: "Databases", term: "Winter 2025" },
      { code: "CMPUT 229", title: "Computer Organization", term: "Winter 2025" },
    ],
    planned: [
      { code: "CMPUT 304", title: "Algorithms II", term: "Fall 2025" },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">📖 My Courses</h1>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex space-x-8 border-b-2 border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn pb-4 font-semibold ${activeTab === tab.id ? "border-b-4 border-purple-600 text-purple-600" : "text-gray-600 hover:text-purple-600 transition"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="mt-6">
          <TabButton courses={coursesData[activeTab]} type={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
