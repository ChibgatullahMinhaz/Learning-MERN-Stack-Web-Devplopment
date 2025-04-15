import React from "react";

const FormAction = () => {
  const handleAction = (formAction) => {
    const name = formAction.get("name");
    console.log(name);
  };
  return (
    <div>
      <form action={handleAction}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;
