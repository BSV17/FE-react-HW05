import React from "react";

const PlayerPreview = ({ avatar, userName, children }) => {
    return (
        <div className="column">
            <img className="avatar" src={avatar} alt="Avatar"/>
            <h2 className="username">@{userName}</h2>
            {children}
        </div>
    )
};

export default PlayerPreview;