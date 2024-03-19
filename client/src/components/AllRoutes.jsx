
import { Route, Routes } from "react-router-dom";
import AddUser from "../Page/AddUser";
import Update from "../Page/Update";

const NewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddUser />} />
      <Route path="update/:id" element={<Update />} />
    </Routes>
  );
};

export default NewRoutes;
