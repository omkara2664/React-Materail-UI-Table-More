import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { UseForm } from '../../components/UseForm';
import { Form } from '../../components/UseForm';
import Controls from './../../components/controls/Controls';
import * as employeeService from "../../services/employeeService"
const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]
const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeFrom() {
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid";
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 digits are required";
        if ("departmentId" in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== + 0 ? "" : "This Field is required";

        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "");  // every checks each value is empty string or not if yes it return true or false.
    }
    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = UseForm(initialFValues, true, validate); // here we passes the props to useFrom i.e. initialFValues, true,validate function

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // window.alert("testing");
            employeeService.insertEmployee(values)
            resetForm();
        }
    }
    useEffect(() => { }, [])
    return (

        <Form onSubmit={handleOnSubmit}>  {/* here we pass every thing as children of prop to From */}
            <Grid container>
                {/* xs={6} it means grid of MUI provides the 12 columns so we want to 2 items */}
                <Grid item xs={6} >
                    <Controls.Input
                        name='fullName'
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        variant='outlined'
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        variant='outlined'
                        label='Mobile'
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        variant='outlined'
                        label='City'
                        name='city'
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6} >
                    <Controls.RadioGroup
                        name="gender"
                        value={values.gender}
                        label='Gender'
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartMentCollections()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Are you Permanent ?"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            type='submit'
                            text='Submit'
                        />
                        <Controls.Button
                            text='Reset'
                            color='default'
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>

    )
}
