import React, { useEffect, useRef, useContext } from 'react';
import "../stylesheets/styles.css";
import BaseImage from '../components/BaseImage';
import { UserContext } from '../components/BaseShot';
import { prePathUrl, setExtraVolume } from "../components/CommonFunctions";

const loadCount = 7

var isRendered = false;
var isEffectPassed = false;

let imageCount = 0
let stepCount = 0;

let activeInterval
let timerList = []

let clickedList = []

const Scene1 = React.forwardRef(({ nextFunc, _baseGeo, _geo }, ref) => {

    const audioList = useContext(UserContext)

    const aniImageList = Array.from({ length: 10 }, ref => useRef())
    const textImageList = Array.from({ length: 10 }, ref => useRef())
    const pictureBody = useRef()

    const textPosList = [
        { s: 0.17, l: 0.10, t: 0.46 },
        { s: 0.19, l: 0.41, t: 0.47 },
        { s: 0.25, l: 0.72, t: 0.465 },

        { s: 0.20, l: 0.1, t: 0.76 },
        { s: 0.16, l: 0.42, t: 0.77 },
        { s: 0.21, l: 0.73, t: 0.76 },

        { s: 0.2, l: 0.1, t: 0.46 },
        { s: 0.16, l: 0.6, t: 0.46 },
        { s: 0.22, l: 0.1, t: 0.765 },
        { s: 0.27, l: 0.6, t: 0.765 },
    ]

    const baseObject = useRef()
    useEffect(() => {

        timerList[0] = setTimeout(activeBtnFunc, 4000);

        audioList.bodyAudio1.src = prePathUrl() + "sounds/Word/common_review.mp3"
        audioList.bodyAudio2.src = prePathUrl() + "sounds/common/tap_circle.mp3"

        audioList[6].volume = 0.35
        imageCount = 0;
        isEffectPassed = true;

        textImageList.map(text => {
            text.current.setStyle([
                { key: 'transform', value: 'translateX(-100%)' },
            ])
        })

        clickedList = []



        return () => {
            imageCount = 0;
            isRendered = false;
            isEffectPassed = false;

            for (let i = 0; i < 10; i++) {
                audioList[i].currentTime = 0
                audioList[i].pause();
            }

        }
    }, [])

    const activeBtnFunc = () => {
        if (!isRendered) {
            isRendered = true;
            baseObject.current.className = 'aniObject'
            timerList[1] = setTimeout(() => {
                audioList.bodyAudio1.play().catch(error => { });
                timerList[2] = setTimeout(() => {
                    audioList.bodyAudio2.play().catch(error => { })
                }, audioList.bodyAudio1.duration * 1000 + 300);
            }, 2000);

        }
    }

    const loadImage = () => {
        if (!isRendered) {
            imageCount++

            if (imageCount == loadCount) {
                clearTimeout(timerList[0])
                activeInterval = setInterval(() => {
                    if (isEffectPassed) {
                        activeBtnFunc();
                        clearInterval(activeInterval)
                    }
                }, 100);
            }
        }
    }



    const showWordText = (clickedNum) => {

        if (!clickedList.includes(clickedNum)) {
            timerList.map(timer => clearTimeout(timer))
            if (clickedList.length == 0) {

                audioList.commonAudio1.pause();
            }

            if (clickedList.length > 0)
                audioList[clickedList.slice(-1)].pause();

            clickedList.push(clickedNum)
            aniImageList[clickedNum].current.setStyle([{ key: 'cursor', value: 'default' }])

            aniImageList[clickedNum].current.setStyle([
                { key: 'transform', value: 'scale(0.9)' },
                { key: 'transition', value: '0.3s' }
            ])

            setTimeout(() => {
                audioList[clickedNum].play().catch(error => { });
                aniImageList[clickedNum].current.setStyle([
                    { key: 'transform', value: 'scale(1)' },
                    { key: 'transition', value: '0.3s' }
                ])
                textImageList[clickedNum].current.setStyle([
                    { key: 'transform', value: 'translateX(0%)' },
                    { key: 'transition', value: '0.6s' },
                ])
                if (clickedNum == 2 || clickedNum == 5) {
                    pictureBody.current.style.transform = 'translateX(' + _geo.width * -0.1 + 'px)'
                    pictureBody.current.style.transition = '0.6s'
                }

                if (clickedNum == 7 || clickedNum == 9) {
                    pictureBody.current.style.transform = 'translateX(' + _geo.width * -0.05 + 'px)'
                    pictureBody.current.style.transition = '0.6s'
                }
            }, 300);


            if (clickedList.length == 3) {
                for (let i = 6; i < 10; i++) {
                    aniImageList[i].current.setUrl('Words/' + (i + 1) + '.0.png')
                    textImageList[i].current.setUrl('Words/' + (i + 1) + '.1.png')

                    textImageList[i].current.setClass('hideObject')
                    aniImageList[i].current.setClass('hideObject')
                }
            }

            else if (clickedList.length == 6) {
                setTimeout(() => {
                    setTimeout(() => {
                        pictureBody.current.style.transform = 'translateX(0px)'
                        pictureBody.current.style.transition = '0.0s'
                    }, 500);
                    for (let i = 0; i < 10; i++) {
                        if (i < 6) {
                            textImageList[i].current.setClass('hide')
                            aniImageList[i].current.setClass('hide')
                        }
                        else {
                            setTimeout(() => {
                                textImageList[i].current.setClass('show')
                                aniImageList[i].current.setClass('show')
                            }, 500);
                        }
                    }
                }, 5000);
            }

            else if (clickedList.length == 10) {
                setTimeout(() => {
                    nextFunc()
                }, 5000);
            }
        }
    }

    const getLeftInfo = (index) => {

        let value = 0;
        if (index < 6)
            value = 0.02 + (index % 3) * 0.31
        else
            value = 0.02 + (index % 2) * 0.5
        return value
    }

    const getTopInfo = (index) => {
        let value = 0;
        if (index < 6)
            value = index < 3 ? 0.4 : 0.7
        else
            value = index < 8 ? 0.4 : 0.7
        return value


    }

    return (
        <div ref={baseObject}
            className='hideObject'
            style={{
                position: "fixed", width: _baseGeo.width + "px"
                , height: _baseGeo.height + "px",
                left: _baseGeo.left + 'px',
                top: _baseGeo.top + 'px',
            }}
        >

            <div
                style={{
                    position: "fixed", width: _geo.width * 0.5 + "px",
                    height: _geo.width * 0.08 + "px",
                    left: _geo.left + _geo.width * 0.32
                    , top: _geo.top + _geo.height * 0.05
                    , cursor: "pointer",
                }}>
                <img
                    width={"100%"}
                    draggable={false}
                    onLoad={loadImage}
                    src={prePathUrl() + 'images/Words/Words Title.png'}
                />
            </div>

            <div
                ref={pictureBody}
                style={{
                    position: 'fixed', width: _geo.width + 'px',
                    height: _geo.height + 'px', left: _geo.left + _geo.width * 0.1 + 'px', top: _geo.top + 'px'
                }}>

                {
                    Array.from(Array(10).keys()).map((value, index) =>
                        <div
                            style={{
                                position: 'absolute', width: textPosList[index].s * 100 + '%',
                                height: '15%', left: textPosList[index].l * 100 + '%',
                                top: textPosList[index].t * 100 + '%',
                                overflow: 'hidden',

                            }}>
                            <BaseImage
                                ref={textImageList[index]}
                                key={index}
                                url={index < 6 ? "Words/" + (value + 1) + ".1.png" : ''}

                                className={index < 6 ? '' : 'nonDisplay'}
                            />
                        </div>
                    )
                }
                {
                    Array.from(Array(10).keys()).map((value, index) =>
                        <BaseImage
                            ref={aniImageList[index]}
                            key={index}
                            scale={0.14}
                            posInfo={{
                                l: getLeftInfo(index),
                                t: getTopInfo(index)
                            }}
                            style={{ cursor: 'pointer' }}
                            onLoad={index < 6 ? loadImage : null}
                            onClick={() => { showWordText(index) }}
                            url={index < 6 ? "Words/" + (value + 1) + ".0.png" : ''}
                            className={index < 6 ? '' : 'nonDisplay'}
                        />
                    )
                }

            </div>


        </div>
    );
});

export default Scene1;
