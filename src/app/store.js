import { configureStore } from "@reduxjs/toolkit";
import { doggoApi } from "../services/doggoApi";

export default configureStore({
    reducer: {
        [doggoApi.reducerPath]: doggoApi.reducer,
    }
})