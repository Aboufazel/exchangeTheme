import InfoBlock from "@/components/InfoBlock/InfoBlock";
import PageTitle from "@/components/PageTitle/PageTitle";
import WhyArzi from "@/components/WhyArzi/WhyArzi";
import SecondaryInfoBlock from "@/components/SecondaryInfoBlock/SecondaryInfoBlock";


const About = () => {

    return (
        <div className="">
            <div className={"p-6 lg:px-8"}>
                <PageTitle title={"ABOUT"}/>
                <InfoBlock/>
                <WhyArzi/>
                <SecondaryInfoBlock/>
            </div>

        </div>
    )
}


export default About;