
import Style from "@/styles/components/OrderStatusInfo.module.scss"

const OrderStatusInfo = ({title ,  info}) => {


    return(
        <div className={`flex items-center w-full justify-between text-white ${Style.orderInfoBox}`}>
            <div className={"text-white font-normal text-[14px]"}>
                You Send
            </div>

            <div className={"text-white font-bold text-[14px]"}>
                1.000 USD TRC20
            </div>
        </div>
    )
}


export default OrderStatusInfo;