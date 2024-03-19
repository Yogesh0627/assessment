/* eslint-disable react/prop-types */

const UserComponents = ({ fname, lastName, email, mobileNumber, project }) => {
  return (
    <div className="flex items-center justify-between mt-2">
      <h2>{fname}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
      <h2>{mobileNumber}</h2>
      <h2>{project}</h2>
    </div>
  );
};

export default UserComponents;
