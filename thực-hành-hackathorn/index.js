"use strict";
// Hiển thị form thêm user
document.addEventListener('DOMContentLoaded', function () {
    const addNewUserBtn = document.querySelector('.btn-secondary');
    const container = document.getElementById('container');
    addNewUserBtn.addEventListener('click', function () {
        if (container.style.display === 'block') {
            container.style.display = 'none';
            container.classList.remove('show');
        }
        else {
            container.style.display = 'block';
            container.classList.add('show');
        }
    });
});
function render() {
    let users = JSON.parse(localStorage.getItem("userList") || "[]");
    let tbody = document.getElementById("tbody");
    users.forEach(user => {
        tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>
                    <a href="#"
                        ><img src="" class="avatar" alt="Avatar" /> ${user.name}</a
                    >
                </td>
                <td>${user.age}</td>
                <td>${user.phoneNumber}</td>
                <td>${user.email}</td>
                <td>${user.address}</td>
                <td>
                <a
                    href="#"
                    class="settings"
                    title="Settings"
                    data-toggle="tooltip"
                    ><i class="material-icons">&#xE8B8;</i></a
                >
                <a
                    href="#"
                    class="delete"
                    title="Delete"
                    data-toggle="tooltip"
                    ><i class="material-icons">&#xE5C9;</i></a
                >
                </td>
            </tr>
        `;
    });
}
function addUser() {
    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');
    let phoneInput = document.getElementById('phone');
    let emailInput = document.getElementById('email');
    let addressInput = document.getElementById('address');
    let users = JSON.parse(localStorage.getItem("userList") || "[]");
    let newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name: nameInput.value,
        age: parseInt(ageInput.value),
        phoneNumber: parseInt(phoneInput.value),
        email: emailInput.value,
        address: addressInput.value,
        status: true
    };
    let isCheck = true;
    if (phoneInput.value.length !== 10 || isNaN(parseInt(ageInput.value))) {
        isCheck = false;
    }
    for (let user of users) {
        if (user.email === newUser.email || user.phoneNumber === newUser.phoneNumber) {
            isCheck = false;
        }
    }
    if (isCheck) {
        users.push(newUser);
        localStorage.setItem("userList", JSON.stringify(users));
        render();
    }
}
render();
