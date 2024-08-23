

import axios from "axios";
const BACK_END_ROOT: string = "http://127.0.0.1:8080";
import { Setting} from "../interface.tsx";  // Fixed typo: "inetrface" to "interface"

export   const sendSetting = async (setting: Setting | undefined)  => {

    try {
        const  response  = await axios.post( `${BACK_END_ROOT}/setting`,
        {
            ...setting
        });
    } catch (error) {
        console.log("Error in setting request:", error);
    }
};
