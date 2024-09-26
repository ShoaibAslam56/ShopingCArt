import { configureStore } from "@reduxjs/toolkit";

import FeatureSlice from './Features/FeatureSlice';

const store = configureStore({
    reducer:{
        post: FeatureSlice
    }
});

export default store;