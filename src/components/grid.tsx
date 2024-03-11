import ImageWrap from "./image"

export default function Grid (props: {
    columns: number,
    span: number[] //Sets the span for each element. If there are more elements than length then goes back to start. e.g. [1,2] will go 1,2,1,2,...
    config: ({
        width?: number,
        height?: number,
        src: string,
        alt: string
    } | string  )[],
    
}){

    const gridItems: JSX.Element[] = []

    //Goes through config and will return string OR image
    props.config.forEach((config, index) => {
        let item: JSX.Element
        //Grab span for each element
        let span = props.span[index % props.span.length]
        if(typeof config == 'string') {
            item = <p className={`col-span-${span} place-self-start self-center`}>{config}</p>
        } else if (config?.alt && config?.src) {
            let newConfig = {...config, className: `col-span-${span}`}
            item =  <ImageWrap {...newConfig}/>
        } else {
            item = <div></div>
        }
        gridItems.push(item)
    })

    return (
        <div className={`grid grid-cols-${props.columns} gap-4 w-full max-w-96 justify-items-center text-xl font-semibold m-auto`}>
            {gridItems}
        </div>
    )
}