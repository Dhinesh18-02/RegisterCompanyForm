import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, Button, MenuItem, Box, Typography, IconButton } from '@mui/material';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import { useDispatch,useSelector } from 'react-redux';
import { removeSteps, addSteps, joinForms } from '../Store/Slices/companySlice';
import DeleteIcon from '@mui/icons-material/Delete';

const initialValues = {
    companyProfile: '',
    companyWebsite: '',
    vision: '',
    teamDetails: [{ managementName: '', managementDesignation: "", managmentProfileSummary: "", managementWebsite: "" }]
};

const validationSchema = Yup.object().shape({
    companyProfile: Yup.string().required('Company Name is required'),
    companyWebsite: Yup.string().url('Invalid URL'),
    vision: Yup.string(),
    teamDetails: Yup.array().of(
        Yup.object().shape({
            managementName: Yup.string().required('Name is required'),
            managementDesignation: Yup.string().required('Designation is required'),
            managmentProfileSummary: Yup.string().required('Profile Summary is required'),
            managementWebsite: Yup.string().required('required'),
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

const CompanyForm = () => {
    const dispatch = useDispatch();
    const valuesInitial = useSelector((state) => state.company.joinForms)
    const handleSubmit = (values) => {
        console.log('Company Form Values:', values);
        dispatch(addSteps())
        dispatch(joinForms(values));
        // Submit form values to the server or state management
    };
    const handleBack = () => {
        dispatch(removeSteps())
    }

    return (
        <Formik
            initialValues={ initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <FormContainer>
                        <Typography variant="h6">Tell us more about yourself</Typography>
                        <Field
                            name="companyProfile"
                            as={TextField}
                            label="Breif Company profile"
                            multiline
                            rows={4}
                            error={touched.companyProfile && !!errors.companyProfile}
                            helperText={touched.companyProfile && errors.companyProfile}
                            fullWidth
                        />

                        <Field
                            name="companyWebsite"
                            as={TextField}
                            label="Website URL"
                            error={touched.companyWebsite && !!errors.companyWebsite}
                            helperText={touched.companyWebsite && errors.companyWebsite}
                            fullWidth
                        />
                        <Field
                            name="vision"
                            as={TextField}
                            label="Vision / Mission"
                            multiline
                            rows={4}
                            error={touched.vision && !!errors.vision}
                            helperText={touched.vision && errors.vision}
                            fullWidth
                        />

                        <Typography variant="h6" marginTop={4}>
                            Management Team Details
                       </Typography>
                        <FieldArray name="teamDetails">
                            {({ push, remove }) => (
                                <React.Fragment>
                                    {values.teamDetails.map((detail, index) => (
                                        <Box key={index} display='flex colomun' gap={10}>
                                            <Box display="flex" justifyContent="end" >
                                                <IconButton onClick={() => remove(index)}>
                                                    <DeleteIcon color='primary' />
                                                </IconButton>
                                            </Box>
                                            <FormContainer>
                                                <Field
                                                    name={`teamDetails[${index}].managementName`}
                                                    as={TextField}
                                                    label="Name"
                                                    error={touched.teamDetails?.[index]?.managementName && !!errors.teamDetails?.[index]?.managementName}
                                                    helperText={touched.teamDetails?.[index]?.managementName && errors.teamDetails?.[index]?.managementName}
                                                    fullWidth
                                                />
                                                <Field
                                                    name={`teamDetails[${index}].managementDesignation`}
                                                    as={TextField}
                                                    label="Designation"
                                                    error={touched.teamDetails?.[index]?.managementDesignation && !!errors.teamDetails?.[index]?.managementDesignation}
                                                    helperText={touched.teamDetails?.[index]?.managementDesignation && errors.teamDetails?.[index]?.managementDesignation}
                                                    fullWidth
                                                />
                                                <Field
                                                    name={`teamDetails[${index}].managmentProfileSummary`}
                                                    as={TextField}
                                                    label="Profile Summary"
                                                    multiline
                                                    rows={4}
                                                    error={touched.teamDetails?.[index]?.managmentProfileSummary && !!errors.teamDetails?.[index]?.managmentProfileSummary}
                                                    helperText={touched.teamDetails?.[index]?.managmentProfileSummary && errors.teamDetails?.[index]?.managmentProfileSummary}
                                                    fullWidth
                                                />
                                                <Field
                                                    name={`teamDetails[${index}].managementWebsite`}
                                                    as={TextField}
                                                    label="LinkedIn Url"
                                                    error={touched.teamDetails?.[index]?.managementWebsite && !!errors.teamDetails?.[index]?.managementWebsite}
                                                    helperText={touched.teamDetails?.[index]?.managementWebsite && errors.teamDetails?.[index]?.managementWebsite}
                                                    fullWidth
                                                />
                                            </FormContainer>
                                        </Box>
                                    )
                                    )}
                                    <Button variant="outlined" color="primary" onClick={() => push({ managementName: '', managementDesignation: "", managmentProfileSummary: "", managementWebsite: "" })}> + Add New Member</Button>
                                </React.Fragment>
                            )
                            }
                        </FieldArray>
                        <Box display="flex" gap={10}>
                            <Button onClick={() => handleBack()} variant="outlined" >
                             BACK
                       </Button>
                            <Button style={{ width: "650px" }} type="submit" variant="contained" color="primary">
                                CONTINUE
                       </Button>
                        </Box>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
};

export default CompanyForm;