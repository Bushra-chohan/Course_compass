import InputField from "../components/InputField";
import Button from "../components/Button";

const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">👤 My Profile</h1>

      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
            <InputField value="Bushra" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
            <InputField value="Chohan" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <InputField value="bushra.chohan@ualberta.ca" disabled />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Major</label>
            <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 transition">
              <option selected>Computer Science</option>
              <option>Engineering</option>
              <option>Mathematics</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Minor</label>
            <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 transition">
              <option selected>Statistics</option>
              <option>Mathematics</option>
              <option>Physics</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Year Level</label>
            <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600 transition">
              <option>1st Year</option>
              <option selected>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Graduation</label>
            <InputField type="date" value="2027-05-15" />
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="success">Save Changes</Button>
          <Button variant="danger">Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
