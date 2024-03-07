import React, { useContext, useEffect } from "react";
import AddActor from "./add-actor";
import FormActor from "./form-actor";

// import { ActorsContext } from "../../utilities/context";

function FormActors() {

    // const { actors } = useContext(ActorsContext);
    useEffect(() => { console.log(actors)}, [actors]);
    return (
        <div className="actors">
            <h4>Actors:</h4>
            {
                actors?.map((actor, i) => (
                    <FormActor key={i} value={actor} />
                ))
            }
            <AddActor />
        </div>
    );
}

export default FormActors;