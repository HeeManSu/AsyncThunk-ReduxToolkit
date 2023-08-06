import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

//create Action 
//This create async thunk returns a promise and promise gives us three thing. 
//Pending, rejected, fulfilled.
//We are reading and fetching the data from the api using createAsyncThunk.
//using post method. 
export const createUser = createAsyncThunk("createUser", async (data) => {
    const response = await fetch("https://64cf4dd9ffcda80aff51bb89.mockapi.io/CRUD",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return isRejectedWithValue(error.response)
    }
})


export const userDetails = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    //ExtraReducer is used to handle promsie.
    //It has three states. pending .. fulfilled and rejected. 
    extraReducers: (builder) => {
        return builder.addCase(createUser.pending, (state) => {
            state.loading = true;
        })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.users = action.payload
            });
    }
})

export default userDetails.reducer;