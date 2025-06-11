// 1. Change the text of the heading
const heading = document.getElementById("main-heading");
heading.textContent = "Members of gokuldham society";


// 2. Change the background color of the container
const container = document.querySelector(".container");
container.style.backgroundColor = "hotpink"; 

// 3. Traverse and style specific list items (e.g., 2nd item)
const studentList = document.getElementById("student-list");
const fourthItem = studentList.children[3];
fourthItem.style.backgroundColor = "purple";

// 4. Add a new list item dynamically
const newStudent = document.createElement("li");
newStudent.className = "student";
newStudent.textContent = "Popatlal";
studentList.appendChild(newStudent);

// 5. Remove the 3rd item (index 2)
const thirdItem = studentList.children[2];
studentList.removeChild(thirdItem);

// 6. Use of traversal methods explicitly
// a. Parent of the heading
console.log("Parent of heading:", heading.parentElement);

// b. Children of the student list
console.log("Children of student list:", studentList.children);

// c. First and last child
console.log("First student:", studentList.firstElementChild.textContent);
console.log("Last student:", studentList.lastElementChild.textContent);

// d. Sibling traversal
console.log("Next sibling of heading:", heading.nextElementSibling);
console.log("Previous sibling of student list:", studentList.previousElementSibling);

