import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import GroupIcon from '@mui/icons-material/Group';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../components/controls/Controls"
import { Search } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
    pageContend: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
    searchInput: {
        width: '75%'
    }

}));

const headCells = [  //Id is used identify column uniquely
    { id: 'fullName', label: 'Employee Name' },
    { id: 'email', label: 'Employee Email' },
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'department', label: 'Department', disableSorting: true },
]

export default function Employees() {
    const classes = useStyles();

    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting,
    } = useTable(records, headCells, filterFn);
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }
    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Page description"
                icon={<GroupIcon fontSize='large' />}
            />
            <Paper className={classes.pageContend}>  {/* Paper is simple div */}
                {/* <EmployeeFrom /> */}
                <Toolbar>
                    <Controls.Input
                        label='Search Employees'
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position='start'>
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}
