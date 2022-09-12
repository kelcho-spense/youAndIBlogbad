import "./header.css";

function Header() {
  return (
        <div className="header">
          <div className="headerTitles">
            <span className="headerTitleSm" >You & I</span>
            <span className="headerTitleLg" >Blogs</span>
          </div>
          <img
        className="headerImg"
        src="https://picsum.photos/700/700"
        alt=""
      />
    </div>
  )
}

export default Header