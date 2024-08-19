import { useContext } from "react";
import { TodoContext } from "./store/Items-store";

function Error() {
  const cobj = useContext(TodoContext);
  const list = cobj.list;

  return (
    <>{list.length == 0 && <h3>WhoooHooo!!!...You Completed all Task</h3>}</>
  );
}
export default Error;
