import Image from "next/image";

export default function ProductCard({ name, price, imgURL }) {

    return (
        <div className='flex flex-col'>
            <Image
                src={imgURL}
                className='flex-1'
                alt="shoe"
            />

            <div className="mt-4 flex justify-start gap-2.5">
                <Image src='/icons/star.svg' width={24} height={24} alt='star icon' />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">4.5</p>
            </div>

            <h3 className="mt-2 font-palanquin text-2xl leading-normal font-semibold">{name}</h3>
            <p className="font-montserrat text-coral-red text-xl leading-normal">{price}</p>
        </div>
    )
}
