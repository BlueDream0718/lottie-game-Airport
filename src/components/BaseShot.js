import { useRef, useEffect, useState, createContext } from "react";
import App from "./App";
import { isMobile, isIOS } from "react-device-detect";
import "../stylesheets/styles.css";
import loadSound from "../utils/loadSound"
import { prePathUrl } from "./CommonFunctions";
import { LoadingCircleBar } from "./CommonButtons"

var oldBackgroundImage = 'SB_37_Stage_BG_2';
var _isBackSoundPlaying = true;

const animationColorList = [
    ['#51c9b5', '#cc55d9', '#f55185'],
    ['#43c9e0', '#15ed76', '#f2e01d'],
    ['#f2e01d', '#0269b8', '#a6074c'],
    ['#a6074c', '#361394', '#eb2f80'],
    ['#1e70eb', '#880a91', '#f0a11a'],
    ['#51c9b5', '#cc55d9', '#dfeb88']
]

let titleAudio = new loadSound('Introduction/intro1');
let clapAudio = new loadSound('clap', true);
let backAudio = new loadSound('bMusic', true);

let yeahAudio = new loadSound('yeah', true);
let tingAudio = new loadSound('ting', true);
let wooAudio = new loadSound('woo', true);

let replayAudio = new loadSound('replayAudio', true);
let successAudio = new loadSound('success', true);

let bodyAudio1 = new loadSound('Introduction/intro1');
let bodyAudio2 = new loadSound('Introduction/intro3');

let commonAudio1 = new loadSound('Question/common_btn');
let commonAudio2 = new loadSound('Question/common_audio');

let subAudioList = []
Array.from(Array(10).keys()).map(value => {
    subAudioList.push(new loadSound('Word/' + (value + 1)))
})

Array.from(Array(7).keys()).map(value => {
    subAudioList.push(new loadSound('Question/question' + (value + 1)))
    subAudioList.push(new loadSound('Question/answer' + (value + 1)))
})

backAudio.volume = 0.07;
wooAudio.volume = 0.8;
successAudio.volume = 0.4;

yeahAudio.volume = 0.3
clapAudio.volume = 0.3
isGameStarted = true;

var isOff = false;

let audioList = {
    titleAudio,
    replayAudio,
    clapAudio,
    backAudio,
    yeahAudio,
    tingAudio,
    wooAudio,

    bodyAudio1,
    bodyAudio2,

    commonAudio1,
    commonAudio2,

    successAudio,
    ...subAudioList
}

var currentBackgroundState = 1 // 1 - center center, 2 - center bottom 3-left center 4 - left bottom, 5 - left top 6-center top
var isGameStarted = true;

let backgroundSize = { width: 0, height: 0, left: 0, bottom: 0, right: 0, top: 0 }
let isGameLoaded = false;
const UserContext = createContext();

//remove colsoles
console.log = function () { }

