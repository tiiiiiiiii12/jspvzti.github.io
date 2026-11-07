var oIZombie=InheritO(oZombie,{
    EName:"oIZombie",
    jinyinAct:function(a){
      a.NormalGif=a.jinyinGif;
			a.AttackGif=a.jinyinAttackGif;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.tasktime*=0.5;
    }
});
var oIPeaZombie=InheritO(oPeaZombie,{
    EName:"oIPeaZomnie",
    SunNum:75,
	  jinyinnum:0,
	  coolTime:7.5,
});
var oIPogoZombie=InheritO(oPogoZombie,{
    EName:"oIPogoZombie",
    CName:"大蒜跳跳僵尸",
    SunNum:125,
	  jinyinnum:0
});
var oGarlicZombie=InheritO(oPogoZombie,{
    EName:"oGarlicZombie",
    CName:"大蒜跳跳僵尸",
    SunNum:150,
	  jinyinnum:100,
	  Privatenum:25
});
var oFarPogoZombie=InheritO(oPogoZombie,{
    EName:"oFarPogoZombie",
    CName:"大跳僵尸",
    SunNum:200,
	  jinyinnum:100,
	  Privatenum:75
});
oS.Init({
    PName: [oIZombie, oWallNutZombie, oConeheadZombie,oIPeaZombie,oZomboni,oLadderZombie,oNewspaperZombie,oSquashZombie],
    ZName: [oZombie, oPoleVaultingZombie,oIPogoZombie,oFarPogoZombie,oGarlicZombie,oIPeaZombie,oIZombie,oWallNutZombie,oConeheadZombie,oZomboni,oLadderZombie,oNewspaperZombie,oSquashZombie],
    PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background2.jpg",
    ShowScroll: false,
    SunNum: 700,
    BrainsNum: 5,
    ProduceSun: false,
    CardKind: 1,
    LevelName: "跳跃漫游",
    LvlEName: "ImZombieYouAreZombie3",
    LoadMusic: "Mountains",
    StartGameMusic: "Mountains",
    ArP: {
        ArC: [1, 6],
        ArR: [1, 5],
        Auto: 1,
        P: [0, 0, 7, 1, 5, 4, 7, 7, 2, 6, 1, 0, 1, 3, 0, 3, 2, 0, 3, 7,4,5,5,4,6,0,1,2,3,0]
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
					back.EName=="oConeheadZombie"&&(back.jinyinnum=0);
                      back.PrivateDie=function(a){AppearSun(a.ZX,a.pixelTop+60,25*a.Lvl)};
                    e.splice(c, 1)
                }++i
            }
        }
        NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(7)[0] - 11) + "px;top:65px", EDAll)
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
            a = 5;
        while (++b < a) {
            SelectCard(c[b].prototype.EName)
        }
    }
});
