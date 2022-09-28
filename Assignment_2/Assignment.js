const task3Element = document.getElementById('task-3');

function sayHello() {
    alert("Hello!!");
}

function printParam(name) {
    alert(name);
}

function combineStrings(firstName, middleName, lastName) {
    return firstName + " " + middleName + " " + lastName;
}

task3Element.addEventListener("click", sayHello);
//sayHello();
printParam("Aayusi");
const fullname = alert(combineStrings("Aayusi", "A.", "Kapoor"));

