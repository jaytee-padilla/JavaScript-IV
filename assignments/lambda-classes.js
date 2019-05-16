// CODE here for your Lambda Classes
//base class
class Person {
    constructor({
        name,
        age,
        location
    }) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return `Hello my name is ${this.name}. I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor({
        name,
        age,
        location,
        specialty,
        favLanguage,
        catchPhrase
    }) {
        super(...arguments);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor({
        name,
        age,
        location,
        specialty,
        favLanguage,
        catchPhrase,
        gradClassName,
        favInstructor
    }) {
        super(...arguments);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    }
}

class Student extends Person {
    constructor({
        name,
        age,
        location,
        previousBackground,
        className,
        favSubjects
    }) {
        super(...arguments);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {
        return this.favSubjects.join(', ');
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}


// test stuff
let jaytee = new Instructor({
    name: 'Jaytee',
    age: 27,
    location: 'SF',
    specialty: 'Frontend',
    favLanguage: 'Javascript',
    catchPhrase: 'yuh'
});

console.log(jaytee);
console.log(jaytee.demo('death'));

let gers = new Student({
    name: 'Gers',
    age: 26,
    location: 'SF',
    previousBackground: 'Graphic Design',
    className: 'Web20',
    favSubjects: [
        'HTML',
        'CSS',
        'Javascript'
    ]
});

console.log(gers);
console.log(gers.listsSubjects());
console.log(gers.PRAssignment('sadness'));
console.log(gers.sprintChallenge('debauchery'));

let arthur = new ProjectManager({
    name: 'Arthur',
    age: 26,
    location: 'SF',
    specialty: 'Frontend',
    favLanguage: 'HTML/CSS',
    catchPhrase: 'Word',
    gradClassName: 'Web 18',
    favInstructor: 'Josh Knell'
})

console.log(arthur);
console.log(arthur.standUp('web20_Arthur'));
console.log(arthur.debugsCode(gers.name, "React Components"))