import './singlePost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img src="https://images.pexels.com/photos/4210789/pexels-photo-4210789.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg"/>
          <h1 className="singlePostTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              <div className="singlePostEdit">
              <i class="far fa-edit"></i>
              <i class="far fa-trash-alt"></i>
              </div>
          </h1>
      </div>
    </div>
  );
}

export default SinglePost;
