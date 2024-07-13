import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/hotels';


export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});

export const addHotel = createAsyncThunk('hotels/addHotel', async (hotel) => {
    const response = await axios.post(apiUrl, hotel);
    return response.data;
});

export const updateHotel = createAsyncThunk('hotels/updateHotel', async (hotel) => {
    const response = await axios.put(`${apiUrl}/${hotel.id}`, hotel);
    return response.data;
});

export const deleteHotel = createAsyncThunk('hotels/deleteHotel', async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
});


const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        hotels: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotels.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.loading = false;
                state.hotels = action.payload;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addHotel.fulfilled, (state, action) => {
                state.hotels.push(action.payload);
            })
            .addCase(updateHotel.fulfilled, (state, action) => {
                const index = state.hotels.findIndex(hotel => hotel.id === action.payload.id);
                state.hotels[index] = action.payload;
            })
            .addCase(deleteHotel.fulfilled, (state, action) => {
                console.log('Deleted hotel id:', action.payload);
                state.hotels = state.hotels.filter(hotel => hotel.id !== action.payload);
              })
    }
});

export default hotelSlice.reducer;
