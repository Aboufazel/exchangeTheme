import Style from "@/styles/layouts/footer.module.scss";
import Image from "next/image";
import Link from "next/link";

import FaceBook from "@/assets/svg/social/facebook.svg"
import Mail from "@/assets/svg/social/sms.svg"
import Instagram from "@/assets/svg/social/instagram.svg"
import Telegram from "@/assets/svg/social/send.svg"
import Logo from "@/assets/svg/logo.svg";

const Footer = () => {

    return (

        <div className={`${Style.footerBlock} m-6 text-white`}>

            <div className={`${Style.footerLogo} flex justify-center items-center`}>
                <Image width={35} src={Logo} alt={"arzi-exchanger"}/>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1">
                <div className="flex flex-col justify-center ">
                    <h4 className={"font-bold"}>
                        {"ARZICLUB EXCHANGER"}
                    </h4>
                    <p className={"lg:text-justify my-6 lg:w-60"}>
                        {"arziclub is an online Crypyocurrency\n" +
                            "and  Digital  Currency exchange . We\n" +
                            "value our customers anonymity and\n" +
                            "protection of their data ."}
                    </p>
                    <div className={"flex"}>
                        <Link href={"/"}>
                            <Image className={`mr-2 ${Style.social}`} src={FaceBook} alt={"arzi-facebook"}/>
                        </Link>
                        <Link href={"/"}>
                            <Image className={`mr-2 ${Style.social}`} src={Mail} alt={"arzi-mail"}/>
                        </Link>
                        <Link href={"/"}>
                            <Image className={`mr-2 ${Style.social}`} src={Instagram} alt={"arzi-instagram"}/>
                        </Link>
                        <Link href={"/"}>
                            <Image className={`mr-2 ${Style.social}`} src={Telegram} alt={"arzi-telegram"}/>
                        </Link>
                    </div>
                </div>

                <div className="flex-col">
                    <h4 className={"font-bold mt-6 lg:mb-6 lg:mt-0"}>
                        {"USEFULL LINKS"}
                    </h4>
                    <ul className={Style.list}>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"Home"}
                            </Link>
                        </li>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"About"}
                            </Link>
                        </li>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"Contact"}
                            </Link>
                        </li>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"Testimonial"}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-col">
                    <h4 className={"font-bold mt-6 lg:mb-6 lg:mt-0"}>
                        {"USEFULL LINKS"}
                    </h4>
                    <ul className={Style.list}>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"Home"}
                            </Link>
                        </li>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"About"}
                            </Link>
                        </li>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"Contact"}
                            </Link>
                        </li>
                        <li className={Style.item}>
                            <Link href={"/"}>
                                {"Testimonial"}
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex-col">
                    <h4 className={"font-bold mt-6 lg:mb-6 lg:mt-0"}>
                        {"CONTACT"}
                    </h4>
                    <ul className={Style.list}>
                        <li className={Style.item}>
                            {"Address : Boschstraße 1, 40882"}
                            <br/>
                            {"Ratingen, Germany"}
                        </li>
                        <li className={Style.item}>
                            {"Phone : +49 7531 4578888"}
                        </li>
                        <li className={Style.item}>
                            {"Mobile : +98091xxxxxxxx"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Footer;