import React, { useState } from "react";
import uuid from "uuid/v4";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        height: "",
        width: "",
        backgroundColor: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE)
    }
    return (
        <form onsubmit={handleSubmit}>
            <label htmlFor="height"> Height </label>
            <input
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width"> Width </label>
            <input
                id="width"
                type="text"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="backgroundColor"> Background Color </label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <button id="addBoxBtn"> Add Box </button>
        </form>
    )
}

export default NewBoxForm;