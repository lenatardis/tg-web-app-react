import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: [
        {currency: "eur", total: "27 378,00", sign:'€'}
    ]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;

export const {

} = userSlice.actions;