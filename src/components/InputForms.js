import React from 'react'
import { ErrorMessage, useField } from 'formik';

export const InputForms = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={ field.name }>{ label }</label>
            <input 
             className={`${meta.touched && meta.error && 'is-invalid'}`} 
            {...field} {...props}
                    autoComplete="off"
            />
            <ErrorMessage component="div" name={ field.name } className="error"/>
        </div>
    )
}
