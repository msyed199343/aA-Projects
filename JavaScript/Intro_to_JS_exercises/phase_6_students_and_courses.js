function Student(first, last, courses){
    this.first = first 
    this.last = last
    this.courses = courses
};

Student.prototype.name= function(){
    return `${this.first} ${this.last}`
};

Student.prototype.enroll = function(course){
    
     if (this.courses.includes(course)){return `Looks like you're already enrolled in ${course}!`}
     else
     {
         this.courses.push(course)
       return `Welcome to ${course}! Here's a list of you classes!  ${this.courses}` 
    };
    
};



let myself = new Student("Syed", "M", ["bio", "geo", "gym"]);

console.log(myself.name())
console.log(myself.enroll("home economics"))
console.log(myself.enroll("home economics"))

Student.prototype.courseLoad = function () {
    const courseLoad = {};

    this.courses.forEach(course => {
        let dpt = course.department;
        courseLoad[dpt] = courseLoad[dpt] || 0;
        courseLoad[dpt] += course.credits;
    });

    return courseLoad;
};

function Course(name, department, credits, days, block) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.days = days;
    this.block = block;
    this.students = [];
}

Course.prototype.addStudent = function (student) {
    if (this.students.indexOf(student) === -1) {
        this.students.push(student);
        student.enroll(this);
    }
};

Course.prototype.conflictsWith = function (other) {
    if (this.block !== other.block) { return false; }

    return this.days.some(day => other.days.indexOf(day) !== -1);
};