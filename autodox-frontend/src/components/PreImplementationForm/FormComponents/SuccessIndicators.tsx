import { Field } from "@base-ui/react/field";
function SuccessIndicators({ label }: { label: string }) {
    return (
        <>
            <h1 className="text-center font-bold text-2xl">{label}</h1>
            <div className="flex w-full items-center gap-4">
                <Field.Root name="success-indicators" className="flex w-full items-center gap-4">
                    <Field.Label>Enter success indicator</Field.Label>
                    <Field.Control type="text" placeholder="What determines success/failure of objectives?" className="w-full p-2 border-2 border-gray-300 rounded-md"/>
                </Field.Root>
                <button type="button" className="bg-green-200 rounded-md p-2 text-sm">Add new success indicator</button>
            </div>
            <div className="grow min-h-[40vh] max-h-[40vh] border border-gray-300 overflow-y-auto p-4 rounded-md">

            </div>
        </>
    )
}

export default SuccessIndicators;