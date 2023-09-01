import React from "react";

const Box = ({
    id,
    backgroundColor = "gray",
    height = "10px",
    width = "10px"
}) => {
    const remove = () => handleRemove(id);
    return (<div style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor
    }}
    >
        <button onClick={remove}>DELETE BOX!!!</button>
    </div>)
}

export default Box;