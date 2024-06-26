import { configureStore } from '@reduxjs/toolkit';
import  companyReducer  from './Slices/companySlice';

export const store = configureStore({
    reducer: {
        company: companyReducer,
    },
});