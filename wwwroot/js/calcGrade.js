
$("#submitButton").click ( function () {
    //cacluate grade
    var grade = ($('#assignment').val() * .5) + ($('#groupProjects').val() * .1) + ($('#quizzes').val() * .1) + ($('#exams').val()* .2) + ($('#intex').val()* .1);
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