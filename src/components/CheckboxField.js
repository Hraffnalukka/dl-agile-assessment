import React from 'react';
import { Field } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckboxField({ name, label, indent, ...rest }) {
    return (
        <Field type="checkbox" name={name}>
            {({ field }) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            {...field}
                            id={name}
                            {...rest}
                            checked={field.value} // Set the checked state based on field.value
                            sx={{
                                ml: indent ? 6 : 0,
                                fontWeight: 'normal',
                                '&.Mui-checked': {
                                    color: '#013971',
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                    }
                    label={label}
                    style={{ // Use style to set the font weight
                        textAlign: 'left',
                        fontWeight: indent ? 'normal' : 'bold',
                    }}
                />
            )}
        </Field>
    );
}

export default CheckboxField;
