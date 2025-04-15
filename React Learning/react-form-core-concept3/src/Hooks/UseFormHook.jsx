import React, { useState } from 'react';

const UseFormHook = (defaultParameter) => {
    const [formData , setFormData ] = useState(defaultParameter);
    const handleOnChange = e=>{
        setFormData(e.target.value);
    }
    return [formData , handleOnChange]
};

export default UseFormHook;