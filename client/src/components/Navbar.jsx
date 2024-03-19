import { Link } from "react-router-dom";
const Navbar = () => {
  const allLinks = [
    {
      to: "/",
      title: "Clients",
    },
  ];

  const Links = allLinks.map((item) => (
    <Link key={item.to} to={item.to}>
      {item.title}
    </Link>
  ));
  return (
    <div className="w-full bg-gray-700 text-white h-16">
      <div className="flex items-center h-full">
        <div className="text-2xl px-4 flex items-center">{Links}</div>
      </div>
    </div>
  );
};

export default Navbar;
