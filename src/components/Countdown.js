import { useRef, useState, useEffect } from "react";
import { CountdownStyled } from "../styled/styledcomponents";

export const Countdown = () => {
    
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 30, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor( distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor( (distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor( (distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds = Math.floor( (distance % (1000 * 60)) / 1000);

            if (distance < 0) {
               
                console.log("Saliendo timer else => ", interval);

                clearInterval(interval.current);
            } else {
            
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
                
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <CountdownStyled>
            <section className="timer">
            <div>
                <span className="mdi"></span>
                <h2>WE'RE LAUNCHING SOON</h2>
            </div>
            <div className="timer-container">
                <section>
                    <p className="section">{timerDays}</p>
                    <p><small>DAYS</small></p>
                </section>
                <section>
                    <p className="section">{timerHours}</p>
                    <p><small>HOURS</small></p>
                </section>
                <section >
                    <p className="section">{timerMinutes}</p>
                    <p><small>MINUTES</small></p>
                </section>
                <section>
                    <p className="section">{timerSeconds}</p>
                    <p><small>SECONDS</small></p>
                </section>
            </div>
            </section>
        </CountdownStyled>
    )
}

export default Countdown;
