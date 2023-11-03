import Style from "@/styles/components/MobileWalletInfo.module.scss";


const MobileStepTitle = ({title}) => {


    return(
        <div
            className={`relative flex items-center justify-center right-[0px] top-[-15px] ${Style.mobileStepNumber}`}>
            <p className={"font-bold text-[12px]"}>
                {title}
            </p>
        </div>
    )
}


export default MobileStepTitle;