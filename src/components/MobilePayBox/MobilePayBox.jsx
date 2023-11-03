import Style from "@/styles/components/MobilePayBox.module.scss"
import Image from "next/image";
import PerfectMoney from "@/assets/svg/TrustCoin/PerfectMoney.png";
import {useEffect, useState} from "react";
import {GetExchangerCoin} from "@/Api/ExchangerApi";
import MobileWalletInfo from "@/components/WalletInfo/MobileWalletInfo";
import {useRouter} from "next/router";

const MobilePayBox = () => {

    const [get, setGet] = useState({getCoin: "", payCoin: "" ,
        getAmount:"" , payAmount:"" });



    const router = useRouter();








    const [coin, setCoin] = useState(undefined);
    const [direct, setDirect] = useState(undefined);
    const [load, setLoad] = useState(false);

    const [walletStep, setWalletStep] = useState(false);

    const ManageGetCoin = async () => {
        const CoinResponse = await GetExchangerCoin()

        setCoin(CoinResponse.data.gateways);
        if (coin !== undefined){
            coin.map(item =>{
                setDirect(item.directions);
            })
        }else {
            setLoad(!load)
        }
    }



    function ManageOrder(){
        router.push({query:`pay=${get.payCoin}&get=${get.getCoin}`})
    }




    const ManageWalletStep = () => {
        ManageOrder();
        setWalletStep(true);
    }

    useEffect(() => {
        ManageGetCoin().then()
    }, [load])


    const ManageSelectChange = (e) => {
        e.preventDefault();
        setGet({...get, [e.target.name]: e.target.value});
    }


    return (
        <>
            {
                walletStep ? "" :
                    <div className={`flex w-full gap-4 ${Style.mobilePayBlock}`}>

                        <div className={"flex flex-col gap-1 w-1/2"}>

                            <div className={"flex justify-between items-center"}>
                                <p className={"font-bold text-[12px]"}>
                                    {"You pay"}
                                </p>

                                <p className={"font-normal text-[12px]"}>
                                    {"reserve:"}
                                </p>
                            </div>

                            <div className={`relative ${Style.selectionBox}`}>
                                <Image width={25} src={PerfectMoney} alt={"pay-coin"} className={Style.payCoin}/>
                                <select required name="payCoin" onChange={ManageSelectChange}
                                        className={"select-input w-[75px]"}>
                                    <option value={router.query.pay}>
                                        {router.query.pay !== "" ? router.query.pay : "select"}
                                    </option>
                                    {
                                        coin !== undefined ? coin.map(item => (
                                            <option value={item.name}>{item.name}</option>
                                        )) : ""

                                    }
                                </select>
                            </div>
                        </div>



                        <div className={"flex flex-col gap-1 w-1/2"}>

                            <div className={"flex justify-between items-center"}>
                                <p className={"font-bold text-[12px]"}>
                                    {"You get"}
                                </p>

                                <p className={"font-normal text-[12px]"}>
                                    {"reserve:"}
                                </p>


                            </div>

                            <div className={`relative ${Style.selectionBox}`}>
                                <Image width={25} src={PerfectMoney} alt={"pay-coin"} className={Style.payCoin}/>
                                <select required name={"getCoin"} onChange={ManageSelectChange}
                                        className={"select-input w-[75px]"}>
                                    <option value={router.query.get}>
                                        {router.query.get !== "" ? router.query.get : "select"}
                                    </option>
                                    {
                                        direct !== undefined ? direct.map(item => (
                                            <option value={item.name}>{item.name}</option>
                                        )) : ""

                                    }
                                </select>
                            </div>
                        </div>

                    </div>
            }

            {
                walletStep ? "" :
                    get.payCoin !== "" ? get.getCoin!== "" ?
                       <form onSubmit={()=>ManageWalletStep()} className={"w-full"}>
                        <div className={`flex flex-col gap-1 ${Style.amountBlock}`}>
                            <p className={"font-bold mb-3 text-center"}>
                                Amount
                            </p>


                            <div className={"flex flex-col gap-1  w-full"}>
                                <div className={"flex items-center justify-between"}>
                                    <p className={"flex flex-col font-semibold text-[12px]"}>
                                        {"You pay"}
                                        <span className={`text-[10px] font-normal`}>
                               {"MIN 10 | MAX 1000"}
                            </span>
                                    </p>

                                    <p className={"flex items-center gap-1 font-bold text-[12px]"}>
                                        {"Network fee:"}
                                        <span className={`text-[12px] font-normal`}>
                                  {"0%"}
                                </span>
                                    </p>
                                </div>

                                <div className={`relative ${Style.selectionBox}`}>
                                    <Image width={25} src={PerfectMoney} alt={"pay-coin"} className={Style.payCoin}/>
                                    <input required name={"getAmount"}
                                           value={get.getAmount}
                                           type={"number"}
                                           onChange={ManageSelectChange}
                                           placeholder={"pay amount"}
                                           className={"w-[100px]"}/>
                                    <select name="getCoin" onChange={ManageSelectChange}
                                            className={"select-input w-[60px]"}>
                                        <option onChange={ManageSelectChange} value={get.payCoin} selected>
                                            {get.payCoin}
                                        </option>
                                        {
                                            coin !== undefined ? coin.map(item => (
                                                <option onChange={ManageSelectChange}
                                                        value={item.name}>{item.name}</option>
                                            )) : ""
                                        }
                                    </select>
                                </div>
                            </div>


                            <div className={"flex flex-col gap-1 mt-[25px] w-full"}>
                                <div className={"flex items-center justify-between"}>
                                    <p className={"flex flex-col font-bold text-[12px]"}>
                                        {"You get"}
                                        <span className={`text-[10px] font-normal`}>
                               {"MIN 10 | MAX 1000"}
                            </span>
                                    </p>

                                    <p className={"flex items-center gap-1 font-bold text-[12px]"}>
                                        {"Exchange fee:"}
                                        <span className={`text-[12px] font-normal`}>
                                  {"0%"}
                                </span>
                                    </p>
                                </div>
                                <div className={`relative ${Style.selectionBox}`}>
                                    <Image width={25} src={PerfectMoney} alt={"pay-coin"} className={Style.payCoin}/>
                                    <input required
                                           type={"number"}
                                           name={"payAmount"}
                                           onChange={ManageSelectChange}
                                           value={get.payAmount}
                                           placeholder={"get amount"}
                                           className={"w-[100px]"}/>
                                    <select name="getCoin" onChange={ManageSelectChange}
                                            className={"select-input w-[60px]"}>
                                        <option onChange={ManageSelectChange} value={get.getCoin} selected>
                                            {get.getCoin}
                                        </option>
                                        {
                                            direct !== undefined ? direct.map(item => (
                                                <option onChange={ManageSelectChange}
                                                        value={item.name}>{item.name}</option>
                                            )) : ""
                                        }
                                    </select>
                                </div>
                            </div>

                            <button type={"submit"} className={"exchange-button mt-4"}>
                                {"Exchange"}
                            </button>

                        </div>
                       </form>
                        : <></> : <></>
            }

            {
                walletStep ? <MobileWalletInfo/> : ""
            }
        </>
    )
}


export default MobilePayBox;