import React from 'react'

export const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  const hasError = touched[field.name] && errors[field.name]

  return (
    <div className={`form-control ${hasError ? 'has-error' : ''}`}>
      <label htmlFor={field.name}>{props.label}</label>
      <input {...field} {...props} />

      {hasError && <div className="error">{errors[field.name]}</div>}
    </div>
  )
}
