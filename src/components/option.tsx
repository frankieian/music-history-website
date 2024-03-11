import { ChangeEventHandler, Dispatch, SetStateAction } from "react"


export default function Option (props: {
    config: {text: string, value?: string}[] | string[],
    value: string,
    onChange: ChangeEventHandler<HTMLSelectElement>
}) {

    const options = props.config.map(con => {
        if(typeof con == 'string') {
            return <option value={con}>
            {con}
            </option>
        } else {
            return <option value={con.value ?? con.text}>
            {con.text}
            </option>
        }
    })

    return (
        <select value={props.value} onChange={props.onChange}>
            {options}
        </select>
    )
}