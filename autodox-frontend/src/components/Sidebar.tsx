import { NavLink } from "react-router";
import { MdDashboard } from "react-icons/md";
import { MdInsertDriveFile } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdPolicy } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import { useState } from "react";
import PreImpForm from "./PreImplementationForm/PreImpForm.tsx";

type UserType = 'member' | 'fiscal-team' | 'president';

// 2. Add the interface for the component props
interface SidebarProps {
    userType: UserType;
}

function Sidebar({ userType }: SidebarProps) {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <aside className="flex flex-col border border-black col-start-1 col-end-2 row-start-1 row-end-4 p-4 bg-[#001F3D]">
                <h1 className="text-center font-bold p-4 text-2xl text-white">AutoDox for XCEL</h1>
                <nav className="flex grow">
                    <ul className="flex flex-col gap-4">
                        <NavLink to="/" className={"min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] hover:text-[#001325] rounded-lg text-white [&.active]:bg-[#F7B980] [&.active]:text-[#001325]"}> <MdDashboard />Dashboard</NavLink>
                        {userType === 'member' && <NavLink to="/submitted-proposals" className={`min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] hover:text-[#001325] rounded-lg text-white [&.active]:bg-[#F7B980] [&.active]:text-[#001325]`}> <MdInsertDriveFile />My Submitted Proposals</NavLink>}
                        <NavLink to="/members" className={"min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] rounded-lg text-white hover:bg-[#001325] hover:text-[#001325]"}> <MdGroups />Organization Members</NavLink>
                        {userType === 'fiscal-team' && <NavLink to="/internal-project-policies" className={"min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] hover:text-[#001325] active:bg-[#ED985F] rounded-lg text-white"}> <MdPolicy />Project Policies</NavLink>}
                        {userType === 'fiscal-team' && <NavLink to="/submitted-proposals" className={"min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] hover:text-[#001325] active:bg-[#ED985F] rounded-lg text-white"}> <MdInsertDriveFile /> Review Submitted Proposals</NavLink>}
                        {userType === 'president' && <NavLink to="/submitted-proposals" className={"min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] hover:text-[#001325] active:bg-[#ED985F] rounded-lg text-white"}> <MdInsertDriveFile />Member Permissions</NavLink>}
                        {userType === 'member' && <button className="min-w-0 p-4 gap-4 flex items-center text-lg hover:bg-[#F7B980] hover:text-[#001325] active:bg-[#ED985F] rounded-lg text-white" onClick={() => setShowForm(!showForm)}> <MdFolder /> Submit new proposal </button>}
                    </ul>
                </nav>
                <NavLink to="/home" className={"p-4 gap-4 flex items-center text-lg hover:bg-[#fa2a55] hover:text-[#001325] active:bg-[#ED985F] rounded-lg text-white"}> <MdLogout /> Log out</NavLink>
            </aside>
            
            { showForm && <PreImpForm /> }
        </>
    )
}

export default Sidebar;