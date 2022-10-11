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
//works for Kyiv time zone only! Checks if timezone is +2 or +3, after that subtracts extra miliseconds, and we get precise calculations up to seconds.
function ignoreKyivTimeZone(date){
    if (date.getTimezoneOffset() === -180){
        return date.subtractHours(3);
    } else if (date.getTimezoneOffset() === -120){
        return date.subtractHours(2)
    }
};
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone); // Europe/Kiev

// console.log(today.getTimezoneOffset())

// let birthday22 = new Date(2000, 9, 11);

function getAge(date){
    return ignoreKyivTimeZone(new Date(new Date().getTime() - date.getTime())).getFullYear() - 1970;
}

