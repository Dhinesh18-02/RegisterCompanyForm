import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCompany, clearSteps, updateCompany } from '../Store/Slices/companySlice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Typography } from '@mui/material';

const CompanyTable = () => {
    const companies = useSelector((state) => state.company.companies);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCompany(id));
    };
    const handleEdit = (index,value) => {
        let editedValue = { index, value };
        dispatch(clearSteps())
        dispatch(updateCompany(editedValue));
    }
    const edited = useSelector(state => state.company.editedData);
    console.log("EditedForm", edited);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Company Address</TableCell>
                        <TableCell>Contact Name</TableCell>
                        <TableCell>Contact Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                {companies.length > 0 ? <React.Fragment>
                    <TableBody>
                        {companies.map((company, index) => (
                            <TableRow key={index}>
                                <TableCell>{company.companyName}</TableCell>
                                <TableCell>{company.headOfficeAddress}</TableCell>
                                <TableCell>{company.keyContactName}</TableCell>
                                <TableCell>{company.keyContactEmail}</TableCell>
                                <TableCell>
                                    <Button onClick={()=>handleEdit(index,company)}>Edit</Button>
                                    <Button onClick={() => handleDelete(index)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </React.Fragment> :
                    <div style={{ height: "50px", position: "relative", left: "520px", top: "15px", color: "#bdbdbd" }}>No Data</div>
                }
            </Table>
        </TableContainer>
    );
};

export default CompanyTable;