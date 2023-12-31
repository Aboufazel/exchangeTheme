import Style from "@/styles/components/MainBlock.module.scss";
import Auth from "@/styles/components/Auth.module.scss"


import Image from "next/image";
import IndexPic from "@/assets/images/IndexPic.png";
import Head from "next/head";
import Link from "next/link";
import Mail from "@/assets/svg/social/sms.svg";
import {useState} from "react";
import OtherLogin from "@/assets/images/otherLogin.png"
import useTitle from "@/CustomHook/useTitle";

const Index = () => {

    const [value, setValue] = useState({email: ""});

    const ManageChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    }

    useTitle("Login")

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={"p-6 gap-10 text-white lg:px-8"}>
                <div className={`flex items-center ${Style.mainBlock}`}>
                    <Image className={Style.indexPic} src={IndexPic} alt={"exchanger-web"}/>
                    <h1 className={`text-center ${Style.indexTitle}`}>
            <span className={`${Style.boldTitle} font-bold`}>
              <span className={Style.greenTitle}>A</span>RZICLUB
            </span>
                        <span className={Style.lightTitle}>
               EXCHANGER
            </span>
                    </h1>

                    <div className={`relative w-1/2 flex flex-col items-start ${Auth.loginBox}`}>

                        <div className={"flex items-center"}>
                            <p className={"text-[18px] font-bold"}>
                                SING IN
                            </p>
                            <div className={`mx-[10px] ${Auth.titleDivider}`}/>
                            <p className={"text-[18px] font-bold"}>
                                SING UP
                            </p>
                        </div>

                        <p className={"text-[13px] mb-[50px] mt-[10px]"}>
                            To use ARZICLUB services , log in to your account . <Link href={"auth/register"}
                                                                                      className={`font-bold ${Auth.registerLink}`}>Register</Link> if
                            you don't have an account .
                        </p>

                        <div className={"flex-col w-full relative items-center justify-center"}>
                            <h5 className={'mb-[5px]'}>
                                {"Email *"}
                            </h5>

                            <Image src={Mail} alt={"user-comment"}
                                   className={"absolute top-[39px] opacity-[20%] left-[5px]"}/>
                            <input value={value.email} name={"email"} type={"name"} placeholder={"mail@website.com"}
                                   onChange={ManageChange} className={`${Auth.NameInput}`}/>
                        </div>

                        <button className={"exchange-button flex w-full mb-[50px] lg:mb-[80px] mt-[36px]"}>
                            Login
                        </button>


                        <div className={'flex w-full relative items-center justify-center'}>

                            <div className={Auth.otherLoginLeftLine}/>

                            <p className={"text-[12px]"}>
                                Or continue with
                            </p>

                            <div className={Auth.otherLoginRightLine}/>
                        </div>
                        <div className={"flex w-full justify-center items-center mt-[15px]"}>
                            <Image src={OtherLogin} alt={"login-exchanger"}/>
                        </div>
                    </div>


                </div>
            </div>
        </>


    )
}


export default Index;