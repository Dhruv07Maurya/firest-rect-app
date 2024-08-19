import { useState,useContext } from "react";
import { MdAdd } from "react-icons/md";
import { TodoContext } from "./store/Items-store";

function Data() {
  const cobj=useContext(TodoContext);
  const update=cobj.addd;
  let [lists, setlists] = useState("");
  let [Date, setDate] = useState("");
  const changeList = (e) => {
    setlists(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <div className="container text-center">
        <div className="row roww">
          <div className="col-4">
            <input
              onChange={changeList}
              type="text"
              value={lists}
              placeholder="Enter To Do Here"
            />
          </div>
          <div className="col-4">
            <input onChange={changeDate} type="date"/>
          </div>
          <div className="col-2">
            <button
              onClick={() => {
                if (lists != 0 && Date != 0) {
                  update(lists, Date);
                }
              }}
              type="button"
              className="btn btn-success"
            >
              <MdAdd />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Data;
