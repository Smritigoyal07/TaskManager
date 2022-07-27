import React from "react"
import SmallPart from "./SmallPart"

function Print(probs) {
    let itemList = probs.todolist.map((item, index) => {

        return (
            <SmallPart name={item.name} des={item.des} key={index} />
        )
    })

    return (
        <div>
            {itemList}
        </div>
    );
}

export default Print;