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




function getAge(date){
    return new Date(new Date().getTime() - date.getTime()).getUTCFullYear() - 1970;
}
function getWeekDay(date){
    let options = {weekday: 'long'};
    return date.toLocaleString('en-Uk',options);
}
function getAmountDaysToNewYear(){
    let today=new Date();
    let newYear=new Date(today.getFullYear()+1, 0, 1);
    let one_day=1000*60*60*24;
    let splitedDaysToNewYear = ((newYear.getTime()-today.getTime())/(one_day) + "").split(".");
    if (splitedDaysToNewYear.length === 1){
        return Math.round((newYear.getTime()-today.getTime())/(one_day))
    } else {
        if (+splitedDaysToNewYear[1][0] === 0 && +splitedDaysToNewYear[1][1] <= 4){
            return Math.floor((newYear.getTime()-today.getTime())/(one_day))
        } else {
            return Math.ceil((newYear.getTime()-today.getTime())/(one_day))
        }
    }
}
function getProgrammersDay(date){
    if (date%4 === 0){
        // let programmersDay = new Date(date, 8, 12)
        return `12 Sep, ${date} (${getWeekDay(new Date(date, 8, 12))})`
        // console.log( getWeekDay(programmersDay))
    } else {
        return `13 Sep, ${date} (${getWeekDay(new Date(date, 8, 13 ))})`
    }
}
function howFarIs(date){
    let today = new Date();
    let weekDayValues = {
        "Monday" : 1,
        "Tuesday" : 2,
        "Wednesday" : 3,
        "Thursday" : 4,
        "Friday" : 5,
        "Saturday" : 6,
        "Sunday" : 7,
    }
    let todaysValue = weekDayValues[getWeekDay(today)];
    let input = date[0].toUpperCase() + date.slice(1);
    let inputValue = weekDayValues[input];
    if (todaysValue < inputValue){
        return `It's ${inputValue-todaysValue} day(s) left till ${input}.`
    } else if (todaysValue > inputValue){
        return `It's ${7-todaysValue+inputValue} day(s) left till ${input}.`
    } else if (todaysValue === inputValue){
        return `Hey, today is ${input} =)`
    }
}

function matchExact(r, str) {
    let match = str.match(r);
    return match && str === match[0];
}
 function isValidIdentifier(string){
    if (string === undefined){
        return false
    } else {
        let myRegExp = new RegExp ('^[a-z\$\_]{1,}[a-z0-9\$\_]{0,}$', "i")
        return myRegExp.test(string);
    }
}


