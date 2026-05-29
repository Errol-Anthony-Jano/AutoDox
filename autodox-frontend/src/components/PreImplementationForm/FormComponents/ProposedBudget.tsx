import { Field, Fieldset } from "@base-ui/react"
import { Checkbox as BaseCheckbox, Checkbox } from '@base-ui/react/checkbox';
import { budgetSources } from "../DropdownValues.ts";
import { useState } from "react";

function ProposedBudget() {
    const [selectedBudgets, setSelectedBudgets] = useState(() => {
        const initState = {};

        budgetSources.map(source => {
            initState[source.value] = {
                checked: false,
                amount: 0,
            }
        })
        return initState;
    })

    const handleCheckboxChange = (sourceValue: string) => {
        setSelectedBudgets((prevSelected) => ({
            ...prevSelected,
            [sourceValue]: {
                checked: !prevSelected[sourceValue].checked,
                amount: prevSelected[sourceValue].amount,
            },
        }));
    }

    return (
        <>
            <h1 className="text-center font-bold text-2xl">Proposed Budget</h1>
            <Field.Root name="proposed-budget" className="flex w-full items-center">
                <Field.Label className="text-sm font-medium text-gray-700 w-1/2">Proposed Budget</Field.Label>
                <Field.Control type="number" className={"border-2 border-gray-300 rounded-md p-2 w-1/2"}>

                </Field.Control>
            </Field.Root>

            {
                budgetSources.map((source) => (
                    <div id={source.value} className="flex justify-between gap-4 w-full" key={source.value}>
                        <label className="flex items-center gap-2">
                            <Checkbox.Root onCheckedChange={() => handleCheckboxChange(source.value)} name="budget-source" checked={selectedBudgets[source.value].checked} value={source.value} className={"w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-colors data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"}>
                                <Checkbox.Indicator className="bg-blue-500 w-4 h-4 flex items-center justify-center">
                                    <svg className="w-2 h-2 text-white" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.70711 1.29289C7.09763 1.68342 7.09763 2.31658 6.70711 2.70711L3.70711 5.70711C3.31658 6.09763 2.68342 6.09763 2.29289 5.70711L1.29289 4.70711C0.902369 4.31658 0.902369 3.68342 1.29289 3.29289C1.68342 2.90237 2.31658 2.90237 2.70711 3.29289L3 3.58579L6.70711 1.29289Z" fill="currentColor" />
                                    </svg>
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            {source.label}
                        </label>

                        <Field.Root disabled={!selectedBudgets[source.value].checked} key={source.value} name={`budget-source-${source.value}`} className="flex items-center gap-4 w-1/2">
                            <Field.Control type="number" placeholder={`Enter ${source.label} budget`} className={"border-2 border-gray-300 rounded-md p-2 w-full disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400"}>
                            </Field.Control>
                        </Field.Root>
                    </div>
                ))
            }

            {   
                selectedBudgets['counterpart'].checked && (
                    <Field.Root name="counterpart-details" className="flex flex-col gap-4 w-full">
                        <Field.Label className="text-sm font-medium text-gray-700">Counterpart Details</Field.Label>
                        <Field.Control type="text" placeholder="Enter amount to be collected from each member" className={"border-2 border-gray-300 rounded-md p-2 w-full"}>
                        </Field.Control>
                    </Field.Root>
                )
            }
        </>
    )
}

export default ProposedBudget;