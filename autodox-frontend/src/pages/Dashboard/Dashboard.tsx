import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router";

function Dashboard() {
    /*
     - sidebar
     - replaceable area for the different subpages
    */
    return (
        <div className="grid grid-cols-5 grid-rows-3 h-screen bg-[#e9f4ff]">
            <Sidebar userType={"member"}/>
            <section className="grid col-start-2 col-end-6 row-start-1 row-end-4 p-4">
                <Outlet />
            </section>
        </div>
    )
}

export default Dashboard;