import Style from "../../styles/components/BlogPost.module.scss"
import BlogImage from "@/assets/images/BlogPic.png";
import Image from "next/image";
import Link from "next/link";

const BlogPostCard = () => {

    return (
        <div className={Style.BlogPostCard}>
            <div className={"flex-col"}>
                <Image src={BlogImage} alt={'blog-post'}/>
                <div className={`${Style.BlogBadge} lg:mt-3 flex items-center justify-center text-white`}>
                    <p className={"font-bold"}>
                        {"development"}
                    </p>
                </div>
                <h2 className={`${Style.CardTitle} text-white font-bold`}>
                    {"Everything About CHAT GPT AI"}
                </h2>
                <p className={`${Style.postText} font-thin`}>
                    {"In publishing and graphic design, Lorem ipsum is a placeholder text commonly ..."}
                </p>

                <div className={"flex items-center justify-between mt-3"}>
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


export default BlogPostCard;