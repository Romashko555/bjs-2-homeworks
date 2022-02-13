function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (mark1, ...marks) {
  if (this.marks === undefined) {
    this.marks = [mark1, ...marks];
  }
  else {
    this.marks.push(mark1, ...marks);
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

//проверки
// let Student1 = new Student ("Вася", "Петров", "22");
// Student1.setSubject("algebra");
// Student1.addMarks(4, 0);
// Student1.addMark(4);
// Student1.addMark(6);
// Student1.addMarks(1, 2);
// Student1.getAverage();
// console.log(Student1);
// console.log(Student1.getAverage());
// Student1.exclude(1);
// console.log(Student1);