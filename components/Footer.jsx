import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="pb-8 bg-black padding-x padding-t max-container" >
            < div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col" >
                <div className="flex flex-col items-start">
                    <Link href='/'>
                        <Image src='/images/footer-logo.svg' width={150} height={46} />
                    </Link>

                    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards</p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map((icon, index) => (
                            <div key={index} className='flex items-center justify-center w-12 h-12 bg-white rounded-full'>
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
                    {footerLinks.map(section => (
                        <div key={section.title}>
                            <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">{section.title}</h4>
                            {section.links.map(link => (
                                <li key={link.name} className='mt-3 text-base leading-normal list-none cursor-pointer text-white-400 font-montserrat hover:text-slate-gray'>
                                    <Link href={link.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    ))}
                </div>
            </div >
        </footer >
    )
}
