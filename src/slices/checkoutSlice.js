import { createSlice } from '@reduxjs/toolkit';
import initialData from '../data/initialData';


const initialState = {
  initialData,
  checkedItems: [],
  checkoutTime: { hours: 0, minutes: 5, seconds: 0 }
};


export const checkoutSlice = createSlice({

  name: 'checkout',

  initialState,

  reducers: {

    handleSeatSelection: (state, action) => {

      let index = state.initialData.findIndex(item => item.id === action.payload.id);

      if (action.payload.status === '') state.initialData[index].status = 'selected';

      if (action.payload.status === 'selected') state.initialData[index].status = '';

    },

    checkoutTickets: (state) => {

      state.checkedItems = (state.initialData).filter((item) => {
        return item.status === 'selected';
      });

    },

    clearCheckedItems: (state) => {

      (state.initialData).map((item) => {
        if (item.status === 'selected') item.status = '';
        return item;
      });

      state.checkedItems.splice(0, state.checkedItems.length);

    },

    timer: (state) => {

      if (state.checkoutTime.hours === 0 &&
        state.checkoutTime.minutes === 0 &&
        state.checkoutTime.seconds === 0) return;

      else if (state.checkoutTime.minutes === 0 && state.checkoutTime.seconds === 0) {
        state.checkoutTime.hours -= 1;
        state.checkoutTime.minutes = 59;
        state.checkoutTime.seconds = 59;
      }

      else if (state.checkoutTime.seconds === 0) {
        state.checkoutTime.minutes -= 1;
        state.checkoutTime.seconds = 59;
      }

      else {
        state.checkoutTime.seconds -= 1;
      }

    }

  }

});


export const { handleSeatSelection, checkoutTickets, clearCheckedItems, timer } = checkoutSlice.actions;

export default checkoutSlice.reducer;