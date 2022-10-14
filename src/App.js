import './App.css';
import BasicGrid from "./BoardGrid";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <h3 className="app-title">Assignment Board</h3>
          <DndProvider backend={HTML5Backend}>
             <div className={"basic-board"}>
              <BasicGrid/>
             </div>
          </DndProvider>
      </header>
    </div>
  );
}

export default App;
