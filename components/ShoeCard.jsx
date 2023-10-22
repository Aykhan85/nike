'use client'

import Image from "next/image";

export default function ShoeCard({ shoe, changeBigShoeImage, bigShoeImg, setBigShoeImg }) {

    const handleClick = () => {
        if (bigShoeImg !== shoe.bigShoe) {
            changeBigShoeImage(shoe.bigShoe)
        }
    }
    return (
        <div className={`
        border-2 rounded-xl cursor-pointer max-sm:flex-1
        ${bigShoeImg === shoe.bigShoe
                ? 'border-coral-red'
                : 'border-transparent'
            }
        `}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <Image
                    src={shoe.thumbnail}
                    alt="shoe image"
                    width={127}
                    height={103}
                    className='object-contain'
                />
            </div>
        </div>
    )
}
