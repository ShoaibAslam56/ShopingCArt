import { createSlice } from '@reduxjs/toolkit';
import { sub } from 'date-fns'


const initialState = [
    { id: 1,
      title: '',
       content: '',
       date:sub(new Date(), {minutes: 10}).toISOString(), 
       image: null }
];

const FeatureSlice = createSlice({
    name: 'post', 
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addPost } = FeatureSlice.actions;
export default FeatureSlice.reducer;
