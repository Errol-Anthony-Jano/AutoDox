import { Form } from "@base-ui/react";
import { Field } from "@base-ui/react/field";
import { Fieldset } from '@base-ui/react/fieldset';
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Select } from "@base-ui/react/select";
import DescriptionAndLink from "./FormComponents/DescriptionAndLink.tsx";
import Objectives from "./FormComponents/Objectives.tsx";
import ProposedBudget from "./FormComponents/ProposedBudget.tsx";
import BasicInformationSection from "./FormComponents/BasicInformationSection.tsx";
import SuccessIndicators from "./FormComponents/SuccessIndicators.tsx";
import SDGSelection from "./FormComponents/SDGSelection.tsx";
import PartnersAndRoles from "./FormComponents/PartnersAndRoles.tsx";
import TargetXUAudience from "./FormComponents/TargetXUAudience.tsx";
import TargetNonXUAudience from "./FormComponents/TargetNonXUAudience.tsx";
import Guests from "./FormComponents/Guests.tsx";
import PlanOfAction from "./FormComponents/PlanOfAction.tsx";

function PreImpForm() {
    const [errors, setErrors] = useState({});
    const [loading, isLoading] = useState(false);
    const [venue, setVenue] = useState<string | null>(null);
    const [engagement, setEngagement] = useState<string | null>("");
    const [activityNature, setActivityNature] = useState<string | null>("");
    const [sdg, setSdg] = useState("");
    const [formPage, setFormPage] = useState(1);
    const [sdgsSelected, setSdgsSelected] = useState([])

    interface BasicInformationProps {
        venue: string | null;
        setVenue: (value: string) => void;
        engagement: string | null;
        setEngagement:(value: string) => void;
        activityNature: string | null;
        setActivityNature: (value: string) => void;
        sdg: number | null;
        setSdg: (value: number) => void;
        label: string;
    }

    interface SDGSelectionProps {
        sdgsSelected: number[];
        setSdgsSelected: (value: number[]) => void;
        label: string;
    }

    return (
        <div className="w-full h-screen bg-black/80 z-10 absolute flex items-center justify-center">
            <div className="p-4 gap-4 bg-white w-1/2 max-h-[90vh] flex flex-col rounded-lg">
                <span className="flex flex-row-reverse w-full text-2xl"> <MdClose /> </span>
                <Form className="flex flex-col z-20 p-4 gap-6 grow overflow-hidden">
                    <div className="flex flex-col gap-4 grow overflow-y-auto">
                        {formPage === 1 && <BasicInformationSection label="Basic Information" venue={venue} setVenue={setVenue} engagement={engagement} setEngagement={setEngagement} activityNature={activityNature} setActivityNature={setActivityNature} sdg={sdg} setSdg={setSdg} />}
                        {formPage === 2 && <SDGSelection label="SDG Selection" sdgsSelected={sdgsSelected} setSdgsSelected={setSdgsSelected} />}
                        {formPage === 3 && <DescriptionAndLink label="Description and Link of Project to Org" />}
                        {formPage === 4 && <Objectives label="Objectives" />}
                        {formPage === 5 && <SuccessIndicators label="Success Indicators" />}
                        {formPage === 6 && <PartnersAndRoles label="Partners/Sponsors and Roles" />}
                        {formPage === 7 && <ProposedBudget label="Proposed Budget" />}
                        {formPage === 8 && <TargetXUAudience label="Target XU Audience" />}
                        {formPage === 9 && <TargetNonXUAudience label="Target Non-XU Audience" />}
                        {formPage === 10 && <Guests label="Guests" />}
                        {formPage === 11 && <PlanOfAction label="Plan of Action" />}
                    </div>
                    <div className="flex w-full justify-center items-center gap-4">
                        <button type="button" className="rounded-md w-1/5 border border-[#001F3D]-500" disabled={ formPage === 1 } onClick={() => setFormPage(formPage - 1)}>Back</button>
                        { formPage !== 11 && <button type="button" className="rounded-md w-1/5 text-[#ffffff] bg-[#001F3D]" onClick={() => setFormPage(formPage + 1)}>Next</button> }
                        { formPage === 11 && <button type="button" className="rounded-md w-1/5 text-[#ffffff] bg-[#001F3D]" onClick={() => setFormPage(formPage + 1)}>Submit Proposal</button>}
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default PreImpForm;