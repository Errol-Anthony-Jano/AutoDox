import { Field } from "@base-ui/react/field";
import { useState, useRef } from "react";

function Objectives({ label }: { label?: string }) {
    const [objectives, setObjectives] = useState([]);

    const inputRef = useRef(null);

    const handleButtonClick = () => {
        const objective = inputRef.current.value;
        if (objective === '') {
            alert("Invalid objective"); // change to toast notifs later
            return;
        }

        setObjectives(prevObj => [...objectives, objective]);
        inputRef.current.value = '';
        return;
    }
    return (
        <>
            {label && <h1 className="text-center font-bold text-2xl">{label}</h1>}
            <div className="flex w-full items-center gap-4">
                <Field.Root name="objectives" className="flex w-full items-center gap-4">
                    <Field.Label>Enter objective</Field.Label>
                    <Field.Control type="text" placeholder="By the end of this project, ..." className="p-2 grow border-2 border-gray-300 rounded-md" ref={inputRef} />
                </Field.Root>
                <button type="button" className="bg-green-200 rounded-md p-2 text-sm" onClick={handleButtonClick}>Add new objective</button>
            </div>
            <div className="flex flex-col border border-gray-300 gap-4 p-4 grow min-h-[40vh] max-h-[40vh] overflow-y-auto rounded-md">
                {
                    objectives.map(objective => (
                        <div key={objective} className="border border-gray-300 rounded-md p-2">
                            {objective}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Objectives;