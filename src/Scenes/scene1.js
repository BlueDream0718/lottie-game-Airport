import React, { useEffect, useRef, useContext } from 'react';
import "../stylesheets/styles.css";
import { initialAudio } from '../components/CommonFunctions';
import { UserContext } from '../components/BaseShot';
import { prePathUrl } from "../components/CommonFunctions";

let isGameplaying = false;

let timerList = []
let activeInterval
var isRendered = false;
var isEffectPassed = false;


const Scene1 = React.forwardRef(({ nextFunc, _geo, _startTransition }, ref) => {

    const audioList = useContext(UserContext)
    const playBtnRef = useRef();
    const titleRef = useRef()
    const baseObject = useRef()

    useEffect(fomartFunc, [])

    function clickFunc() {
        if (!isGameplaying)
            initialAudio(audioList)

        setTimeout(() => {
            if (!isGameplaying) {
                setTimeout(() => {
                    isGameplaying = true
                }, 500);
            }
            _startTransition(2)
            setTimeout(() => {
                audioList.wooAudio.play().catch(error => { });
                nextFunc();
            }, 300);

        }, 200);

    }


    const activeBtnFunc = () => {
        if (!isRendered) {
            isRendered = true;
            baseObject.current.className = 'aniObject'
            titleRef.current.className = 'introText'

            setTimeout(() => {
                playBtnRef.current.className = 'introText'
            }, 1000);

            setTimeout(() => {
                playBtnRef.current.className = 'commonButton'
                playBtnRef.current.style.pointerEvents = ''
            }, 2000);

        }
    }

    const imageLoad = () => {
        if (!isRendered) {
            clearTimeout(timerList[0])
            activeInterval = setInterval(() => {
                if (isEffectPassed) {
                    activeBtnFunc();
                    clearInterval(activeInterval)
                }
            }, 100);
        }
    }

    function fomartFunc() {

        playBtnRef.current.style.pointerEvents = 'none'
        timerList[0] = setTimeout(activeBtnFunc, 3000);

        isEffectPassed = true;
        isRendered = false;

        return () => {

            isRendered = false;
            isEffectPassed = false;

            timerList.forEach(element => {
                clearTimeout(element)
            });
        }
    }

    return (
        <div ref={baseObject} className='hideObject'>
            <div >
                <div
                    ref={titleRef}
                    className="hideObject"
                >
                    <div
                        style={{
                            position: "fixed", width: _geo.width + "px",
                            left: _geo.left + "px"
                            , top: _geo.height * -0.1 + _geo.top + "px",
                            height: _geo.height * 0.65 + "px",
                            overflow: 'hidden'

                        }}>
                        <img
                            onLoad={imageLoad}
                            draggable={false}
                            width={"100%"}
                            src={prePathUrl() + 'images/Background/Title.png'}
                        />
                    </div>
                    <div
                        style={{
                            position: "fixed", width: _geo.width * 0.25 + "px",
                            left: _geo.left + _geo.width * 0.4 + "px"
                            , top: _geo.height * 0.57 + _geo.top + "px",
                            height: _geo.height * 0.65 + "px",
                            overflow: 'hidden'

                        }}>
                        <img
                            onLoad={imageLoad}
                            draggable={false}
                            width={"100%"}
                            src={prePathUrl() + 'images/Background/SB13-HawaiAdda-Text.png'}
                        />
                    </div>

                </div>

                <div
                    className="hideObject"
                    ref={playBtnRef}
                    style={{
                        position: "fixed", width: _geo.width * 0.1 + "px",
                        left: _geo.width * 0.46 + _geo.left + "px"
                        , bottom: _geo.height * 0.05 + _geo.top + "px"
                    }}>
                    <img
                        draggable={false} onClick={clickFunc}
                        width={"100%"}
                        src={prePathUrl() + 'images/Buttons/Play_blue.svg'}
                    />
                </div>

            </div>
        </div>
    );
});

export default Scene1;
