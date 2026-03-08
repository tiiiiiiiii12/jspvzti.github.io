oS.Init({
    PName: [],
    ZName: [oImp,oZombie,oConeheadZombie,oBucketheadZombie,oFlagZombie,oScreenDoorZombie, oDuckyTubeZombie1,oDuckyTubeZombie2,
oPoleVaultingZombie,oDuckyTubeZombie3, oNewspaperZombie, oDolphinRiderZombie, 
oGargantuar, oSnorkelZombie,oFootballZombie,oDancingZombie,oZomboni,oJackinTheBoxZombie,oBalloonZombie,oGatlingPeaZombie,oPeaZombie,oBackupDancer],
    PicArr: ["images/interface/background4.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background4.jpg",
    Coord: 2,
    DKind: 0,
    LF: [0, 1, 1, 2, 2, 1, 1],
    ProduceSun: false,
    SunNum: 114514,
    BrainsNum: 6,
    CardKind: 1,
    LevelName: "斗蛐蛐测试页面",
    LvlEName: "ImZombieTest",
    LoadMusic: "Mountains",
    StartGameMusic: "Mountains",
    LoadAccess: function(i) {
        !oS.LvlVar ? oS.LvlVar = {
            ScrollScreen: oS.ScrollScreen
        } : oS.LvlVar.ScrollScreen = oS.ScrollScreen;
        oS.RiddleAutoGrow();
        $("tGround").style.left = "-115px";
        SetStyle($("dTop"), {
            left: "105px",
            top: 0,
            visibility: "visible"
        });
        innerText(ESSunNum, oS.SunNum);
        oS.ScrollScreen = function() {
            $("tGround").style.left = 0;
            ClearChild($("dButton1"), $("dButton2"));
            (function() {
                (EDAll.scrollLeft += 25) < 500 ? oSym.addTask(2, arguments.callee, []) : SetVisible($("dMenu"), $("dSelectCard"), $("dCardList"));
            })();
        };
        NewEle("dButton1", "button", "position:absolute;left:650px;top:510px;width:100px;height:35px;z-index:255", {
            innerHTML: "开始挑战",
            onclick: function() {
                i(0);
            }
        }, EDAll);
        NewEle("dButton2", "button", "position:absolute;left:760px;top:510px;width:100px;height:35px;z-index:255", {
            innerHTML: "不玩这个",
            onclick: function() {
                SelectModal(0);
            }
        }, EDAll);
    },
    RiddleAutoGrow: function() {
        for (var i = 1; i <= oS.R;i++) CustomSpecial(oBrains, i, 0); // 脑子
    },
    StartGame: function() {
        NewEle("dButton", "button", "position:absolute;left:250px;top:20px;width:100px;height:35px;z-index:255", {
            innerHTML: "全体魅惑",
            onclick: function() {
            var h=1,
                k,
                n;
                do {
                    k = (n = oZ.getArZ(0,oS.W, h)).length;
                        while (k--) {
                            n[k]&&n[k].PZ&&n[k].bedevil(n[k])
                        }
                   } while (h++ < oS.R)
            }
        }, EDAll);
        NewEle("dButton", "button", "position:absolute;left:350px;top:20px;width:100px;height:35px;z-index:255", {
            innerHTML: "秒杀正常僵尸",
            onclick: function() {
            var h=1,
                k,
                n;
                do {
                    k = (n = oZ.getArZ(0,oS.W, h)).length;
                        while (k--) {
                            n[k].DisappearDie(n[k])
                        }
                   } while (h++ < oS.R)
            }
        }, EDAll);
       NewEle("dButton", "button", "position:absolute;left:450px;top:20px;width:100px;height:35px;z-index:255", {
            innerHTML: "秒杀魅惑僵尸",
            onclick: function() {
            var h=1,
                k,
                n;
                do {
                    k = (n = oZ.getArHZ(0,oS.W, h)).length;
                        while (k--) {
                            n[k].DisappearDie(n[k])
                        }
                   } while (h++ < oS.R)
            }
        }, EDAll);
        NewEle("dButton", "button", "position:absolute;left:550px;top:20px;width:100px;height:35px;z-index:255", {
            innerHTML: "读报解封",
            onclick: function() {
            var h=1,
                k,
                c,
                m,
                n;
                do {
                    k = (n = oZ.getArZ(0,oS.W, h)).length;
                        while (k--) {
                           (n[k].EName=="oNewspaperZombie"||n[k].EName=="oNewspaperZombie")&&n[k].getHit0(n[k],n[k].OrnHP,0)
                        }
                     c = (m = oZ.getArHZ(0,oS.W, h)).length;
                        while (c--) {
                            (m[c].EName=="oNewspaperZombie"||m[c].EName=="oGatlingPeaZombie")&&m[c].getHit0(m[c],m[c].OrnHP,0)
                        }
                   } while (h++ < oS.R)
            }
        }, EDAll);
        oSym.addTask(1,function(){
            var h=1,
                k,
                c,
                m,
                n;
                do {
                    k = (n = oZ.getArZ(0,100, h)).length;
                        while (k--) {
                           n[k].getr(n[k],800,1)
                        }
                     c = (m = oZ.getArHZ(780,990, h)).length;
                        while (c--) {
                            m[c].getr(m[c],-800,1)
                        }
                   } while (h++ < oS.R)
            oSym.addTask(1,arguments.callee,[])
        },[]);
        oP.Monitor(), BeginCool();
        SetVisible($("dFlagMeter"), $("dTop"));
    }
});
