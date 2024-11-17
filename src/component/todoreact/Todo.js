import React, { useState, useEffect } from 'react';
import "./style.css";

// Get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("myTodoList")
    if (lists) {
        return JSON.parse(lists)
    }
    else{
        return ([])
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("")
    const [toggleButton, setToggleButton] = useState(false)

    // Add the item function
    const addItem = () => {
        if (!inputData) {
            alert("Please fill the data");
        } 
        else if(inputData && toggleButton) {
            setItems(
                items.map((curElm) => {
                    if (curElm.id === isEditItem) {
                        return {...curElm, name: inputData}
                    }
                    return curElm
                })
            )
            setInputData([])
            setIsEditItem(null)
            setToggleButton(false)
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, myNewInputData]);
            setInputData(""); // Clear the input field after adding
        }
    };

    // Edit the items
    const editItem = (index) => {
        const item_todo_edited = items.find((curElm) => {
            return curElm.id === index
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index)
        setToggleButton(true)
    }

    // how to delete item section
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElm) => {
            return curElm.id !== index
        })
        setItems(updatedItem)
    }

    // Remove all the elements
    const removeAll = () =>  {
        setItems([])
    }

    // Adding localstorage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items))
    }, [items])
    

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="Add item"
                            className="form-control"
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>
                        ) : ( 
                         <i className="fa fa-solid fa-plus" onClick={addItem}></i>)}
                        
                    </div>
                    {/* Show our items */}
                    <div className="showItems">
                        {items.map((curElm) => {
                            return (
                                <div className="eachItem" key={curElm.id}>
                                    <h3>{curElm.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-solid fa-edit" onClick={() => editItem(curElm.id)}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curElm.id)}></i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Remove All items */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