export default function BaseShot() {

    console.log('shoing..')
    // const standardRate = 1920 / 969;
    // const backRate = 1600 / 900;
    const standardRate = 1600 / 900;
    const [_sizeState, setSizeState] = useState(true);
    const [isBackloaded, setBackLoaded] = useState(false);

    const myImage = useRef();
    const myImage1 = useRef();

    const imageBack = useRef();
    const imageBack1 = useRef();

    const loadingBar = useRef()

    const transitionObject = useRef();
    const coloredObjects = [useRef(), useRef(), useRef()];

    //app ref
    const appRef = useRef();


    const [geometry, setGeometry] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0
    });

    function controlBacksound() {
        if (_isBackSoundPlaying) {
            _isBackSoundPlaying = false;
            // backAudio.pause();
        } else {
            _isBackSoundPlaying = true;
            // backAudio.play().catch(error=>{});
        }
    }

    function onOffSound() {
        let allkeys = Object.keys(audioList)

        if (isOff) {
            allkeys.map(audio => {
                audioList[audio].muted = false;
            })
        } else {
            allkeys.map(audio => {
                audioList[audio].muted = true;
            })
        }

        isOff = !isOff
    }

    function backgroundLoaded() {
        setTimeout(() => {
            setBackLoaded(true)

            if (!isGameLoaded) {
                isGameLoaded = true
                setTimeout(() => {
                    loadingBar.current.className = 'hide'
                }, 300);
            }
        }, 50);
    }

    function setLoop(audio) {
        audio.addEventListener('ended', () => {
            audio.currentTime = 0;
            audio.play().catch(error => { })
        },
            false)
    }

    function playGame() {
        setLoop(backAudio)
    }


    useEffect(() => {
        isGameStarted = true;
        let timeout;

        setLoop(backAudio)
        setTimeout(() => {
            playGame()
        }, 1000);

        myImage.current.className = 'hideObject'
        myImage1.current.className = 'hideObject'


        transitionObject.current.style.display = 'none'
        // startBtn.current.style.display = 'none'

        setTimeout(() => {
            setSuitableBackground(currentBackgroundState)
        }, 200);


        var hidden = "hidden";

        if (hidden in document)
            document.addEventListener("visibilitychange", onOffSound);
        else if ((hidden = "mozHidden") in document)
            document.addEventListener("mozvisibilitychange", onOffSound);
        else if ((hidden = "webkitHidden") in document)
            document.addEventListener("webkitvisibilitychange", onOffSound);
        else if ((hidden = "msHidden") in document)
            document.addEventListener("msvisibilitychange", onOffSound);


        setTimeout(() => {
            setWindowResizing();
        }, 100);

        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {

                setWindowResizing();
            }, 100);
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 1 - center center, 2 - center bottom , 3-left center ,  4 - left bottom, 5 - left top , 6-center top

    function setSuitableBackground(backState) {

        switch (backState) {
            case 1:
                imageBack1.current.style.bottom = backgroundSize.bottom + 'px'
                imageBack1.current.style.left = backgroundSize.left + 'px'
                break;

            case 2:
                imageBack1.current.style.bottom = 0 + 'px'
                imageBack1.current.style.left = backgroundSize.left + 'px'
                break;
            case 3:
                imageBack1.current.style.left = 0 + 'px'
                imageBack1.current.style.bottom = backgroundSize.bottom + 'px'
                break;
            case 4:
                imageBack1.current.style.left = 0 + 'px'
                imageBack1.current.style.bottom = 0 + 'px'
                break;
            case 5:
                imageBack1.current.style.left = 0 + 'px'
                imageBack1.current.style.bottom = backgroundSize.bottom * 2 + 'px'
                break;
            case 6:
                imageBack1.current.style.left = backgroundSize.left + 'px'
                imageBack1.current.style.top = -backgroundSize.height * 0.1 + 'px'
                break;
            default:
                break;
        }

        currentBackgroundState = backState

        setTimeout(() => {
            console.log("currentBackgroundState" + currentBackgroundState)
            switch (currentBackgroundState) {
                case 1:
                    imageBack.current.style.bottom = backgroundSize.bottom + 'px'
                    imageBack.current.style.left = backgroundSize.left + 'px'
                    break;

                case 2:
                    imageBack.current.style.bottom = 0 + 'px'
                    imageBack.current.style.left = backgroundSize.left + 'px'
                    break;
                case 3:
                    imageBack.current.style.left = 0 + 'px'
                    imageBack.current.style.bottom = backgroundSize.bottom + 'px'
                    break;
                case 4:
                    imageBack.current.style.left = 0 + 'px'
                    imageBack.current.style.bottom = 0 + 'px'
                    break;
                case 5:
                    imageBack.current.style.left = 0 + 'px'
                    imageBack.current.style.bottom = backgroundSize.bottom * 2 + 'px'
                    break;
                case 6:
                    imageBack.current.style.left = backgroundSize.left + 'px'
                    imageBack.current.style.bottom = backgroundSize.bottom * 2 + 'px'

                    break;
                default:
                    break;
            }
        }, 1500);

    }

    function setBackground(imgUrl, optionNum = -1, backState = 1) {
        if (imgUrl != oldBackgroundImage) {

            oldBackgroundImage = imgUrl;

            setBackLoaded(false)
            // 1 - center center, 2 - center bottom , 3-left center ,  4 - left bottom, 5 - left top , 6-center top
            // if (optionNum != 1)  // transition scenes

            let currentImgUrl
            if (imgUrl == 'empty') {
                myImage.current.className = 'hide'
                myImage1.current.className = 'hide'
            }
            else {
                myImage1.current.className = 'background-move'
                currentImgUrl = prePathUrl() + "images/Background/" + imgUrl + '.png';
                myImage1.current.src = currentImgUrl;
                setSuitableBackground(backState);

                setTimeout(() => {
                    myImage.current.src = currentImgUrl;
                    myImage1.current.className = ''

                }, 1000);

            }


        }
    }


    function startTransition(num = 0) {
        transitionObject.current.style.display = 'inline-block';
        if (innerHeight / innerWidth > 700 / 1024) {
            transitionObject.current.className = 'changeTran1';
        } else
            transitionObject.current.className = 'changeTran';

        for (let i = 0; i < 3; i++)
            coloredObjects[i].current.style.backgroundColor = animationColorList[num][i]
        setTimeout(() => {
            transitionObject.current.className = '';
            transitionObject.current.style.display = 'none';
        }, 3000);
    }



    function setWindowResizing() {


        let width = window.innerWidth;
        let height = window.innerHeight;
        let suitWidth = width;
        let suitHeight = height;
        let left = 0;
        let top = 0;

        console.log(backgroundSize.width)
        console.log(backgroundSize.height)

        backgroundSize.width = width;
        backgroundSize.height = height;

        backgroundSize.left = 0;
        backgroundSize.bottom = 0;
        backgroundSize.right = 0;
        backgroundSize.top = 0;

        if (height * standardRate > width) {
            suitHeight = width / standardRate;

            backgroundSize.width = height * standardRate;

            backgroundSize.left = -1 * (backgroundSize.width - width) / 2;


            top = (height - suitHeight) / 2;
        } else if (height * standardRate < width) {
            suitWidth = height * standardRate;
            backgroundSize.height = width / standardRate;
            backgroundSize.bottom = -1 * (backgroundSize.height - height) / 2;
            left = (width - suitWidth) / 2;
        }
        if (isMobile && window.innerWidth < window.innerHeight)
            setSizeState(false);
        else
            setSizeState(true);

        if (isGameStarted)
            setSuitableBackground(currentBackgroundState);

        backgroundSize.top = backgroundSize.bottom
        backgroundSize.right = backgroundSize.left

        setGeometry({ width: suitWidth, height: suitHeight, left: left, top: top, first: false })
    }


    return (
        <div style={
            {
                backgroundColor: "#6148c4",
                width: "100%",
                height: "100%",
                position: "fixed",
                left: "0px",
                top: "0px",
                textAlign: "center"
            }
        } >
            <div ref={imageBack}
                style={
                    {
                        position: "fixed",
                        width: backgroundSize.width + "px",
                        height: backgroundSize.height + "px"
                    }
                } >
                <img draggable={false}
                    height={"100%"}
                    ref={myImage}
                    src={prePathUrl() + "images/Background/BG_Color.png"}
                />
            </div>
            <div ref={imageBack1}
                style={
                    {
                        position: "fixed",
                        width: backgroundSize.width + "px",
                        height: backgroundSize.height + "px",

                    }
                } >
                <img draggable={false}
                    height={"100%"}
                    ref={myImage1}
                    onLoad={backgroundLoaded}
                    src={prePathUrl() + "images/Background/BG_Color.png"}
                /> </div>
            <div
                style={
                    { background: "transparent" }} >
                <UserContext.Provider value={audioList} >
                    <App _isBackloaded={isBackloaded}

                        ref={appRef}
                        _startTransition={startTransition}
                        geo={geometry}
                        __controlBacksound={controlBacksound}
                        baseGeo={backgroundSize}
                        _setBackground={setBackground}
                    /> </UserContext.Provider>
            </div>


            <div ref={transitionObject} >
                <div ref={coloredObjects[0]}
                    style={
                        {
                            backgroundColor: '#7372f2',
                            width: '18000%',
                            height: '500%',
                            bottom: '-0%',
                            right: '-200%',
                            position: 'absolute'
                        }
                    } >
                </div>

                <div ref={coloredObjects[1]}
                    style={
                        {
                            backgroundColor: '#1f77ff',
                            width: '18000%',
                            height: '500%',
                            bottom: '500%',
                            right: '-200%',
                            position: 'absolute'
                        }
                    } >
                </div>

                <div ref={coloredObjects[2]}
                    style={
                        {
                            backgroundColor: '#3334f2',
                            width: '18000%',
                            height: '5000%',
                            bottom: '1000%',
                            right: '-200%',
                            position: 'absolute'
                        }
                    } >
                </div>

            </div>
            <LoadingCircleBar ref={loadingBar} />

            {
                !_sizeState && <div className="block"
                    style={
                        {
                            position: "fixed",
                            left: "0px",
                            top: "0px",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            opacity: "0.9",
                            textAlign: "center"
                        }
                    } >
                    <h1
                        style={
                            {
                                fontSize: '10vw',
                                color: 'white',
                                position: 'absolute',
                                top: '38%',
                                left: '10%',
                                padding: '0px',
                                fontFamily: 'popin'
                            }
                        } >
                        Rotate your device!
                    </h1> </div>
            }

        </div>
    )
}

export { UserContext }