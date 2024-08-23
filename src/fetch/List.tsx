import axios from "axios";
const BACK_END_ROOT: string = "http://127.0.0.1:8080";
import { ListResponse , iList} from "../interface.tsx";  // Fixed typo: "inetrface" to "interface"

export const fetchList = async (setList:React.Dispatch<React.SetStateAction<iList | undefined>>):  Promise<void> => {

    const response = await axios.get<ListResponse | undefined>(`${BACK_END_ROOT}/list`)
    .then(response => {
        setList(response.data?.data);
    })
    .catch(error => {
        console.error('Error making request:', error);
    });
};
