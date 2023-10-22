import Link from "next/link"
import Image from "next/image"
import { navLinks } from "@/constants"

export default function Navbar() {
    return (
        <header className="padding-x py-8 absolute w-full z-10">
            <nav className=" flex justify-between items-center max-container">
                <Link href='/'>
                    <div className="w-[130px] h-[29px] relative">
                        <Image src='images/header-logo.svg' fill alt="nike logo" />
                    </div>
                </Link>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <Link href={link.href} className='font-montserrat text-lg text-slate-gray'>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="lg:hidden">
                    <Image src='/icons/hamburger.svg' alt='hamburger' width={25} height={25} />
                </div>
            </nav>
        </header>
    )
}
