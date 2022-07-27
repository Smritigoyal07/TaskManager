import React from "react"

function SmallPart(probs) {
    let display = () => {
        alert(probs.des)
    }
    return (
        <div onClick={display} className="card" key={probs.key}>
            <h2 className="desc">{probs.name}</h2>
            <h2 className="work">{probs.des}</h2>
        </div>
    );
}

export default SmallPart;