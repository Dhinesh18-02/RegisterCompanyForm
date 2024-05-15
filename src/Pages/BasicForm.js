import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import { addSteps, joinForms } from '../Store/Slices/companySlice';
import { useDispatch ,useSelector} from 'react-redux';

const initialValues = {
    companyName: '',
    headOfficeAddress: '',
    country: '',
    postalCode: '',
    city: '',
    countryCode: '',
    contactNumber: '',
    websiteURL: '',
    keyContactName: '',
    keyContactDesignation: '',
    keyContactCountryCode: '',
    keyContactNumber: '',
    keyContactEmail: '',
};

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    headOfficeAddress: Yup.string().required('Head Office Address is required'),
    country: Yup.string().required('Country is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    city: Yup.string().required('City is required'),
    countryCode: Yup.string().required('Country Code is required'),
    contactNumber: Yup.string().required('Contact Number is required'),
    websiteURL: Yup.string().url('Invalid URL'),
    keyContactName: Yup.string().required('Name is required'),
    keyContactDesignation: Yup.string().required('Designation is required'),
    keyContactCountryCode: Yup.string().required('Country Code is required'),
    keyContactNumber: Yup.string().required('Contact Number is required'),
    keyContactEmail: Yup.string().email('Invalid email').required('Email is required'),
});

const FormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    maxWidth: 600,
    margin: 'auto',
}));

const BasicForm = () => {
    const dispatch = useDispatch();
    const valuesInitial = useSelector((state)=> state.company.joinForms)
    const handleSubmit = (values) => {
        dispatch(addSteps());
        dispatch(joinForms(values));
        console.log('Form Values:', values);
    };

    return (
        <Formik
            initialValues={valuesInitial || initialValues}
            validationSchema={validationSchema}
            onSubmit={(values)=>handleSubmit(values)}
        >
            {({ errors, touched, values }) => (
                <Form>
                    <Box display="flex" gap={50}>
                    <FormContainer>
                        <Typography variant="h6">Basic Company Information</Typography>
                        <Field
                            name="companyName"
                            as={TextField}
                            label="Company Name"
                            error={touched.companyName && !!errors.companyName}
                            helperText={touched.companyName && errors.companyName}
                            fullWidth
                        />
                        <Field
                            name="headOfficeAddress"
                            as={TextField}
                            label="Head Office Address"
                            error={touched.headOfficeAddress && !!errors.headOfficeAddress}
                            helperText={touched.headOfficeAddress && errors.headOfficeAddress}
                            fullWidth
                        />
                        <Field
                            name="country"
                            as={TextField}
                            label="Country"
                            select
                            error={touched.country && !!errors.country}
                            helperText={touched.country && errors.country}
                            fullWidth
                        >
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="Canada">Canada</MenuItem>
                            <MenuItem value="UK">UK</MenuItem>
                        </Field>
                        <Box display="flex" gap={2}>
                            <Field
                                name="postalCode"
                                as={TextField}
                                label="Postal Code"
                                error={touched.postalCode && !!errors.postalCode}
                                helperText={touched.postalCode && errors.postalCode}
                                fullWidth
                            />
                            <Field
                                name="city"
                                as={TextField}
                                label="City"
                                error={touched.city && !!errors.city}
                                helperText={touched.city && errors.city}
                                fullWidth
                            />
                        </Box>
                        <Box display="flex" gap={2}>
                            <Field
                                name="countryCode"
                                as={TextField}
                                label="Country Code"
                                error={touched.countryCode && !!errors.countryCode}
                                helperText={touched.countryCode && errors.countryCode}
                                fullWidth
                            />
                            <Field
                                name="contactNumber"
                                as={TextField}
                                label="Contact Number"
                                error={touched.contactNumber && !!errors.contactNumber}
                                helperText={touched.contactNumber && errors.contactNumber}
                                fullWidth
                            />
                        </Box>
                        <Field
                            name="websiteURL"
                            as={TextField}
                            label="Website URL"
                            error={touched.websiteURL && !!errors.websiteURL}
                            helperText={touched.websiteURL && errors.websiteURL}
                            fullWidth
                        />

                        <Typography variant="h6" marginTop={4}>
                            Key Contact Person
            </Typography>
                        <Field
                            name="keyContactName"
                            as={TextField}
                            label="Name"
                            error={touched.keyContactName && !!errors.keyContactName}
                            helperText={touched.keyContactName && errors.keyContactName}
                            fullWidth
                        />
                        <Field
                            name="keyContactDesignation"
                            as={TextField}
                            label="Designation"
                            error={touched.keyContactDesignation && !!errors.keyContactDesignation}
                            helperText={touched.keyContactDesignation && errors.keyContactDesignation}
                            fullWidth
                        />
                        <Box display="flex" gap={2}>
                            <Field
                                name="keyContactCountryCode"
                                as={TextField}
                                label="Country Code"
                                error={touched.keyContactCountryCode && !!errors.keyContactCountryCode}
                                helperText={touched.keyContactCountryCode && errors.keyContactCountryCode}
                                fullWidth
                            />
                            <Field
                                name="keyContactNumber"
                                as={TextField}
                                label="Contact Number"
                                error={touched.keyContactNumber && !!errors.keyContactNumber}
                                helperText={touched.keyContactNumber && errors.keyContactNumber}
                                fullWidth
                            />
                        </Box>
                        <Field
                            name="keyContactEmail"
                            as={TextField}
                            label="Email"
                            error={touched.keyContactEmail && !!errors.keyContactEmail}
                            helperText={touched.keyContactEmail && errors.keyContactEmail}
                            fullWidth
                        />
                        <Button type='submit' variant="contained" color="primary">
                            CONTINUE
            </Button>
                        </FormContainer>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default BasicForm;