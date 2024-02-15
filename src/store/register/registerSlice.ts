import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface UserRegistrationData {
    name: string;
    cpf: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface UserRegistrationResponse {
    id: number;
    error?: string;
  }

interface UserState {
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    registeredUserId: number | null;
}

const initialState: UserState = {
    status: "idle",
    error: null,
    registeredUserId: null
}

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (userData: UserRegistrationData, thunkAPI) => {
        try {
            const response = await axios.post<UserRegistrationResponse>('http://localhost:3001/users', userData);
            return response.data.id;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.registeredUserId = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload ? action.payload.toString() : "Unknown error";
            });
    },
});

export default registerSlice.reducer;
