import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, Button, MenuItem, Box, Typography, IconButton, InputLabel } from '@mui/material';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { removeSteps, clearForms, addCompany, clearSteps } from '../Store/Slices/companySlice';
import DeleteIcon from '@mui/icons-material/Delete';

const initialValues = {
    productDetails: [{ productName: '', productPortfolioDescription: "", productWebsite: "" }],
};

const validationSchema = Yup.object().shape({
    productDetails: Yup.array().of(
        Yup.object().shape({
            productName: Yup.string().required('Product Name is required'),
            productPortfolioDescription: Yup.string().required('Description is required'),
            productWebsite: Yup.string(),
        })
    ),
});

const FormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: 600,
    margin: 'auto',
}));

const ProductForm = () => {
    const dispatch = useDispatch();
    const valuesInitial = useSelector((state) => state.company.joinForms)
    const handleSubmit = (values) => {
        console.log('Product Form Values:', values);
        const finalObj = { ...valuesInitial, ...values }
        console.log("finalObj", finalObj);
        dispatch(addCompany(finalObj));
        dispatch(clearForms());
        dispatch(clearSteps());

        // Submit form values to the server or state management
    };
    const handleBack = () => {
        dispatch(removeSteps())
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ errors, touched, values }) => (
                <Form>
                    <FormContainer>
                        <Typography variant="h6">Show Your Product Portfolio</Typography>
                        <FieldArray name="productDetails">
                            {({ push, remove }) => (
                                <React.Fragment>
                                    {(values.productDetails).map((_, index) => (
                                        <Box key={index} display='flex columns' gap={10}>
                                            <Box display="flex" justifyContent="end" >
                                                <IconButton onClick={() => remove(index)}>
                                                    <DeleteIcon color='primary' />
                                                </IconButton>
                                            </Box>
                                            <FormContainer>
                                                <InputLabel required>Product Name</InputLabel>
                                                <Field
                                                    name={`productDetails[${index}].productName`}
                                                    as={TextField}
                                                    label="Product Name"
                                                    error={touched.productDetails?.[index]?.productName && !!errors.productDetails?.[index]?.productName}
                                                    helperText={touched.productDetails?.[index]?.productName && errors.productDetails?.[index]?.productName}
                                                    fullWidth
                                                />
                                                <InputLabel required>Product Portfolio description</InputLabel>
                                                <Field
                                                    name={`productDetails[${index}].productPortfolioDescription`}
                                                    as={TextField}
                                                    multiline
                                                    rows={4}
                                                    label="Brief Portfolio Description"
                                                    error={touched.productDetails?.[index]?.productPortfolioDescription && !!errors.productDetails?.[index]?.productPortfolioDescription}
                                                    helperText={touched.productDetails?.[index]?.productPortfolioDescription && errors.productDetails?.[index]?.productPortfolioDescription}
                                                    fullWidth
                                                />
                                                <InputLabel> Facebook/Linkedin Page URL, Etc.</InputLabel>
                                                <Field
                                                    name={`productDetails[${index}].productWebsite`}
                                                    as={TextField}
                                                    label="https://"
                                                    error={touched.productDetails?.[index]?.productWebsite && !!errors.productDetails?.[index]?.productWebsite}
                                                    helperText={touched.productDetails?.[index]?.productWebsite && errors.productDetails?.[index]?.productWebsite}
                                                    fullWidth
                                                />
                                            </FormContainer>
                                        </Box>
                                    ))}
                                    <Button variant="outlined" color="primary" onClick={() => push({ productName: '', productPortfolioDescription: "", productWebsite: "" })}> + ADD NEW PRODUCT </Button>
                                </React.Fragment>
                            )}
                        </FieldArray>


                        <Box display="flex" gap={10}>
                            <Button variant="outlined" color="primary" onClick={() => handleBack()}  >
                                back
                       </Button>
                            <Button style={{ width: "650px" }} type="submit" variant="contained" color="primary">
                                Finish
                       </Button>
                        </Box>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
};

export default ProductForm;