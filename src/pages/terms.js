import PageTitle from "@/components/PageTitle/PageTitle";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import Style from "../styles/pages/terms.module.scss"

const Terms = () => {

    return (
        <div className={"p-6 lg:px-8"}>
            <PageTitle title={"TERMS"}/>
            <InfoBlock/>
            <div className={Style.termsListBox}>
                <ul className={`${Style.lists} text-white`}>
                    <li className={`${Style.item} font-semibold`}>
                        General Rules
                    </li>
                    <li className={`${Style.item} font-semibold`}>
                        General Rules
                    </li>
                    <li className={`${Style.item} font-semibold`}>
                        General Rules
                    </li>
                </ul>
            </div>
            <div className={Style.termsItemDetail}>

                <div className={`${Style.termTitle} font-semibold`}>
                    {"General Rules"}
                </div>

                <ol className={`${Style.olLists} text-white`} type={"1"}>
                    <li className={`${Style.olItem} font-thin`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                    <li className={`${Style.olItem} font-thin`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                    <li className={`${Style.olItem} font-thin`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                </ol>

                <div className={`${Style.termTitle} font-semibold`}>
                    {"General Rules"}
                </div>

                <ol className={`${Style.olLists} text-white`} type={"1"}>
                    <li className={`${Style.olItem}`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                    <li className={`${Style.olItem}`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                    <li className={`${Style.olItem}`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                </ol>

                <div className={`${Style.termTitle} font-semibold`}>
                    {"General Rules"}
                </div>

                <ol className={`${Style.olLists} text-white`} type={"1"}>
                    <li className={`${Style.olItem}`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                    <li className={`${Style.olItem}`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                    <li className={`${Style.olItem}`}>
                        All exchange operations must only take place on HiExchange platform with hi.exchange URL
                        address. No one from HiExchange provides you with wallet address, bank account number, IBAN or
                        any other forms of account number for transferring money or asking for additional fees.
                    </li>
                </ol>
            </div>
        </div>

    )
}


export default Terms;