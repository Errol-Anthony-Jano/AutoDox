import { Select } from "@base-ui/react/select";
import { Field } from "@base-ui/react/field";
import { Fieldset } from '@base-ui/react/fieldset';
import { venueOptions, sdgs, natureOfActivityOptions, areaFocusOptions, natureOfEngagementOptions } from "../DropdownValues.ts";
import { CheckboxGroup } from "@base-ui/react/checkbox-group";
import { Checkbox } from "@base-ui/react/checkbox";


function BasicInformationSection({ label, venue, engagement, activityNature, sdg, setVenue, setEngagement, setActivityNature, setSdg }: { venue: string | null; setVenue: (value: string) => void; engagement: string | null; setEngagement:(value: string) => void; activityNature: string | null; setActivityNature: (value: string) => void; sdg: number | null; setSdg: (value: number) => void }) {
    return (
        <>
        <h1 className="text-center font-bold text-2xl">{label}</h1>
        
            <div className="flex w-full gap-4">
                <Field.Root name="project-name" className="flex flex-col w-1/2">
                    <Field.Label>Project Name</Field.Label>
                    <Field.Control type="text" className={"border-2 border-gray-300 rounded-md p-2"}>

                    </Field.Control>
                </Field.Root>
                <div className="flex flex-col w-1/2 grow">
                    <label>Activity Type</label>
                    <select name="nature-of-activity" value={activityNature || ""} onChange={(e) => setActivityNature(e.target.value)} className="border-2 border-gray-300 grow p-2 rounded-md">
                        <option value="" disabled>Select nature of activity</option>
                        {natureOfActivityOptions.map((option) => (
                            <option key={option.label} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            
            <Fieldset.Root name="implementation-dates" className={"flex flex-col w-full"}>
                <Fieldset.Legend className={"font-bold text-lg"}>Implementation Dates</Fieldset.Legend>
                <div className="flex gap-4 w-full">
                    <Field.Root name="project-start-date" className="flex flex-col w-1/4">
                        <Field.Label className="font-bold text-gray-500">Start Date</Field.Label>
                        <Field.Control type="date" className="p-2 border-2 border-gray-300 rounded-md">
                        </Field.Control>
                    </Field.Root>
                    <Field.Root name="project-end-date" className="flex flex-col w-1/4">
                        <Field.Label className="font-bold text-gray-500">End Date</Field.Label>
                        <Field.Control type="date" className="p-2 border-2 border-gray-300 rounded-md">
                        </Field.Control>
                    </Field.Root>
                    <Field.Root name="project-start-time" className="flex flex-col w-1/4">
                        <Field.Label className="font-bold text-gray-500">Start Time</Field.Label>
                        <Field.Control type="time" className="p-2 border-2 border-gray-300 rounded-md">
                        </Field.Control>
                    </Field.Root>
                    <Field.Root name="project-end-time" className="flex flex-col w-1/4">
                        <Field.Label className="font-bold text-gray-500">End Time</Field.Label>
                        <Field.Control type="time" className="p-2 border-2 border-gray-300 rounded-md">
                        </Field.Control>
                    </Field.Root>
                </div>
            </Fieldset.Root>
            

            <Fieldset.Root name="proposed-venue">
                <Fieldset.Legend className={"font-bold text-lg"}>Proposed Venue</Fieldset.Legend>
                <div className="flex gap-4 items-center">
                    <Fieldset.Root name="venue-type" className={"flex flex-col w-1/2"}>
                        <Fieldset.Legend className={"font-bold text-gray-500"}>Venue Type</Fieldset.Legend>
                        <div className="flex w-full p-2">
                            <Field.Root name="venue-type" className="flex w-1/2 gap-2">
                                <Field.Control type="radio">

                                </Field.Control>
                                <Field.Label>On-campus</Field.Label>
                            </Field.Root>
                            <Field.Root name="venue-type" className="flex w-1/2 gap-2">
                                <Field.Control type="radio">

                                </Field.Control>
                                <Field.Label>Off-campus</Field.Label>
                            </Field.Root>
                        </div>
                    </Fieldset.Root>
                    <Field.Root name="venue-address" className="flex flex-col w-1/2">
                        <Field.Label className={"font-bold text-gray-500"}>Venue Address</Field.Label>
                        <Field.Control type="text" className={"border-2 border-gray-300 rounded-md p-2"} placeholder="Enter venue address">
                        </Field.Control>
                    </Field.Root>
                </div>
            </Fieldset.Root>

            <Fieldset.Root name="nature-of-engagement" className="flex flex-col">
                <Fieldset.Legend className={"font-bold text-lg"}>Nature of Engagement</Fieldset.Legend>
                <div className="flex w-full gap-4">
                    <Fieldset.Root name="engagement-level" className={"flex flex-col w-1/2"}>
                        <Fieldset.Legend className={"font-bold text-gray-500"}>Engagement Level</Fieldset.Legend>
                        <div className="flex w-full p-2">
                            { natureOfEngagementOptions.map((option) => (
                                <Field.Root key={option.value} name="engagement-level" className="flex w-1/2 gap-2">
                                    <Field.Control type="radio" value={option.value} onChange={(e) => setEngagement(e.target.value)} checked={engagement === option.value}>
                                    </Field.Control>
                                    <Field.Label>{option.label}</Field.Label>
                                </Field.Root>
                            )) }
                        </div>
                    </Fieldset.Root>
                    <Field.Root name="main-organizer" disabled={engagement !== 'participant'} className="flex flex-col w-1/2">
                        <Field.Label className={"font-bold text-gray-500"}>Main Organizer (if participant)</Field.Label>
                        <Field.Control type="text" className="border-2 border-gray-300 disabled:border-gray-100 p-2 rounded-md"/>
                    </Field.Root>
                </div>
            </Fieldset.Root>
            
            <div className="font-bold text-lg">Area Focus</div>
            <CheckboxGroup className="w-full flex gap-4 justify-between items-center">
                {
                    areaFocusOptions.map((option) => (
                        <label key={option.value} className="flex gap-2 items-center">
                            <Checkbox.Root name="area-focus" value={option.value} className={"w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center transition-colors data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"}>
                                <Checkbox.Indicator className="bg-blue-500 w-4 h-4">

                                </Checkbox.Indicator>
                            </Checkbox.Root>
                            { option.label }
                        </label>
                    ))
                }
            </CheckboxGroup>
        </>
    )
}

export default BasicInformationSection;