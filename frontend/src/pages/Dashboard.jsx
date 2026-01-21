import ProgressCard from "../components/ProgressCard";
import QuickStatCard from "../components/QuickStatCard";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Welcome back, Bushra! 👋</h1>
        <p className="text-gray-600 mt-3 text-lg">Here's your academic progress and next steps</p>
      </div>

      {/* Progress Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <ProgressCard
          title="Degree Progress"
          icon="📈"
          progress={37.5}
          earned={45}
          total={120}
          graduation="Spring 2027"
        />

        <div className="grid grid-cols-3 gap-4">
          <QuickStatCard label="Courses Completed" value="15" bgColor="bg-purple-50 border-purple-200 border" textColor="text-purple-600"/>
          <QuickStatCard label="Credits Earned" value="45" bgColor="bg-teal-50 border-teal-200 border" textColor="text-teal-600"/>
          <QuickStatCard label="Remaining" value="30" bgColor="bg-orange-50 border-orange-200 border" textColor="text-orange-600"/>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Button variant="primary" onClick={() => window.location.href="/chat"}>💬 Ask AI Advisor</Button>
        <Button variant="secondary" onClick={() => window.location.href="/courses"}>📚 View Courses</Button>
        <Button variant="success" onClick={() => window.location.href="/my-courses"}>✓ My Courses</Button>
      </div>
    </div>
  );
};

export default Dashboard;
