import Style from "@/styles/components/WalletInfo.module.scss"

import CardTick from "@/assets/svg/tabIcon/card-tick.svg"
import Wallet from "@/assets/svg/tabIcon/empty-wallet.svg"
import ActiveWallet from "@/assets/svg/tabIcon/activeWallet.svg"
import ActiveReceipt from "@/assets/svg/tabIcon/activeReceip.svg"
import WebMoney from "@/assets/svg/WebMoney.svg"
import Sms from "@/assets/svg/social/sms.svg"
import ActiveCardTick from "@/assets/svg/tabIcon/activeCard.svg"
import Receipt from "@/assets/svg/tabIcon/receipt-text.svg"
import ArrowDown from "@/assets/svg/tabIcon/arrow-down.svg"
import Image from "next/image";
import FeeBlock from "@/components/FeeBlock/FeeBlock";
import SelectionInfo from "@/components/SelectionInfo/SelectionInfo";
import WalletBackBtn from "@/components/WalletBackBtn/WalletBackBtn";
import {useState} from "react";
import OrderStatusInfo from "@/components/OrderStatusInfo/OrderStatusInfo";
import PerfectMoney from "@/assets/svg/PerfectMoney.svg"
import UserDetail from "@/components/UserDetail/UserDetail";
import CopyTrackId from "@/components/CopyTrackId/CopyTrackId";
import Counter from "@/components/Counter/Counter";
import Qrcode from "@/assets/images/QrCode.png"


