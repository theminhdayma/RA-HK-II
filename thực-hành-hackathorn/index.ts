// Hiển thị form thêm user
document.addEventListener('DOMContentLoaded', function() {
    const addNewUserBtn = document.querySelector('.btn-secondary') as HTMLElement;
    const container = document.getElementById('container') as HTMLElement;
    
    addNewUserBtn.addEventListener('click', function() {
        if (container.style.display === 'block') {
            container.style.display = 'none';
            container.classList.remove('show');
        } else {
            container.style.display = 'block';
            container.classList.add('show');
        }
    });
});


type User = {
    id: number;
    name: string;
    age: number;
    phoneNumber: number;
    email: string;
    address: string;
    status: boolean;
}

function render() {
    let users: User[] = JSON.parse(localStorage.getItem("userList") || "[]");

    let tbody:any = document.getElementById("tbody");

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
        `
    })
}

function addUser() {
    let nameInput = document.getElementById('name') as HTMLInputElement;
    let ageInput = document.getElementById('age') as HTMLInputElement;
    let phoneInput = document.getElementById('phone') as HTMLInputElement;
    let emailInput = document.getElementById('email') as HTMLInputElement;
    let addressInput = document.getElementById('address') as HTMLInputElement;

    let users: User[] = JSON.parse(localStorage.getItem("userList") || "[]");

    let newUser: User = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name: nameInput.value,
        age: parseInt(ageInput.value),
        phoneNumber: parseInt(phoneInput.value),
        email: emailInput.value,
        address: addressInput.value,
        status: true
    };

    let isCheck: boolean = true;

    if(phoneInput.value.length !== 10 || isNaN(parseInt(ageInput.value))) {
        isCheck = false;
    }

    for (let user of users) {
        if (user.email === newUser.email || user.phoneNumber === newUser.phoneNumber) {
            isCheck = false;
        }
    }

    if(isCheck) {
        users.push(newUser);
        localStorage.setItem("userList", JSON.stringify(users));
        render();
    }
}

render();
