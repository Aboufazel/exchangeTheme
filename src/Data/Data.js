export const HeaderMenu = [
    {id:1 , name:"HOME" , Link:"/"},
    {id:2 , name:"ABOUT" , Link:"/about"},
    {id:3 , name:"TESTIMONIAL" , Link:"testimonial"},
    {id:4 , name:"BLOG" , Link:"/blog"},
    {id:5 , name:"TERMS" , Link:"/terms"},
]






import Fee from "../assets/svg/fee.svg"
import Support from "../assets/svg/support.svg"
import Respect from "../assets/svg/respect.svg"
import Exchange from "../assets/svg/exchange.svg"



export const WhyArziData = [
    {id:1 , checked:true,for:"one" ,name:"No Fees" , text:"Using our exchange service has no hidden fees. You get exactly what you see      in exchange for your cryptocurrency." , image:Fee},
    {id:2 , checked:false ,for:"two" ,name:"Respect for Anonymity" , text:"We all love crypto as it lets us stay anonymous and we respect the nature of cryptocurrency. At HiExchange no one asks for your personal information or even to Sign Up for an account.." , image:Respect},
    {id:3 , checked:false ,for:"three" ,name:"Quick Exchange" , text:"Like others in the Market, we don’t use the word “Instant”. As we deal with cryptocurrencies, we promise you to take care of your exchange instantly once the transaction gets confirmed on the Blockchain." , image:Exchange},
    {id:4 , checked:false ,for:"four" ,name:"24/7 Support" , text:"At HiExchange. we work around the clock. No Weekends or Working hours could stop us from assisting you in completing your exchange order." , image:Support},

]




import PayPal from "../assets/svg/TrustCoin/PayPal.png"
import PerfectMoney from "../assets/svg/TrustCoin/PerfectMoney.png"
import WebMoney from "../assets/svg/TrustCoin/Webmoney.png"
import TrustPilot from "../assets/svg/TrustCoin/TrustPilot.png"
export const TrustData = [
    {id:1 , name:"PayPal" ,image:PayPal , text:"See what our customers say about us"},
    {id:2 , name:"PerfectMoney" ,image:PerfectMoney , text:"Certified partner of Perfect Money"},
    {id:3 , name:"WebMoney" ,image:WebMoney  , text:"check our Webmoney BL"},
    {id:4 , name:"TrustPilot" ,image:TrustPilot , text:"See what our customers say about us"},
]