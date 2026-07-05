oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit,oPumpkinHead,oSniperPea],
    ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oConeheadZombie, oBucketheadZombie, oJalapenoZombie, oDiggerZombie,oLadderZombie,oDolphinRiderZombie],
    PicArr: function() {
        var Pro = oPumpkinHead.prototype,
            PicArr = Pro.PicArr,
            s = 'images/interface/fog',
            pg = $User.Browser.IE && !$User.Browser.IE9 ? 'gif' : 'png';
        return ['images/interface/background4.jpg', PicArr[Pro.CardGif], PicArr[Pro.NormalGif],
            s + '0.' + pg, s + '1.' + pg, s + '2.' + pg, s + '3.' + pg
        ]
    }(),
    Coord: 2,
    SunNum: 150,
    LF: [0, 1, 1, 2, 2, 1, 1],
    backgroundImage: 'images/interface/background4.jpg',
    CanSelectCard: 1,
    DKind: 0,
    HaveFog: 4, //有5排雾
    LevelName: '关卡 4-9',
    LvlEName: 39,
    LargeWaveFlag: {
        10: $('imgFlag3'),
        20: $('imgFlag2'),
        30: $('imgFlag1')
    },
    UserDefinedFlagFunc: function($T) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(6, 9, 3, [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3])
    },
    StartGameMusic: 'Loonboon'
}, {
    AZ: [
        [oZombie, 4, 1],
        [oZombie2, 1, 1],
        [oZombie3, 1, 1],
        [oDuckyTubeZombie1, 1, 4],
        [oDuckyTubeZombie2, 1, 4],
        [oDuckyTubeZombie3, 1, 4],
        [oConeheadZombie, 2, 4],
        [oBucketheadZombie, 1, 4],
        [oJalapenoZombie, 1, 1],
        [oLadderZombie, 1, 2],
        [oDolphinRiderZombie, 1, 2],
        [oDiggerZombie, 1, 7, [7, 10]]
    ],
    FlagNum: 30,
    FlagToSumNum: {
       a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
      a2: [1, 3, 4, 15, 5, 8, 12, 25, 16, 20, 24, 50]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
      19: [ShowLargeWave, 0],
        29: [ShowFinalWave, 0]
    }
});
