import loadAnimation from "../utils/loadAnimation"


const pictureList = [
    ['SB_37_CI_Kangaroo_1',
        'SB_37_CI_Sea-Horse_1',
        'SB_37_CI_Crocodiles_1',
        'SB_37_CI_Horse_1',
        'SB_37_CI_Dolphin_1',
        'SB_37_CI_Dog_1',
        'SB_37_CI_Lobster_1'],

    ['SB_37_CI_Sheep_1',
        'SB_37_CI_Jellyfish_1',
        'SB_37_CI_Hippopotamus_1',
        'SB_37_CI_Deer_1',
        'SB_37_CI_Stingray_1',
        'SB_37_CI_Cat_1',
        'SB_37_CI_Giraffe_1'],

    ['SB_37_CI_Zebra_1',
        'SB_37_CI_Starfish_1',
        'SB_37_CI_Seal_1',
        'SB_37_CI_Cheetah_1',
        'SB_37_CI_Shark_1',
        'SB_37_CI_Fox_1',
        'SB_37_CI_Sea-Turtle'],

    ['SB_37_CI_Camel_1',
        'SB_37_CI_Whale_1',
        'SB_37_CI_Sea-Otter',
        'SB_37_CI_Pig_1',
        'SB_37_CI_Crab_1',
        'SB_37_CI_Tortoise_1']
]

