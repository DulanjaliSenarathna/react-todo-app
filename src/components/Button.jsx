import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
    primary:'primary',
    secondary:'secondary'
}

function Button({children, type , varient, ...rest}) {
  return (
    
    <button className={getClasses([styles.button, 
    styles[`button--${buttonTypes[varient]}`]])} 
    type={type === 'submit' ? 'submit' : 'button'}
    {...rest}>
        {children}</button>
  )
}

export default Button