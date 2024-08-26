

import axios from "axios";
import { FILE, UUID } from "../interface";
const BACK_END_ROOT: string = "http://127.0.0.1:8080";

export   const sendDownload = async ( file: FILE )  => {

    try {
        await axios.post( `${BACK_END_ROOT}/download`,
        {
            "url" : file.url ,
            "name" :  file.name , 
        });
    } catch (error) {
        console.log("Error in setting request:", error);
    }
};
