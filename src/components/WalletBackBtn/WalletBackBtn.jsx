import Style from "@/styles/components/WalletBackBtn.module.scss"
import ArrowLeft from "@/assets/svg/arrow-left.svg"
import Image from "next/image";
import Link from "next/link";

const WalletBackBtn = (link) => {
    return (

        <div className={`absolute flex items-center justify-center ${Style.backBtn}`}>
            <Link href={link}>
                <Image src={ArrowLeft} alt={"back"}/>
            </Link>
        </div>

    )
}


export default WalletBackBtn;