const backgroundList = [
    ['SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Land-and-Water_1',
        'SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1'],

    ['SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Land-and-Water_1',
        'SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Land_2'],

    ['SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Snow_1',
        'SB_37_FG_Cutout_Land_1',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Land-and-Water_1'],

    ['SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Water_1',
        'SB_37_FG_Cutout_Land-and-Water_1',
        'SB_37_FG_Cutout_Land_2',
        'SB_37_FG_Cutout_Land-and-Water_1',
        'SB_37_FG_Cutout_Land-and-Water_1']
]

const roundBackList = [
    ['SB_37_FG_Cutout_Land_1a',
        'SB_37_FG_Cutout_Land_2a',
        'SB_37_FG_Cutout_Land_2a'],

    ['SB_37_FG_Cutout_Land_2a',
        'SB_37_FG_Cutout_Water_1a',
        'SB_37_FG_Cutout_Land_2a'
    ],
    ['SB_37_FG_Cutout_Land_1a',
        'SB_37_FG_Cutout_Land_2a',
        'SB_37_FG_Cutout_Land_1a'],


    ['SB_37_FG_Cutout_Water_1a',
        'SB_37_FG_Cutout_Land_1a',
        'SB_37_FG_Cutout_Snow_1a'],

    ['SB_37_FG_Cutout_Water_1a',
        'SB_37_FG_Cutout_Water_1a',]
]

const dangerAnimallist = [
    ['SB_37_CI_Tiger_1',
        'SB_37_CI_Hippopotamus_1',
        'SB_37_CI_Grey-Parrots'],

    ['SB_37_CI_Elephant',
        'SB_37_CI_Blue-Whale',
        'SB_37_CI_Chimpanzee'],

    ['SB_37_CI_Orangutans',
        'SB_37_CI_Panda',
        'SB_37_CI_Lemur'],

    ['SB_37_CI_Sea-Turtle',
        'SB_37_CI_Pangolin',
        'SB_37_CI_Polar-Bear'],

    ['SB_37_CI_Sea-Otter',
        'SB_37_CI_Blue-Whale']
]

const introBoyOrderList = [
    [2, 1, 2, 2, 1, 2, 1],
    [2, 1, 2, 2, 1, 2, 2],
    [2, 1, 2, 2, 1, 2, 2],
    [1, 1, 2, 2, 2, 2]

]

const introAudioList = [
    ['29', '61', '73', '30', '62', '51', '63'],
    ['32', '64', '82', '35', '65', '54', '28'],
    ['41', '66', '85', '42', '67', '58', '76'],
    ['73', '68', '88', '46', '90', '79']
]

const dangerAudioList = [
    ['92', '91', '95'],
    ['98', '97', '103'],
    ['94', '93', '101'],
    ['96', '99', '100'],
    ['101', '97']
]

const pictureInfoList = [
    [
        { s: 0.45, l: 0.28, t: 0.85 },
        { s: 0.5, l: 0.3, t: 0.8 },
        { s: 0.4, l: 0.2, t: 0.9 },
        { s: 0.5, l: 0.3, t: 0.83 },
        { s: 0.35, l: 0.3, t: 0.95 },
        { s: 0.45, l: 0.3, t: 0.95 },
        { s: 0.25, l: 0.3, t: 0.95 }
    ],
    [
        { s: 0.5, l: 0.22, t: 0.9 },
        { s: 0.45, l: 0.25, t: 0.85 },
        { s: 0.5, l: 0.12, t: 0.85 },
        { s: 0.5, l: 0.25, t: 0.83 },
        { s: 0.45, l: 0.25, t: 0.9 },
        { s: 0.45, l: 0.3, t: 0.95 },
        { s: 0.45, l: 0.28, t: 0.92 }
    ],


    [
        { s: 0.5, l: 0.25, t: 0.85 },
        { s: 0.45, l: 0.275, t: 0.85 },
        { s: 0.55, l: 0.25, t: 0.8 },
        { s: 0.45, l: 0.325, t: 0.83 },
        { s: 0.6, l: 0.2, t: 0.7 },
        { s: 0.5, l: 0.32, t: 0.89 },
        { s: 0.5, l: 0.15, t: 1.2 }
    ],

    [
        { s: 0.6, l: 0.25, t: 0.75 },
        { s: 0.6, l: 0.2, t: 0.75 },
        { s: 0.5, l: 0.15, t: 1.05 },
        { s: 0.55, l: 0.25, t: 0.83 },
        { s: 0.4, l: 0.2, t: 0.9 },
        { s: 0.5, l: 0.15, t: 0.8 }
    ]
]

const dangerAnimalInfolist = [
    [
        { s: 0.56, l: 0.27, t: 0.73 },
        { s: 0.58, l: 0.21, t: 0.76 },
        { s: 0.5, l: 0.3, t: 0.79 }
    ],

    [
        { s: 0.5, l: 0.25, t: 0.91 },
        { s: 0.65, l: 0.18, t: 1 },
        { s: 0.45, l: 0.3, t: 0.85 }
    ],


    [
        { s: 0.33, l: 0.3, t: 0.85 },
        { s: 0.45, l: 0.275, t: 0.95 },
        { s: 0.35, l: 0.325, t: 0.87 }
    ],

    [
        { s: 0.6, l: 0.2, t: 0.88 },
        { s: 0.5, l: 0.275, t: 1.2 },
        { s: 0.5, l: 0.25, t: 0.9 }
    ],

    [
        { s: 0.6, l: 0.2, t: 1 },
        { s: 0.75, l: 0.125, t: 1 },
    ]

]


const optionAudioList = [
    ['15', '16', '17', '18', '19', '20', '21'],
    ['25', '26', '27', '31', '33', '63', '34'],
    ['44', '45', '47', '49', '50', '52', '53'],
    ['71', '72', '74', '49', '77', '78', '80'],
    ['81', '83', '84', '86', '87', '89']

]



const optionFullScreenList = [
    [
        'SB_37_Land-and-Water_BG',
        'SB_37_Water_BG',
        'SB_37_Land_BG_2',
        'SB_37_Water_BG',
        'SB_37_Land_BG_1',
        'SB_37_Snow_BG',
        'SB_37_Land_BG_2'
    ],
    [
        'SB_37_Land-and-Water_BG',
        'SB_37_Water_BG',
        'SB_37_Land_BG_1',
        'SB_37_Water_BG',
        'SB_37_Land_BG_1',
        'SB_37_Water_BG',
        'SB_37_Land_BG_1'
    ],
    [
        'SB_37_Land-and-Water_BG',
        'SB_37_Land_BG_1',
        'SB_37_Water_BG',
        'SB_37_Land_BG_1',
        'SB_37_Land_BG_1',
        'SB_37_Water_BG',
        'SB_37_Land_BG_1'
    ],
    [
        'SB_37_Land_BG_2',
        'SB_37_Water_BG',
        'SB_37_Snow_BG',
        'SB_37_Land_BG_1',
        'SB_37_Land_BG_1',
        'SB_37_Land-and-Water_BG',
        'SB_37_Water_BG'
    ],
    [
        'SB_37_Land-and-Water_BG',
        'SB_37_Land_BG_1',
        'SB_37_Land-and-Water_BG',
        'SB_37_Land_BG_3',
        'SB_37_Water_BG',
        'SB_37_Land-and-Water_BG',
    ]
]

const optionThreePartList = [
    [
        'SB_37_Layout_BG_1',
        'SB_37_Layout_BG_1',
        'SB_37_Layout_BG_1',
        'SB_37_Layout_BG_1',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_3',
        'SB_37_Layout_BG_1',
    ],
    [
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
    ],
    [
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2'
    ],
    [
        'SB_37_Layout_BG_1',
        'SB_37_Layout_BG_1',
        'SB_37_Layout_BG_3',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2'
    ],
    [
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_4',
        'SB_37_Layout_BG_2',
        'SB_37_Layout_BG_2',
    ]
]


const optionPosInfoList = [
    [
        { s: 0.15, l: 0.25, t: 0.5 },
        { s: 0.18, l: 0.4, t: 0.35 },
        { s: 0.4, l: 0.32, t: 0.2 },
        { s: 0.25, l: 0.4, t: 0.25 },
        { s: 0.4, l: 0.3, t: 0.23 },
        { s: 0.2, l: 0.4, t: 0.38 },
        { s: 0.4, l: 0.32, t: 0.15 }
    ],
    [
        { s: 0.25, l: 0.14, t: 0.45 },
        { s: 0.2, l: 0.4, t: 0.3 },
        { s: 0.4, l: 0.32, t: 0.2 },
        { s: 0.25, l: 0.38, t: 0.25 },
        { s: 0.3, l: 0.4, t: 0.33 },
        { s: 0.3, l: 0.4, t: 0.45 },
        { s: 0.4, l: 0.32, t: 0.15 }
    ],
    [
        { s: 0.3, l: 0.14, t: 0.25 },
        { s: 0.35, l: 0.38, t: 0.3 },
        { s: 0.4, l: 0.35, t: 0.15 },
        { s: 0.35, l: 0.35, t: 0.25 },
        { s: 0.35, l: 0.32, t: 0.23 },
        { s: 0.3, l: 0.3, t: 0.28 },
        { s: 0.35, l: 0.3, t: 0.28 }
    ],
    [
        { s: 0.3, l: 0.4, t: 0.25 },
        { s: 0.2, l: 0.38, t: 0.4 },
        { s: 0.4, l: 0.35, t: 0.15 },
        { s: 0.4, l: 0.32, t: 0.2 },

        { s: 0.35, l: 0.38, t: 0.3 },
        { s: 0.3, l: 0.15, t: 0.28 },
        { s: 0.4, l: 0.3, t: 0.1 }
    ],
    [
        { s: 0.2, l: 0.2, t: 0.4 },
        { s: 0.3, l: 0.35, t: 0.35 },
        { s: 0.25, l: 0.15, t: 0.4 },
        { s: 0.45, l: 0.28, t: 0.1 },
        { s: 0.45, l: 0.25, t: 0.1 },
        { s: 0.2, l: 0.2, t: 0.42 }
    ]
]

const optionCorrectAnswerList = [
    [2, 3, 1, 3, 1, 1, 1],
    [2, 3, 1, 3, 1, 3, 1],
    [2, 1, 3, 1, 1, 3, 1],
    [1, 3, 1, 1, 1, 2, 3],
    [2, 1, 2, 1, 3, 2]
]


const optionCharacterList = [
    [
        'SB_37_CI_Frog_1',
        'SB_37_CI_Fish_1',
        'SB_37_CI_Lion_1',
        'SB_37_CI_Octopus_1',
        'SB_37_CI_Cow_1',
        'SB_37_CI_Penguin_1',
        'SB_37_CI_Tiger_1',
    ],
    [
        'SB_37_CI_Crocodiles_1',
        'SB_37_CI_Sea-Horse_1',
        'SB_37_CI_Horse_1',
        'SB_37_CI_Dolphin_1',
        'SB_37_CI_Dog_1',
        'SB_37_CI_Lobster_1',
        'SB_37_CI_Kangaroo_1',
    ],
    [
        'SB_37_CI_Hippopotamus_1',
        'SB_37_CI_Cat_1',
        'SB_37_CI_Stingray_1',
        'SB_37_CI_Giraffe_1',
        'SB_37_CI_Deer_1',
        'SB_37_CI_Jellyfish_1',
        'SB_37_CI_Sheep_1'
    ],
    [
        'SB_37_CI_Cheetah_1',
        'SB_37_CI_Starfish_1',
        'SB_37_CI_Seal_1',
        'SB_37_CI_Zebra_1',
        'SB_37_CI_Fox_1',
        'SB_37_CI_Turtle_1',
        'SB_37_CI_Shark_1'
    ],
    [
        'SB_37_CI_Crab_1',
        'SB_37_CI_Pig_1',
        'SB_37_CI_Otter_1',
        'SB_37_CI_Camel_1',
        'SB_37_CI_Whale_1',
        'SB_37_CI_Tortoise_1',
    ]
]

const optionAnimationInfoList = [
    [
        { w: 0.12, l: 0.28, t: 0.48 },
        { w: 0.25, l: 0.35, t: 0.35 },
        { w: 0.5, l: 0.28, t: 0.3 },
        { w: 0.2, l: 0.4, t: 0.3 },
        { w: 0.5, l: 0.25, t: 0.25 },
        { w: 0.15, l: 0.45, t: 0.25 },
        { w: 0.5, l: 0.25, t: 0.3 }
    ],
    [
        { w: 0.25, l: 0.18, t: 0.5 },
        { w: 0.25, l: 0.35, t: 0.35 },
        { w: 0.4, l: 0.3, t: 0.26 },
        { w: 0.2, l: 0.4, t: 0.3 },     //
        { w: 0.2, l: 0.4, t: 0.43 },   //
        { w: 0.15, l: 0.45, t: 0.25 },//
        { w: 0.3, l: 0.38, t: 0.25 }
    ],
    [
        { w: 0.25, l: 0.18, t: 0.4 },
        { w: 0.25, l: 0.38, t: 0.35 },
        { w: 0.4, l: 0.3, t: 0.26 },
        { w: 0.22, l: 0.38, t: 0.15 },     //
        { w: 0.2, l: 0.4, t: 0.2 },   //
        { w: 0.3, l: 0.35, t: 0.25 },//
        { w: 0.3, l: 0.38, t: 0.25 }
    ],
    [
        { w: 0.25, l: 0.18, t: 0.4 },
        { w: 0.25, l: 0.38, t: 0.35 },
        { w: 0.4, l: 0.3, t: 0.26 },
        { w: 0.22, l: 0.38, t: 0.15 },     //
        { w: 0.35, l: 0.3, t: 0.38 },   //
        { w: 0.3, l: 0.35, t: 0.25 },//
        { w: 0.3, l: 0.38, t: 0.25 }
    ],
    [
        { w: 0.15, l: 0.25, t: 0.5 },
        { w: 0.25, l: 0.38, t: 0.4 },
        { w: 0.4, l: 0.3, t: 0.26 },
        { w: 0.35, l: 0.33, t: 0.27 },     //
        { w: 0.35, l: 0.3, t: 0.38 },   //
        { w: 0.3, l: 0.35, t: 0.25 }
    ]
]

const optionAnimationList = [
    ['frog', 'redFish', 'lion', 'octopus', 'cow', 'penguin', ''],  //last lion - tiger
    ['crocodile', '', 'horse', '', 'dog', '', 'kangaroo'],  //2 - sea horse, 4- dolphin ,  6 -lobster
    ['hip', 'cat', '', 'giraffe', 'deer', 'jelly', ''], //3octopus -stinggray, 7goat - sheep
    ['', '', '', '', 'fox', '', ''], //1-chita , 2-starFish ,3-seal ,4- zebra ,6-turtle, 7-shark
    ['crab', 'pig', '', 'camel', '', ''], //3-otter,5-whale,6-tortoise
]



const varJson = {
    pictureList, backgroundList,
    roundBackList, dangerAnimallist,
    introBoyOrderList, introAudioList,
    dangerAudioList, pictureInfoList, dangerAnimalInfolist,
    optionAudioList, optionCharacterList, optionFullScreenList,
    optionThreePartList, optionPosInfoList, optionCorrectAnswerList,
    optionAnimationList, optionAnimationInfoList
}

export function getGameInfoState(key) {
    return varJson[key]
}

export function getCharacterAnimation(key) {
    return animationList[key]
}

const animationList = {}
let fileNameList = {
    crocodile: 'SB_37_Character-Interactive_Alligator_1',
    camel: 'SB_37_Character-Interactive_Camel_1',
    cat: 'SB_37_Character-Interactive_Cat_1',
    redFish: 'SB_37_Character-Interactive_ClownFish_1',
    cow: 'SB_37_Character-Interactive_Cow_1',
    crab: 'SB_37_Character-Interactive_Crab_1',
    dog: 'SB_37_Character-Interactive_dog_1',
    elephant: 'SB_37_Character-Interactive_elephantBoy_1',
    fox: 'SB_37_Character-Interactive_fox_1',
    frog: 'SB_37_Character-Interactive_Frog_1',
    giraffe: 'SB_37_Character-Interactive_Giraffe_1',

    goat: 'SB_37_Character-Interactive_Goat_1',
    hip: 'SB_37_Character-Interactive_Hippopotamus_1',
    horse: 'SB_37_Character-Interactive_Horse_1',
    jelly: 'SB_37_Character-Interactive_JellyFish_1',
    kangaroo: 'SB_37_Character-Interactive_Kangaroo_1',
    leopard: 'SB_37_Character-Interactive_Leopard_1',
    lion: 'SB_37_Character-Interactive_Lion_1',
    mongoose: 'SB_37_Character-Interactive_Mongoose_1',
    octopus: 'SB_37_Character-Interactive_Octopus_1',
    penguin: 'SB_37_Character-Interactive_Penguin_1',
    pig: 'SB_37_Character-Interactive_Pig_1',
    deer: 'SB_37_Character-Interactive_Reindeer_1',
}

let allkeys = Object.keys(fileNameList)

allkeys.map(key => {
    new loadAnimation('main/' + fileNameList[key] + '.json').then(result => {
        animationList[key] = result;
    }, () => { });
})




