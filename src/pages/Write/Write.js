import './write.css';

const Write = () => {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.pexels.com/photos/4321565/pexels-photo-4321565.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="writeImg" />
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" ></textarea>
        </div>
        <div className="writeSubmit">
            Publish
        </div>
    </form>
    </div>
  );
}

export default Write;
