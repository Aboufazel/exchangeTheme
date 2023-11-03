import Style from '@/styles/components/CoinBox.module.scss'
import CoinCard from "@/components/CoinCard/CoinCard";
import {GetExchangerCoin} from "@/Api/ExchangerApi";
import {useEffect, useState} from "react";
import Loader from "../Loader/Loader"
import {useRouter} from "next/router";

const CoinPayBox = () => {

    const router = useRouter();

    const [coin, setCoin] = useState(undefined)
    const ManageGetCoin = async () => {
        const CoinResponse = await GetExchangerCoin()
        setCoin(CoinResponse.data.gateways)

    }


    const ManageRouter = (payCoin)=>{
        router.push({query:`pay=${payCoin}`}).then()
    }

    const ManageAlert = (name)=>{
        console.log(name)
    }


    useEffect(() => {
        ManageGetCoin().then()
    }, [])

    return (
        <div className={`${Style.coinSelectBox}
        ${router.query.pay !== undefined ?router.query.get !== undefined ?
            `${Style.width85}` : "" : "" } 
        flex items-center`}>

            <div className={`${Style.coinsBox}`}>

                <p className={`${Style.selectCoinTitle} font-bold`}>
                    {"You Pay"}
                    <span className={`${Style.selectCoinText} font-thin`}>
                       Your chosen currency to send
                    </span>
                </p>

                <div className={`${Style.scrollBox}`}>
                    {
                        coin === undefined ? (
                            <div className={`flex justify-center items-center`}>
                                <Loader/>
                            </div>
                        ) : coin.map(item => (
                            <div onClick={()=>ManageRouter(item.id)} onMouseEnter={()=>ManageAlert(item.name)} key={`coin-exchange-pay-${item.id}`}>
                                <CoinCard name={item.name} coinIcon={item.icon}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default CoinPayBox;