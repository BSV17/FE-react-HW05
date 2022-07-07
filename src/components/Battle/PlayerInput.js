import React, { useState } from "react";

const PlayerInput = (props) => {
    const [userName, setUserName] = useState("");

    const handlerChange = (event) => {
        setUserName(event.target.value);
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(props.id, userName);
    };

    return (
        <form className="column" onSubmit={handelSubmit}>
            <label className="header" htmlFor="username">{props.label}</label>
            <input
                id="username"
                type="text"
                placeholder="GitHub Username"
                autoCapitalize="off"
                value={userName}
                onChange={handlerChange}
            />
            <button
                className="button"
                type="submit"
                disabled={!userName}
            >
                Submit
            </button>
        </form>
    )
};

export default PlayerInput;
