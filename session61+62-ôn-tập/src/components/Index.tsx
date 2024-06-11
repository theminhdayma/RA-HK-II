import axios from "axios";
import swal from "sweetalert";
import React, { useEffect, useState } from "react";

interface TodoList {
  id: string;
  name: string;
  status: boolean;
}

export default function Index() {
  const [todolist, setTodolist] = useState<TodoList[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [tab, setTab] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  const loadData = () => {
    setLoading(true);
    axios
      .get("http://localhost:8080/todoList")
      .then((response) => {
        setTodolist(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      swal("Tên công việc không được phép để trống", {
        icon: "warning",
      });
      return;
    }

    if (todolist.some((task) => task.name === newTask)) {
      swal("Tên công việc không được phép trùng", {
        icon: "warning",
      });
      return;
    }

    const newTaskData = { name: newTask, status: false };

    setLoading(true);
    axios
      .post("http://localhost:8080/todoList", newTaskData)
      .then((response) => {
        setTodolist([...todolist, response.data]);
        setNewTask("");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleTabChange = (tabName: string) => {
    setTab(tabName);
  };

  const handleDeleteCompleted = () => {
    swal({
      title:
        "Bạn có chắc chắn muốn xóa tất cả các công việc đã hoàn thành không?",
      buttons: true,
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        const updatedTasks = todolist.filter((task) => !task.status);
        setTodolist(updatedTasks);
        swal("Đã xóa thành công các công việc đã hoàn thành!", {
          icon: "success",
        });
      } else {
        swal("Đã hủy xóa các công việc đã hoàn thành!");
      }
    });
  };

  const handleDeleteAll = () => {
    swal({
      title: "Bạn có chắc chắn muốn xóa tất cả các công việc không?",
      buttons: true,
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        setTodolist([]);
        swal("Đã xóa thành công tất cả các công việc!", {
          icon: "success",
        });
      } else {
        swal("Đã hủy xóa tất cả các công việc!");
      }
    });
  };

  const handleEditTask = (task: TodoList) => {
    setEditingId(task.id);
    setEditingName(task.name);
  };

  const handleSaveTask = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    if (editingName.trim() === "") {
      swal("Tên công việc không được phép để trống", {
        icon: "warning",
      });
      return;
    }

    if (todolist.some((task) => task.name === editingName && task.id !== id)) {
      swal("Tên công việc không được phép trùng", {
        icon: "warning",
      });
      return;
    }

    const updatedTask = { name: editingName, status: false };
    axios
      .put(`http://localhost:8080/todoList/${id}`, updatedTask)
      .then(() => {
        setTodolist(
          todolist.map((task) =>
            task.id === id ? { ...task, name: editingName } : task
          )
        );
        setEditingId(null);
        setEditingName("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteTask = (id: string, name: string) => {
    swal({
      title: `Bạn có chắc chắn muốn xóa công việc ${name} không ?`,
      buttons: true,
      dangerMode: true,
    }).then((willDelete: boolean) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8080/todoList/${id}`)
          .then(() => {
            setTodolist(todolist.filter((task) => task.id !== id));
          })
          .catch((error) => {
            console.error(error);
          });
        swal(`Đã xóa thành công công việc ${name} !`, {
          icon: "success",
        });
      } else {
        swal(`Đã hủy xóa công việc ${name} !`);
      }
    });
  };

  const getFilteredTasks = () => {
    if (tab === "active") {
      return todolist.filter((task) => !task.status);
    } else if (tab === "completed") {
      return todolist.filter((task) => task.status);
    }
    return todolist;
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <form
                    className="d-flex justify-content-center align-items-center mb-4"
                    onSubmit={addTask}
                  >
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill"
                    >
                      <input
                        type="text"
                        id="form2"
                        className="form-control"
                        value={newTask}
                        onChange={handleInputChange}
                      />
                      <label className="form-label" htmlFor="form2">
                        New task...
                      </label>
                    </div>
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-info ms-2"
                    >
                      Add
                    </button>
                  </form>

                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${tab === "all" ? "active" : ""}`}
                        id="ex1-tab-1"
                        data-mdb-tab-init=""
                        href="#ex1-tabs-1"
                        role="tab"
                        aria-controls="ex1-tabs-1"
                        aria-selected={tab === "all"}
                        onClick={() => handleTabChange("all")}
                      >
                        All
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          tab === "active" ? "active" : ""
                        }`}
                        id="ex1-tab-2"
                        data-mdb-tab-init=""
                        href="#ex1-tabs-2"
                        role="tab"
                        aria-controls="ex1-tabs-2"
                        aria-selected={tab === "active"}
                        onClick={() => handleTabChange("active")}
                      >
                        Active
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link ${
                          tab === "completed" ? "active" : ""
                        }`}
                        id="ex1-tab-3"
                        data-mdb-tab-init=""
                        href="#ex1-tabs-3"
                        role="tab"
                        aria-controls="ex1-tabs-3"
                        aria-selected={tab === "completed"}
                        onClick={() => handleTabChange("completed")}
                      >
                        Completed
                      </a>
                    </li>
                  </ul>

                  {loading ? (
                    <div className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="tab-content" id="ex1-content">
                      <div
                        className={`tab-pane fade show ${
                          tab === "all" ? "active" : ""
                        }`}
                        id="ex1-tabs-1"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-1"
                      >
                        <ul
                          className="list-group mb-0"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          {getFilteredTasks().map((item) => (
                            <li
                              key={item.id}
                              className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                              style={{ backgroundColor: "#f4f6f7" }}
                            >
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={item.status}
                                aria-label="..."
                                onChange={() => {
                                  const updatedTasks = todolist.map((task) =>
                                    task.id === item.id
                                      ? { ...task, status: !task.status }
                                      : task
                                  );
                                  setTodolist(updatedTasks);
                                }}
                              />
                              <span>
                                {item.status ? (
                                  <s>{item.name}</s>
                                ) : (
                                  <span>{item.name}</span>
                                )}
                              </span>
                              <div className="ms-auto">
                                <button
                                  className="btn btn-warning btn-sm me-2"
                                  onClick={() => handleEditTask(item)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleDeleteTask(item.id, item.name)
                                  }
                                >
                                  Delete
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className={`tab-pane fade show ${
                          tab === "active" ? "active" : ""
                        }`}
                        id="ex1-tabs-2"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-2"
                      >
                        <ul
                          className="list-group mb-0"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          {getFilteredTasks().map((item) => (
                            <li
                              key={item.id}
                              className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                              style={{ backgroundColor: "#f4f6f7" }}
                            >
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={item.status}
                                aria-label="..."
                                onChange={() => {
                                  const updatedTasks = todolist.map((task) =>
                                    task.id === item.id
                                      ? { ...task, status: !task.status }
                                      : task
                                  );
                                  setTodolist(updatedTasks);
                                }}
                              />
                              <span>
                                {item.status ? (
                                  <s>{item.name}</s>
                                ) : (
                                  <span>{item.name}</span>
                                )}
                              </span>
                              <div className="ms-auto">
                                <button
                                  className="btn btn-warning btn-sm me-2"
                                  onClick={() => handleEditTask(item)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleDeleteTask(item.id, item.name)
                                  }
                                >
                                  Delete
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className={`tab-pane fade show ${
                          tab === "completed" ? "active" : ""
                        }`}
                        id="ex1-tabs-3"
                        role="tabpanel"
                        aria-labelledby="ex1-tab-3"
                      >
                        <ul
                          className="list-group mb-0"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          {getFilteredTasks().map((item) => (
                            <li
                              key={item.id}
                              className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                              style={{ backgroundColor: "#f4f6f7" }}
                            >
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={item.status}
                                aria-label="..."
                                onChange={() => {
                                  const updatedTasks = todolist.map((task) =>
                                    task.id === item.id
                                      ? { ...task, status: !task.status }
                                      : task
                                  );
                                  setTodolist(updatedTasks);
                                }}
                              />
                              <span>
                                {item.status ? (
                                  <s>{item.name}</s>
                                ) : (
                                  <span>{item.name}</span>
                                )}
                              </span>
                              <div className="ms-auto">
                                <button
                                  className="btn btn-warning btn-sm me-2"
                                  onClick={() => handleEditTask(item)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() =>
                                    handleDeleteTask(item.id, item.name)
                                  }
                                >
                                  Delete
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="btn-delete mt-3">
                    <button
                      className="btn btn-danger me-2"
                      onClick={handleDeleteCompleted}
                    >
                      Xóa công việc hoàn thành
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={handleDeleteAll}
                    >
                      Xóa tất cả công việc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {editingId && (
          <div
            className="modal fade show"
            tabIndex={-1}
            style={{ display: "block" }}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Task</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setEditingId(null);
                      setEditingName("");
                    }}
                  ></button>
                </div>
                <form onSubmit={(e) => handleSaveTask(e, editingId)}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="editTaskName" className="form-label">
                        Task Name
                      </label>
                      <input
                        type="text"
                        id="editTaskName"
                        className="form-control"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        setEditingId(null);
                        setEditingName("");
                      }}
                    >
                      Hủy
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Cập nhật
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}