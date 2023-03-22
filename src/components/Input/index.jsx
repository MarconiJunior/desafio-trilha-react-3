import React from 'react'

import {InputContainer, InputText, ErrorText} from './styles';
import { Controller } from 'react-hook-form';

const Input = ({ name, control, errorMessage, ...rest}) => {


  return (
    <>
    <InputContainer>
        <Controller 
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field}) => <InputText {...field} {...rest}/>}
        />
       
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  )
}

export { Input }; 