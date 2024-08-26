import { useState } from "react";
import { State, StateS, UUID } from "../interface";
import { Button } from "@mui/material";
import { sendPause } from "../send/Pause";
import { Link } from "react-router-dom";

export const MyButton = (prop: { state: State, ID: UUID }) => {
    let { state, ID } = prop;

    const [onHover, setOnHover] = useState(false);

    const getButtonText = (): string => {
        if (!onHover) {
            return state.name;
        } else {
            if (state.name == (StateS.PAUSE.name)) {
                return StateS.WORKING.name;
            } else if (state.name == (StateS.WORKING.name)) {
                return StateS.PAUSE.name;
            }
        }
        return state.name;
    };

    const onClick = () => {
        if (state.name == (StateS.PAUSE.name) || state.name == (StateS.WORKING.name)) {
            sendPause(ID)
        } 
    }
    return (
        <Button
            onMouseOver={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onMouseDown={onClick}
        >
            
            <Link to={"/Home"}>{getButtonText()}</Link>
        </Button>
    );
};
