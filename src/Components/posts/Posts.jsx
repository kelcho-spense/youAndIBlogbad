import Post from '../post/Post';
import './posts.css';

function Posts({ posts }) {
  return (
    <div className='posts' >
      {Array.from(posts).map((p,index) => (
        <Post post={p} key={index} />
     ) )}
    </div>
  )
}

export default Posts