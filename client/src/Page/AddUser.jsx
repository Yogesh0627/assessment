import { useContext, useEffect, useState } from "react";
import CreateClient from "../components/CreateClient";
import axios from "axios";
import UserComponents from "../components/UserComponents";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserContext";

const AddUser = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const { handleUser } = useContext(userContext);

  //   console.log(handleUser);
  const fetchAllUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/allUsers`);
      console.log(response.data.allUsers);
      if (response.data.status) {
        setClients(response.data.allUsers);
        // console.log(clients);
      } else {
        alert("Failed to get clients");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAllUser();
  }, []);

  const allClientsFirstName = clients?.map((item) => (
    <UserComponents key={item._id} fname={item.firstName} />
  ));
  const allClientsLasttName = clients?.map((item) => (
    <UserComponents key={item._id} fname={item.lastName} />
  ));
  const allClientsEmail = clients?.map((item) => (
    <UserComponents key={item._id} fname={item.email} />
  ));
  const allClientsProject = clients?.map((item) => (
    <UserComponents key={item._id} fname={item.project} />
  ));
  const allClientsMobileNumber = clients?.map((item) => (
    <UserComponents key={item._id} fname={item.mobileNumber} />
  ));

  const handleEdit = (item) => {
    handleUser(item);
    navigate(`update/${item._id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/${id}`);
      if (response.data.status) {
        alert("Deleted Successfully");

        setClients(clients.filter((item) => item._id !== id));
      } else {
        alert("Not Deleted");
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const editOrDeleteFeatures = clients?.map((item) => (
    <div key={item._id} className="flex items-center justify-center">
      <button className="text-blue-500" onClick={() => handleEdit(item)}>
        Edit
      </button>
      <p className="mx-1">|</p>
      <button
        className="text-blue-500"
        onClick={() => {
          handleDelete(item._id);
        }}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <div className=" flex  lg:flex-row w-full mt-10 px-5 py-1 ">
      <div className="flex-col shadow-xl p-2 w-4/6 ">
        <div className="flex mt-2 gap-4  justify-between">
          <div className="w-fit">
            <h2>Name</h2>
            <div className="mt-4">{allClientsFirstName}</div>
          </div>
          <div className="">
            <h2>Last Name</h2>
            <div className="mt-4">{allClientsLasttName}</div>
          </div>
          <div className="">
            <h2>Mobile Number</h2>
            <div className="mt-4">{allClientsMobileNumber}</div>
          </div>
          <div className="">
            <h2>Email</h2>
            <div className="mt-4">{allClientsEmail}</div>
          </div>
          <div>
            <h2>Project</h2>
            <div className="mt-4">{allClientsProject}</div>
          </div>
          <div>
            <br />
            <div className="mt-4">{editOrDeleteFeatures}</div>
          </div>
        </div>
      </div>

      <div className="w-1/4 flex justify-center m-auto ">
        <CreateClient />
      </div>
    </div>
  );
};

export default AddUser;
