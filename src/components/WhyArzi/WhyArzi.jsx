import Style from "../../styles/components/WhyArzi.module.scss"
import Image from "next/image";
import {WhyArziData} from "@/Data/Data";
import Arrow from "@/assets/svg/arrow-right.svg"


const WhyArzi = () => {


    return (
        <div className={`flex-col justify-center items-center text-white ${Style.WhyArziBlock}`}>
            <h2 className={Style.firstTitle}>
                {"WHY ARZICLUB"}
            </h2>

            <div className={`lg:flex xs:flex-col xs:items-center lg:justify-center gap-5 lg:px-10 ${Style.desk}`}>
                {
                    WhyArziData.map(item =>(
                        <div key={`why-arzi-card-${item.id}`} className={Style.cardBox}>
                            <div className={`flex ${Style.cardInfo}`}>
                                <div className={Style.iconBox}>
                                    <Image className={Style.icon} alt="fees" src={item.image}/>
                                </div>
                                <h3 className={Style.title}>
                                    {item.name}
                                </h3>
                                <p className={Style.text}>
                                    {item.text}
                                </p>
                            </div>

                        </div>
                    ))
                }

            </div>

            <div className={Style.accordionBlock}>
                <div className={Style.accordions}>
                    {
                        WhyArziData.map(item => (
                            <div key={`why-mobile-acc-${item.id}`} className={Style.accordion}>
                                <input type="checkbox" id={item.for}/>
                                <label htmlFor={item.for} className={Style.accLabel}>
                                    <div className={Style.icon}>
                                        <Image src={item.image} alt={item.name} className={Style.labelIcon}/>
                                    </div>
                                    <p className={"font-bold text-[15px]"}>
                                        {item.name}
                                    </p>
                                    <Image src={Arrow} alt={"why=-arzi-club"} className={Style.arrowIcon}/>
                                </label>
                                <div className={Style.accContent}>

                                    <p>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}


export default WhyArzi;