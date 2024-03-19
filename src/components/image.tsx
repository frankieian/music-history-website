import Image from "next/image"


export default function ImageWrap (props: {
    src: string,
    alt: string,
    width?: number,
    height?: number
    className: string,
    key:string
}) {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            className={`${props.className}`}
            width={props.width ?? 100}
            height={props.height ?? 100}
            key={props.key}
            priority
        />
    )
}