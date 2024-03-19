import { useContext, useState } from "react";

import { userContext } from "../Context/UserContext";
import axios from "axios";
import InputComponent from "../components/InputComponent";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const [updateDetails, setUpdateDetails] = useState(user);

  const updateClient = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/updateUser/${updateDetails._id}`,
        updateDetails
      );
      if(response.data.status){
        alert("Updated Sucessfully");
        navigate(-1);
      }
      else{
        alert("Not Updated")
      }

    } catch (error) {
      console.log(`an error occured during update`);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUpdateDetails({ ...updateDetails, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email, mobileNumber, project } = updateDetails;

  return (
    <>
      <div className="mt-10">
        <h1 className="text-center text-3xl font-semibold">Update Client</h1>
        <form action="#" className="w-1/4  m-auto">
          <InputComponent
            inputPlaceHolder={"Enter your First Name"}
            onChange={handleChange}
            defaultValue={firstName}
            inputName="firstName"
            labelName={"Name"}
            inputType={"text"}
            type={"update"}
          />
          <br />
          <InputComponent
            inputPlaceHolder={"Enter your Last Name"}
            onChange={handleChange}
            defaultValue={lastName}
            inputName="lastName"
            labelName={"Last Name"}
            inputType={"text"}
          />
          <br />
          <InputComponent
            inputPlaceHolder={"Enter your Email"}
            onChange={handleChange}
            defaultValue={email}
            inputName="email"
            labelName={"Email"}
            inputType={"email"}
          />
          <br />
          <InputComponent
            inputPlaceHolder={"Enter your Mobile Number"}
            onChange={handleChange}
            defaultValue={mobileNumber}
            inputName="mobileNumber"
            labelName={"Mobile Number"}
            inputType={"text"}
          />
          <br />
          <InputComponent
            inputPlaceHolder={"Enter your Project"}
            onChange={handleChange}
            defaultValue={project}
            inputName="project"
            labelName={"Project"}
            inputType={"text"}
          />
          <br />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-sm px-2 py-1"
            onClick={updateClient}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
