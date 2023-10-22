'use client'
import { shoes, statistics } from "@/constants";
import { CustomButton, ShoeCard } from ".";
import Image from "next/image";
import { useState } from "react";
import { bigShoe1 } from "@/public/images";

export default function Hero() {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

    return (
        <section className="flex flex-col justify-center w-full min-h-screen gap-10 p-2 xl:flex-row max-container xl:padding-l wide:padding-r padding-b"
            id="home"
        >
            <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[50px] max-sm:leading-[1.2] font-bold ">
                    <span className="relative z-10 pr-10 xl:bg-white xl:whitespace-nowrap">The New Arrival</span>
                    <br />
                    <span className="inline-block mt-3 text-coral-red">Nike</span>  Shoes

                </h1>
                <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality, comfort and innovation for your active life</p>

                <CustomButton label='Shop now' icon='icons/arrow-right.svg'
                    iconW={25} iconH={25} alt='right icon'
                    iconStyle='ml-2 group-hover:scale-[1.2] duration-500'
                    customStyle='rounded-full bg-coral-red border-coral-red group text-white font-montserrat text-lg leading-none shadow-lg px-7 py-4'
                />

                <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
                    {statistics.map(item => (
                        <div key={item.label} >
                            <p className="text-4xl font-bold font-palanquin">{item.value}</p>
                            <p className="leading-7">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex items-center justify-center flex-1 bg-center bg-cover xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
                <Image
                    src={bigShoeImg}
                    width={500}
                    height={50}
                    alt='shoe collection'
                    className="relative z-10 object-contain pb-5"

                />

                <div className="absolute bottom-0 flex gap-4 pb-4 max-sm:px-2">
                    {shoes.map((shoe, index) => (

                        <div key={index}>
                            <ShoeCard
                                shoe={shoe}
                                changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}
