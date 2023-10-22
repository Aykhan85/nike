import { CustomButton } from ".";

export default function Subscribe() {
    return (
        <section className="gap-10 py-16 padding-x sm:py-32 max-container max-lg:flex-col" id='contact-us'>
            <h3 className="text-4xl leading-[68px] font-palanquin font-bold">Sign Up from
                <span className="text-coral-red"> Updates </span>
                & Newsletter
            </h3>
            <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 mt-2 p-2.5 sm:border sm:border-slate-gray rounded-full">
                <input type="text" placeholder="subscribe@nike.com" className="input" />
                <div className="flex items-center max-sm:justify-end max-sm:w-full">
                    <CustomButton
                        label='Sign Up'
                        customStyle='bg-coral-red rounded-full text-white max-sm:w-full max-sm:px-7 max-sm:py-4 px-3 py-2 '
                    />
                </div>
            </div>
        </section>
    )
}
