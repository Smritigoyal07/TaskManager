import React, { useState } from 'react';
import Print from './Print'

function ToDo() {
    let todoobj = []
    let [todolist, settodoobj] = useState(todoobj);
    let giveinput = () => {
        let x = prompt("Enter Heading")
        let y = prompt("Enter description")
        let temp;

        if (x != "" && y!= "") {
            temp = {
                "name": x,
                "des": y
            }

            settodoobj((todolist) => {
                return [...todolist, temp]
            })
        }
        
    }
    return (
            <div className="box1">
                <header>
                    <h1>Todo</h1>
                    <h1 className="counter">{todolist.length}</h1>
                </header>
            <button onClick={giveinput}>+</button>
            <div className='cardd'>
                <Print todolist={todolist} />
                </div>
            </div>
        
    );
}

export default ToDo;