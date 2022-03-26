import React, { ButtonHTMLAttributes } from 'react'

export const Button = (props: ButtonProps) => {
  const { children, className, buttonType, ...rest } = props

  return (
    <button className={`styled-button ${buttonType}`} {...rest}>
      {children}
    </button>
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType: 'form-submit' | 'primary'
}
