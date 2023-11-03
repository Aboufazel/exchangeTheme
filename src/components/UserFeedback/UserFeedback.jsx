import Block from "@/styles/components/InfoBlock.module.scss";
import SwiperComponents from "@/components/Swiper/SwiperComponents";
import Style from "../../styles/components/InfoBlock.module.scss"

const UserFeedback = () => {


    return (
        <div className={`lg:pl-10 lg:pr-20 text-white my-20 ${Block.infoBlock}`}>
            <div className={"hidden lg:flex lg:w-1/2"}>
                <SwiperComponents/>
            </div>
            <div className={"lg:w-1/2 lg:flex justify-end  mt-10 lg:mt-0"}>

                <h2 className={`${Block.infoBlockTitle} font-bold`}>
                    <span className={`text-base mb-2 font-bold ${Style.greenTitle}`}>
                      {"CLIENT FEEDBACK"}
                    </span>
                    What Do People
                    <span>
                    Say About Us  ...
                    </span>
                    <p className={`${Block.infoBlockText} lg:mt-10 mt-5 font-bold`}>
                        Check   out   the  highlighted  review   teasers  from  our  clients around  the  world .
                    </p>
                </h2>
            </div>
        </div>
    )
}


export default UserFeedback;