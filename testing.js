let u = new Date()
const birthday22 = new Date(2000, 9, 11, 13, 10, 10);


// оце походу відповідь до першого завдання. По днях працює, по годинам не сходиться десь на 1-2 години.
console.log(new Date(u - birthday22).getFullYear() - new Date(0).getFullYear());





Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }
  let z = new Date(0)
  let v = new Date().addHours(3);
  let a = new Date(v - birthday22).addHours(3)


// оце походу відповідь до першого завдання
console.log(+a.toUTCString().substring(16, 12) - +z.toUTCString().substring(16, 12));