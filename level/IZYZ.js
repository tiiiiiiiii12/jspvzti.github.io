var oIZombie=InheritO(oZombie,{
    EName:"oIZombie",
    jinyinAct:function(a){
        	a.NormalGif=a.jinyinGif;
			a.AttackGif=a.jinyinAttackGif;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.tasktime*=0.5;
    }
});
var oINewspaperZombie=InheritO(oNewspaperZombie,{
    EName:"oINewspaperZombie",
    SunNum:125
});
var oIPeaZombie=InheritO(oPeaZombie,{
    EName:"oINewspaperZombie",
    SunNum:75,
	jinyinnum:0,
	coolTime:7.5,
});
oS.Init({
    PName: [oIZombie, oBucketheadZombie, oIPeaZombie,oImp],
    ZName: [oZombie, oINewspaperZombie,oPoleVaultingZombie,oConeheadZombie,oImp],
    PicArr: ["images/interface/background1.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background2.jpg",
    ShowScroll: false,
    SunNum: 300,
    BrainsNum: 5,
    ProduceSun: false,
    CardKind: 1,
    LevelName: "我是僵尸，你也是僵尸？！",
    LvlEName: "ImZombieYouAreZombie1",
    LoadMusic: "Mountains",
    StartGameMusic: "Mountains",
    ArP: {
        ArC: [1, 4],
        ArR: [1, 5],
        Auto: 1,
        P: [0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0, 1, 3, 0, 3, 3, 0, 0, 3]
    },
    RiddleAutoGrow: function() {
        var k = oS.ArP,
            f = k.ArC,
            j = k.ArR,
            e = k.P,
            d = oS.PName,
            c,
            g = f[0],
            b = f[1],
            i = j[0],
            h = j[1],
            back,
            a;
        if (k.Auto) {
            while (i <= h) {
                CustomSpecial(oBrains, i, 0);
                for (a = g; a <= b; a++) {
                    (back = CustomZombie(d[e[c = Math.floor(Math.random() * e.length)]], i, a, 1)).Speed = back.OSpeed = back.LostPaperSpeed = 0;
                      back.PrivateDie=function(a){AppearSun(a.ZX,a.pixelTop+60,25*a.Lvl)};
                    e.splice(c, 1)
                }++i
            }
        }
        NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(5)[0] - 11) + "px;top:65px", EDAll)
    },
    StartGame: function() {
        oP.Monitor();
        BeginCool();
        SetVisible($("dFlagMeter"), $("dFlagMeterContent"), $("dTop"));
        oS.RiddleAutoGrow()
    }
}, 0, {
    AutoSelectCard: function() {
        var c = oS.ArCard,
            b = -1,
            a = c.length-1;
        while (++b < a) {
            SelectCard(c[b].prototype.EName)
        }
    }
});
