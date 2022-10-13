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
        return `12 Sep, ${date} (${getWeekDay(new Date(date, 8, 12))})`
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
function capitalize(str){
    function upperCaser(x){
        return x.toUpperCase();
    }
    let myRegExp = new RegExp ('(^|\\s)([a-z])', "ig")
    return newString = str.replace(myRegExp, upperCaser)
}
function isValidAudioFile(str){
    if (str === undefined){
        return false
    } else {
        let myRegExp = new RegExp ('^[a-z]+(\.mp3|\.flac|\.alac|\.aac)$', 'i')
        return myRegExp.test(str);
    }
}
function getHexadecimalColors(str){
    let myRegExp = new RegExp ('#(([a-f0-9]{3,3})|(([a-f0-9]){2,2}([a-f0-9]){2,2}([a-f0-9]){2,2}))(;|\$)', 'gi')
    let finalRegExp = new RegExp('#[a-f0-9]{3,6}','gi')
    let unpreparedArray = str.match(myRegExp)
    if (unpreparedArray === null){
        return [];
    } else{
            let unfilteredStringAnswer = unpreparedArray.join("");
            let finalArrayAnswer = unfilteredStringAnswer.match(finalRegExp);
            return finalArrayAnswer;
        }
}
function isValidPassword(str){
    let myRegExp = new RegExp ('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')
    return myRegExp.test(str);
}
function addThousandsSeparators(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function getAllUrlsFromText(str){
    let myRegExp = new RegExp ('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)*\\/', 'gi');
    try{ 
        if (str === undefined){
            throw new TypeError('error')
        } else if (str.match(myRegExp) === null){
            return []
        } else  {
            return str.match(myRegExp);
        }
    } catch(e){
        return e.message
    }
    
}



