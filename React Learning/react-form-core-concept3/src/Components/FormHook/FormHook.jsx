import React from 'react';
import UseFormHook from '../../Hooks/UseFormHook';

const FormHook = () => {
    const [name , onChangeName] = UseFormHook('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('my name is ', name);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={onChangeName} placeholder='name' name="name"  />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormHook;