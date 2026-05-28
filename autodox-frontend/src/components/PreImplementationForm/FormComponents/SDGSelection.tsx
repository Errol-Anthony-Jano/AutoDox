import { Checkbox } from '@base-ui/react/checkbox';
import { sdgs } from "../DropdownValues.ts";
import { CheckboxGroup } from '@base-ui/react/checkbox-group';
function SDGSelection({ label, sdgsSelected, setSdgsSelected }: { label: string; sdgsSelected: number[]; setSdgsSelected: (value: number[]) => void }) {
    return (
        <>
            <h1 className="text-center font-bold text-2xl">{label}</h1>
            <CheckboxGroup className="flex flex-row flex-wrap gap-4 w-full">
                {
                    sdgs.map((sdg) => (
                        <label key={sdg.value} className="flex items-center gap-4 border rounded-md p-2 w/1-2">
                            <Checkbox.Root name={`sdg-${sdg.value}`} className="flex items-center justify-center w-5 h-5 border">
                                <Checkbox.Indicator className="bg-blue-500 w-4 h-4 flex items-center justify-center" />
                            </Checkbox.Root>
                            <span className="text-xs">{sdg.label}</span>
                        </label>
                    ))
                }
            </CheckboxGroup>
        </>
    )
}

export default SDGSelection;