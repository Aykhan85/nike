import Image from "next/image"
import { CustomButton } from "."

export default function SpecialOffer() {
    return (
        <section className="flex flex-wrap items-center justify-center gap-10 padding max-xl:flex-col-reverse max-container">
            <div className="flex-1">
                <Image
                    src='/images/offer.svg'
                    width={100}
                    height={100}
                    layout='responsive'
                    alt=''
                    className="object-contain max-w-full"
                />
            </div>

            <div className="flex flex-col flex-1">
                <h2 className=" font-palanquin xl:max-w-lg text-4xl capitalize max-sm:text-[50px] max-sm:leading-[1.2] font-bold ">
                    <span className="text-coral-red "> special</span> offer
                </h2>
                <p className="my-4 xl:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit veniam quaerat maiores quod amet illo unde? Dignissimos quas corporis, officia iure velit magnam perferendis quis odit hic autem dolor!</p>

                <p className="my-4 xl:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias ut laudantium natus tempore nobis?</p>

                <div className="flex gap-4">
                    <CustomButton label='View details'
                        icon='/icons/arrow-right.svg'
                        iconW={25} iconH={25} alt='right icon'
                        iconStyle=' group-hover:scale-[1.2] duration-500'
                        customStyle='rounded-full max-sm:flex-1 group bg-coral-red border-coral-red text-white font-montserrat text-lg leading-none shadow-lg px-7 py-4'
                    />
                    <CustomButton label='Learn more'
                        customStyle='rounded-full max-sm:hidden border border-slate-gray  text-slate-gray font-montserrat text-lg leading-none shadow-lg px-7 py-4'
                    />
                </div>
                <CustomButton label='Learn more'
                    customStyle='rounded-full sm:hidden border mt-2 border-slate-gray  text-slate-gray font-montserrat text-lg leading-none shadow-lg px-7 py-4'
                />
            </div>
        </section>
    )
}
