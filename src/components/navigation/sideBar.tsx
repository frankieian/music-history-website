import Link from "next/link";
import Button from "../button";



export default function SideBar (props: {navBarItems: {left: JSX.Element[], right: JSX.Element[]}}) {

    const listItems: JSX.Element[] = []
    //Combine to single list 
    props.navBarItems.left.forEach(item => listItems.push(<li className="p-1" key={`${item.key}-sideBar`}>{item}</li>))
    props.navBarItems.right.forEach(item => listItems.push(<li  className="p-1" key={`${item.key}-sideBar`}>{item}</li>))

    return (
        <div className='relative w-full'> {/** set as relative to get full width */}
            <ul className='absolute text-right w-full bg-[#D9D9D9] md:hidden rounded-xl mt-3'>
                {listItems}
            </ul>
        </div>
    )
}