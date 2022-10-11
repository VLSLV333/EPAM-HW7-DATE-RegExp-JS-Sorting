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

