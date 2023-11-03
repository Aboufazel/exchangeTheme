import PageTitle from "@/components/PageTitle/PageTitle";
import TestimonialInput from "@/components/TestimonialInput/TestimonialInput";
import SwiperComponents from "@/components/Swiper/SwiperComponents";


const Testimonial = () => {

    return(
    <div className={"p-6 lg:px-8"}>
        <PageTitle title={"TESTIMONIAL"}/>
        <div className="grid lg:grid-cols-2 items-center">
            <div className={"lg:flex hidden justify-start"}>
                <TestimonialInput/>
            </div>
            <div className={"lg:flex hidden justify-start items-center"}>
                <SwiperComponents/>
            </div>
        </div>
    </div>
    )
}


export default Testimonial;