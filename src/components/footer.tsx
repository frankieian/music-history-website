import Image from 'next/image'


export default function Footer () {
    return (
        <footer className="absolute bottom-0 w-full bg-[#FDF1E8]">
            <div className='flex justify-center'>
                <Image
                src="/bored_tea_logo.svg"
                alt="Bored Tea Logo"
                className=""
                width={40}
                height={40}
                priority
                />
                <div className="font-extralight	self-center">Made with tea</div>
            </div>
        </footer>
    )
}