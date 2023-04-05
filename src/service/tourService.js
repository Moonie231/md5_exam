import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getTours = createAsyncThunk(
    'tour/getTours',
    async () =>{
        const res = await customAxios.get('/tuors')
        return res.data
    }
)

export const getTourById = createAsyncThunk(
    'tour/getTourById',
    async (data) => {
        const res = await customAxios.get('/tuors/' + data)
        return res.data
    }
)

export const addTour = createAsyncThunk(
    'tours/addTour',
    async (data) => {
        const res = await customAxios.post('/tuors', data)
        return res.data
    }
)

export const deleteTour = createAsyncThunk("tours/deleteTour", async (data) => {
    const res = await customAxios.delete("/tuors/" + data)
    return res.data;
});

export const editTour = createAsyncThunk(
    "tours/editTour",
    async (data) => {
        const res = await customAxios.put("tuors/" + data[1], data[0],);
        return res.data;
    });