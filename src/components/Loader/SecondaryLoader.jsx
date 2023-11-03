import {ThreeDots} from "react-loader-spinner";


const SecondaryLoader = () => {

    return (
        <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#3DECBE"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}


export default SecondaryLoader;