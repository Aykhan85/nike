import { CustomButton } from ".";
import Image from "next/image";

export default function SuperQuality() {
    return (
        <section className="flex items-center justify-between gap-10 padding max-lg:flex-col max-container" id="about-us">
            <div className="flex flex-col">
                <h2 className=" font-palanquin text-4xl lg:max-w-lg capitalize max-sm:text-[50px] max-sm:leading-[1.2] font-bold ">
                    We provide you
                    <span className="text-coral-red "> super</span>
                    <span className="text-coral-red "> quality</span> Shoes
                </h2>
                <p className="my-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odit veniam quaerat maiores quod amet illo unde? Dignissimos quas corporis, officia iure velit magnam perferendis quis odit hic autem dolor!</p>

                <p className="my-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias ut laudantium natus tempore nobis?</p>

                <div>
                    <CustomButton label='Shop now'
                        customStyle='rounded-full bg-coral-red border-coral-red group text-white font-montserrat text-lg leading-none shadow-lg px-7 py-4'
                    />
                </div>

            </div>

            <div className="flex items-center justify-center flex-1">
                <Image
                    src='/images/shoe8.svg'
                    width={570}
                    height={522}
                    className='object-contain'
                    alt="popular shoe"
                />
            </div>
        </section>
    )
}
