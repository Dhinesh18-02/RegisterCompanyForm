import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies: [],
    steps: 0,
    joinForms: {},
    clearForms: null,
    editedData: {}
};

const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        addCompany: (state, action) => {
            state.companies.push(action.payload);
        },
        updateCompany: (state, action) => {
            const { id, data } = action.payload;
            const index = state.companies.findIndex((company,index) => index === id);
            if (index === -1) {
                state.editedData = data;
            }
        },
        deleteCompany: (state, action) => {
            state.companies = state.companies.filter((company,index) => index !== action.payload);
        },
        addSteps: (state) => {
            state.steps = state.steps + 1
        },
        removeSteps: (state) => {
            state.steps = state.steps - 1
        },
        clearSteps: (state) => {
            state.steps = 0;
        },
        joinForms: (state, action) => {
            state.joinForms = { ...state.joinForms, ...action.payload }
        },
        clearForms: (state) => {
            state.joinForms = {};
        }
    },
});

export const { addCompany, updateCompany, deleteCompany, addSteps, removeSteps, joinForms,clearForms, clearSteps } = companySlice.actions;
export default companySlice.reducer;