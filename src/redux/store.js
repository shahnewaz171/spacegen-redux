import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducersActions/counterReducer";

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})