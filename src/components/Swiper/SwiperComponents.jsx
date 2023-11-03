import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";
import {GetUserFeedBack} from "@/Api/ExchangerApi";
import Card from "@/styles/components/TestimonialSwiperCard.module.scss"
import Loader from "@/components/Loader/Loader";
import {Autoplay} from 'swiper';


import 'swiper/css';

import 'swiper/css/autoplay'




const SwiperComponents = () => {

    const [feedBack, setFeedBack] = useState(undefined)


    const ManageGetFeeds = async () => {
        const ResponseData = await GetUserFeedBack();
        setFeedBack(ResponseData)

    }

    useEffect(() => {
        ManageGetFeeds().then()
    }, [])




    return (

        <>
            <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                className="swiper"
                spaceBetween={5}
                slidesPerView={1}
                autoplay={true}
            >
                {
                    feedBack === undefined ? (
                            <div className={`flex justify-center items-center`}>
                                <Loader/>
                            </div>
                        ) :
                        feedBack.data.data.map(item => (
                            <>
                                <SwiperSlide className={"swiper-slide"}>
                                    <div key={`feedBack-${item.id}-${item.name}`}
                                         className={`grid grid-cols-2 ${Card.carouselCard}`}>
                                        <div
                                            className={`flex items-center w-1/6 justify-center text-white ${Card.avatarIcon}`}>
                                            {item.name}
                                        </div>

                                        <div className={"active-light"}/>

                                        <div className={"w-5/6 flex items-center"}>
                                            <p className={`text-white ${Card.userFeedback}`}>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))
                }
            </Swiper>
        </>
    )
}


export default SwiperComponents;