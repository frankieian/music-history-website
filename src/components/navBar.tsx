'use client'
import Image from 'next/image'
import Button from "./button"
import Link from 'next/link'
import { useState } from 'react'
import Logo from './navigation/logo'
import MenuBar from './navigation/menuBar'
import SideBar from './navigation/sideBar'
import { usePathname } from 'next/navigation'
import { logoutAccount } from '@/actions/account'
import button from './button'



export default function NavBar(props: {loggedIn: boolean}) {
      const [isOpen, setIsOpen] = useState(false)
      const pathname = usePathname()
      const loggedIn = props.loggedIn

      const toggle = () => {
        setIsOpen(!isOpen)
      }

      const handleLogout = async () => {
        localStorage.clear();
        await logoutAccount();
    };

      const loggedInSpecific = [
        <Button type='button' className='bg-blue-500' onClick={handleLogout} buttonText='Logout'  key={'Logout'}/>
      ]

      const navBarItems = {
        left: [
          <Link className='text-xl px-3' href={'/'} key={'Home'}>Home</Link>,
          <Link className='text-xl px-3 ' href={'/dashboard'} key={'Dashboard'}>Dashboard</Link>,
          <Link className='text-xl px-3' href={'/about'} key={'About'}>About</Link>
        ],
        right: !loggedIn ? [
          <Button type='link' className='bg-blue-500' buttonText='Login' link='/login' key={'Login'}/>,
          <Button type='link' buttonText='Register' link='/register' key={'Register'}/>
        ] : loggedInSpecific
      }

  return (
    <header className="py-5 w-full pl-5 bg-gradient-to-r from-black to-[#618F87]"> {/** Background */}
      {/** Wrapper with flex */}
      <div className='flex'>
        {/** Logo */}
        <Logo />
        {/** Menu bar wrapper. Flex column so they are stacked */}
        <div className='flex h-14 flex-col mt-5 w-full bg-[#D9D9D9]'>
          {/** Menu bar */}
          <MenuBar toggle={toggle} navBarItems={navBarItems}/>
          {/** Menu bar open */}
            {isOpen && <SideBar navBarItems={navBarItems} />}
        </div>
      </div>
    </header>
  )
}
