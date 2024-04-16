class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(student: string): void{
        
    }

    showStudents(id: number): void {

    }
}