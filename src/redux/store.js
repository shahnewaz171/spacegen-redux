import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "./reducersActions/missionsReducer";

export default configureStore({
    reducer: {
        missionsInfo: missionsReducer
    }
})