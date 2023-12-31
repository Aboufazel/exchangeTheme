import Head from 'next/head'
import { Inter } from 'next/font/google'
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import WhyArzi from "@/components/WhyArzi/WhyArzi";
import ExchangerTrust from "@/components/ExchangerTrust/ExchangerTrust";
import UserFeedback from "@/components/UserFeedback/UserFeedback";
import ExchangerMainBlock from "@/components/ExchangerMainBlock/ExchangerMainBlock";
import AboutExchanger from "@/components/AboutExchanger/AboutExchanger";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={"text-white"}>
      <Head>
        <title>Exchanger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={"relative lg:w-[1450px] mx-auto p-6 lg:px-8"}>
            <ExchangerMainBlock/>
            <WhyArzi/>
            <ExchangerTrust/>
            <InfoBlock/>
            <UserFeedback/>
            <AboutExchanger/>
        </div>
    </div>
  )
}
