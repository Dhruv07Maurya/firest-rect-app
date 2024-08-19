import ToDO from "./ToDo";
import { useContext } from "react";
import { TodoContext } from "./store/Items-store";

function Todos() {
  const cobj = useContext(TodoContext);
  const list = cobj.list;

  return (
    <>
      {list.map((list) => (
        <ToDO key={list.name} name={list.name} due={list.date}></ToDO>
      ))}
    </>
  );
}
export default Todos;
