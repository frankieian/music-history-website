import Link from "next/link"

export default function button(props: {
    buttonText: string,
    link: string
    className?: string
    inverse?: boolean
})
 {
    return (
        <Link href={props.link} className={`border border-black rounded-[30px] text-xl px-2 mx-1 w-fit h-fit self-center ${props.className}`}>
            {props.buttonText}
        </Link>
    )
}