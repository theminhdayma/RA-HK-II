
interface Post {
  id: number,
  title: string,
  content: string,
  author: string,
}

interface Props {
  posts: Post[],
}
export default function Post(props: Props) {
  const {posts} = props
  return (
    <div>
      <h3>Danh sách Post</h3>
      {posts.map(post => (
        <ul key={post.id}>
          <li>ID: {post.id}</li>
          <li>Tiêu đề: {post.title}</li>
          <li>Nội Dung: {post.content}</li>
          <li>Tác giả: {post.author}</li>
        </ul>
      ))}
    </div>
  )
}
