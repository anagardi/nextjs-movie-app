import React, { useContext } from "react";
// import { DirectorsContext } from "../../utilities/context";

function AddDirector() {

    // const { directors, setDirectors } = useContext(DirectorsContext);

    function handleClick() {
        // setDirectors([...directors, ...[""]]);
    }

    return (
        <div className="centered-content">
            <input type="button" className="button add centered-content" value="Add" onClick={handleClick} />
        </div>
    );
}

export default AddDirector;