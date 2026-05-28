import { Field } from "@base-ui/react/field";
import { useState, useRef } from "react";

function TargetNonXUAudience({label}: {label?: string}) {
    const [nonXUParticipants, setNonXUParticipants] = useState([]);

    const participantRef = useRef(null);

    const handleButtonClick = () => {
        const participantName = participantRef.current.value;
        if (participantName === '') {
            alert("Community name cannot be empty.") // replace with toast notifs later
            return;
        }

        setNonXUParticipants(prevList => [...nonXUParticipants, participantName]);
        participantRef.current.value = '';
        return;
    }

    return (
        <>
            <h1 className="text-center font-bold text-2xl">{label}</h1>
            <div className="flex flex-col w-full items-center gap-4">
                <Field.Root name="participant-count-non-xu" className="flex w-full items-center gap-4">
                    <Field.Label>Number of non-XU participants</Field.Label>
                    <Field.Control type="number" step={1} placeholder="0" className="p-2 grow border-2 border-gray-300 rounded-md" />
                </Field.Root>
                <Field.Root name="objectives" className="flex w-full items-center gap-4">
                    <Field.Label>Enter non-XU community</Field.Label>
                    <Field.Control type="text" placeholder="Specific to general" className="p-2 grow border-2 border-gray-300 rounded-md" ref={participantRef} />
                </Field.Root>
                
                <button type="button" className="bg-green-200 rounded-md p-2 text-sm" onClick={handleButtonClick}>Add new community</button>
            </div>
            <div className="flex flex-col border border-green-500 gap-4 p-4 grow min-h-[40vh] max-h-[40vh] overflow-y-auto rounded-md">
                {
                    nonXUParticipants.map((community, index) => (
                        <div key={index} className="border border-gray-300 rounded-md p-2">
                            {community}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default TargetNonXUAudience;