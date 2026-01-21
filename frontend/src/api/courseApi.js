export const getAllCourses = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/courses");
    if (!res.ok) throw new Error("Failed to fetch courses");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
