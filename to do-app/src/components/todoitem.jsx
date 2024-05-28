


const Todoitem = ({ todoName, todoDate, onDeleteclick }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4 ">
          <h4> {todoName}</h4>
        </div>
        <div className="col-2">
          <h4>{todoDate}</h4>
        </div>
        <div className="col-2">
          <button
            type="button kg-button"
            className="btn btn-danger"
            onClick={() => onDeleteclick(todoName)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
