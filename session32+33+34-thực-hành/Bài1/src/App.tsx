import React from 'react'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <>
      <TodoList></TodoList>
    </>
  )
}

/*
    1. function
    Khi cập nhật state
    setState
    2.Class
    Khi cập nhật state
    this.setState
    Khi cập nhật state đối với function và class có khác nhau gì không ?
     - Đối với function thì setState: replace (thay thế)
     - đối với class thì khi setState: merge (gộp)

    =============================================================
    props không thể thay đổi ở component con
    ======================================================
    LifeCycle có 4 giai đoạn
     1. khởi tạo contructor
     2. Mounting
     3. Update
     4. Unmount
     ===================================================
    props dùng để truyền dữ liệu có mỗi liên hệ cah - con
    =====================================
    state dùng để lưu trữ thông tin, dữ liệu có thể thay đổi trong 
    quá trình sử dụng
    ==============================================
    Reactjs dùng virture (DOM ảo)
    Reactjs có hỗ trợ SSR (server side rendering): NEXTJS
    ReactJs dàng buộc dữ liệu 1 chiều : oneway data  biding
    =============================================
    SPA (single page application): ứng dụng trang đơn  
    index.html: lần đầu tiên tải trang thì toàn bộ dữ liệu sẽ được tải
    xuống index.html
    MPA (multi page application): ứng dụng nhiều trang khi truy cập
    trang nào thì sẽ loading trang đó: 
      => Tối ưu cho SEO (search engine optimizatain) tối ưu công cụ tìm kiếm
    =========================================================
    React dùng thư viện Babel để biên dịch code js thành jsx
    ========================================================
    Destructuring để làm gi ?
        ==> Là cách truy cập thuộc tính của object hoặc array
        1 cách dễ dàng

      * CHÚ Ý:
    Sau làm dự án: 
    trong web có nhiều component
    cài thêm thư viện react* router-dom: để quản lý các route
*/