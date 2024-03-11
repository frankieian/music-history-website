import Image from "next/image"

export default function Logo() {
    return (
        <Image 
          src="/music_history_logo.svg"
          alt="Spotify History Logo"
          className=""
          width={100}
          height={100}
          priority
        />
    )
}