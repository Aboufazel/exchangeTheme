import Image from "next/image";
import Post from "@/assets/images/post.png"
import instagram from "@/assets/svg/social/blog/instagram.png"
import telegram from "@/assets/svg/social/blog/Telegram.png"
import twitter from "@/assets/svg/social/blog/twitter.png"
import linkedin from "@/assets/svg/social/blog/linkedin.png"
import whatsapp from "@/assets/svg/social/blog/whatsapp.png"
import Clock from "@/assets/svg/clock.svg"
import Calender from "@/assets/svg/calendar.svg"

import ArrowLeft from "@/assets/svg/arrow-left.svg"
import CommentsCard from "@/components/Comments/CommentsCard";
import Style from "@/styles/components/BlogPost.module.scss";
import BlogPostPic from "@/assets/images/blogPics.png"
import CommentsForm from "@/components/Comments/CommentsForm";
import SecondaryBlogPostCard from "@/components/BlogPostCard/SecondaryBlogPostCard";
import Link from "next/link";
import Head from "next/head";


const BlogPost = () => {

    return (
        <>
            <div className={"flex items-center flex-col w-full p-6 lg:mt-[80px] lg:px-8"}>
                <Link href={"/blog"}>
                    <div className={`flex items-center relative justify-around ${Style.BlogBackBtn}`}>
                        <Image src={ArrowLeft} alt={"blog-post"} className={"absolute left-[8px]"}/>
                        <p className={"font-semibold ml-[18px]"}>
                            BLOG
                        </p>
                    </div>
                </Link>
                <div className={"container max-w-[800px]"}>
                    <div className={"flex my-4"}>
                        <Image src={Post} alt={"blog-post"}/>
                    </div>
                    <div className={"lg:flex hidden justify-between items-center my-4"}>
                        <div className={`${Style.BlogPostBadge} flex items-center justify-center text-white`}>
                            <p className={"font-bold"}>
                                {"development"}
                            </p>
                        </div>

                        <div className={`${Style.BlogPostData} flex items-center justify-between text-white`}>
                            <div className={"flex gap-1 items-center"}>
                                <Image src={Calender} alt={"write-date"}/>
                                2023-02-19
                            </div>

                            <div className={"flex gap-1 items-center"}>
                                <Image src={Clock} alt={"write-time"}/>
                                3 minutes
                            </div>
                        </div>
                    </div>
                    <h2 className={`${Style.BlogPostTitle} mb-3 font-semibold`}>
                        {"Introducing digital currency hardware wallets"}
                    </h2>
                    <p className={"text-white text-justify leading-10"}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.In publishing and graphic design,
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or
                        a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder
                        before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder
                        text commonly used to demonstrate the visual form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In
                        publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.In publishing and graphic design .
                    </p>


                    <div className={`${Style.TextDivider} my-10`}/>

                    <h2 className={`${Style.BlogPostTitle} mb-3 font-semibold`}>
                        {"Introducing digital currency hardware wallets"}
                    </h2>

                    <p className={"text-white text-justify leading-10"}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.In publishing and graphic design,
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or
                        a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder
                        before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder
                        text commonly used to demonstrate the visual form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In
                        publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.In publishing and graphic design .
                    </p>
                    <Image src={BlogPostPic} alt={"top-wallet"} className={"mt-5"}/>


                    <div className={`${Style.TextDivider} my-10`}/>

                    <h2 className={`${Style.BlogPostTitle} mb-3 font-semibold`}>
                        {"Introducing digital currency hardware wallets"}
                    </h2>

                    <p className={"text-white text-justify leading-10"}>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.In publishing and graphic design,
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or
                        a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder
                        before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder
                        text commonly used to demonstrate the visual form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In
                        publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                        may be used as a placeholder before final copy is available.In publishing and graphic design .
                    </p>


                    <div className={"flex items-center justify-between mt-[50px]"}>
                        <div className={`flex items-center ${Style.BlogWriterProfile}`}>
                            <div className={Style.writerProfile}/>
                            <p className={`${Style.writerName} text-white flex-col ml-3 mb-0`}>
                                <span className={"font-bold"}>Edward</span>
                                <span className={Style.date}>
                              Writer
                            </span>
                            </p>
                            <div className={Style.profileWriterLight}/>
                        </div>
                    </div>

                    <div className={`${Style.TextDivider} my-10`}/>
                    <div className={"grid lg:grid-cols-3 grid-cols-1 gap-4"}>
                        <SecondaryBlogPostCard/>
                        <SecondaryBlogPostCard/>
                        <SecondaryBlogPostCard/>
                    </div>
                    <div className={`${Style.TextDivider} my-10`}/>
                    <div className={"lg:flex lg:flex-col hidden"}>
                        <div>
                            <CommentsForm/>
                        </div>

                        <p className={"font-bold text-white text-[18px]"}>
                            COMMENTS
                        </p>

                        <CommentsCard/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost