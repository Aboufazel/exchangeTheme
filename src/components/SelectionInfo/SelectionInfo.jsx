import Style from "@/styles/components/AmountBlock.module.scss";

const SelectionInfo = () => {

    return(
        <div className={`text-[12px] ${Style.selectionInfo}`}>
            <div className={Style.leftSide}>
                {"You send paypal USD"}
            </div>
            <div className={`text-end ${Style.rightSide}`}>
                {"You get 0.00 webmoney USD"}
            </div>
        </div>
    )
}



export default SelectionInfo;