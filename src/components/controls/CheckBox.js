import React from 'react'
import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

export default function Check(props) {
    const { name, label, value, onChange } = props;

    const convertToDefaultPara = (name, value) => ({
        target: {
            name, value
        }
    })
    return (
        <FormControlLabel
            control={<MuiCheckbox
                name={name}
                color='primary'
                checked={value}
                onChange={e => onChange(convertToDefaultPara(name, e.target.checked))} //in checkbox no property value inside e.target so we pass here (i.e. e.target.vale not available)
            />} label={label} />
    )
}

