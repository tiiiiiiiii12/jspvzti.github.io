oS.Init({
    PName: [oFumeShroom, oSunFlower, oSnowPea,oStarfruit, oTorchwood, oRepeater, oPotatoMine, oCactus,oGatlingPea,oSquash,oTallNut,oSpikerock],
    ZName: [oBungeeZombie,oBalloonZombie,oZombie,oBucketheadZombie],
    PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background2.jpg",
    SunNum: 800,
    BrainsNum: 5,
    ProduceSun: false,
    CardKind: 1,
    DKind: 0,
    ShowScroll:false,
    CanSelectCard: 0,
    LevelName: "解谜模式:空袭!",
    LvlEName: "ImZombie5",
    LoadMusic: "Mountains",
    StartGameMusic: "Mountains",
    ArP: {
        ArC: [1, 6],
        ArR: [1, 5],
        Auto: 1,
        P: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 9, 10, 10, 11, 11, 1, 2, 7]
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
