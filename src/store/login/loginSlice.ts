import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserLoginData {
    email: string;
    password: string;
}

export interface UserLoginResponse {
    id: number;
    error?: string;
}

interface UserState {
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    loggedInUserId: number | null;
}

const initialState: UserState = {
    status: "idle",
    error: null,
    loggedInUserId: null
}

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (userData: UserLoginData, thunkAPI) => {
        try {
            const response = await axios.post<UserLoginResponse>('http://localhost:3000/users', userData);
            return response.data.id;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.loggedInUserId = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload ? action.payload.toString() : "Unknown error";
            });
    },
});

export default loginSlice.reducer;
