import React from "react";
import Form from "../Components/Login/Form";
const userUrl = "http://localhost:8080/user";


const Signup = () => {
  return (
    <div>
      <Form userUrl={userUrl} />  
    </div>
  );
};

export default Signup;
