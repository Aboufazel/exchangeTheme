import Style from "@/styles/components/MobileWalletInfo.module.scss";
import Image from "next/image";
import WebMoney from "@/assets/svg/WebMoney.svg";
import Sms from "@/assets/svg/social/sms.svg";
import WalletBackBtn from "@/components/WalletBackBtn/WalletBackBtn";
import SelectionInfo from "@/components/SelectionInfo/SelectionInfo";
import {useState} from "react";
import Wallet from "@/assets/svg/tabIcon/empty-wallet.svg";
import OrderReview from"@/assets/svg/tabIcon/receipt-text.svg"
import MobileStepTitle from "@/components/MobileStepTitle/MobileStepTitle";
import PerfectMoney from "@/assets/svg/PerfectMoney.svg"
import OrderStatusInfo from "@/components/OrderStatusInfo/OrderStatusInfo";
import UserDetail from "@/components/UserDetail/UserDetail";


const MobileWalletInfo = () => {

    const [step, setStep] = useState("step1")


    return (

        <>
            {
                step === "step1" ?
                    <div className={`flex flex-col w-full relative ${Style.mobileWalletInfo}`}>

                        <div className={"absolute top-[5px] left-[5px]"}>
                            <WalletBackBtn/>
                        </div>

                        <div className={"flex flex-col w-full gap-4 items-start"}>

                            <MobileStepTitle title={"Wallet Info"}/>

                            <div className={"flex w-full"}>
                                <div className={`relative w-full ${Style.addressBox}`}>
                                    <input type={"email"} placeholder={"webMoney Account"}/>
                                    <Image src={WebMoney}
                                           alt={"wallet-address"}
                                           className={"absolute left-[10px]"}/>
                                </div>
                            </div>

                            <div className={"flex w-full"}>
                                <div className={`relative w-full ${Style.addressBox}`}>
                                    <input type={"email"} placeholder={"Your Email Address"}/>
                                    <Image src={Sms}
                                           width={18} height={18}
                                           alt={"email-address"}
                                           className={"absolute left-[8px]"}/>
                                </div>
                            </div>

                            <div className={"flex w-full"}>
                                <SelectionInfo/>
                            </div>

                            <div className={`flex justify-start text-start items-center ${Style.agreeTick}`}>
                                <input type="checkbox" className="mr-2"/>
                                <p className={"text-[9px]"}>
                                    I agree and am familiar with the terms of the service , as well as the AML policy.
                                </p>
                            </div>
                            <button onClick={() => {
                                setStep("step2")
                            }} className={"flex w-full exchange-button"}>
                                {"Exchange"}
                            </button>
                        </div>

                    </div>
                    :
                    step === "step2" ? <div className={`flex flex-col items-center w-full justify-center ${Style.doneStep}`}>
                        <Image src={Wallet} alt={"wallet"}/>
                        <p className={"mt-3"}>
                            Wallet Info Done
                        </p>
                    </div> : ""
            }

            {
                step === "step2" ?
                    <div className={`flex flex-col w-full relative mt-3 ${Style.mobileWalletInfo}`}>

                        <div className={"absolute top-[5px] left-[5px]"}>
                            <WalletBackBtn/>
                        </div>

                        <div className={"flex flex-col w-full gap-4 items-start"}>

                            <MobileStepTitle title={"Review Order"}/>


                            <div className={`flex flex-col items-center gap-[5px] justify-center w-full ${Style.mobilePayInfo}`}>
                               <Image src={PerfectMoney} alt={"perfectMoney"} className={"mb-2"}/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                            </div>

                            <div className={`flex flex-col items-center gap-[5px] justify-center w-full ${Style.mobilePayInfo}`}>
                                <Image src={PerfectMoney} alt={"perfectMoney"} className={"mb-2"}/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                            </div>

                            <div className={"flex justify-center gap-4 w-full"}>
                                <button onClick={() => {
                                    setStep("step3")
                                }} className={"flex w-1/2 exchange-button"}>
                                    {"Exchange"}
                                </button>

                                <button onClick={() => {
                                    setStep("step1")
                                }} className={"flex cancel-button w-1/2 "}>
                                    {"Cancel"}
                                </button>
                            </div>
                        </div>

                    </div>

                    :
                    step === "step3" ? <div className={`flex flex-col items-center w-full justify-center ${Style.doneStep}`}>
                        <Image src={OrderReview} alt={"wallet"}/>
                        <p className={"mt-3"}>
                            Order Review Done
                        </p>
                    </div> : ""
            }

            {
                step === "step3" ?
                    <div className={`flex flex-col w-full relative mt-3 ${Style.mobileWalletInfo}`}>

                        <div className={"absolute top-[5px] left-[5px]"}>
                            <WalletBackBtn/>
                        </div>

                        <div className={"flex flex-col w-full gap-4 items-start"}>

                            <MobileStepTitle title={"Pay Order"}/>


                            <div className={`flex flex-col items-center gap-[5px] justify-center w-full ${Style.mobilePayInfo}`}>
                                <Image src={PerfectMoney} alt={"perfectMoney"} width={30} className={"mb-2"}/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                            </div>

                            <div className={`flex flex-col items-center gap-[5px] justify-center w-full ${Style.mobilePayInfo}`}>
                                <Image src={PerfectMoney} alt={"perfectMoney"} width={30} className={"mb-2"}/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                                <OrderStatusInfo/>
                            </div>

                            <div className={"flex items-center justify-start w-full "}>
                                <UserDetail/>
                            </div>

                            <div className={"flex justify-center gap-4 w-full"}>
                                <button onClick={() => {
                                    setStep("step1")
                                }} className={"flex cancel-button w-full"}>
                                    {"Cancel"}
                                </button>
                            </div>
                        </div>

                    </div>
                    :
                    ""
            }

        </>
    )
}


export default MobileWalletInfo;