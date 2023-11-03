import Warning from "@/assets/svg/warning.svg"
import Copy from "@/assets/svg/copy.svg"
import Image from "next/image";
import Style from "@/styles/components/CopyTrackId.module.scss"
import {useState} from "react";

const CopyTrackId = () => {

    const [trackId , setTrackId] = useState({id:"xhJHU762Ehfvcou"});


    const manageCopyId = ()=>{
        navigator.clipboard.writeText(trackId.id);
        alert("track id copy successful")
    }

    return (
        <div className={`flex items-center justify-between ${Style.CopyTrackId}`}>
            <div className={"flex items-center"}>
                <Image src={Warning} alt={"track-id"}/>
                <p className={"ml-[8px]"}>
                    Track ID
                </p>
            </div>

            <div className={"flex items-center"}>
                <p className={"mr-[10px] font-semibold"}>
                    <input value={trackId.id} className={"w-[124px]"}/>
                </p>
                <div className={"cursor-pointer"} onClick={manageCopyId}>
                    <Image src={Copy} alt={"track-id"}/>
                </div>
            </div>
        </div>
    )
}


export default CopyTrackId;