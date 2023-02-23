import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function Select(props) {
    const { name, label, value, error = null, onChange, options } = props;
    return (
        <FormControl variant='outlined' {...(error && { error: true })}>  {/* I deed here mistake in outline spelling it is outlined and due to page not showing. */}
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}
            >
                <MenuItem value=''>None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
