import React, { useContext, useRef, useEffect } from 'react';
import "../stylesheets/styles.css";
import { UserContext } from "../components/BaseShot"
import { isIOS } from "react-device-detect";
import { setExtraVolume } from "../components/CommonFunctions"
import { prePathUrl } from "../components/CommonFunctions";

let timerList = []

export default function Scene18({ nextFunc, _geo, _baseGeo }) {

    const audioList = useContext(UserContext)
    const replayBtn = useRef()
    useEffect(() => {

        timerList[0] = setTimeout(() => {
            audioList.clapAudio.play().catch(error => { }).catch(error => { })
            audioList.yeahAudio.play().catch(error => { }).catch(error => { })
        }, 1500);

        timerList[1] = setTimeout(() => {

            audioList.backAudio.volume = 0.04;

            audioList.yeahAudio.volumn = 0.1
            audioList.clapAudio.volumn = 0.2
            audioList.replayAudio.play().catch(error => { });
            replayBtn.current.className = 'aniObject'
            timerList[2] = setTimeout(() => {
                audioList.backAudio.volume = 0.07;

                audioList.yeahAudio.volumn = 0.3
                audioList.clapAudio.volumn = 0.3
            }, audioList.replayAudio.duration * 1000);
        }, 5500);

        return () => {

            timerList.map(timer => {
                clearTimeout(timer)
            })

            audioList.bodyAudio1.pause();
            audioList.replayAudio.pause();

            audioList.clapAudio.pause();
            audioList.yeahAudio.pause();

            audioList.clapAudio.currentTime = 0;
            audioList.yeahAudio.currentTime = 0;
            audioList.replayAudio.currentTime = 0;

            audioList.replayAudio.pause();

            audioList.backAudio.volume = 0.07;
            audioList.yeahAudio.volumn = 0.3
            audioList.clapAudio.volumn = 0.3
        }
    }, [])

    return (
        <div className='aniObject'>
            < div className="excellentText" style={{
                position: "fixed",
                width: _baseGeo.width + "px",
                height: _baseGeo.height + 'px',
                left: _baseGeo.left + "px",
                top: _baseGeo.top + "px",
            }}>
                <img width={"100%"}
                    src={prePathUrl() + "images/Background/excellent.png"}
                />
            </div>

            <div ref={replayBtn}
                className='hideObject'
            >
                <div

                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.1 + "px",
                        height: _geo.width * 0.1 + "px",
                        left: _geo.left + _geo.width * 0.45
                        , top: _geo.top + _geo.height * 0.8
                        , cursor: "pointer",
                    }}>
                    <img
                        onClick={() => {
                            setTimeout(() => {
                                nextFunc()
                            }, 200);
                        }}
                        width={"100%"}
                        draggable={false}
                        src={prePathUrl() + 'images/Buttons/Replay_Blue.svg'}
                    />
                </div>
            </div>
        </div>
    );
}
