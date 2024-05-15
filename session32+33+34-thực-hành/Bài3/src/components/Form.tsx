import React, { useState } from 'react'

interface Error {
  name: string,
  message: string,
}

interface Student {
  name: string,
  id: string,
  email: string,
  birth: string,
}

interface FormProps {
  addStudent: (student: Student) => void;
  closeForm: () => void;
}

export default function Form({ addStudent, closeForm }: FormProps) {
  const [errors, setErrors] = useState<Error[]>([]);
  const [student, setStudent] = useState<Student>({
    name: '',
    id: '',
    email: '',
    birth: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setStudent({ ...student, [name]: value });
  }

  const isRequired = (nameInput: string) => ({
    nameInput: nameInput,
    check: (value: string) => {
      return value !== '' ? true : false;
    }
  });

  const isValidateEmail = (nameInput: string) => ({
    nameInput: nameInput,
    test: (value: string) => {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? undefined : "Địa chỉ email không hợp lệ";
    },
  });

  const validateAllForm = () => {
    let rules = {
      id: [isRequired('id')],
      name: [isRequired('name')],
      email: [isRequired('email'), isValidateEmail('email')],
      birth: [isRequired('birth')],
    }

    let newErrors: Error[] = [];

    for (let field in rules) {
      let fieldRules = rules[field as keyof typeof rules];
      fieldRules.forEach(rule => {
        if ('check' in rule) {
          const isValid = rule.check(student[field as keyof Student]);
          if (!isValid) {
            newErrors.push({ name: rule.nameInput, message: `${rule.nameInput} không được để trống` });
          }
        } else {
          const error = rule.test(student[field as keyof Student]);
          if (error) {
            newErrors.push({ name: rule.nameInput, message: error });
          }
        }
      });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  }

  const handleClickForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateAllForm()) {
      addStudent(student);
      closeForm();
    }
  }

  return (
    <div className='modal'>
      <form onSubmit={handleClickForm}>
        <h3>Thêm mới sinh viên</h3>
        <div className='input-box'>
          <label htmlFor="id">Mã sinh viên</label>
          <input name='id' type="text" value={student.id} onChange={handleChange} />
          {errors.find(err => err.name === 'id') && <span>{errors.find(err => err.name === 'id')?.message}</span>}
        </div>
        <div className='input-box'>
          <label htmlFor="name">Tên sinh viên</label>
          <input name='name' type="text" value={student.name} onChange={handleChange} />
          {errors.find(err => err.name === 'name') && <span>{errors.find(err => err.name === 'name')?.message}</span>}
        </div>
        <div className='input-box'>
          <label htmlFor="birth">Ngày sinh</label>
          <input name='birth' type="date" value={student.birth} onChange={handleChange} />
          {errors.find(err => err.name === 'birth') && <span>{errors.find(err => err.name === 'birth')?.message}</span>}
        </div>
        <div className='input-box'>
          <label htmlFor="email">Email</label>
          <input name='email' type="email" value={student.email} onChange={handleChange} />
          {errors.find(err => err.name === 'email') && <span>{errors.find(err => err.name === 'email')?.message}</span>}
        </div>
        <div className='button-box'>
          <button type="button" onClick={closeForm}>Hủy</button>
          <button type="submit">Thêm mới</button>
        </div>
      </form>
    </div>
  )
}
