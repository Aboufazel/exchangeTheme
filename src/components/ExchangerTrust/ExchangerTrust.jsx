import Style from "@/styles/components/WhyArzi.module.scss";
import Image from "next/image";
import {TrustData} from "@/Data/Data";

const ExchangerTrust = () => {

    return(
        <div className={`flex-col justify-center items-center text-white  ${Style.WhyArziBlock}`}>
            <h2 className={Style.firstTitle}>
                {"Our Trusted Partners"}
            </h2>
            <div className={"grid grid-cols-2 lg:grid-cols-4"}>
                {
                  TrustData.map(item => (
                      <div key={`exchanger-trust-${item.id}`} className={"flex-col my-8 lg:my-0 justify-center items-center"}>
                          <div className={"flex justify-center"}>
                              <Image width={50} src={item.image} alt={item.name}/>
                          </div>
                          <h3 className={"font-bold text-center"}>
                              {item.name}
                          </h3>
                          <p className={"font-normal text-sm mx-auto w-40 text-center"}>
                              {item.text}
                          </p>
                      </div>
                  ))
                }
            </div>
        </div>
    )
}



export default ExchangerTrust;