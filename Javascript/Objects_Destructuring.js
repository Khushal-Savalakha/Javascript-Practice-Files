//Object destructor
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//here id i don't want's to use course.courseInstructor

const{courseInstructor}=course;
console.log(courseInstructor);
/*
let [{ name }, item3, { name: name1 }] = arr;
here if i want to to find for only just value then let{name}=arr can work or not ?
Yes.
*/
const{courseInstructor:temp}=course;
console.log(temp);

/* mehtods of REACT:
const navbar = ({ company }) => {
  console.log(company);
};

navbar({ company: "hitesh" }); // Output: "hitesh"
*/

//  {
//     "coursename":"js in hindi",
//     "price":"999",
//     "courseInstructor":"hitesh"
//  }

