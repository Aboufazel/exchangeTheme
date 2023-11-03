import Style from "@/styles/components/CoinBox.module.scss";
import {useEffect, useState} from "react";
import {GetExchangerCoin} from "@/Api/ExchangerApi";
import Loader from "@/components/Loader/Loader";
import CoinCard from "@/components/CoinCard/CoinCard";
import {useRouter} from "next/router";


const CoinGetBox = () => {



    const [coin, setCoin] = useState(undefined);
    const [direct , setDirect] = useState(undefined);
    const router = useRouter();


    const [load , setLoad] = useState(false);
    const ManageGetCoin = async () => {
        const CoinResponse = await GetExchangerCoin()

        setCoin(CoinResponse.data.gateways)
        //setLoad(!load)
        if (coin !== undefined){
            coin.map(item =>{
                setDirect(item.directions);
            })
        }else {
            setLoad(!load)
        }
    }



    useEffect(() => {
        ManageGetCoin().then()
    }, [load])


    const ManageRouter = (payCoin)=>{
        router.push({query:`pay=${router.query.pay}&get=${payCoin}`})
    }


    return (
        <div className={`${Style.coinSelectBox} ${router.query.pay !== undefined ?router.query.get !== undefined ? 
            `${Style.width85}` : "" : "" } flex items-center`}>

            <div className={`${Style.coinsBox}`}>

                <p className={`font-bold ${Style.selectCoinTitle}`}>
                    {"You Get"}
                    <span className={`${Style.selectCoinText} font-thin`}>
                       Your chosen currency to send
                    </span>
                </p>

                <div className={`${Style.scrollBox}`}>

                    {
                        direct === undefined ? (
                            <div className={`flex justify-center items-center`}>
                                <Loader/>
                            </div>
                        ) : direct.map(item => (
                            <div onClick={()=>ManageRouter(item.id)} key={`coin-exchange-${item.id}`}>
                                <CoinCard name={item.name} coinIcon={item.icon}/>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}




export default CoinGetBox;