import Image from "next/image"

export default function CustomButton({ label, customStyle, icon, iconW, iconH, alt, iconStyle }) {
    return (
        <button className={` flex justify-center items-center gap-2  ${customStyle}`}>
            {label}

            {icon && (
                <Image src={icon} width={iconW} height={iconH} alt={alt} className={iconStyle} />
            )}
        </button>
    )
}
