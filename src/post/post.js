import './Post.css';

const Post = () => {
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
        <span className="postTitle">Lorem Ipsum is simply dummy text of the print. </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.</p>
    </div>
  );
}

export default Post;
