oS.Init({
    PName: [oPeashooter],
    ZName: [oImp,oZombie,oConeheadZombie,oBucketheadZombie,oFlagZombie,oScreenDoorZombie, oDuckyTubeZombie1,oDuckyTubeZombie2,
oPoleVaultingZombie,oDuckyTubeZombie3, oNewspaperZombie, oDolphinRiderZombie, 
oGargantuar, oSnorkelZombie,oFootballZombie,oDancingZombie,oZomboni,oJackinTheBoxZombie,oBalloonZombie,oGatlingPeaZombie,oPeaZombie,oWallNutZombie,oTallNutZombie,oDiggerZombie,oLadderZombie,oCatapultZombie,oJalapenoZombie,oSquashZombie,oBackupDancer],
    PicArr: ["images/interface/background4.jpg", "images/interface/trophy.png", "images/interface/Stripe.png"],
    backgroundImage: "images/interface/background4.jpg",
    Coord: 2,
    DKind: 0,
    LF: [0, 1, 1, 2, 2, 1, 1],
    ProduceSun: false,
    SunNum: 114514,
    BrainsNum: 6,
    CardKind: 1,
    ShowScroll:false,
    CanSelectCard: 0,
    LevelName: "斗蛐蛐测试页面",
    LvlEName: "ImZombieTest",
    LoadMusic: "Mountains",
    StartGameMusic: "Mountains",
        PNameList:[
                oPeashooter,
                oSunFlower,
                oCherryBomb,
                oWallNut,
                oPotatoMine,
                oSnowPea,
                oChomper,
                oRepeater,
                oPuffShroom,
                oSunShroom,
                oFumeShroom,
                oGraveBuster,
                oHypnoShroom,
                oScaredyShroom,
                oIceShroom,
                oDoomShroom,
                oLilyPad,
                oSquash,
                oThreepeater,
                oTangleKelp,
                oJalapeno,
                oSpikeweed,
                oTorchwood,
                oTallNut,
                oSeaShroom,
                oPlantern,
                oCactus,
                oBlover,
                oSplitPea,
                oStarfruit,
                oPumpkinHead,
                oFlowerPot,
                oCoffeeBean,
                oGarlic,
                oGatlingPea,
                oTwinSunflower,
                oGloomShroom,
                oSpikerock,
                oLawnCleaner,
                oPoolCleaner,
                oRepeater2,
                oSniperPea
            ],
        Plant: function() {
            var dChoosePlant = NewEle("dChoosePlant", "div", "z-index:200;display:none;position:absolute;left:0px;top:0px", 0, EDAll, {
                "class": "Almanac_PlantBack"
            });
            var dChoosePlantTitle = NewEle("dchoosePlantTitle", "div", "position:relative;text-align:center;line-height:88px;height:88px;width:100%;font-size:30px;font-weight:bold;font-family:黑体;color:#fff", {
                innerHTML: "选  择  植  物"
            }, dChoosePlant, {
                "class": "dRiddleTitle"
            });
            var dChoosePlantBack = NewEle("dChoosePlantBack", "input", "position:absolute;left:5px;top:550px;width:225px;height:35px;border-radius:12.5px;white-space:pre;background:rgba(0,0,0,0.733);color:rgb(255,255,255);font-family:楷体;font-size:22px;font-weight:bold;cursor:pointer;visibility:visible;", {
                onclick: function() {
                    PlayAudio("tap"), SetBlock($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),$("dCardList")), SetNone(dChoosePlant);
                }
            }, dChoosePlant, {
                "type": "button",
                "value": "返回"
            });
            var dChoosePlantBoard = NewEle("dChoosePlantBoard", "div", "position:relative;width:850px;height:455px;left:25px;", 0, dChoosePlant, {
                "class": "dPCard"
            });
            var PL = oS.PNameList; // 引用对象
            { // 负责生成每张卡片
                var NormalLeft = 20,
                    NormalTop = 20,
                    LeftAdd = 120,
                    TopAdd = 70,
                    LineMax = 7;
                var Left = NormalLeft,
                    Top = NormalTop,
                    Obj,
                    LineNum = 0;
                // 生成卡片元素
                for (var _ = 0; _ < PL.length; ++_) {
                    Obj = PL[_].prototype; // 获取当前的卡片数据
                    var dCard = NewEle("dCard_" + _, "div", "position:absolute;width:100;height:60;overflow:hidden;left:" + Left + "px;top:" + Top + "px;cursor:pointer;", {
                        value: _,
                        "onclick": function(i) {
                            SetBlock($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),$("dCardList")),SetNone(dChoosePlant),AppearCard(Math.random()*400+200,400,PL[this.value],0,Infinity);
                        }
                    }, dChoosePlantBoard);
                    var dImg = NewImg("dImg_" + _, Obj.PicArr[Obj.CardGif], "width:100;height:120;top:0px", dCard);
                    Left += LeftAdd, ++LineNum; // 偏移下一个卡片的位置
                    if (LineNum % LineMax == 0) LineNum = 0, Left = NormalLeft, Top += TopAdd; // 如果超过，则下一个就换行
                }
            }
        },
        PlantZ: function() {
            var dChooseZombie = NewEle("dChooseZombie", "div", "z-index:200;display:none;position:absolute;left:0px;top:0px", 0, EDAll, {
                "class": "Almanac_ZombieBack"
            });
            var dChooseZombieTitle = NewEle("dChooseZombieTitle", "div", "position:relative;text-align:center;line-height:88px;height:88px;width:100%;font-size:30px;font-weight:bold;font-family:黑体;color:#fff", {
                innerHTML: "选  择  僵  尸"
            }, dChooseZombie, {
                "class": "dRiddleTitle"
            });
            var dChooseZombieBack = NewEle("dChooseZombieBack", "input", "position:absolute;left:5px;top:550px;width:225px;height:35px;border-radius:12.5px;white-space:pre;background:rgba(0,0,0,0.733);color:rgb(255,255,255);font-family:楷体;font-size:22px;font-weight:bold;cursor:pointer;visibility:visible;", {
                onclick: function() {
                    PlayAudio("tap"), SetBlock($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),$("dCardList")), SetNone(dChooseZombie);
                }
            }, dChooseZombie, {
                "type": "button",
                "value": "返回"
            });
            var dChooseZombieBoard = NewEle("dChooseZombieBoard", "div", "position:relative;width:850px;height:455px;left:25px;", 0, dChooseZombie, {
                "class": "dCardZ"
            });
            var ZL = oS.ZName; // 引用对象
            { // 负责生成每张卡片
                var NormalLeft = 20,
                    NormalTop = 20,
                    LeftAdd = 120,
                    TopAdd = 70,
                    LineMax = 7;
                var Left = NormalLeft,
                    Top = NormalTop,
                    Obj,
                    LineNum = 0;
                // 生成卡片元素
                for (var _ = 0; _ < ZL.length; ++_) {
                    Obj = ZL[_].prototype; // 获取当前的卡片数据
                    if(!Obj.CanSelect) continue;
                    var dCardZ = NewEle("dCardZ_" + _, "div", "position:absolute;width:100;height:60;overflow:hidden;left:" + Left + "px;top:" + Top + "px;cursor:pointer;", {
                        value: _,
                        "onclick": function(i) {
                            SetBlock($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),$("dCardList")),SetNone(dChooseZombie),AppearCard(Math.random()*400+200,200,ZL[this.value],0,Infinity);
                        }
                    }, dChooseZombieBoard);
                    var dImg = NewImg("dImg_" + _, Obj.PicArr[Obj.CardGif], "width:100;height:120;top:0px", dCardZ);
                    Left += LeftAdd, ++LineNum; // 偏移下一个卡片的位置
                    if (LineNum % LineMax == 0) LineNum = 0, Left = NormalLeft, Top += TopAdd; // 如果超过，则下一个就换行
                }
            }
        },
    StartGame: function() {
        oS.Plant();
        oS.PlantZ();
        oP.Monitor(),BeginCool();
        SetHidden($("dCardList").childNodes[0]);
        NewEle("dButton1", "button", "position:absolute;left:150px;top:20px;width:100px;height:35px;z-index:255", {
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
        NewEle("dButton2", "button", "position:absolute;left:250px;top:20px;width:100px;height:35px;z-index:255", {
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
       NewEle("dButton3", "button", "position:absolute;left:350px;top:20px;width:100px;height:35px;z-index:255", {
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
        NewEle("dButton4", "button", "position:absolute;left:450px;top:20px;width:100px;height:35px;z-index:255", {
            innerHTML: "种植植物",
            onclick: function() {
                PlayAudio("tap"), SetNone($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),$("dCardList")), SetBlock(dChoosePlant)
            }
        }, EDAll);
        NewEle("dButton5", "button", "position:absolute;left:550px;top:20px;width:100px;height:35px;z-index:255", {
            innerHTML: "放置僵尸",
            onclick: function() {
                PlayAudio("tap"), SetNone($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),$("dCardList")), SetBlock(dChooseZombie)
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
                     c = (m = oZ.getArHZ(800,1100, h)).length;
                        while (c--) {
                            m[c].getr(m[c],-800,1)
                        }
                   } while (h++ < oS.R)
            oSym.addTask(1,arguments.callee,[])
        },[]);//僵尸来回走动
    }
},0,{
    AutoSelectCard:function(){
   SelectCard("oZombie") 
}
});
