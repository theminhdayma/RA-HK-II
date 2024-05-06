import Post from './Post'

export default function ListPost() {
  const posts = [
    {
      id: 1001,
      title: "Một ngày vui",
      content: "Cuộc sống là chuỗi ngày vui vui vui...",
      author: "Thế Minh",
    },
    {
      id: 1002,
      title: "Một ngày buồn",
      content: "Cuộc sống là chuỗi ngày mệt mỏi...",
      author: "Thế Minh",
    },
  ]
  return (
    <div>
        <Post posts = {posts}></Post>
    </div>
  )
}
