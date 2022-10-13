//      Greate methods to get precise dates

// var d = new Date();
// var utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
// .toUTCString()

// used to regulate string outputed by browser
// let options = {weekday: 'long'};


// checks if new Date() was created in +2 or +3 timezone, in case of +2 ads 1 hour to the time, so we get constant calculation results in Kyiv region

// function constantTimeZone(date){
//   if (date.getTimezoneOffset() === -180){
//       return date;
//   } else if (date.getTimezoneOffset() === -120){
//       return date.addHours(1)
//   }
// };

// checks in which timezone our user is
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone); // Europe/Kiev


// checks offset from UTC in minutes
// console.log(today.getTimezoneOffset())

//works for Kyiv time zone only! Checks if timezone is +2 or +3, after that subtracts extra miliseconds, and we get precise calculations up to seconds.
// function ignoreKyivTimeZone(date){
//     if (date.getTimezoneOffset() === -180){
//         return date.subtractHours(3);
//     } else if (date.getTimezoneOffset() === -120){
//         return date.subtractHours(2)
//     }
// };


// working first function
// function getAge(date){
//     return ignoreKyivTimeZone(new Date(new Date().getTime() - date.getTime())).getFullYear() - 1970;
// }

// let today = new Date();
// let today = new Date(2022, 9, 11, 0, 0, 0);
// // let birthday22 = new Date(2022, 0, 1, 0, 0, 0);

// console.log(today);

// let nextYear = new Date(today.getFullYear() + 1 + "");
// let nextYear1 = new Date("2023").subtractHours(2);

// console.log(nextYear);
// console.log(nextYear1);

// // instead of dividing seconds we should add them to 1970 to see how many days into they will convert, after that just get days from it!

// let milisecondsToNewYear = nextYear1.getTime() - today.getTime();
// let daysToNewYear = Math.round(milisecondsToNewYear/ 1000 / 60 / 60 / 24)

// console.log(daysToNewYear);

// console.log(new Date(nextYear1));



// console.log(birthday22);
// console.log(birthday22.getFullYear());

// console.log(birthday22.toUTCString());
// console.log(birthday22.getUTCFullYear());


// let birthday22 = new Date(2022, 9, 14, 23, 55, 59);

// console.log(birthday22);


// let today = new Date();

// console.log(birthday22);
// console.log(birthday22.toLocaleString('en-Uk',options));
// console.log(birthday22.toUTCString());

// var d = new Date();
// var utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());

// console.log(d.getUTCMilliseconds())