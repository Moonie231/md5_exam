import {createSlice} from "@reduxjs/toolkit";
import {addTour, deleteTour, editTour, getTourById, getTours} from "../../service/tourService";

const initialState = {
    tours: [],
    tour: {}
}

const userSlice = createSlice({
    name: 'tour',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTours.fulfilled, (state, action) => {
            state.tours = action.payload;
        })
        builder.addCase(getTourById.fulfilled, (state, action) => {
            state.tour = action.payload;
        })
        builder.addCase(addTour.fulfilled, (state, action) => {
            state.tours.tours.push(action.payload)
        })
        builder.addCase(editTour.fulfilled, (state, action) => {
            state.tours.tours.splice(action.payload.id, 1, action.payload);
            state.tour = {};
        });
        builder.addCase(deleteTour.fulfilled, (state, action) => {
            state.tours.tours.splice(action.payload, 1);
        });
    }
    }
)

export default userSlice.reducer