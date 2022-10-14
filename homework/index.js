function getAge(date){
    let year0 = 1970;
    return new Date(new Date().getTime() - date.getTime()).getUTCFullYear() - year0;
}
function getWeekDay(date){
    let options = {weekday: 'long'};
    return date.toLocaleString('en-Uk',options);
}
function getAmountDaysToNewYear(){
    let today=new Date();
    let newYear=new Date(today.getFullYear()+1, 0, 1);
    let milS = 1000; let sec = 60; let min = 60; let hour = 24;
    let one_day=milS*sec*min*hour;
    let splitedDaysToNewYear = ((newYear.getTime()-today.getTime())/one_day + '').split('.');
    if (splitedDaysToNewYear.length === 1){
        return Math.round((newYear.getTime()-today.getTime())/one_day)
    } else {
        let secondNumberAfterDot = 4;
        if (+splitedDaysToNewYear[1][0] === 0 && +splitedDaysToNewYear[1][1] <= secondNumberAfterDot){
            return Math.floor((newYear.getTime()-today.getTime())/one_day)
        } else {
            return Math.ceil((newYear.getTime()-today.getTime())/one_day)
        }
    }
}
function getProgrammersDay(date){
    let month = 8;
    if (date === undefined){
        return 'Please, provide year'
    } else {
        let dividerForLeapYear = 4;
        if (date%dividerForLeapYear === 0){
            let day = 12;
            return `12 Sep, ${date} (${getWeekDay(new Date(date, month, day))})`
        } else {
            let day = 13;
            return `13 Sep, ${date} (${getWeekDay(new Date(date, month, day ))})`
        }
    }
}
function howFarIs(date){
    try{
        let today = new Date();
        let weekDayValues = {
            'Monday' : 1,
            'Tuesday' : 2,
            'Wednesday' : 3,
            'Thursday' : 4,
            'Friday' : 5,
            'Saturday' : 6,
            'Sunday' : 7
        }
        let todaysValue = weekDayValues[getWeekDay(today)];
        let input = date[0].toUpperCase() + date.slice(1);
        let inputValue = weekDayValues[input];
        if (inputValue === undefined){
            return 'Please, provide valid day of the week'
        } else if (todaysValue < inputValue){
            return `It's ${inputValue-todaysValue} day(s) left till ${input}.`
        } else if (todaysValue > inputValue){
            let weekValue = 7;
            return `It's ${weekValue-todaysValue+inputValue} day(s) left till ${input}.`
        } else if (todaysValue === inputValue){
            return `Hey, today is ${input} =)`
        }
    } catch(e){
        return 'Please, provide day of the week';
    }
}
function isValidIdentifier(string){
    if (string === undefined){
        return 'Please, provide your variable'
    } else {
        let myRegExp = new RegExp('^[a-z$_]{1,}[a-z0-9$_]{0,}$', 'i')
        return myRegExp.test(string);
    }
}
function upperCaser(x){
    return x.toUpperCase();
}
function capitalize(str){
    try{
        let myRegExp = new RegExp('(^|\\s)([a-z])', 'ig')
        let newString = str.replace(myRegExp, upperCaser);
        return newString;
    } catch(e){
        return 'Please, provide your sentence'
    }
}
function isValidAudioFile(str){
    if (str === undefined){
        return false
    } else {
        let myRegExp = new RegExp('^[a-z]+(.mp3|.flac|.alac|.aac)$', 'i')
        return myRegExp.test(str);
    }
}
function getHexadecimalColors(str){
    try{
        let myRegExp = new RegExp('#(([a-f0-9]{3,3})|(([a-f0-9]){2,2}([a-f0-9]){2,2}([a-f0-9]){2,2}))(;|$)', 'gi')
        let finalRegExp = new RegExp('#[a-f0-9]{3,6}','gi')
        let unpreparedArray = str.match(myRegExp)
        if (unpreparedArray === null){
            return [];
        } else{
                let unfilteredStringAnswer = unpreparedArray.join('');
                let finalArrayAnswer = unfilteredStringAnswer.match(finalRegExp);
                return finalArrayAnswer;
            }
    } catch(e){
        return 'Please, provide your string'
    }
}
function isValidPassword(str){
    let myRegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[\\w\\W]{8,}$')
    return myRegExp.test(str);
}
function addThousandsSeparators(x) {
    try{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } catch(e){
        return 'Please, provide your number'
    }
}
function getAllUrlsFromText(str){
    let firstPart = 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.';
    let secondPart = '[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)*\\/'
let myRegExp = new RegExp(firstPart+secondPart, 'gi');
    try{ 
        if (str === undefined){
            throw new TypeError('error')
        } else if (str.match(myRegExp) === null){
            return []
        } else {
            return str.match(myRegExp);
        }
    } catch(e){
        return e.message
    }
}