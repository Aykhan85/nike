import Image from 'next/image'

export default function ReviewCard({ imgURL, feedback, rating, customerName }) {
    return (

        <div className="flex flex-col items-center justify-center">
            <Image
                src={imgURL}
                alt='customer'
                className="object-contain rounded-full"
                width={120}
                height={120}
            />
            <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <Image src='/icons/star.svg' width={24} height={24} className='object-contain' alt="star" />
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 text-3xl font-bold text-center font-palanquin">{customerName}</h3>
        </div>
    )
}
