
interface Student {
    id: number;
    nameStd: string;
    class: string;
}

let students: Student[] = [
    {
        id: 1,
        nameStd: "Minh",
        class: "KS2023S"
    },
    {
        id: 2,
        nameStd: "Quang",
        class: "KS2023C"
    },
    {
        id: 3,
        nameStd: "Sâm",
        class: "KS2023C"
    },
    {
        id: 4,
        nameStd: "Tùng",
        class: "KS2023S"
    },
    {
        id: 5,
        nameStd: "Thái",
        class: "KS2023S"
    }
];

function studentsClass(array: Student[], className: string): void {
    array.forEach(student => {
        if (student.class === className) {
            console.log(student);
        }
    });
}

console.log("Lớp KS2023S");
studentsClass(students, "KS2023S");

console.log("Lớp KS2023C");
studentsClass(students, "KS2023C");
