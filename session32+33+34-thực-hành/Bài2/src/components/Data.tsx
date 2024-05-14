import React from 'react'
import {v4 as uuidv4} from "uuid"

interface Product {
    id: string,
    img: string,
    name: string
    price: string,
}

export default function Data() {
    const products: Product[] = [
        {
            id: uuidv4(),
            img: "http://img.websosanh.vn/v2/users/root_product/images/dien-thoai-samsung-galaxy-s20/rs8m65vriptm0.jpg",
            name: "Điện thoại SamSung Galaxy",
            price: "20.000.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn.nguyenkimmall.com/images/product/829/dien-thoai-iphone-14-pro-max-1tb-tim-1.jpg",
            name: "Điện thoại Ip14 Promax",
            price: "30.500.000",
        },
        {
            id: uuidv4(),
            img: "https://hc.com.vn/i/ecommerce/media/ckeditor_3370949.jpg",
            name: "Điện thoại Ip12 Promax",
            price: "20.000.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn.nguyenkimmall.com/images/detailed/755/10050438-dien-thoai-oppo-a55-4gb-64gb-xanh-1.jpg",
            name: "Điện thoại Oppo A55",
            price: "14.500.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn.nguyenkimmall.com/images/detailed/820/10053089-dien-thoai-oppo-reno8-5g-8gb-256gb-vang-dong-1.jpg",
            name: "Điện thoại Oppo reno08",
            price: "11.000.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn.tgdd.vn/Products/Images/42/233460/oppo-reno5-5g-thumb-600x600.jpg",
            name: "Điện thoại Oppo reno05",
            price: "20.000.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/dien-thoai-sam-sung-moi-nhat-10.png",
            name: "Điện thoại Samsung S22",
            price: "23.500.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/dien-thoai-sam-sung-moi-nhat-2.png",
            name: "Điện thoại S23",
            price: "20.000.000",
        },
        {
            id: uuidv4(),
            img: "https://phongreviews.com/wp-content/uploads/2021/06/dien-thoai-oppo-moi-nhat-9-767x956.jpg",
            name: "Điện thoại Oppo F9",
            price: "8.000.000",
        },
        {
            id: uuidv4(),
            img: "https://cdn.nguyenkimmall.com/images/detailed/824/10052919-dien-thoai-samsung-galaxy-z-flip-4-5g-256gb-tim-4.jpg",
            name: "Điện thoại Samsung Flip4",
            price: "20.000.000",
        },
    ]

    // Lưu lên local
    localStorage.setItem('listProduct', JSON.stringify(products));
  return (
    <div></div>
  )
}
