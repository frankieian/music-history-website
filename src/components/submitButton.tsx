'use client'

import { useFormStatus } from "react-dom"

export default function SubmitButton(props: {
    text: string,
    bgColour?: string,
    height?: string
}){
    //Use form status so we can disable button when form is still pending
    const { pending } = useFormStatus()
    return (
        <button aria-disabled={pending} className={`text-white w-3/4 ${props.height} ${props.bgColour ?? 'bg-black'} rounded-full mt-6 aria-disabled:opacity-30`} type="submit">
            {props.text}
        </button>

    )
}