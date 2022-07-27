import React, { useState } from 'react';
import Print from './Print'

function Completed() {
    let todoobj = []
    let [todolist, settodoobj] = useState(todoobj);
    let giveinput = () => {
        let x = prompt("Enter Heading")
        let y = prompt("Enter description")
        let temp = {
            "name": x,
            "des": y
        }
        settodoobj((todolist) => {
            return [...todolist, temp]
        })
        console.log(todolist)
    }
    return (
        <div className="box3">
            <header>
                <h1>Completed</h1>
                <h1 className="counter">{todolist.length}</h1>
            </header>
            <button onClick={giveinput}>+</button>
            <Print todolist={todolist} />
        </div>
    );
}

export default Completed;