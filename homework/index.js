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