var ojinyinJackinTheBoxZombie=InheritO(oJackinTheBoxZombie,{
    EName:"ojinyinJackinTheBoxZombie",
    CName:"精英玩偶匣僵尸",
    jinyinnum:100,
    SunNum:175
});
oS.Init({
    PName: [oThreepeater, oSunFlower, oSnowPea, oSpikeweed, oStarfruit, oPuffShroom, oTorchwood, oRepeater, oPotatoMine, oWallNut, oSpikerock, oGarlic, oCactus, oChomper, oSquash, oScaredyShroom, oTallNut],
    ZName: [oScreenDoorZombie, oZombie3, oFlagZombie, oZomboni, oConeheadZombie, oFootballZombie, oPoleVaultingZombie,ojinyinJackinTheBoxZombie, oDiggerZombie, oBucketheadZombie],
    PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background2.jpg",
    SunNum: 800,
    BrainsNum: 5,
    ProduceSun: false,
    CardKind: 1,
    DKind: 0,
    ShowScroll:false,
    CanSelectCard: 0,
    LevelName: "解谜模式：最终决战!",
    LvlEName: "ImZombie4",
    LoadMusic: "2.75",
    StartGameMusic: "2.75",
    ArP: {
        ArC: [1, 6],
        ArR: [1, 5],
        Auto: 1,
        P: [0, 1, 1, 1, 3, 3, 4, 5, 6, 6, 7, 8, 1, 9, 8, 9, 10, 11, 12, 12, 13, 1, 13, 14, 15, 15, 16, 2, 2, 7]
    },
    RiddleAutoGrow: function() {
        var k = oS.ArP,
            f = k.ArC,
            j = k.ArR,
            e = k.P,
            d = oS.PName,
            c, g = f[0],
            b = f[1],
            i = j[0],
            h = j[1],
            a;
        if (k.Auto) {
            while (i <= h) {
                CustomSpecial(oBrains, i, 0);
                for (a = g; a <= b; a++) {
                    CustomSpecial(d[e[c = Math.floor(Math.random() * e.length)]], i, a);
                    e.splice(c, 1)
                }++i
            }
        }
        NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(7)[0] - 11) + "px;top:65px", EDAll)
    },
  StartGame:function(){
    oP.Monitor();
    BeginCool();
    SetVisible($("dFlagMeter"),$("dFlagMeterContent"),$("dTop"));
    oS.RiddleAutoGrow()
  }
});
