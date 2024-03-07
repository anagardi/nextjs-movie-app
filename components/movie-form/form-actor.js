import React, { useState, useContext, useEffect } from "react";
// import { ActorsContext } from "../../utilities/context";

function FormActor(props) {

    const [value, setValue] = useState(props.value);
    const { actors, setActors } = useContext(ActorsContext);

    function handleChange(e) {
        let currentList = [...actors];
        let index = currentList.indexOf(value);
        const updatedValue = e.target.value;
        setValue(updatedValue);
        currentList.splice(index, 1, updatedValue);
        setActors(currentList);
    }

    function handleDelete() {
        let index = actors.indexOf(props.value);
        let currentList = [...actors];
        currentList.splice(index, 1);
        setActors(currentList);
    }

    useEffect(() => {
        // console.log("Updated actors: ", actors);
    }, [actors]);

    return (
        <div className="wrapper-horizontal">
            <input type="text" placeholder="Enter actor name" value={props.value} onChange={handleChange} />
            <input type="button" className="btn delete centered-content" onClick={handleDelete} />
        </div>
    );
}


export default FormActor;