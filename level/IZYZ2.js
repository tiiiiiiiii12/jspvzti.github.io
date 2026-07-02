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
oS.Init({
    PName: [oIZombie, oNewspaperZombie, oConeheadZombie,oIPeaZombie,oFootballZombie,oGatlingPeaZombie,oTallNutZombie],
    ZName: [oZombie, oJalapenoZombie,oPoleVaultingZombie,oDancingZombie,oBackupDancer,oNewspaperZombie,oFootballZombie,oIPeaZombie,oGatlingPeaZombie,oTallNutZombie],
    PicArr: ["images/interface/background1.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background2.jpg",
    ShowScroll: false,
    SunNum: 500,
    BrainsNum: 5,
    ProduceSun: false,
    CardKind: 1,
    LevelName: "狂热舞会",
    LvlEName: "ImZombieYouAreZombie2",
    LoadMusic: "Mountains",
    StartGameMusic: "Mountains",
    ArP: {
        ArC: [1, 6],
        ArR: [1, 5],
        Auto: 1,
        P: [0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 1, 0, 1, 3, 0, 3, 3, 0, 0, 3,4,4,5,4,6,0,1,2,3,0]
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
        NewImg("iStripe", "images/interface/Stripe.png", "left:" + (GetX1X2(7)[0] - 11) + "px;top:65px", EDAll)
    },
    StartGame: function() {
        oP.Monitor();
        BeginCool();
      for (i=1;i<=oS.R;i++){
        CustomZombie(oFootballZombie,i,9,1).jinyinnum=100
      }
        SetVisible($("dFlagMeter"), $("dFlagMeterContent"), $("dTop"));
        oS.RiddleAutoGrow()
    }
}, 0, {
    AutoSelectCard: function() {
        var c = oS.ArCard,
            b = -1,
            a = c.length-6;
        while (++b < a) {
            SelectCard(c[b].prototype.EName)
        }
    }
});
