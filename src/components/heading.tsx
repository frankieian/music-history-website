export default function Heading(props: {
    text: string,
    className: string,
    option?: JSX.Element,
    rightText?: string
}) {
    return (
        <div className="md:flex justify-center items-center pb-3">
            <h1 className={`text-3xl font-bold text-center text-wrap ${props.className}`}>{props.text}</h1>
            <div className="w-full flex justify-center md:w-fit">{props.option}</div>
            {props.rightText && <h1 className={`text-3xl font-bold text-center text-wrap ${props.className}`}>{props.rightText}</h1>}
        </div>
    )
}