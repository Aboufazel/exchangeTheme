import {ThreeDots} from "react-loader-spinner";

const Loader = ({size}) => {

    return(<ThreeDots
            height="60"
            width="60"
            radius="9"
            color="#3DECBE"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />

    )
}

export default Loader;