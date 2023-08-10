import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Track } from "./Track";

export interface TrackState {
  track: Track | null;
}

const initialState: TrackState = {
  track: null,
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    deleteTrack: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.track = null;
    },
    addTrack: (state, action: PayloadAction<Track>) => {
      state.track = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteTrack, addTrack } = trackSlice.actions;

export default trackSlice.reducer;
