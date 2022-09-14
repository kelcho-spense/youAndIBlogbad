import Post from '../post/Post';
import './posts.css';

function Posts({ posts }) {
  console.log(posts);
  return (
    <div className='posts' >
      {posts?.length > 0 ?  posts.map((p,index) => (
        <Post post={p} key={index} />
     ) ): null}
     {console.log(posts)}
    </div>
  )
  
}

export default Posts