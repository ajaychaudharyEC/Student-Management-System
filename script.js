let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Enter all details");
        return;
    }

    students.push({name, age});
    saveData();
    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((s, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${s.name} (${s.age})
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;

        list.appendChild(li);
    });

    document.getElementById("count").innerText = students.length;
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveData();
    displayStudents();
}

function editStudent(index) {
    let newName = prompt("Enter new name", students[index].name);
    let newAge = prompt("Enter new age", students[index].age);

    if (newName && newAge) {
        students[index] = {name: newName, age: newAge};
        saveData();
        displayStudents();
    }
}

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Load on start
displayStudents();