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