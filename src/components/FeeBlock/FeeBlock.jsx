import Style from "@/styles/components/AmountBlock.module.scss";

const FeeBlock = ({title , text}) => {

    return(
        <div className={`flex items-center justify-between ${Style.feeBlock}`}>
            <p className={Style.title}>
                {title}
            </p>
            <p className={Style.text}>
                In publishing and graphic design , Lorem ipsum is a placeholder text
            </p>
            <p className={Style.percent}>
                {"0"}%
            </p>
        </div>
    )
}


export default FeeBlock;