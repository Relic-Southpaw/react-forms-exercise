import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const Boxlist = () => {
    const [boxes, setBoxes] = useState([]);
    const addBoxes = (boxObj) => {
        setBoxes(boxes => [...boxes, boxObj]);
    };

    const remove = id => {
        setBoxes(boxes => boxes.filter(b => b.id !== id));
    };

    const boxComponents = boxes.map(b => (
        <Box
            id={b.id}
            key={b.id}
            backgroundColor={b.backgroundColor}
            height={b.height}
            width={b.width}
            handleRemove={remove}
        />
    ));
    return (
        <div>
            <h2> BOXES!!! </h2>
            <NewBoxForm createBox={addBoxes} />
        </div>
    );
}

export default Boxlist;