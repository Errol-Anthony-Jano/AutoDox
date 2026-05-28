import { Checkbox, CheckboxGroup, Field } from "@base-ui/react";
import { XUCommunityMembers } from "../DropdownValues";

function TargetXUAudience({label}: {label?: string}) {
    return (
        <>
            {label && <h1 className="text-center font-bold text-2xl">{label}</h1>}
            <Field.Root name="xu-expected-participant-quantity" className="flex w-full items-center gap-4">
                <Field.Label>Enter expected number of participants from XU Community</Field.Label>
                <Field.Control type="number" step={1} className="p-2 grow border-2 border-gray-300 rounded-md">

                </Field.Control>
            </Field.Root>
            <CheckboxGroup className="flex justify-between items-center">
                {
                    XUCommunityMembers.map(subcommunity => (
                        <label key={subcommunity.value} className="flex gap-2 items-center">
                            <Checkbox.Root className="w-5 h-5 border-2 border-gray-300 rounded">
                                <Checkbox.Indicator className="bg-blue-500 w-4 h-4 flex items-center justify-center">
                                    
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            {subcommunity.label}
                        </label>
                    ))
                }
            </CheckboxGroup>
        </>
    )
}

export default TargetXUAudience;