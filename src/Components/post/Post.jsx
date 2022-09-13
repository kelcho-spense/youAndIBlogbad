import './post.css'
import { Link } from 'react-router-dom';

function Post({ post }) {
  const PF = "https://youandiblogapi.herokuapp.com/images/"; 
  console.log(Array.isArray(post));
  const aa = Array.from(post);
  console.log(aa);
  return (
    <div className='post'>
        {post.photo && (
          <img className='postImg' src={PF + post.photo} alt="" />
        )}      
      <div className="postInfo">
        <div className="postCats">
          {Array.isArray(post.categories) ? Array.from(post.categories).map((c,index) => (
              <div className="postCat" key={index}>
                {c.name}
              </div>
            )): null
          }

          <Link className="link" to={`/post/${post._id}`}>
            <span className="postTitle">
              {post.title}
            </span>
          </Link>
        </div>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}

export default Post