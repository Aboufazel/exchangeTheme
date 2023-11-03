import Style from "../../styles/components/MainBlock.module.scss"
import Image from "next/image";
import IndexPic from "../../assets/images/IndexPic.png"
import CoinPayBox from "@/components/CoinPayBox/CoinPayBox";
import CoinGetBox from "@/components/CoinGetBox/CoinGetBox";
import Swap from "@/assets/svg/Swap.svg"
import {useState} from "react";
import WalletInfo from "@/components/WalletInfo/WalletInfo";
import AmountBlock from "@/components/AmmountBlock/AmountBlock";
import TrackingCodeBlock from "@/components/TrackingCodeBlock/TrackingCodeBlock";
import MobilePayBox from "@/components/MobilePayBox/MobilePayBox";
import {useRouter} from "next/router";

const ExchangerMainBlock = () => {

    const [walletInfo, setWalletInfo] = useState(false);
    const [tracking, setTracking] = useState(false);
    const [getState, setGetState] = useState(true);
    const router = useRouter();

    return (
        tracking ? <TrackingCodeBlock/> : walletInfo ? <WalletInfo/> : (<div className={`flex ${Style.mainBlock}`}>
            <Image className={Style.indexPic} src={IndexPic} alt={"exchanger-web"}/>
            <h1 className={`text-center ${Style.indexTitle}`}>
            <span className={`${Style.boldTitle} font-bold`}>
              <span className={Style.greenTitle}>A</span>RZICLUB
            </span>
                <span className={Style.lightTitle}>
               EXCHANGER
            </span>
            </h1>

            <div className={"relative hidden lg:flex items-start"}>
                <div onClick={() => setGetState(!getState)} className={Style.swap}>
                    <Image src={Swap} alt={"exchanger-coin"} className={Style.icon}/>
                </div>
                {
                    getState ?
                        <>
                            <CoinPayBox/>
                            <CoinGetBox/>
                        </> :
                        <>
                            <CoinGetBox/>
                            <CoinPayBox/>
                        </>
                }
            </div>

            <div className={"flex flex-col items-center w-full lg:hidden text-white"}>
                <MobilePayBox/>
            </div>

            <div className={"hidden lg:flex items-start w-full"}>
                {
                    router.query.pay !== undefined ? router.query.get !== undefined ? <AmountBlock/> :<></> :<></>
                }
            </div>
        </div>)
    )
}


export default ExchangerMainBlock