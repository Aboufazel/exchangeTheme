import Style from "@/styles/components/CommentsForm.module.scss";
import {SendUserFeedBack} from "@/Api/ExchangerApi";
import {useState} from "react";
import Image from "next/image";
import Comment from "@/assets/svg/comment.svg"
import User from "@/assets/svg/user.svg"
import Mail from "@/assets/svg/social/sms.svg"

const CommentsForm = () => {


    const [value, setValue] = useState({name: "", email: "", comment: ""});


    const ManageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }


    const MangeSendFeedBack = async (e) => {
        e.preventDefault();
        const SendFeedBack = await SendUserFeedBack(value.name, value.email, value.comment);
        ClearInput()

    }


    const ClearInput = () => {
        setValue({name: "", email: "", comment: ""})
    }


    return (
        <div className={`text-white mb-[25px] ${Style.CommentInputBlock}`}>

            <h3 className={`${Style.CommentInputTitle} flex-col font-bold`}>
                {"Your Comment"}
                <span className={`${Style.CommentInputHint} font-thin`}>
                  {"please type your comment"}
                </span>
            </h3>


            <h4 className={"mb-2"}>
                {"comment"}
            </h4>
            <form>
                <div className={"relative"}>
                    <Image src={Comment} alt={"user-comment"} className={"absolute top-[15px] left-[10px]"}/>
                    <textarea name={"comment"} value={value.comment}  required={true} placeholder={"please type your comment"} onChange={ManageChange}
                              className={Style.InputArea}/>
                </div>
                <div className={"flex flex-col relative gap-5 mt-3"}>
                    <div className={"flex-col justify-center"}>
                        <h5>
                            {"Name *"}
                        </h5>
                        <Image src={User} alt={"user-comment"} className={"absolute top-[40px] opacity-[20%] left-[10px]"}/>
                        <input name={"name"} value={value.name}   type={"name"} required={true} placeholder={"name"} onChange={ManageChange}
                               className={`mt-[5px] ${Style.NameInput}`}/>
                    </div>
                    <div className={"flex-col relative relative items-center justify-center"}>
                        <h5>
                            {"Email *"}
                        </h5>
                        <Image src={Mail} alt={"user-comment"} className={"absolute top-[39px] opacity-[20%] left-[5px]"}/>
                        <input name={"email"} value={value.email}  type={"name"} required={true} placeholder={"mail@website.com"} onChange={ManageChange}
                               className={`mt-[5px] ${Style.NameInput}`}/>
                    </div>
                    <button onClick={(e) => MangeSendFeedBack(e)} type={"submit"}
                            className="exchange-button py-2 px-5">
                        {"SUBMIT"}
                    </button>
                </div>
            </form>
        </div>
    )
}


export default CommentsForm