import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoContext } from "./store/Items-store";


function ToDO({ name, due }) {
 
 const cobj=useContext(TodoContext);
 const del=cobj.del;
  return (
    <>
      <div className="container">
        <div className="row roww">
          <div className="col-4">{name}</div>
          <div className="col-4">{due}</div>
          <div className="col-2">
            <button
              onClick={() => del(name)}
              type="button"
              className="btn btn-danger"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDO;
