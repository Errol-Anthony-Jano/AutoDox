import { Field } from "@base-ui/react/field";
import { areaFocusOptions, sdgs } from "../DropdownValues";

function DescriptionAndLink({ label }: { label?: string }) {
    return (
        <>
            {label && <h1 className="text-center font-bold text-2xl">{label}</h1>}
            <Field.Root name="description" className="flex flex-col w-full">
                <Field.Label className="text-sm font-medium text-gray-700">Brief Description of the Project</Field.Label>
                <Field.Control render={(props) => (
                    <textarea
                        {...props}
                        rows={4}
                        className="border-2 border-gray-300 rounded-md p-2 focus:outline-blue-500 transition-all"
                        placeholder="Briefly describe the objectives..."
                    />
                )}>
                    
                </Field.Control>
            </Field.Root>
            <Field.Root name="link" className="flex flex-col w-full">
                <Field.Label className="text-sm font-medium text-gray-700">Link of Project with Organization</Field.Label>
                <Field.Control render={(props) => (
                    <textarea
                        {...props}
                        rows={4}
                        className="border-2 border-gray-300 rounded-md p-2 focus:outline-blue-500 transition-all"
                        placeholder="Link of the Project with the Organization (State below the link of the project with the mission/purpose of the organization and the UAP.)"
                    />
                )}>

                </Field.Control>
            </Field.Root>
        </>
    )
}

export default DescriptionAndLink;