

export default function Heading(props: {
    text: string, 
    option?: JSX.Element,
    rightText?: string
}) {
    return (
        <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-center text-wrap pb-3">{props.text}</h1>
            {props.option}
            {props.rightText && <h1 className="text-3xl font-bold text-center text-wrap pb-3">{props.rightText}</h1>}
        </div>
    )
}