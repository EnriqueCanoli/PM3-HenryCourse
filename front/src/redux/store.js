import {configureStore} from "@reduxjs/toolkit";
import carWashSlice from "./slices";
/**
 * Akmacena toda la información de nuestra app
 */
const store = configureStore({
    reducer: carWashSlice,

});

export default store;