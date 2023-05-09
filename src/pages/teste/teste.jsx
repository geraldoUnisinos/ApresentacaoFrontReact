import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function teste() {
    return (
        <div>
            <CountdownCircleTimer
                isPlaying
                size={120}
                duration={10}
                colors={['#BCE596', '#F7B801', '#ED827A', '#A30001']}
                colorsTime={[10, 10/3, 10/6, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}