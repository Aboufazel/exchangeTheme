import {CountdownCircleTimer} from "react-countdown-circle-timer";


const Counter = () => {

    return(
        <CountdownCircleTimer
            isPlaying
            duration={90}
            size={90}
            trailStrokeWidth={8}
            strokeWidth={8}
            colors={['#297F6F', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[65, 45, 20, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    )
}



export default Counter