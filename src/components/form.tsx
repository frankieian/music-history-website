'use client'

import { useFormState } from "react-dom"
import { useFormStatus } from 'react-dom'
import SubmitButton from "./submitButton"
import { HTMLInputTypeAttribute } from "react"
import Container from "./container"

const initialState: {[key:string]: string} = {
    message: '',
}

export default function Form(props: {
    title: string,
    fields: {label: string, name: string, type?: HTMLInputTypeAttribute}[],
    submitText: string,
    footNote?: string,
    formAction: (prevState: any, formData:FormData) => Promise<{message:string}>
}) {
    const [state, formAction] = useFormState(props.formAction, initialState)

    const formInputs = props.fields.map(field => 
        <div className="text-left">
            <label className="text-left text-xl">{field.label}</label><br></br>
            <input className="border border-black rounded-md pl-2 w-full h-[40px]" type="text" name={field.name}/>
            {state[field.name] && <p className="w-fit text-wrap text-sm m-auto">{state[field.name]}</p>}
        </div>
    ) 

    return (
        <Container className='bg-[#A8C7CD]' heading={props.title} width="w-[350px]" largeWidth="" height="450">
            <div className="text-center">
                <form className="py-4 w-full text-center" action={formAction}>
                    {...formInputs}
                    <SubmitButton text={props.submitText}  bgColour="bg-[#18446E]" height="h-[35px]"/>
                    {state?.message && <p className="w-fit text-wrap m-auto">{state.message}</p>}
                </form>
                {props.footNote && <h1 className="text-xl font-bold h-fit">{props.footNote}</h1>}
            </div>
        </Container>
    )
}