//ads exact number of hours to our date
Date.prototype.addHours = function(h) {
    let a = structuredClone(this);
    a.setTime(a.getTime() + (h*60*60*1000));
    return a;
}
//subtracts exact number of hours from our date
Date.prototype.subtractHours = function(h) {
    let a = structuredClone(this);
    a.setTime(a.getTime() - (h*60*60*1000));
    return a;
}

// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone); // Europe/Kiev

// console.log(today.getTimezoneOffset())

// let birthday22 = new Date(2022, 9, 14, 23, 55, 59);

// console.log(birthday22);



function getAge(date){
    return new Date(new Date().getTime() - date.getTime()).getUTCFullYear() - 1970;
}
function getWeekDay(date){
    let options = {weekday: 'long'};
    return date.toLocaleString('en-Uk',options);
}



// let today = new Date();

// console.log(birthday22);
// console.log(birthday22.toLocaleString('en-Uk',options));
// console.log(birthday22.toUTCString());

// var d = new Date();
// var utcDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());

// console.log(d.getUTCFullYear())