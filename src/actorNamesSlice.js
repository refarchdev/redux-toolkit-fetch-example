import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchActorNames = createAsyncThunk(
  "actorNames/fetchActorNames",
  async () => {
    const response = await axios.get("https://swapi.dev/api/people");
    return response.data.results.map((actor) => actor.name);
  }
);

const actorNamesSlice = createSlice({
  name: "actorNames",
  initialState: {
    names: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchActorNames.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchActorNames.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.names = action.payload;
      state.error = null;
    },
    [fetchActorNames.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  }
});

export const {} = actorNamesSlice.actions;
export default actorNamesSlice.reducer;
export { fetchActorNames };
