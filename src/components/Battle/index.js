import React, { useState } from "react";
import PlayerInput from "./PlayerInput"
import { Link } from "react-router-dom"
import PlayerPreview from "./PlayerPreview";


const Battle = () => {
    const [playersData, setPlayersData] = useState({
        playerOneName: "",
        playerTwoName: "",
        playerOneImage: null,
        playerTwoImage: null
    });

    const handleSubmit = (id, userName) => {
        setPlayersData((prev) => ({
            ...prev,
            [id + "Name"]: userName,
            [id + "Image"]: `https://github.com/${userName}.png?size200`
        }))
    };

    const handleReset = (id) => {
        setPlayersData((prev) => ({
            ...prev,
            [id + "Name"]: "",
            [id + "Image"]: null
        }))
    };

    return (
        <>
            <div className="row">
                {!playersData.playerOneName ?
                    <PlayerInput
                        id="playerOne"
                        label="Player 1"
                        handleSubmit={handleSubmit}
                    /> :
                    <PlayerPreview
                        avatar={playersData.playerOneImage}
                        userName={playersData.playerOneName}
                        handleReset={handleReset}
                    >
                        <button className="reset" onClick={() => handleReset("playerOne")}>Reset</button>
                    </PlayerPreview>
                }
                {!playersData.playerTwoImage ?
                    <PlayerInput
                        id="playerTwo"
                        label="Player 2"
                        handleSubmit={handleSubmit}
                    /> :
                    <PlayerPreview
                        avatar={playersData.playerTwoImage}
                        userName={playersData.playerTwoName}
                        handleReset={handleReset}
                    >
                        <button className="reset" onClick={() => handleReset("playerTwo")}>Reset</button>
                    </PlayerPreview>
                }
            </div>
            {playersData.playerOneName && playersData.playerTwoName &&
            <Link
                className="button"
                to={{
                    pathname: "/battle/results",
                    search: `?playerOneName=${playersData.playerOneName}&playerTwoName=${playersData.playerTwoName}`
                }}>
                Battle
            </Link>
            }
        </>
    )
};

export default Battle;
