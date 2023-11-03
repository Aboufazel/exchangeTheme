import Style from "@/styles/components/BlogPost.module.scss";
import Image from "next/image";
import BlogImage from "@/assets/images/BlogPic.png";
import Link from "next/link";

const SecondaryBlogPostCard = () => {

    return(
        <div className={Style.SecondaryBlogPostCard}>
            <div className={"flex-col"}>
                <Image className={Style.BlogPostBorder} src={BlogImage} alt={'blog-post'}/>
                <h2 className={`${Style.CardTitle} text-white font-bold`}>
                    {"Everything About CHAT GPT AI"}
                </h2>
                <p className={`${Style.postText} font-thin`}>
                    {"In publishing and graphic design, Lorem ipsum is a placeholder text commonly ..."}
                </p>

                <div className={"flex items-center justify-between mt-[30px]"}>
                    <span className={"flex items-center"}>
                        <span className={Style.SecondaryBade}>
                            {"CRYPTO"}
                        </span>
                        <span className={Style.date}>
                            {"2023-02-19"}
                        </span>
                    </span>
                    <Link href={"blog/blog-post"}>
                        <button className="exchange-button py-2 px-5">
                            {"More"}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default SecondaryBlogPostCard;