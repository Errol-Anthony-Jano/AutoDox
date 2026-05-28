import { Field } from "@base-ui/react/field";
import { useRef, useState } from "react";

function Guests({label}: {label?: string}) {
    const [guestList, setGuestList] = useState([]);

    const nameRef = useRef(null);
    const affiliationRef = useRef(null);
    const designationRef = useRef(null);
    const handleButtonClick = () => {
        const guestName = nameRef.current.value;
        const guestAffiliation = affiliationRef.current.value;
        const guestDesignation = designationRef.current.value;
        if (guestName === '' || guestAffiliation === '' || guestDesignation === '') {
            alert("Guest name, affiliation, and designation cannot be empty.") // replace with toast notifs later
            return;
        }

        const obj = {
            name: guestName,
            affiliation: guestAffiliation,
            designation: guestDesignation,
        }

        setGuestList(prevList => [...guestList, { ...obj }])
        nameRef.current.value = '';
        affiliationRef.current.value = '';
        designationRef.current.value = '';
        return;
    }
    return (
        <>
            <h1 className="text-center font-bold text-2xl">{label}</h1>
            <div className="flex flex-col w-full items-center gap-4">
                <Field.Root name="guest-name" className="flex w-full items-center gap-4">
                    <Field.Label>Guest Name</Field.Label>
                    <Field.Control type="text" className="p-2 grow border-2 border-gray-300 rounded-md" ref={nameRef} />
                </Field.Root>
                <div className="flex w-full gap-4">
                    <Field.Root name="guest-affiliation" className="flex w-1/2 items-center gap-2">
                        <Field.Label>Guest Affiliation</Field.Label>
                        <Field.Control type="text" placeholder="Job titles, etc." className="p-2 grow border-2 border-gray-300 rounded-md" ref={affiliationRef} />
                    </Field.Root>
                    <Field.Root name="guest-designation" className="flex w-1/2 items-center gap-2">
                        <Field.Label>Guest Designation</Field.Label>
                        <Field.Control type="text" placeholder="Role in event" className="p-2 grow border-2 border-gray-300 rounded-md" ref={designationRef} />
                    </Field.Root>
                </div>
                
                <button type="button" className="bg-green-200 rounded-md p-2 text-sm" onClick={handleButtonClick}>Add new guest</button>
            </div>
            <div className="flex flex-col border border-green-500 gap-4 p-4 grow min-h-[40vh] max-h-[40vh] overflow-y-auto rounded-md">
                {
                    guestList.map((guest, index) => (
                        <div key={index} className="border border-gray-300 rounded-md p-2">
                            <p>Name: {guest.name}</p>
                            <p>Affiliation: {guest.affiliation}</p>
                            <p>Designation: {guest.designation}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Guests;