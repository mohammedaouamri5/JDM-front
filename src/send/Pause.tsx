

import axios from "axios";
import { UUID } from "../interface";
const BACK_END_ROOT: string = "http://127.0.0.1:8080";

export   const sendPause = async ( ID: UUID )  => {
    console.log(ID)
    try {
        const  response  = await axios.post( `${BACK_END_ROOT}/pause`,
        {
            "ID" : ID, 
        });
    } catch (error) {
        console.log("Error in setting request:", error);
    }
};
