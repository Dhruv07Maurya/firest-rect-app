import { useState } from "react";
import Btn from "./Btn";
import Data from "./Data";
import "./Style.css";
import ToDO from "./ToDo";
import Todos from "./Tods";
import Error from "./Error";
import { TodoContext } from "./store/Items-store";

function App() {
  let [list, setlist] = useState([]);

  function addd(newItem, DueDate) {
    console.log("added new items", newItem, DueDate);
    setlist([...list, { name: newItem, date: DueDate }]);
  }
  function del(namee) {
    const newi = list.filter((itesm) => itesm.name !== namee);
    setlist(newi);
    console.log("item deleted ", namee);
  }
  return (
    <>
      <TodoContext.Provider value={{ list: list, addd: addd, del: del }}>
        <center>
          <Btn />
          <Data></Data>
          <Error></Error>
          <Todos></Todos>
        </center>
      </TodoContext.Provider>
    </>
  );
}
export default App;
