import Link from "next/link";
import Button from "../button";



export default function MenuBar(props: {toggle: () => void, navBarItems: {left: JSX.Element[], right: JSX.Element[]}}) {
    return (
    <div className='flex h-full'>
        <div className='hidden md:flex md:items-center md:w-full  md:visible'>
          {props.navBarItems.left}
          <div className='grow'/>
          {props.navBarItems.right}
        </div>
        <button className='flex h-full items-center flex-row-reverse w-full md:hidden' onClick={props.toggle}>
          <svg xmlns="http://www.w3.org/2000/svg"
            className='self-center'
            width="40"
            height="40"
            viewBox="0 0 24 24">
            <path fill="#1E1E1E"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
          </svg>
        </button>
    </div>
    )
}