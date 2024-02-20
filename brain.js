// brain.js

// Function to get data from the form and trigger the calculation
function getData() {
    var name = document.querySelector(".name").value;
    var rollNo = document.querySelector(".Roll_no").value;
    var sub1_marks = document.querySelector(".sub1_marks").value;
    var sub2_marks = document.querySelector(".sub2_marks").value;
    var sub3_marks = document.querySelector(".sub3_marks").value;
    var sub4_marks = document.querySelector(".sub4_marks").value;
    var sub5_marks = document.querySelector(".sub5_marks").value;

    // Check if all input fields are filled
    if (name && rollNo && sub1_marks && sub2_marks && sub3_marks && sub4_marks && sub5_marks) {
        // Call the calculatePercentage function
        calculatePercentage(name, rollNo, sub1_marks, sub2_marks, sub3_marks, sub4_marks, sub5_marks);
    } else {
        // Show an alert if any field is empty
        alert("Please fill in all the fields.");
    }
}

function calculatePercentage(name, rollNo, sub1_marks, sub2_marks, sub3_marks, sub4_marks, sub5_marks) {
    // Add your calculation logic here
    // For example, you can calculate the average percentage
    var totalMarks = parseFloat(sub1_marks) + parseFloat(sub2_marks) + parseFloat(sub3_marks) + parseFloat(sub4_marks) + parseFloat(sub5_marks);
    var percentage = (totalMarks / 500) * 100;

    // Display the result using a browser alert
    showResultAlert(name, rollNo, totalMarks, percentage);
}

function showResultAlert(name, rollNo, total, percentage) {
    var message = "Name: " + name + "\n" +
                  "Roll No: " + rollNo + "\n" +
                  "Total Marks: " + total + "\n" +
                  "Percentage: " + percentage.toFixed(2) + "%";

    alert(message); // Use the standard alert function
}
