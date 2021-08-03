import './singlePost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img src="https://images.pexels.com/photos/4210789/pexels-photo-4210789.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg"/>
          <h1 className="singlePostTitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Florrie</b></span>
              <span className="singlePostDate">1 hour ago</span>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
      </div>
    </div>
  );
}

export default SinglePost;
