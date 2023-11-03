import Style from "@/styles/components/CommentsCard.module.scss"
import Link from "next/link";

const CommentsCard = () => {

    return (
        <div className={`${Style.commentCard}`}>
            <div className={`${Style.userBlock} flex items-center`}>
                <div className={Style.writerProfile}/>
                <p className={`${Style.writerName} text-white flex-col ml-3 mb-0`}>
                    <span className={"font-bold"}>Edward</span>
                    <span className={Style.date}>
                              2023-02-19
                            </span>
                </p>
            </div>
            <div className={Style.Light}/>
            <p className={"text-white mt-2 mb-4"}>
                Quick Service available Support Simple platform Legit varity of exchange E-wallet . The best thing is
                that they have an excellent customer service that reply immediately for solving any issue that might
                occur.
            </p>
            <div className={"flex w-full justify-end"}>
                <Link href={"#"}>
                    <button className="exchange-button py-2 px-5">
                        {"REPLY"}
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default CommentsCard;