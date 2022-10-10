const birthday22 = new Date(2000, 9, 10);
const birthday23 = new Date(2000, 9, 11);

let v = new Date();

console.log(v)

console.log(v.getFullYear() - birthday22.getFullYear())
console.log(v.getFullYear() - birthday23.getFullYear())
// console.log(typeOf new Date().toString())


// console.log(birthday22);



function exactAgeToday(date){
    // let v = new Date();
    // console.log(date.getTime() - v.getTime());
    console.log(v.getTime() - date.getTime());

    // console.log(new Date (v.getTime() - date.getTime()));

    console.log(v);
    // return date - new Date();
}

// exactAgeToday(birthday22)

// console.log(birthday22.toISOString());

// console.log(birthday22.toString());

// console.log(new Date((v - birthday22) * 1000).toISOString());

// console.log(new Date((v - birthday22) ).toString());


//    мб рішення 1 задачі
// console.log(new Date((v.getTime() - birthday22.getTime()) * 1000).toString().substring(11, 8));


// console.log(new Date((v.getTime() - birthday22.getTime()) * 1000).toISOString().substring(11, 8));