import "../stylesheets/styles.css";
import React, { useContext, useEffect } from 'react';
import { UserContext } from "../components/BaseShot"
import { setExtraVolume } from "../components/CommonFunctions"
import { prePathUrl } from "../components/CommonFunctions";

const timerList = [];

export default function Scene18({ nextFunc, _geo, _baseGeo }) {

    const audioList = useContext(UserContext)

    useEffect(() => {

        audioList.commonAudio1.src = prePathUrl() + "sounds/common/shaandaar.mp3"

        timerList[0] = setTimeout(() => {
            audioList.commonAudio1.play().catch(error => { });

        }, 1500);

        timerList[2] = setTimeout(() => {
            audioList.clapAudio.play().catch(error => { });
            audioList.yeahAudio.play().catch(error => { });
        }, 3000);

        timerList[1] = setTimeout(() => {
            nextFunc();
        }, 7500);

        return () => {

            audioList.clapAudio.pause();
            audioList.yeahAudio.pause();

            audioList.clapAudio.currentTime = 0;
            audioList.yeahAudio.currentTime = 0;

            for (let i = 0; i < timerList.length; i++)
                clearTimeout(timerList[i])
        }
    }, [])


    return (
        <div>
            < div className="aniObject" style={{
                position: "fixed",
                width: _baseGeo.width * 1 + "px",
                height: _baseGeo.height + 'px',
                left: _baseGeo.left + "px",
                top: _baseGeo.top + "px",

            }}>
                <img width={"100%"}
                    src={prePathUrl() + "images/Background/welldone.png"}
                />
            </div>

        </div>
    );
}
