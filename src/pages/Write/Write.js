import './write.css';

const Write = () => {
  return (
    <div className="write">
    <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput"></label>
            <i className="fas fa-plus"></i>
            <input type="file" id="fileInput" />
            <input type="text" placeholder="Title" />
        </div>
    </form>
    </div>
  );
}

export default Write;
