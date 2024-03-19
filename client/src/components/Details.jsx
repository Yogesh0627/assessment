/* eslint-disable react/prop-types */

import InputComponent from "./InputComponent";

// eslint-disable-next-line react/prop-types
const Details = ({ Heading, onClickFunction, client, handleChange }) => {
  const { name, lastName, email, mobileNumber, project } = client;
  return (
    <div>
      <div>
        <h1>{Heading}</h1>
        <form action="#">
          <InputComponent
            inputPlaceHolder={"Enter your First Name"}
            onChange={handleChange}
            // inputValue={name}
            defaultValue={name}
            inputName="name"
            labelName={"Name"}
            inputType={"text"}
          />
          <InputComponent
            inputPlaceHolder={"Enter your Last Name"}
            onChange={handleChange}
            defaultValue={lastName}
            // inputValue={lastName}
            inputName="lastName"
            labelName={"Last Name"}
            inputType={"text"}
          />
          <InputComponent
            inputPlaceHolder={"Enter your Email"}
            onChange={handleChange}
            // inputValue={email}
            defaultValue={email}
            inputName="email"
            labelName={"Email"}
            inputType={"email"}
          />
          <InputComponent
            inputPlaceHolder={"Enter your Mobile Number"}
            onChange={handleChange}
            defaultValue={mobileNumber}
            // inputValue={mobileNumber}
            inputName="mobileNumber"
            labelName={"Mobile Number"}
            inputType={"text"}
          />
          <InputComponent
            inputPlaceHolder={"Enter your Project"}
            onChange={handleChange}
            defaultValue={{project}}
            // inputValue={project}
            inputName="project"
            labelName={"Project"}
            inputType={"text"}
          />
          <button type="submit" onClick={onClickFunction}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
