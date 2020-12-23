import React, { useState } from "react";
import ReactDOM from "react-dom";
import DragItem from "./components/drag-item";
import DropItem from "./components/drop-item";

import "./styles.css";

const items = {
  1: {
    text: "First box",
    state: "item"
  },
  2: {
    text: "Second box",
    state: "item"
  },
  3: {
    text: "Third box",
    state: "item"
  },
  4: {
    text: "Fourth box",
    state: "item"
  }
};

function App() {
  const [boxValues, setValue] = useState(items);
  return (
    <div className="App">
      <div className="box">
        <DropItem
          heading="Drag And Drop Items"
          onDrop={id => {
            const currentItem = { ...boxValues[id] };
            currentItem.state = "item";
            setValue({ ...boxValues, ...{ [id]: currentItem } });
          }}
        >
          {Object.keys(boxValues)
            .map(key => ({ id: key, ...boxValues[key] }))
            .filter(item => item.state === "item")
            .map(item => <DragItem id={item.id} data={item} key={item.id} />)}
        </DropItem>
        
        <DropItem
          heading="Done"
          onDrop={id => {
            const currentItem = { ...boxValues[id] };
            currentItem.state = "done";
            setValue({ ...boxValues, ...{ [id]: currentItem } });
          }}
        >
          {Object.keys(boxValues)
            .map(key => ({ id: key, ...boxValues[key] }))
            .filter(item => item.state === "done")
            .map(item => <DragItem id={item.id} data={item} key={item.id} />)}
        </DropItem>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
