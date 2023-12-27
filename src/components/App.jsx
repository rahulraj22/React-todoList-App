import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        if(!inputText) return;  // removed empty todos!!
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            {/* Here, we have give some attributes(in order to receive it as props in child components), in order to pass inputText, function(like addItem, onClick) */}
            <InputArea 
                onInput = {handleChange}
                value = {inputText}
                addButton = {addItem}
            />
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;


/* Other ways of doing this can be found in codesandbox 32.42 */