import Link from "next/link";
import Image from "next/image";
import BlogImage from "../../assets/images/BlogPic.png"
import Style from "../../styles/components/BlogPost.module.scss"

const BlogPostBanner = () => {

    return (
        <div className={Style.BlogPostBanner}>
            <div className="grid lg:grid-cols-2 grid-cols-1">

                <div className="flex justify-start">
                    <Image src={BlogImage} alt={'blog-post'}/>
                </div>

                <div className="flex-col justify-end lg:ml-8 2xl:ml-0">
                    <div className={`${Style.BlogBadge} flex items-center justify-center text-white`}>
                        <p className={"font-bold"}>
                            development
                        </p>
                    </div>
                    <h2 className={`${Style.BlogBannerTitle} text-white font-bold`}>
                        <span>{"Everything about"}</span>
                        <span>{"CHAT GPT AI"}</span>
                    </h2>
                    <p className={`${Style.BlogBannerText} text-white text-justify`}>
                        {"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ..."}
                    </p>

                    <div className={`flex ${Style.writerBlock}`}>
                        <div className={Style.writerProfile}/>
                        <p className={`${Style.writerName} text-white flex-col ml-3 mb-0`}>
                            <span className={"font-bold"}>By : Edward</span>
                            <span className={Style.date}>
                              2023-02-19
                            </span>
                        </p>
                        <div className={Style.profileWriterLight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogPostBanner;