using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2._1.Models
{   
    //model for the CalculateGrade
    public class CalculateGradeModel
    {

        //gettters and setters all on one line!
        //'string' is a datatype, you can do whatever data type you want; ie , bool, char, int, double etc.
        //'from' is the name of the property on the CalculateGrade 
        //make required and specify range
        [Required]
        [Range(0, 100)]
        public decimal assignment { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal groupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal exams { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal intex { get; set; }

    }
}
