
var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    //cacluate grade
    var grade = (document.getElementById('assignment').value * .5) + (document.getElementById('groupProjects').value * .1) + (document.getElementById('quizzes').value * .1) + (document.getElementById('exams').value * .2) + (document.getElementById('intex').value * .1);
    //calculate letter grade
    var letter = 'A';
    if (grade >= 93) {
        letter = 'A';
    }
    else if (grade < 93 && grade >= 90) {
        letter = 'A-';
    }
    else if (grade < 90 && grade >= 87) {
        letter = 'B+';
    }
    else if (grade < 87 && grade >= 83) {
        letter = 'B';
    }
    else if (grade < 83 && grade >= 80) {
        letter = 'B-';
    }
    else if (grade < 80 && grade >= 77) {
        letter = 'C+';
    }
    else if (grade < 77 && grade >= 73) {
        letter = 'C';
    }
    else if (grade < 73 && grade >= 70) {
        letter = 'C-';
    }
    else if (grade < 70 && grade >= 60) {
        letter = 'D';
    }
    else {
        letter = 'E';
    }
    alert("Grade: " + grade + '\r\nLetter: ' + letter);
}
);