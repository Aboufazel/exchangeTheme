import Style from '../../styles/components/AboutExchanger.module.scss'
import Image from "next/image";
import AllCoins from "../../assets/images/AllCoins.png"


const AboutExchanger = () => {


    return (
        <div className={`relative  flex items-center justify-between ${Style.AboutExchangerCard}`}>
            <div className={"lg:w-2/3"}>
                <h2 className={`font-black  ${Style.CardTitle}`}>
                    {"Arziclub Exchange"}
                </h2>
                <p className={`font-thin  text-center lg:text-justify ${Style.CardText}`}>
                    {"HiExchange is just what everyone in the cryptocurrency world needs. We perform all sorts of exchanges between various Crypto and  Digital  currencies."}
                </p>
            </div>
            <Image className={`lg:block absolute hidden ${Style.CardImage}`} src={AllCoins} alt={"exchanger-coin-support"}/>
        </div>
    )
}


export default AboutExchanger;