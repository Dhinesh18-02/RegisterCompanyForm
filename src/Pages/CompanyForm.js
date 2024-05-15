import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, Button, Box, Typography, IconButton, InputLabel } from '@mui/material';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { removeSteps, addSteps, joinForms } from '../Store/Slices/companySlice';
import DeleteIcon from '@mui/icons-material/Delete';

const initialValues = {
    companyProfile: '',
    companyWebsite: '',
    vision: '',
    teamDetails: [{ managementName: '', managementDesignation: "", managmentProfileSummary: "", managementWebsite: "" }]
};
const maxWords = (value, max) => {
    return value ? value.split(' ').length <= max : true;
};


const validationSchema = Yup.object().shape({
    companyProfile: Yup.string().required('Description is required').test('maxWords', 'Must be 200 words or less', (value) => maxWords(value, 200)),
    companyWebsite: Yup.string(),
    vision: Yup.string().test('maxWords', 'Must be 200 words or less', (value) => maxWords(value, 200)),
    teamDetails: Yup.array().of(
        Yup.object().shape({
            managementName: Yup.string(),
            managementDesignation: Yup.string(),
            managmentProfileSummary: Yup.string().test('maxWords', 'Must be 150 words or less', (value) => maxWords(value, 150)),
            managementWebsite: Yup.string(),
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
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <FormContainer>
                        <Typography variant="h6">Tell us more about yourself</Typography>
                        <InputLabel required>Breif Company profile</InputLabel>
                        <Field
                            name="companyProfile"
                            as={TextField}
                            label="Description(Max 200 Words)"
                            multiline
                            rows={4}
                            sx={{ resize: 'vertical' }}
                            error={touched.companyProfile && !!errors.companyProfile}
                            helperText={touched.companyProfile && errors.companyProfile}
                            fullWidth
                        />
                        <InputLabel>Facebook/LinkedIn page URL,Etc.</InputLabel>
                        <Field
                            name="companyWebsite"
                            as={TextField}
                            label="https://"
                            error={touched.companyWebsite && !!errors.companyWebsite}
                            helperText={touched.companyWebsite && errors.companyWebsite}
                            fullWidth
                        />
                        <InputLabel >Vision / Mission</InputLabel>
                        <Field
                            name="vision"
                            as={TextField}
                            label="Description(Max 200 Words)"
                            multiline
                            rows={4}
                            sx={{ resize: 'both' }}
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
                                                <InputLabel >Name</InputLabel>
                                                <Field
                                                    name={`teamDetails[${index}].managementName`}
                                                    as={TextField}
                                                    label="Name"
                                                    error={touched.teamDetails?.[index]?.managementName && !!errors.teamDetails?.[index]?.managementName}
                                                    helperText={touched.teamDetails?.[index]?.managementName && errors.teamDetails?.[index]?.managementName}
                                                    fullWidth
                                                />
                                                <InputLabel >Designation</InputLabel>
                                                <Field
                                                    name={`teamDetails[${index}].managementDesignation`}
                                                    as={TextField}
                                                    label="Designation"
                                                    error={touched.teamDetails?.[index]?.managementDesignation && !!errors.teamDetails?.[index]?.managementDesignation}
                                                    helperText={touched.teamDetails?.[index]?.managementDesignation && errors.teamDetails?.[index]?.managementDesignation}
                                                    fullWidth
                                                />
                                                <InputLabel >Profile Summary</InputLabel>
                                                <Field
                                                    name={`teamDetails[${index}].managmentProfileSummary`}
                                                    as={TextField}
                                                    label="Description(Max 150 Words)"
                                                    multiline
                                                    rows={4}
                                                    error={touched.teamDetails?.[index]?.managmentProfileSummary && !!errors.teamDetails?.[index]?.managmentProfileSummary}
                                                    helperText={touched.teamDetails?.[index]?.managmentProfileSummary && errors.teamDetails?.[index]?.managmentProfileSummary}
                                                    fullWidth
                                                />
                                                <InputLabel>LinkedIn Profile</InputLabel>
                                                <Field
                                                    name={`teamDetails[${index}].managementWebsite`}
                                                    as={TextField}
                                                    label="Profile Link"
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