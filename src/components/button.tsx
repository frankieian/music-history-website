import Link from "next/link"
import { MouseEventHandler } from "react"

export default function button(props: {
    type: 'link'
    buttonText: string,
    link: string
    className?: string
    inverse?: boolean
} | {
    type: 'button'
    buttonText: string,
    onClick: MouseEventHandler<HTMLButtonElement> 
    className?: string
})
 {
    let button: JSX.Element
    let className = `border border-black rounded-[30px] text-xl px-2 mx-1 w-fit h-fit self-center ${props.className}`

    if(props.type == "button") {
        button = <button className={className} onClick={props.onClick}>{props.buttonText}</button>
    } else {
        button = <Link href={props.link} className={className}>
            {props.buttonText}
        </Link>
    }

    return (
        <div>
            {button}
        </div>
    )
}