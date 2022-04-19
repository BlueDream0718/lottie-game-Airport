import React, { useEffect, useRef, useContext } from 'react';
import "../stylesheets/styles.css";
import BaseImage from '../components/BaseImage';
import { UserContext } from '../components/BaseShot';
import { setExtraVolume } from "../components/CommonFunctions"
import { prePathUrl } from "../components/CommonFunctions";

let currentMaskNum = 0;
let timerList = []
let stepCount = 0;

const Scene1 = React.forwardRef(({ nextFunc, _baseGeo, _geo, _startTransition }, ref) => {


    const audioList = useContext(UserContext)

    const baseObject = useRef();
    const blackWhiteObject = useRef();
    const airPortRef = useRef();
    const buttonRefs = useRef()
    const starRefs = Array.from({ length: 7 }, ref => useRef())

    const aniImageList = Array.from({ length: 4 }, ref => useRef())

    useEffect(() => {
        audioList.bodyAudio1.src = prePathUrl() + 'sounds/Question/question1.mp3'
        audioList.bodyAudio2.src = prePathUrl() + 'sounds/Question/answer1.mp3'

        audioList.commonAudio1.src = prePathUrl() + 'sounds/Question/common_btn.mp3'
        audioList.commonAudio2.src = prePathUrl() + 'sounds/Episode/common_audio.mp3'

        setExtraVolume(audioList.commonAudio1, 3.5)
        setExtraVolume(audioList.commonAudio2, 3.5)

        currentMaskNum = 0;
        // blackWhiteObject.current.style.transition = "0.5s"
        aniImageList.map(image => {
            image.current.setClass('hideObject')
        })

        blackWhiteObject.current.className = 'hideObject'
        buttonRefs.current.className = 'hideObject'

        setTimeout(() => {
            audioList.commonAudio1.play().catch(error=>{});
            setTimeout(() => {
                playZoomAnimation();
            }, audioList.commonAudio1.duration * 1000 + 3000);
        }, 3000);

    }, [])

    const playZoomAnimation = () => {
        let imageNum = 0;
        blackWhiteObject.current.className = 'hideMask'
        airPortRef.current.setClass('hideObject')

        aniImageList[0].current.setClass('showObject')
        let imageShowInterval = setInterval(() => {
            aniImageList[imageNum].current.setClass('hideObject')
            imageNum++
            aniImageList[imageNum].current.setClass('showobject')
            if (imageNum == 3) {
                clearInterval(imageShowInterval)
                showControlFunc()
            }
        }, 150);
    }

    const showControlFunc = () => {

        blackWhiteObject.current.style.WebkitMaskImage = 'url("' + prePathUrl() + 'images/Questions/q' + (stepCount + 2) + '/mask.png")'
        airPortRef.current.setUrl('Questions/q' + (stepCount + 2) + '/q0.png');
        aniImageList.map((image, index) => {
            if (index < 3)
                image.current.setUrl('Questions/q' + (stepCount + 2) + '/q' + (index + 1) + '.png')
        })

        if (stepCount == 0) {
            audioList.commonAudio2.play().catch(error=>{});
            timerList[0] = setTimeout(() => {
                timerList[3] = setTimeout(() => {
                    audioList.bodyAudio1.play().catch(error=>{});
                }, 1000);
            }, audioList.commonAudio2.duration * 1000);
        }

        else {
            timerList[3] = setTimeout(() => {
                audioList.bodyAudio1.play().catch(error=>{});
            }, 1000);
        }

        buttonRefs.current.className = 'show'
    }

    const returnBackground = () => {
        airPortRef.current.setClass('show')
        buttonRefs.current.className = 'hide'
        aniImageList[3].current.setClass('hide')
        blackWhiteObject.current.className = 'show halfOpacity'
        setTimeout(() => {
            aniImageList[3].current.setUrl('Questions/q' + (stepCount + 1) + '/q4.png')
        }, 600);

        setTimeout(() => {
            playZoomAnimation()
        }, 5100);
    }

    const clickAnswer = () => {
        //play answer..

        clearTimeout(timerList[3])
        audioList.bodyAudio1.pause();
        if (stepCount == 0) {
            clearInterval(timerList[0])
            audioList.commonAudio2.pause();

        }

        if (stepCount < 6)
            audioList.bodyAudio1.src = prePathUrl() + "sounds/Question/question" + (stepCount + 2) + ".mp3"
        audioList.bodyAudio2.play().catch(error=>{});
        buttonRefs.current.style.pointerEvents = 'none'

        setTimeout(() => {
            audioList.successAudio.play().catch(error=>{})
            starRefs[stepCount].current.setClass('show')
            stepCount++
            if (stepCount < 7)
                audioList.bodyAudio2.src = prePathUrl() + "sounds/Question/answer" + (stepCount + 1) + ".mp3"


            setTimeout(() => {
                audioList.successAudio.pause();
                audioList.successAudio.currentTime = 0;

                if (stepCount < 7) {
                    returnBackground();
                    buttonRefs.current.style.pointerEvents = ''
                }
                else {
                    setTimeout(() => {
                        nextFunc()
                    }, 2000);
                }
            }, 4000);

        }, audioList.bodyAudio2.duration * 1000);
    }
    return (
        <div ref={baseObject}
            style={{
                position: "fixed", width: _baseGeo.width + "px"
                , height: _baseGeo.height + "px",
                left: _baseGeo.left + 'px',
                top: _baseGeo.top + 'px',
            }}
        >
            <div
                style={{
                    position: "absolute", width: '100%'
                    , height: '100%',
                    left: '0%',
                    top: '0%'
                }} >
                <img
                    width={'100%'}
                    style={{
                        position: 'absolute',
                        left: '0%',
                        top: '0%',

                    }}
                    src={prePathUrl() + "images/Background/BG_Color.png"}
                />
            </div>

            {
                Array.from(Array(7).keys()).map(value =>
                    <div
                        style={{
                            position: "fixed", width: _geo.width * 0.05 + "px",
                            right: _geo.width * (value * 0.042 + 0.01) + 'px'
                            , top: 0.02 * _geo.height + 'px'
                            , cursor: "pointer",
                        }}>
                        <BaseImage
                            url={'Icon/SB13_Progress_Bar_Gray.png'}
                        />
                        <BaseImage
                            ref={starRefs[6 - value]}
                            url={'Icon/SB13_Progress_Bar.png'}
                            className='hideObject'
                        />
                    </div>)
            }



            <BaseImage
                ref={airPortRef}
                url={"Questions/q1/q0.png"}
            />

            <div
                ref={blackWhiteObject}
                className="halfOpacity"
                style={{
                    position: "absolute", width: '100%'
                    , height: '100%',
                    left: '0%',
                    top: '0%',
                    // WebkitMaskImage: 'url(prePathUrl() + "images/Questions/q2/mask.png")',
                    WebkitMaskSize: '100% 100%',
                    WebkitMaskRepeat: "no-repeat",
                    background: 'black',

                }} >

            </div>

            {
                [1, 2, 3].map(value =>
                    <BaseImage
                        ref={aniImageList[value - 1]}
                        scale={1}
                        posInfo={{ l: 0, t: 0 }}
                        url={"Questions/q1/q" + value + ".png"}
                    />
                )
            }

            <div
                style={{
                    position: "fixed", width: _geo.width * 1.6 + "px",
                    height: _geo.height + "px",
                    left: _geo.left - _geo.width * 0.285 + 'px'
                    , top: _geo.top - _geo.height * 0.33 + 'px'
                }}>
                <BaseImage
                    ref={aniImageList[3]}
                    url={"Questions/q1/q4.png"}
                />
            </div>



            <div ref={buttonRefs}>
                <div
                    className='commonButton'
                    style={{
                        position: "fixed", width: _geo.width * 0.08 + "px",
                        height: _geo.width * 0.08 + "px",
                        left: _geo.left + _geo.width * 0.46
                        , top: _geo.top + _geo.height * 0.75
                        , cursor: "pointer",
                    }}>
                    <img
                        onClick={clickAnswer}
                        width={"100%"}
                        draggable={false}
                        src={prePathUrl() + 'images/Buttons/Audio.svg'}
                    />
                </div>
            </div>
        </div>
    );
});

export default Scene1;
