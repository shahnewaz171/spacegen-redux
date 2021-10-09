import axios from "axios"
import { getError, getMissions } from "../../redux/reducersActions/missionsReducer"

export const fetchMissions = () => async dispatch => {
    try{
        axios.get("https://api.spacexdata.com/v3/launches")
        .then(res => {
            if (res) {
                dispatch(getMissions(res.data))
            }
        })
    }
    catch(error){
        dispatch(getError(error))
    }
}