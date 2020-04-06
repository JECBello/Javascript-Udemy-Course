const task3Element = document.getElementById('task-3');

function emptyAlert() {
    alert("This function creates an alert.")
}

function nameAlert(name) {
    alert("Hello " + name); 
}

emptyAlert();
nameAlert('John')

task3Element.addEventListener('click', emptyAlert)

function combine(str1, str2, str3) {
    return str1 + " " + str2 + str3; 
}

str1 = "Hello"; str2 = "World"; str3 = "!"; 

alert(combine(str1, str2, str3));