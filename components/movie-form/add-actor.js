import React, { useState } from "react";
// import { ActorsContext } from "../../utilities/context";

function AddActor(props) {

    const [ actors, setActors ] = useState(props.actors);

    function handleClick() {
        setActors([...actors, ...[""]]);
    }

    return (
        <div className="centered-content">
            <input type="button" className="button add centered-content" value="Add" onClick={handleClick}/>
        </div>
    );
}

export default AddActor;