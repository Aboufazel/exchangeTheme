import Style from "@/styles/components/TrackingCodeBlock.module.scss"
import Image from "next/image";
import PerfectMoney from "@/assets/svg/PerfectMoney.svg";
import OrderStatusInfo from "@/components/OrderStatusInfo/OrderStatusInfo";
import UserDetail from "@/components/UserDetail/UserDetail";
import {useState} from "react";
import SecondaryLoader from "@/components/Loader/SecondaryLoader";
import SecondaryOrderStatusInfo from "@/components/OrderStatusInfo/SecondaryOrderStatusInfo";


const TrackingCodeBlock = () => {

    const [gateway , setGateway] = useState(false)


    return (
        <div className={`flex flex-col ${Style.trackingCodeBox}`}>
            {
                gateway ?
                    <>
                        <h3 className={"text-white text-center font-bold"}>
                            Order status
                        </h3>
                        <div className={"flex gap-5 w-full"}>
                            <div className={"flex flex-col gap-[45px] w-1/2 "}>
                                <div className={"flex gap-5  w-full"}>
                                    <div className={"flex flex-col gap-[45px] w-1/2 "}>

                                        <div className={"flex flex-col items-center gap-2 w-full"}>
                                            <Image width={40} height={40}
                                                   src={PerfectMoney}
                                                   alt={"pay-money"}
                                                   className={"mb-[5px]"}
                                            />
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                        </div>

                                    </div>

                                    <div className={"flex flex-col relative gap-[45px] w-1/2 "}>

                                        <div className={"flex flex-col gap-2 w-full"}>
                                            <p className={"font-bold text-start mt-[25px] text-[14px]"}>
                                                Payment status perfectmoney USD
                                            </p>
                                            <SecondaryOrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                        </div>

                                    </div>
                                </div>
                                <UserDetail/>
                            </div>
                            <div className={"flex flex-col gap-[45px] w-1/2 "}>
                                <div className={"flex gap-5  w-full"}>
                                    <div className={"flex flex-col gap-[45px] w-1/2 "}>

                                        <div className={"flex flex-col items-center gap-2 w-full"}>
                                            <Image width={40} height={40}
                                                   src={PerfectMoney}
                                                   alt={"pay-money"}
                                                   className={"mb-[7px]"}
                                            />
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                        </div>

                                    </div>

                                    <div className={"flex flex-col relative gap-[45px] w-1/2 "}>

                                        <div className={"flex flex-col gap-2 w-full"}>
                                            <p className={"font-bold text-start mt-[25px] text-[14px]"}>
                                                Payment status perfectmoney USD
                                            </p>
                                            <SecondaryOrderStatusInfo/>
                                            <OrderStatusInfo/>
                                            <OrderStatusInfo/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </> :
                    <div className={"flex flex-col h-full items-center justify-center"}>
                        <SecondaryLoader/>
                        <p className={"font-bold mt-[25px] text-[24px]"}>
                            Loading for connect to gateway
                        </p>
                    </div>
            }
        </div>
    )
}


export default TrackingCodeBlock;