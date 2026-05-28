import { Field } from "@base-ui/react/field"
import { useState, useRef } from "react";

function PartnersAndRoles({label}: {label?: string}) {
    const [partners, setPartners] = useState([]);
    const partnerRef = useRef(null);
    const roleRef = useRef(null);

    const handleButtonClick = () => {
        const partner = partnerRef.current.value;
        const role = roleRef.current.value;

        const obj = {
            name: partner,
            role: role,
        }

        setPartners(prevList => [...partners, { ...obj }])
        partnerRef.current.value = '';
        roleRef.current.value = '';
        return;
    }
    return (
        <>
            {label && <h1 className="text-center font-bold text-2xl">{label}</h1>}
            <div className="flex w-full items-center gap-4">
                <Field.Root name="partner" className="flex w-full items-center gap-4">
                    <Field.Label>Enter name of partner</Field.Label>
                    <Field.Control type="text" placeholder="By the end of this project, ..." className="p-2 grow border-2 border-gray-300 rounded-md" ref={partnerRef} />
                </Field.Root>
                <Field.Root name="role" className="flex w-full items-center gap-4">
                    <Field.Label>Enter role of partner</Field.Label>
                    <Field.Control type="text" className="p-2 grow border-2 border-gray-300 rounded-md" ref={roleRef} />
                </Field.Root>
                <button type="button" className="bg-green-200 rounded-md p-2 text-sm" onClick={handleButtonClick}>Add new objective</button>
            </div>
            <div className="flex flex-col border border-gray-300 gap-4 p-4 grow min-h-[40vh] max-h-[40vh] overflow-y-auto rounded-md">
                {
                    partners.map((partner, index) => (
                        <div key={index} className="bg-gray-100 rounded-md p-2">
                            <p>Name: {partner.name}</p>
                            <p>Role: {partner.role}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default PartnersAndRoles;