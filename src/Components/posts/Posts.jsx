import Post from '../post/Post';
import './posts.css';

function Posts({ posts }) {
  return (
    <div className='posts' >
      {posts?.length > 0 ?  posts.map((p,index) => (
        <Post post={p} key={index} />
     ) ): null}
    </div>
  )
  
}

export default Posts