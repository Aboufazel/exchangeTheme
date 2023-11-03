import Style from "@/styles/components/AmountBlock.module.scss"
import PerfectMoney from "@/assets/svg/TrustCoin/PerfectMoney.png"
import Image from "next/image";
import SelectionInfo from "@/components/SelectionInfo/SelectionInfo";
import FeeBlock from "@/components/FeeBlock/FeeBlock";

const AmountBlock = () => {

    return (
        <div className={`grid grid-cols-1 gap-10 ${Style.amountBox}`}>
            <h3 className={`font-semibold ${Style.amountTitle}`}>
                {"Ammount"}
            </h3>

            <div className={"grid grid-cols-2 gap-2"}>

                <div className={`flex flex-col gap-10 ${Style.selectionBlock}`}>
                    <div className={"flex justify-between gap-5"}>
                        <div className={`${Style.lableBox}`}>
                            <p className={Style.inputTitle}>
                                {"You pay"}
                                <span className={`text-[12px] ${Style.inputText}`}>
                               {"MIN 10 | MAX 1000"}
                            </span>
                            </p>
                        </div>

                        <div className={`relative ${Style.selectionBox}`}>
                            <input type={"number"} placeholder={"pay amount"}/>
                            <Image width={25} src={PerfectMoney} alt={"pay-coin"} className={Style.payCoin}/>
                            <select className={"select-input w-35"} name="select-coin">
                                <option value="pusd">PUSD</option>
                            </select>
                        </div>
                    </div>

                    <div className={"flex justify-between gap-5"}>
                        <div className={`${Style.lableBox}`}>
                            <p className={Style.inputTitle}>
                                {"You get"}
                                <span className={`text-[12px] ${Style.inputText}`}>
                               {"MIN 10 | MAX 1000"}
                            </span>
                            </p>
                        </div>

                        <div className={`relative ${Style.selectionBox}`}>
                            <input type={"number"} placeholder={"get amount"}/>
                            <Image width={25} src={PerfectMoney} alt={"pay-coin"} className={Style.payCoin}/>
                            <select className={"select-input w-35"} name="select-coin">
                                <option value="pusd">PUSD</option>
                            </select>
                        </div>
                    </div>

                    <SelectionInfo/>

                    <div className={`flex items-center ${Style.agreeTick}`}>
                        <input type="checkbox" className="mr-2"/>
                        <p>
                            I agree and am familiar with the terms of the service , as well as the AML policy.
                        </p>
                    </div>
                </div>


                <div className={`flex flex-col gap-10`}>

                    <FeeBlock title={"Gateway fee"}/>
                    <FeeBlock title={"Exchange fee"}/>
                    <FeeBlock title={"Exchange rate"}/>

                </div>


            </div>

            <button className={"exchange-button"}>
                EXCHANGE
            </button>
        </div>
    )
}


export default AmountBlock;