const WalletInfo = () => {

    const [step, setStep] = useState("step1");

    const manageStep = (stepValue) => {
        setStep(stepValue)

        setTimeout(() => {
            setStep("step1");
        }, 5000)

    }

    return (
        <div className={"flex flex-row-reverse mt-[68px]"}>

            <div className={"flex flex-col gap-3 justify-center items-center w-1/6"}>
                <div
                    className={`flex flex-col gap-4 items-center justify-center ${step === "step1" ? Style.WalletInfoTab : Style.DisableWalletInfoTab}`}>
                    <div
                        className={`flex items-center justify-center ${step === "step1" ? Style.ActiveStepNumber : Style.StepNumber}`}>
                        {"1"}
                    </div>
                    <div className={step === "step1" ? Style.ActiveLight : ""}/>
                    <Image src={step === "step1" ? ActiveWallet : Wallet} alt={"information"}/>
                    <p className={`font-bold text-[16px] ${step === "step1" ? Style.TabTitle : Style.disableTitle}`}>
                        Wallet Info
                    </p>
                </div>

                <Image src={ArrowDown} alt={"arrow-icon"}/>

                <div
                    className={`flex flex-col gap-4  items-center justify-center ${step === "step2" ? Style.WalletInfoTab : Style.DisableWalletInfoTab}`}>
                    <div
                        className={`flex items-center justify-center ${step === "step2" ? Style.ActiveStepNumber : Style.StepNumber}`}>
                        {"2"}
                    </div>

                    <div className={step === "step2" ? Style.ActiveLight : ""}/>
                    <Image src={step === "step2" ? ActiveReceipt : Receipt} alt={"information"}/>
                    <p className={`font-bold text-[16px] ${step === "step2" ? Style.TabTitle : Style.disableTitle}`}>
                        Review Order
                    </p>
                </div>
                <Image src={ArrowDown} alt={"arrow-icon"}/>
                <div
                    className={`flex flex-col gap-4 items-center justify-center ${step === "step3" ? Style.WalletInfoTab : Style.DisableWalletInfoTab}`}>
                    <div
                        className={`flex items-center justify-center ${step === "step3" ? Style.ActiveStepNumber : Style.StepNumber}`}>
                        {"3"}
                    </div>
                    <div className={step === "step3" ? Style.ActiveLight : ""}/>
                    <Image src={step === "step3" ? ActiveCardTick : CardTick} alt={"information"}/>
                    <p className={`font-bold text-[16px] ${step === "step3" ? Style.TabTitle : Style.disableTitle}`}>
                        Pay Order
                    </p>
                </div>
            </div>


            {
                step === "step1" ?

                    <div className={`flex relative flex-col gap-6  w-5/6 ${Style.InfoIndex}`}>

                        <WalletBackBtn/>

                        <h3 className={"text-white text-center font-bold"}>
                            We require from you
                        </h3>

                        <div className={"flex gap-2  w-full"}>
                            <div className={`flex flex-col gap-10 w-1/2 `}>
                                <div className={`relative w-full ${Style.selectionBox}`}>
                                    <input type={"text"} placeholder={"webmoney Account"}/>
                                    <Image className={Style.WalletAddress} src={WebMoney} alt={"wallet-address"}/>
                                </div>

                                <div className={`relative w-full ${Style.selectionBox}`}>
                                    <input type={"text"} placeholder={"Your Email Address"}/>
                                    <Image width={18} height={18} className={Style.WalletAddress} src={Sms}
                                           alt={"email-address"}/>
                                </div>

                                <SelectionInfo/>
                            </div>
                            <div className={`flex flex-col gap-10 w-1/2 `}>
                                <FeeBlock title={"Free"}/>
                                <FeeBlock title={"Exchange fee"}/>
                                <FeeBlock title={"Exchange rate"}/>
                            </div>
                        </div>

                        <div className={`flex justify-start text-start items-center ${Style.agreeTick}`}>
                            <input type="checkbox" className="mr-2"/>
                            <p>
                                I agree and am familiar with the terms of the service , as well as the AML policy.
                            </p>
                        </div>

                        <button onClick={() => manageStep("step2")} className={"exchange-button"}>
                            EXCHANGE
                        </button>
                    </div>

                    : step === "step2" ?

                        <div className={`flex relative flex-col gap-6 w-5/6 ${Style.InfoIndex}`}>

                            <WalletBackBtn/>

                            <h3 className={"text-white text-center font-bold"}>
                                Order status
                            </h3>

                            <div className={"flex relative gap-2 w-full"}>
                                <div className={"flex flex-col gap-[45px] w-1/2 "}>

                                    <div className={"flex flex-col items-center gap-2 w-full px-[63px]"}>
                                        <Image width={65} height={65} src={PerfectMoney} alt={"pay-money"}/>
                                        <OrderStatusInfo/>
                                        <OrderStatusInfo/>
                                        <OrderStatusInfo/>
                                        <OrderStatusInfo/>
                                    </div>

                                    <button onClick={() => manageStep("step3")} className={"exchange-button"}>
                                        PAY ORDER
                                    </button>
                                </div>
                                <div className={Style.stepDivider}/>

                                <div className={"flex flex-col relative gap-[45px] w-1/2 "}>

                                    <div className={"flex flex-col items-center gap-2 w-full px-[63px]"}>
                                        <Image width={65} height={65} src={PerfectMoney} alt={"pay-money"}/>
                                        <OrderStatusInfo/>
                                        <OrderStatusInfo/>
                                        <OrderStatusInfo/>
                                    </div>

                                    <div className={"flex w-full absolute bottom-[0]"}>
                                        <button onClick={() => manageStep("step1")} className={"w-full cancel-button"}>
                                            CANCEL
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        : step === "step3" ?

                            <div className={`flex relative flex-col gap-10  w-5/6 ${Style.InfoIndex}`}>

                                <h3 className={"text-white text-center font-bold"}>
                                    Order status
                                </h3>

                                <div className={"flex w-[125px] absolute right-[20px] top-[20px]"}>
                                    <button onClick={() => manageStep("step1")} className={"w-full cancel-button"}>
                                        CANCEL
                                    </button>
                                </div>

                                <div className={"flex gap-2  w-full"}>
                                    <div className={`flex flex-col px-[18px] gap-2 w-1/2 `}>
                                        <div className={"flex gap-5  w-full"}>
                                            <div className={"flex flex-col gap-[45px] w-1/2 "}>

                                                <div className={"flex flex-col items-center gap-2 w-full"}>
                                                    <Image width={40} height={40} src={PerfectMoney} alt={"pay-money"}/>
                                                    <OrderStatusInfo/>
                                                    <OrderStatusInfo/>
                                                    <OrderStatusInfo/>
                                                    <OrderStatusInfo/>
                                                </div>

                                            </div>

                                            <div className={"flex flex-col relative gap-[45px] w-1/2 "}>

                                                <div className={"flex flex-col items-center gap-2 w-full"}>
                                                    <Image width={40} height={40} src={PerfectMoney} alt={"pay-money"}/>
                                                    <OrderStatusInfo/>
                                                    <OrderStatusInfo/>
                                                    <OrderStatusInfo/>
                                                </div>

                                            </div>
                                        </div>
                                        <UserDetail/>
                                    </div>

                                    <div className={`flex flex-col gap-10 w-1/2 `}>
                                        <p className={"font-semibold text-[16px] text-justify mt-[40px]"}>
                                            your order status changed to “pending” . it means that your payment has been
                                            approved and you will receive your funds as soon as possible . do not hesitate
                                            to contact ou 24/7 customer support if you have any questions about your
                                            exchange order .
                                        </p>

                                        <CopyTrackId/>

                                        <div className={"flex  items-center justify-between"}>
                                            <p className={`font-semibold ${Style.Attachment}`} href={"#"}>
                                                Arziclub Adress
                                            </p>

                                            <p className={"font-light text-[12px]"}>
                                                Receiving amount will be updated after timer runs out
                                            </p>


                                        </div>


                                        <div className={"flex  items-center justify-between"}>
                                            <Image src={Qrcode} alt={"address"}/>
                                            <Counter/>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            : ""
            }

        </div>
    )
}


export default WalletInfo;