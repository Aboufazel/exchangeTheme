import Style from "@/styles/components/OrderStatusInfo.module.scss";


const SecondaryOrderStatusInfo = ()=>{

    return(
        <div className={`flex items-center w-full justify-between text-white ${Style.secondaryOrderInfoBox}`}>
            <div className={"text-white font-normal text-[14px]"}>
                Status
            </div>

            <div className={`text-white font-bold text-[14px] ${Style.paidStatus}`}>
                Paid
            </div>
        </div>
    )
}



export default SecondaryOrderStatusInfo;