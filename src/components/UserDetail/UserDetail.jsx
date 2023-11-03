import Style from "@/styles/components/UserDetail.module.scss"
import Link from "next/link";

const UserDetail = () => {


    return (
        <div className={`text-white ${Style.userDetail}`}>
            <p className={`px-[10px] pb-[4px] ${Style.userDetailTitle}`}>
                Your Details:
            </p>

            <div className={"flex flex-col w-full  px-[10px] gap-2"}>
                <div className={"flex  items-center justify-between"}>
                    <p className={"font-light text-[12px]"}>
                        Transaction screenshot (from your wallet)
                    </p>

                    <Link className={`font-semibold ${Style.Attachment}`} href={"#"}>
                        View Attachment
                    </Link>
                </div>

                <div className={"flex items-center justify-between"}>
                    <p className={"font-light text-[12px]"}>
                        Your Perfectmoney Account
                    </p>

                    <p className={"font-bold text-[12px]"}>
                        1234@gmail.com
                    </p>
                </div>

                <div className={"flex items-center justify-between"}>
                    <p className={"font-light text-[12px]"}>
                        Arziclub Tether TRC20 (USDT) Wallet
                    </p>

                    <p className={"font-bold text-[12px]"}>
                        TLP9vgeugusUFIHYFW47856
                    </p>
                </div>

                <div className={"flex items-center justify-between"}>
                    <p className={"font-light text-[12px]"}>
                        Email
                    </p>

                    <p className={" text-[12px] font-bold"}>
                        1234@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}


export default UserDetail;