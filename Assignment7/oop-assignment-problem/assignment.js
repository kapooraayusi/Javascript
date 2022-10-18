//Assignment 7

class Course
{
    get Price()
    {
        return '$' + this._price;
    }

    set Price(val)
    {   alert(val);
        if (val > 0)
            this._price = val;
    }

    constructor (courseTitle, coursePrice, courseLength)
    {
        this.title = courseTitle;
        this.Price = coursePrice;
        this.length = courseLength;
    }

    calPriceValue()
    {
        return this.length/this._price;
    }

    courseSummary()
    {
        return 'The course ' + this.title + ' is valued at ' + this._price;
    }
}

const c1 = new Course ('Javascript', 640, 10);
const c2 = new Course ('Typescript', 649, 52);

console.log(c1);
console.log(c2);

console.log(c1.calPriceValue());
console.log(c1.courseSummary());

console.log(c2.calPriceValue());
console.log(c2.courseSummary());

class PracticalCourse extends Course
{
    constructor(courseTitle, coursePrice, courseLength, exercisesCount)
    {
        super(courseTitle, coursePrice, courseLength);
        this.exercise = exercisesCount;
    }

}

const c3 = new PracticalCourse('Angular', 849, 64, 100);
console.log(c3);

class TheoriticalCourse extends Course
{
    publish()
    {
        console.log('Publish this dsg.');
    }
}

const t1 = new TheoriticalCourse('RX, JS', 900, 15, 100);
t1.publish();

