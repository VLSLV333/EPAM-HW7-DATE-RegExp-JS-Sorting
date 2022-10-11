Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }

const birthday22 = new Date(2000, 9, 11, 13, 10, 10);

// console.log(v.toUTCString());
// let v = new Date().addHours(3);
//let a = +a.toUTCString().substring(16, 12)

