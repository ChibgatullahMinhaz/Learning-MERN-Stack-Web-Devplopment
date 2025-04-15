import React from 'react';

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log('name is ',name, 'email is' ,email);
        form.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" name="name" id="name" />
                <input type="email" name="email" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;