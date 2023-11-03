import Style from "@/styles/components/CoinCard.module.scss"
import Icon from "@/assets/svg/PerfectMoney.svg"
import Arrow from "@/assets/svg/arrow-right.svg"
import Image from "next/image";

const CoinCard = ({coinIcon , name}) => {
    return (
        <div className={`${Style.coinCard}`}>
            <div className={`${Style.selectGreenLight}`}></div>
            <div className={`${Style.coinIcon}`}>
                <Image src={Icon} alt={"exchanger-coin"} width={30} height={30}/>
            </div>
            <div className={`${Style.coinTitle}`}>
                {name}
            </div>
            <div className={`${Style.arrowRight} flex items-center`}>
                <Image src={Arrow} alt={"exchanger-coin"} className={Style.icon}/>
            </div>
        </div>
    )
}


export default CoinCard;