import axios from "axios";
import swal from "sweetalert";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  image: string;
  created_at: string;
  status: boolean;
}

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showConfirmBlockModal, setShowConfirmBlockModal] =
    useState<boolean>(false);
  const [showConfirmUnblockModal, setShowConfirmUnblockModal] =
    useState<boolean>(false);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [showRefreshModal, setShowRefreshModal] = useState<boolean>(false);
  const [postToBlock, setPostToBlock] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState<Post>({
    id: 0,
    title: "",
    image: "",
    created_at: "",
    status: true,
  });
  const [validationError, setValidationError] = useState<string>("");
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [editPost, setEditPost] = useState<Post>({
    id: 0,
    title: "",
    image: "",
    created_at: "",
    status: true,
  });
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts([]);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const loadData = () => {
    setLoading(true);
    axios
      .get<Post[]>("http://localhost:8080/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleUpdate = (post: Post) => {
    setEditPost(post);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setEditPost({
      id: 0,
      title: "",
      image: "",
      created_at: "",
      status: true,
    });
    setValidationError("");
  };

  const handleConfirmUpdate = () => {
    if (editPost.title === "" || editPost.image === "") {
      setValidationError("Tên bài viết và hình ảnh không được để trống");
      return;
    }

    if (posts.some((p) => p.title === editPost.title && p.id !== editPost.id)) {
      setValidationError("Tên bài viết không được phép trùng");
      return;
    }

    axios
      .patch(`http://localhost:8080/posts/${editPost.id}`, editPost)
      .then(() => {
        loadData();
        handleCloseEditForm();
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const handleBlock = (postId: number) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setPostToBlock(post);
      setShowConfirmBlockModal(true);
    }
  };

  const handleCloseConfirmBlockModal = () => {
    setShowConfirmBlockModal(false);
    setPostToBlock(null);
  };

  const handleConfirmBlock = () => {
    if (postToBlock) {
      const postId = postToBlock.id;
      const newStatus = !postToBlock.status;

      axios
        .patch(`http://localhost:8080/posts/${postId}`, { status: newStatus })
        .then(() => {
          const updatedPosts = posts.map((p) =>
            p.id === postId ? { ...p, status: newStatus } : p
          );
          setPosts(updatedPosts);
          setShowConfirmBlockModal(false);
          setPostToBlock(null);
        })
        .catch((error) => {
          console.error("Error blocking post:", error);
        });
    }
  };

  const handleUnblock = (postId: number) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      setPostToBlock(post);
      setShowConfirmUnblockModal(true);
    }
  };

  const handleCloseConfirmUnblockModal = () => {
    setShowConfirmUnblockModal(false);
    setPostToBlock(null);
  };

  const handleConfirmUnblock = () => {
    if (postToBlock) {
      const postId = postToBlock.id;
      const newStatus = !postToBlock.status;

      axios
        .patch(`http://localhost:8080/posts/${postId}`, { status: newStatus })
        .then(() => {
          const updatedPosts = posts.map((p) =>
            p.id === postId ? { ...p, status: newStatus } : p
          );
          setPosts(updatedPosts);
          setShowConfirmUnblockModal(false);
          setPostToBlock(null);
        })
        .catch((error) => {
          console.error("Error unblocking post:", error);
        });
    }
  };

  const handleDelete = (postId: number, postTitle: string) => {
    swal({
      title: `Bạn có chắc chắn muốn xóa ${postTitle} không ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8080/posts/${postId}`)
          .then(() => {
            loadData();
          })
          .catch((error) => {
            console.error("Error deleting post:", error);
          });
        swal(`Đã xóa ${postTitle} thành công !`, {
          icon: "success",
        });
      } else {
        swal(`Đã hủy xóa ${postTitle} !`);
      }
    });
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
    setNewPost({
      id: 0,
      title: "",
      image: "",
      created_at: "",
      status: false,
    });
    setValidationError("");
  };

  const handleRefreshInputs = () => {
    setShowRefreshModal(true);
  };

  const handleCloseRefreshModal = () => {
    setShowRefreshModal(false);
  };

  const handleConfirmRefresh = () => {
    setNewPost({
      id: 0,
      title: "",
      image: "",
      created_at: "",
      status: false,
    });
    setShowRefreshModal(false);
  };

  const handleAddPost = () => {
    if (newPost.title === "" || newPost.image === "") {
      setValidationError("Tên bài viết và hình ảnh không được để trống");
      return;
    }

    if (posts.some((p) => p.title === newPost.title)) {
      setValidationError("Tên bài viết không được phép trùng");
      return;
    }

    axios
      .post("http://localhost:8080/posts", newPost)
      .then(() => {
        loadData();
        handleCloseAddForm();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full m-auto mt-4 h-screen">
      <main className="main">
        <header className="flex justify-between mb-3">
          <h1 className="text-2xl">Danh sách bài viết</h1>
          <button onClick={handleShowAddForm} className="btn btn-primary">
            Thêm mới bài viết
          </button>
        </header>
        <div className="flex items-center justify-end gap-2 mb-3">
          <select className="opiton">
            <option>Lọc bài viết</option>
            <option value="option2">Đã xuất bản</option>
            <option value="option3">Ngừng hoạt động</option>
          </select>
          <input
            style={{ width: 350 }}
            type="text"
            className="form-control"
            placeholder="Tìm kiếm theo tiêu đề"
            onChange={handleSearch}
          />
          <i
            className="fa-solid fa-arrows-rotate"
            title="Refresh"
            onClick={handleRefreshInputs}
          />
        </div>
        <div>
          <table className="table text-center table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Hình ảnh</th>
                <th>Ngày viết</th>
                <th>Trạng thái</th>
                <th>Chức năng</th>
              </tr>
            </thead>
            <tbody style={{ maxHeight: "300px", overflowY: "auto" }}>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    Loading...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    Không có bài viết nào
                  </td>
                </tr>
              ) : searchTerm !== "" && filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    Không có kết quả tìm kiếm
                  </td>
                </tr>
              ) : searchTerm === "" ? (
                // Render all posts when search term is empty
                posts.map((post, index) => (
                  <tr key={post.id}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>{post.created_at}</td>
                    <td>
                      {post.status ? (
                        <div className="published">Đã xuất bản</div>
                      ) : (
                        <div className="unpublished">Ngừng xuất bản</div>
                      )}
                    </td>
                    <td className="function">
                      {post.status ? (
                        <button
                          onClick={() => handleBlock(post.id)}
                          className="btn btn-sm btn-warning me-1"
                        >
                          Chặn
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnblock(post.id)}
                          className="btn btn-sm btn-success me-1"
                        >
                          Bỏ chặn
                        </button>
                      )}
                      <button
                        onClick={() => handleUpdate(post)}
                        className="btn btn-sm btn-info me-1"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        className="btn btn-sm btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // Render filtered posts when there is a search term
                filteredPosts.map((post, index) => (
                  <tr key={post.id}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{post.created_at}</td>
                    <td>
                      {post.status ? (
                        <div className="published">Đã xuất bản</div>
                      ) : (
                        <div className="unpublished">Chưa xuất bản</div>
                      )}
                    </td>
                    <td className="function">
                      {post.status ? (
                        <button
                          onClick={() => handleBlock(post.id)}
                          className="btn btn-sm btn-warning me-1"
                        >
                          Chặn
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnblock(post.id)}
                          className="btn btn-sm btn-success me-1"
                        >
                          Bỏ chặn
                        </button>
                      )}
                      <button
                        onClick={() => handleUpdate(post)}
                        className="btn btn-sm btn-info me-1"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(post.id, post.title)}
                        className="btn btn-sm btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modals for blocking, unblocking, adding, refreshing, and editing */}
      {/* Modal for blocking post */}
      {showConfirmBlockModal && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-title">
              <h2>Xác nhận chặn bài viết</h2>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleCloseConfirmBlockModal}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body-custom">
              <p>Bạn có chắc muốn chặn bài viết "{postToBlock?.title}"?</p>
            </div>
            <div className="modal-footer-custom">
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCloseConfirmBlockModal}
              >
                Hủy
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleConfirmBlock}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for unblocking post */}
      {showConfirmUnblockModal && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-title">
              <h2>Xác nhận bỏ chặn bài viết</h2>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleCloseConfirmUnblockModal}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body-custom">
              <p>Bạn có chắc muốn bỏ chặn bài viết "{postToBlock?.title}"?</p>
            </div>
            <div className="modal-footer-custom">
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCloseConfirmUnblockModal}
              >
                Hủy
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleConfirmUnblock}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for adding new post */}
      {showAddForm && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-title">
              <h2>Thêm mới bài viết</h2>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleCloseAddForm}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body-custom">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label">Tên bài viết:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newPost.title}
                    onChange={(e) =>
                      setNewPost({ ...newPost, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hình ảnh:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newPost.image}
                    onChange={(e) =>
                      setNewPost({ ...newPost, image: e.target.value })
                    }
                  />
                </div>
                {validationError && (
                  <div className="alert alert-danger">{validationError}</div>
                )}
                <div className="modal-footer-custom">
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={handleCloseAddForm}
                  >
                    Hủy
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleAddPost}
                  >
                    Xuất bản
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal for refreshing inputs */}
      {showRefreshModal && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-title">
              <h2>Làm mới inputs</h2>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleCloseRefreshModal}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body-custom">
              <p>Bạn có chắc muốn làm mới các input đã điền?</p>
            </div>
            <div className="modal-footer-custom">
              <button
                className="btn btn-sm btn-secondary"
                onClick={handleCloseRefreshModal}
              >
                Hủy
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleConfirmRefresh}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for editing post */}
      {showEditForm && (
        <div className="overlay">
          <div className="modal-custom">
            <div className="modal-title">
              <h2>Cập nhật bài viết</h2>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleCloseEditForm}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body-custom">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label">Tên bài viết:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editPost.title}
                    onChange={(e) =>
                      setEditPost({ ...editPost, title: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Hình ảnh:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editPost.image}
                    onChange={(e) =>
                      setEditPost({ ...editPost, image: e.target.value })
                    }
                  />
                </div>
                {validationError && (
                  <div className="alert alert-danger">{validationError}</div>
                )}
                <div className="modal-footer-custom">
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={handleCloseEditForm}
                  >
                    Hủy
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleConfirmUpdate}
                  >
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
