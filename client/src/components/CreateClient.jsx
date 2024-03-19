import { useState } from "react";
import InputComponent from "./InputComponent";
import axios from "axios";

const CreateClient = () => {
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    project: "",
  };
  const [client, setClient] = useState(intialState);
  const { firstName, lastName, email, mobileNumber, project } = client;

  const handleChange = (e) => {
    e.preventDefault();
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const createClient = async () => {
    try {
      const result = await axios.post(
        `http://localhost:3000/client/addClient`,
        client
      );
      console.log(result);
      setClient(intialState);
    } catch (error) {
      alert("error occured", error.message);
    }
  };
  return (
    <div className="shadow-lg w-full p-2">
      <h1 className="text-3xl font-semibold">Create Client</h1>
      <form action="#" className="mt-5">
        <InputComponent
          inputPlaceHolder={"Enter your First Name"}
          onChange={handleChange}
          inputValue={firstName}
          inputName="firstName"
          labelName={"Name"}
          inputType={"text"}
        />
        <br />
        <InputComponent
          inputPlaceHolder={"Enter your Last Name"}
          onChange={handleChange}
          inputValue={lastName}
          inputName="lastName"
          labelName={"Last Name"}
          inputType={"text"}
        />
        <br />
        <InputComponent
          inputPlaceHolder={"Enter your Email"}
          onChange={handleChange}
          inputValue={email}
          inputName="email"
          labelName={"Email"}
          inputType={"email"}
        />
        <br />
        <InputComponent
          inputPlaceHolder={"Enter your Mobile Number"}
          onChange={handleChange}
          inputValue={mobileNumber}
          inputName="mobileNumber"
          labelName={"Mobile Number"}
          inputType={"text"}
        />
        <br />
        <InputComponent
          inputPlaceHolder={"Enter your Project"}
          onChange={handleChange}
          inputValue={project}
          inputName="project"
          labelName={"Project"}
          inputType={"text"}
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-sm px-2 py-1"
          onClick={createClient}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateClient;
