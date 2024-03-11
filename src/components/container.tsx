


export default function Container (props: {
    className?: string,
    heading?: string,
    children: JSX.Element
    width?:string,
    largeWidth?:string
    height?: string
}) {
    return (
        <div className={`rounded-lg p-10 ${props.width ?? 'w-11/12'} ${props.largeWidth ?? 'md:w-2/4'} m-auto mt-6 ${props.height ?? 'h-fit'} ${props.className}`}>
            {props.heading && <h1 className="text-3xl font-bold text-center text-wrap pb-3">{props.heading}</h1>}
            {props.children}
        </div>
    )
}