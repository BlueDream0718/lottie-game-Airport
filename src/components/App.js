
import React, { useState, useEffect, useRef, useContext } from 'react';

import Scene1 from "../Scenes/scene1";
import Scene2 from "../Scenes/scene2";
import Scene3 from "../Scenes/scene3";
import Scene4 from "../Scenes/scene4";
import { prePathUrl } from "./CommonFunctions";

import Excellent from "../Scenes/excellent"
import WellDone from "../Scenes/welldone"

import { MusicButton } from './CommonButtons';

var __geo;
var backgroundImageIndex = 0;
var backgroundImageList = [
  "empty", //1
  "Airpot BG",//2
  "empty",//3 
  "empty",//4
  "BG_Color",//5
  "empty", //6
];
import { UserContext } from "./BaseShot";

const Switch = props => {
  const { test, children } = props
  // filter out only children with a matching prop
  return children.find(child => {
    return child.props.value === test
  })
}


const App = React.forwardRef(({ geo, _setBackground, _startTransition, baseGeo, _isBackloaded }, ref) => {
  const audioList = useContext(UserContext)


  const [index, setIndex] = useState(0);
  const [_isBackSoundPlaying, _setBackgroundPlaying] = useState(true);

  const refScene1 = useRef();
  // const screenRef = useRef();
  const musicRef = useRef();

  __geo = geo;

  useEffect(
    () => {
      // screenRef.current.className = 'hide'
      musicRef.current.className = 'hideObject'
      return () => {
      }
    }, []
  )


  // 1 - center center, 2 - center bottom , 3-left center ,  4 - left bottom, 5 - left top
  const transitionSceneList = []
  const centerBottomBackList = []

  const leftTopBackList = []
  const leftBottomBackList = []
  const centerTopBackList = []

  function changeBackgroundImage(judgeNum) {
    let sendNum = -1;
    if (judgeNum == 0)
      sendNum = 0;
    if (transitionSceneList.includes(judgeNum))
      sendNum = 1;    //mean - transition
    if (judgeNum != backgroundImageIndex) {
      backgroundImageIndex = judgeNum;

      let backState = 1;
      if (centerBottomBackList.includes(judgeNum))
        backState = 2
      else if (leftTopBackList.includes(judgeNum))
        backState = 5;
      else if (leftBottomBackList.includes(judgeNum))
        backState = 4;
      else if (centerTopBackList.includes(judgeNum))
        backState = 6;

      _setBackground(backgroundImageList[judgeNum], sendNum, backState);
    }
  }

  function setFomart(judgeNum) {
    if (judgeNum == 1) {
      setTimeout(() => {
        musicRef.current.fomartSound()
      }, 500);

    }
    setIndex(judgeNum);


    changeBackgroundImage(judgeNum);
  }

  function nextFunc() {
    setFomart(index + 1);
  }


  function goHome() {
    setFomart(0);
    audioList.backAudio.pause();
    musicRef.current.setClass('hideObject')

  }




  return (
    <div >
      {/* <div className={_isBackloaded ? 'aniObject' : 'hideObject'}> */}
      <Switch test={index}>
        <Scene1 ref={refScene1} _startTransition={_startTransition} nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={0} />

        <Scene2 nextFunc={nextFunc} _startTransition={_startTransition} _baseGeo={baseGeo} _geo={__geo} value={1} />
        <Scene3 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={2} />
        <WellDone nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={3} />
        <Scene4 nextFunc={nextFunc} _baseGeo={baseGeo} _geo={__geo} value={4} />
        <Excellent nextFunc={goHome} _baseGeo={baseGeo} _geo={__geo} value={5} />

      </Switch>

      {/* </div> */}
      <MusicButton ref={musicRef} _geo={__geo} backAudio={audioList.backAudio} />
    </div >
  );
})
export default App;