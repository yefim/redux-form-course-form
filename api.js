let id = 1;
const courses = [
  {id: 0, name: 'Bio', teacher: 'Lee'}
];

export const fetchCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses);
    }, 100);
  });
};

export const saveCourse = (course) => {
  return new Promise((resolve) => {
    course.id = id++;
    courses.push(course);

    setTimeout(() => {
      resolve(course);
    }, 100);
  });
};
