// 1-get_list_student_ids.js

// Import the getListStudents function from previous task
import getListStudents from './0-get_list_students';

// Define the getListStudentIds function
const getListStudentIds = (students) => {
  // If the argument is not an array, return an empty array
  if (!Array.isArray(students)) {
    return [];
  }

  // Call getListStudents to use it in this file
  const studentList = getListStudents();

  // Use the map function to extract the ids from the list of objects
  return students.map((student) => student.id);
};

// Export the getListStudentIds function
export default getListStudentIds;

