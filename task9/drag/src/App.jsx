import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === index) return;
  };

  const handleDrop = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;
    const newItems = [...items];
    // console.log("newitems-",newItems)
    const draggedItem = newItems.splice(draggingIndex, 1)[0];
    // console.log("draggediem-",draggedItem)
    newItems.splice(index, 0, draggedItem);
    // console.log("finalnewitem-",newItems);
    setItems(newItems);
    setDraggingIndex(null);
  };

  return (
    <div className="w-64 mx-auto mt-10 p-4 border rounded shadow">
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={() => handleDrop(index)}
          className={`p-2 mb-2 bg-white border rounded cursor-move transition-all ${
            draggingIndex === index ? "bg-gray-300" : "hover:bg-gray-100"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default App;

