import Style from "../../styles/components/TestimponialInput.module.scss"
import {useState} from "react";
import {SendUserFeedBack} from "@/Api/ExchangerApi";
import Comment from "@/assets/svg/comment.svg"
import User from "@/assets/svg/user.svg"
import Mail from "@/assets/svg/social/sms.svg"
import Image from "next/image";

const TestimonialInput = () => {


    const [value , setValue] = useState({name:"" , email:"" , comment:""})


    const ManageChange = (e) =>{
        setValue({...value , [e.target.name]:e.target.value});
    }


    const MangeSendFeedBack = async (e) =>{
        e.preventDefault();
        const SendFeedBack = await SendUserFeedBack(value.name , value.email , value.comment);
        ClearInput()

    }



    const ClearInput = ()=>{
        setValue({name:"" , email:"" , comment:""})
    }

    return (
        <div className={`${Style.TestInputBlock} text-white`}>
            <h3 className={`${Style.TestInputTitle} flex-col font-bold`}>
                {"testimonials"}
                <span className={`${Style.TestInputHint} font-thin`}>
                   please type your comment
                </span>
            </h3>


            <h4 className={"font-bold mb-2"}>
                {"comment"}
            </h4>
            <form>
                <div className={"relative"}>
                    <Image src={Comment} alt={"user-comment"} className={"absolute top-[15px] left-[10px]"}/>
                    <textarea value={value.comment} name={"comment"}  placeholder={"please type your comment"}  onChange={ManageChange} className={Style.InputArea}/>
                </div>
                <div className={"grid lg:grid-cols-3 gap-10 mt-3"}>
                    <div className={"flex-col relative justify-center"}>
                        <h5>
                            {"Name *"}
                        </h5>
                        <Image src={User} alt={"user-comment"} className={"absolute top-[35px] opacity-[20%] left-[10px]"}/>
                        <input value={value.name}  name={"name"}   type={"name"} placeholder={"name"} onChange={ManageChange}  className={Style.NameInput} />
                    </div>
                    <div className={"flex-col relative items-center justify-center"}>
                        <h5>
                            {"Email *"}
                        </h5>

                        <Image src={Mail} alt={"user-comment"} className={"absolute top-[34px] opacity-[20%] left-[5px]"}/>
                        <input value={value.email} name={"email"} type={"name"} placeholder={"mail@website.com"} onChange={ManageChange} className={Style.NameInput}/>
                    </div>
                    <div className={"flex justify-end items-end"}>
                        <button onClick={(e)=>MangeSendFeedBack(e) } type={"submit"} className="exchange-button py-2 px-5">
                            {"SUBMIT"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TestimonialInput;