import './post.css';

const post = () => {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://images.pexels.com/photos/5682132/pexels-photo-5682132.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="postImg" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategories">Music</span>
          <span className="postCategories">Life</span>
        </div>
        <span className="postTitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
        <hr />
        <span className="postDate"></span>
      </div>
    </div>
  );
}

export default post;
