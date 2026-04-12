oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit],
    ZName: [oZombie, oZombie2, oZombie3, oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oConeheadZombie, oBucketheadZombie, oJackinTheBoxZombie, oDiggerZombie,oPoleVaultingZombie,oDancingZombie,oBackupDancer],
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
    SunNum: 50,
    LF: [0, 1, 1, 2, 2, 1, 1],
    backgroundImage: 'images/interface/background4.jpg',
    CanSelectCard: 1,
    DKind: 0,
    HaveFog: 5, //有5排雾
    LevelName: '关卡 4-7',
    LvlEName: 37,
    LargeWaveFlag: {
        10: $('imgFlag3'),
        20: $('imgFlag2'),
        10: $('imgFlag1')
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
        [oJackinTheBoxZombie, 1, 4],
        [oPoleVaultingZombie, 1, 2],
        [oDancingZombie, 1, 2],
        [oDiggerZombie, 1, 7, [7, 10]]
    ],
    FlagNum: 30,
    FlagToSumNum: {
       a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
      a2: [1, 3, 6, 18, 6, 9, 14, 30, 14, 16, 18, 60]
    },
    FlagToMonitor: {
        9: [ShowLargeWave, 0],
      19: [ShowLargeWave, 0],
        29: [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewEle("DivA", "div", "position:absolute;width:900px;height:600px;background:#FFF;filter:alpha(opacity=0);opacity:0;z-index:160", 0, EDAll);
        NewImg("imgSF", "images/Card/Plants/PumpkinHead.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oPumpkinHead, 0);
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll)
    }
});
