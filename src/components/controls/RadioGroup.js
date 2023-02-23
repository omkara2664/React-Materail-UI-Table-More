import React from 'react'
import { FormControl, FormControlLabel, Radio, RadioGroup as MuiRadioGroup, FormLabel } from '@material-ui/core';

export default function RadioGroup(props) {
    const { name, label, value, onChange, items } = props;
    return (
        <FormControl>{/* for group of radio button we use this wrapper  */}
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}
            >
                {
                    items.map(
                        (item) => {   // keep eye on curly or fat bracket  haha
                            return <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />  // control={<Radio/>} it means we add radio button
                        }
                    )
                }

            </MuiRadioGroup>
        </FormControl>
    )
}
