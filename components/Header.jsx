import Image from "next/image";
import Link from "next/link";
import { BsYoutube, BsDiscord } from 'react-icons/bs';
import { MdDownloadForOffline } from 'react-icons/md';
import { TbBrandCashapp } from 'react-icons/tb';

export const Header = () => {
  return (
      <header className="fixed z-10 flex flex-col items-center justify-between w-full px-20 py-7 md:flex-row bg-black/80">
        <Image src={'/logo.png'} priority alt="logo" width={130} height={130}/>
        <nav className="flex font-bold text-white text-[0.9rem] gap-x-16">
          <Link href="/" className="duration-150 ease-in-out hover:scale-105">Início</Link>
          <Link href="/" className="duration-150 ease-in-out hover:scale-105">Registro</Link>
          <Link href="/" className="flex items-center duration-150 ease-in-out hover:scale-105">Cash Time <TbBrandCashapp size={24} /></Link>
          <Link href="/" className="duration-150 ease-in-out hover:scale-105">Evento</Link>
          <Link href="/" className="flex items-center text-red-600 duration-150 ease-in-out hover:scale-105 gap-x-2">Download <MdDownloadForOffline size={18} /></Link>
        </nav>
        <Link href="/" className="flex items-center text-sm font-medium gap-x-4">
          <BsYoutube className="duration-150 text-white/75 hover:text-white" fontSize={24} />
          <BsDiscord className="duration-150 text-white/75 hover:text-white" fontSize={24} />
        </Link>  
      </header>

  )
}