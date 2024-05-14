import React, { useState } from 'react'
// import swal from 'sweetalert';
import {v4 as uuidv4} from "uuid"
import JobItem from './JobItem'
import { createRoot } from 'react-dom/client'

type Job = {
    id: string
    name: string
    status: boolean
}

export default function TodoList() {
    // state lưu trữ giá trị trong input 
    const [inputValue, setInputValue] = useState<string>("")
    //State kiểm tra trạng thái ẩn hiện lỗi
    const [showError, setShowError] = useState<boolean>(false)
    
    const [jobLocal, setJobLocal] = useState<Job[]>(()=>{
        //Lấy dữ liệu trên local
        const listJobLocal = localStorage.getItem("jobs")
        //Kiểm tra trên local có dữ liệu không
        // => Nếu có thì ép kiểu từ JSON sang JS
        // => Nếu không thì sẽ là []
        const listJob = listJobLocal ? JSON.parse(listJobLocal) : []
        // Trả về mảng Jobs và gán làm giá trị cho biến state
        return listJob;
    })

    const [stateFake, setStateFake] = useState<any>()

    // Hàm lưu dữ liệu lên local
    const saveLocal = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    // Lấy giá trị trong ô input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Cập nhật lại giá trị của state
        setInputValue(e.target.value)

        // + Công việc không được trùng nhau
        jobLocal.map((job) =>{
            if(inputValue === job.name) {
                setShowError(true)
            }
        })
    }
    // Hàm thêm mới công việc
    const handleCreateJob = () => {
        //Kiểm tra điều kiện input đã có dữ liệu chưa
        if(inputValue) {
            const job: Job = {
                id: uuidv4(),
                name: inputValue,
                status: false
            }
            // đẩy dữ liệu lên local
            jobLocal.push(job)
            saveLocal("jobs", jobLocal)
            // Reset lại giá trị trong ô input
            setInputValue("")
        }else {
            setShowError(true)
        }

    }

    //Hàm xử lý thay đổi trạng thái công việc
    const handleChangeStatus = (id:string) => {
        //Tìm kiếm vị trí công việc
        const findIndexJob = jobLocal.findIndex((job: Job) => job.id === id)

        if(findIndexJob === -1) {
            alert("Không tìm thấy")
        }else {
            //Thay đổi trạng thái của công việc
            jobLocal[findIndexJob].status = !jobLocal[findIndexJob].status

            // Cập nhật lại state của component
            setStateFake(Math.random())

            //Lưu lên local
            saveLocal("jobs", jobLocal)
        }
    }

    const handleClickDelete = (id: string) => {
        //Tìm kiếm vị trí công việc
        const findIndexJob = jobLocal.findIndex((job: Job) => job.id === id)

        if(findIndexJob === -1) {
            alert("Không tìm thấy")
        }else {
            swal({
                title: `Bạn có chắc chắn muốn xóa ${jobLocal[findIndexJob].name}`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete: any) => {
                if (willDelete) {
                    // Sử dụng splice để xóa công việc khỏi mảng
                    jobLocal.splice(findIndexJob, 1);

                    // Cập nhật lại state của component
                    setJobLocal([...jobLocal]);

                    // Lưu lên local
                    saveLocal("jobs", jobLocal);
                  swal(`Xóa thành công ${jobLocal[findIndexJob].name}`, {
                    icon: "success",
                  });
                } else {
                  swal("Hủy xóa");
                }
              });
        }
    }

    // Hàm chỉnh sửa công việc
    const handleClickUpdate = (id: string) => {
        //Tìm kiếm vị trí công việc
        const findIndexJob = jobLocal.findIndex((job: Job) => job.id === id)
        // xét lại value của ô input là tên công việc muốn chỉnh sửa
        setInputValue(jobLocal[findIndexJob].name)
        // Cập nhật lại state của component
        setJobLocal([...jobLocal]);

        // Lưu lên local
        saveLocal("jobs", jobLocal);
    }

    // Hàm đếm số công việc đã hoàn thành
    const tasksCompleted = () => {
        let count: number = 0;
        jobLocal.map((job) => {
            if(job.status === true) {
                count++
            }
        })
        return count
    }
  return (
    <div>
        <div className="todo-container">
            <h2>ToDo List</h2>
            <div className="input-container">
                <input 
                    value={inputValue}
                    onChange={handleChange} 
                    type="text" id="taskInput" 
                    placeholder="Add new task..." 
                />
                <button 
                    onClick={handleCreateJob} 
                    className="button">
                    Add Task
                </button>
            </div>
            {showError && (
                <span className='error'>Tên công việc không được phép trùng hoặc để trống !!!</span>
            )}
            <ul id="taskList">
                {/* Render danh sách công việc ra ngoài giao diện */}
                {jobLocal.map((job: Job)=> (
                    <JobItem 
                        job={job}
                        handleChangeStatus={handleChangeStatus} 
                        handleClickDelete={handleClickDelete}
                        handleClickUpdate={handleClickUpdate}
                    />
                )) }               
            </ul>
            <p>
                Tasks completed: <span id="completedTasks">{tasksCompleted()}</span>
            </p>
        </div>
    </div>
  )
}


