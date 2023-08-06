import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaCog, FaPlus } from 'react-icons/fa';
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    // const [cart] = useCart();

    // // TODO: load data from the server to have dynamic isAdmin based on Data
    // // const isAdmin = true;
    // const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center mx-10">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 ">
                    {/* Sidebar content here */}
                    {/* <li><NavLink to="/dashboard/users"><FaHome></FaHome> All Users</NavLink></li>
                    <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
                    <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
                    <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li> */}
                    {/* users dashboard */}
                    <li><NavLink to="/dashboard/usersFeatures"><FaCog></FaCog>Change Info</NavLink></li>
                    <li><NavLink to="/dashboard/userDataEntry"><FaPlus></FaPlus>Upload Sheet</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;