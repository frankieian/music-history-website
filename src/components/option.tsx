import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from "react"


export default function Option (props: {
    config: {text: string, value?: string}[] | string[],
    value: string,
    onChange: ChangeEventHandler<HTMLSelectElement>
}) {

    const options = props.config.map(con => {
        if(typeof con == 'string') {
            return <option value={con} key={`${con}-options`}>
            {con}
            </option>
        } else {
            return <option value={con.value ?? con.text} key={`${con.text}-options`}>
            {con.text}
            </option>
        }
    })

    return (
        
        <select value={props.value} onChange={props.onChange} className="rounded-full md:mx-3 text-3xl">
            {options}
        </select>
    )
}