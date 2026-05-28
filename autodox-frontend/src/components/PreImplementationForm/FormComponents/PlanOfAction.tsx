import { Field } from "@base-ui/react/field";

function PlanOfAction({label}: {label?: string}) {
    return (
        <>
            <h1 className="text-center font-bold text-2xl">{label}</h1>
            <div className="flex w-full items-center gap-4">
                <Field.Root name="date" className="flex flex-col w-1/2 gap-2">
                    <Field.Label>Date</Field.Label>
                    <Field.Control type="date" className="p-2 grow border-2 border-gray-300 rounded-md" />
                </Field.Root>
                <Field.Root name="time" className="flex flex-col w-1/4 gap-2">
                    <Field.Label>Start Time</Field.Label>
                    <Field.Control type="time" className="p-2 grow border-2 border-gray-300 rounded-md" />
                </Field.Root>
                <Field.Root name="time" className="flex flex-col w-1/4 gap-2">
                    <Field.Label>End Time</Field.Label>
                    <Field.Control type="time" className="p-2 grow border-2 border-gray-300 rounded-md" />
                </Field.Root>
            </div>
            <div className="flex w-full items-center gap-4">
                <Field.Root name="activity" className="flex flex-col w-1/2 gap-2">
                    <Field.Label>Activity</Field.Label>
                    <Field.Control type="text" className="p-2 grow border-2 border-gray-300 rounded-md" />
                </Field.Root>
                <Field.Root name="venue" className="flex flex-col w-1/2 gap-2">
                    <Field.Label>Venue</Field.Label>
                    <Field.Control type="text" className="p-2 grow border-2 border-gray-300 rounded-md" />
                </Field.Root>
            </div>
            <div className="flex flex-col border border-green-500 gap-4 p-4 grow min-h-[40vh] max-h-[40vh] overflow-y-auto rounded-md">
                
            </div>
        </>
    )
}

export default PlanOfAction;