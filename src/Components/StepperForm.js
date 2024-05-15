import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import BasicForm from '../Pages/BasicForm';
import ProductForm from '../Pages/ProductForm';
import CompanyForm from '../Pages/CompanyForm';


const StepContent = ({ step }) => {
    switch (step) {
        case 0:
            return (
                <React.Fragment>
                    <BasicForm />
                </React.Fragment>
            );
        case 1:
            return (
                <React.Fragment>
                    <CompanyForm />
                </React.Fragment>
            );
        case 2:
            return (
                <React.Fragment>
                    <ProductForm />
                </React.Fragment>
            )
        default:
            return null;
    }
};

const StepperForm = () => {
    const activeSteps = useSelector(state => state.company.steps);
    return (
        <Box my={2}>
            <StepContent step={activeSteps} />
        </Box>
    );
};

export default StepperForm;