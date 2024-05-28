import Todoitem from "./todoitem";

const Todoitems = ({ Todoitems, onDeleteclick }) => {
  return (
    <div className="items-container">
      {Todoitems.map((x) => (
        <Todoitem
        key={x.name}
          todoName={x.name}
          todoDate={x.duedate}
          onDeleteclick={onDeleteclick}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
