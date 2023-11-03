import Block from "@/styles/components/InfoBlock.module.scss";


const SecondaryInfoBlock = () => {

    return(
        <div className={`lg:pl-10 lg:pr-20 text-white ${Block.infoBlock}`}>
            <div  className={"lg:w-1/2"}>
                <h3 className={"font-bold text-xl mb-2"}>
                    {"Arziclub Exchange"}
                </h3>
                <p className={"text-justify"}>
                    {"HiExchange is just what everyone in the cryptocurrency world needs. We perform all sorts of exchanges between various Crypto and Digital currencies. Whether you want to cash out your crypto to your PayPal or you want to exchange your WebMoney with other currencies, HiExchange is there for you. Apart from amazing exchange rates, No “KYC” and “Sign up” requirement makes your cryptocurrency exchange feel more real.\n" +
                        "At HiExchange the power is in your hands. If you hold Bitcoins or other cryptocurrencies that you want to cash out, we stand by your side. Easily put an order to receive money in your PayPal, WebMoney, Perfect Money, or Skrill. We’re constantly monitoring the Market to provide our customers with the best exchange rates available."}
                </p>
            </div>
            <div className={"lg:w-1/2 lg:flex justify-end  mt-10 lg:mt-0"}>
                <h2 className={`${Block.infoBlockTitle} font-bold`}>
                    What Is
                    <span>
                    Arziclub Exchange
                </span>
                    <p className={`${Block.infoBlockText} lg:mt-10 mt-5 font-bold`}>
                        Check out the highlighted review teasers from our clients around the world .
                    </p>
                </h2>
            </div>
        </div>
    )
}


export default SecondaryInfoBlock;