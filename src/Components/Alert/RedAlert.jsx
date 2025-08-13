import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";


export default function RedAlert() {
    return (
        <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium"> Opps.!</span> Something went wrong
        </Alert>
    )
}