import { reviews } from "@/constants";
import { ReviewCard } from ".";

export default function CustomerReviews() {
    return (
        <section className="max-container bg-pale-blue padding">
            <h3 className="text-4xl font-bold text-center font-palanquin">
                What Our
                <span className="text-coral-red"> Costumers </span>
                Say?
            </h3>
            <p className="max-w-lg m-auto mt-4 text-center info-text">Hear genuine from our satisfied customers about their expectional experiences with us</p>
            <div className="flex items-center flex-1 mt-24 justify-evenly max-lg:flex-col gap-14">
                {
                    reviews.map(review => (
                        <ReviewCard
                            key={review.id}
                            imgURL={review.imgURL}
                            customerName={review.customerName}
                            rating={review.rating}
                            feedback={review.feedback}
                        />
                    ))
                }
            </div>
        </section>
    )
}
