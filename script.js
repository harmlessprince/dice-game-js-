// /**
//  *
//  * function
// */

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// function calculateRetirmentYear(year, firstname) {
//     age = calculateAge(year);

//     retirementAge = 65  - age;

//     if (retirementAge<0) {

//     console.log(firstname + ' has already retired');
//     } else {

//     console.log(firstname + ' will retire in ' + retirementAge + ' years');

//     }

// }

// calculateRetirmentYear(1996, 'John') ;
// calculateRetirmentYear(1948, 'James') ;
// calculateRetirmentYear(1965, 'Chris') ;
// calculateRetirmentYear(1995, 'TeeQ') ;

/**
 * Function Statement
 */

/*var whatDoYouDo = function(job, name) {
  switch (job) {
    case "teacher":
      return name + " teache's the children how to code";
    case "Designer":
      return name + " Trains the children how to to design";
    default:
        return name + " has something else he is doing";
  }
};

console.log(whatDoYouDo("teacher","james"));
*/

// var person ={
//     firstName: 'James',
//     lastName: 'Bond',
//     job: 'Actor',
//     birthYear: '1995',
//     gender: 'Male',
//     calculateAge: function () {
//         return 2020 - this.birthYear
//     }
// };

// console.log(person.calculateAge());

// var mark = {
//     fullName: 'Mark Zukarberg',
//     mass: 70,
//     height: 175,
//     BMI: function () {
//         this.markBMIvalue =  (this.mass / (this.height * this.height))
//     }
// };

// mark.BMI();

// console.log(mark);

// var john = {
//     fullName: 'John Stones',
//     mass: 70,
//     height: 180,
//     BMI: function () {
//         this.johnBMIvalue =  (this.mass / (this.height * this.height))
//     }
// };
// john.BMI();

// console.log(john);

// if (john.johnBMIvalue>mark.markBMIvalue) {
//     console.log(john.fullName+" Has a higher BMI of " + john.johnBMIvalue);
// }else if (john.johnBMIvalue<mark.markBMIvalue) {
//     console.log(mark.fullName+" Has a higher BMI of " + mark.markBMIvalue);
// } else {
//     console.log("BMI are equal");
// }

/*
 Part 1 coding challenge
*/

// john = {
//   fullName: "John Family",
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function() {
//     this.tips = [];
//     this.finalValues = [];
//     for (index = 0; index < this.bills.length; index++) {
//       bill = this.bills[index];
//       var percentage;
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }

//       this.tips[index] = percentage * bill;
//       this.finalValues[index] = bill + percentage * bill;
//     }
//   }
// };
// john.calcTips();
// console.log(john);

// mark = {
//     fullName: "Mark's Family",
//     bills:[77, 375,110,45],
//     calcTips: function () {
//         this.tips = [];
//         this.finalValues = [];
//         for (let index = 0; index < this.bills.length; index++) {

//            var  percentage;
//             bill = this.bills[index];

//             if (bill < 100) {
//                 percentage = .2
//             } else if (bill >= 100 && bill <300) {
//                 percentage = .1
//             } else {
//                 percentage = .25
//             }

//             this.tips[index] = bill * percentage;
//             this.finalValues[index] = bill + this.tips[index];
//         }
//     }
// };

// mark.calcTips();
// console.log(mark);
/

