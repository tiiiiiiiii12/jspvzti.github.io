oS.Init({
    PName: [],
    ZName: [oImp,oZombie,oConeheadZombie,oBucketheadZombie,oFlagZombie,oScreenDoorZombie, oDuckyTubeZombie1,oDuckyTubeZombie2,
oPoleVaultingZombie,oDuckyTubeZombie3, oNewspaperZombie, oDolphinRiderZombie, 
oGargantuar, oSnorkelZombie,oFootballZombie,oDancingZombie,oZomboni,oJackinTheBoxZombie,oBalloonZombie,oGatlingPeaZombie,oPeaZombie,oWallNutZombie,oTallNutZombie,oDiggerZombie,oLadderZombie,oJalapenoZombie,oBackupDancer],
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
        PNameList:{
                oPeashooter: 0,
                oSunFlower: 1,
                oCherryBomb: 2,
                oWallNut: 3,
                oPotatoMine: 4,
                oSnowPea:5,
                oChomper: 6,
                oRepeater: 7,
                oPuffShroom: 8,
                oSunShroom: 9,
                oFumeShroom:10,
                oGraveBuster: 11,
                oHypnoShroom: 12,
                oScaredyShroom: 13,
                oIceShroom: 14,
                oDoomShroom:15,
                oLilyPad: 16,
                oSquash: 17,
                oThreepeater: 18,
                oTangleKelp: 19,
                oJalapeno: 20,
                oSpikeweed: 21,
                oTorchwood:22,
                oTallNut: 23,
                oSeaShroom:24,
                oPlantern: 25,
                oCactus: 26,
                oBlover: 27,
                oSplitPea: 28,
                oStarfruit: 29,
                oPumpkinHead: 30,
                oFlowerPot: 31,
                oCoffeeBean: 32,
                oGarlic: 33,
                oGatlingPea: 34,
                oTwinSunflower: 35,
                oGloomShroom: 36,
                oSpikerock: 37,
                oLawnCleaner:38,
                oPoolCleaner: 39,
                oNutBowling: 40,
                oHugeNutBowling: 41,
                oBoomNutBowling: 42,
                oRepeater2: 43,
                oSniperPea: 44
            },
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
                    PlayAudio("tap"), SetBlock($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"), $("dCardList")), SetNone(dChoosePlant);
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
                    NormalTop = 30,
                    LeftAdd = 140,
                    TopAdd = 80,
                    LineMax = 6;
                var Left = NormalLeft,
                    Top = NormalTop,
                    Obj,
                    LineNum = 0;
                // 生成卡片元素
                for (var _ = 0; _ < PL.length; ++_) {
                    Obj = PL[_].prototype; // 获取当前的卡片数据
                    var dCard = NewEle("dCard_" + _, "div", "position:absolute;width:100;height:60;overflow:hidden;left:" + Left + "px;top:" + Top + "px;cursor:pointer;", {
                        value: _,
                        "onmouseout": function() {
                            SetHidden($("dTitle"));
                        },
                        "onmousemove": function(event) {
                            ViewCardTitle(PL[this.value], event);
                        },
                        "onclick": function(i) {
                            SetBlock($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"), $("dCardList")),SetNone(dChoosePlant),ChosePlant(i,this.value);
                        }
                    }, dChoosePlantBoard);
                    var dImg = NewImg("dImg_" + _, Obj.PicArr[Obj.CardGif], "width:100;height:120;", dCard);
                    var dPrice = NewEle("dPrice_" + _, "span", "text-align:right;cursor:pointer;position:absolute;left:62px;top:40px;width:34px;height:20px;font-family:Fixedsys;font-size:11pt;font-weight:bold", {
                        "innerText": Obj.SunNum
                    }, dCard);
                    Left += LeftAdd, ++LineNum; // 偏移下一个卡片的位置
                    if (LineNum % LineMax == 0) LineNum = 0, Left = NormalLeft, Top += TopAdd; // 如果超过，则下一个就换行
                }
            }
        },
    LvlClearFunc: function() {
        oS.ScrollScreen = oS.LvlVar.ScrollScreen;
        delete oS.LvlVar.ScrollScreen
    },
    StartGame: function() {
        oS.Plant();
        NewEle("dButton1", "button", "position:absolute;left:250px;top:20px;width:100px;height:35px;z-index:255", {
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
        NewEle("dButton2", "button", "position:absolute;left:350px;top:20px;width:100px;height:35px;z-index:255", {
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
       NewEle("dButton3", "button", "position:absolute;left:450px;top:20px;width:100px;height:35px;z-index:255", {
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
        NewEle("dButton4", "button", "position:absolute;left:550px;top:20px;width:100px;height:35px;z-index:255", {
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
                           (n[k].EName=="oNewspaperZombie"||n[k].EName=="oGatlingPeaZombie")&&n[k].getHit0(n[k],n[k].OrnHP,0)
                        }
                     c = (m = oZ.getArHZ(0,oS.W, h)).length;
                        while (c--) {
                            (m[c].EName=="oNewspaperZombie"||m[c].EName=="oGatlingPeaZombie")&&m[c].getHit0(m[c],m[c].OrnHP,0)
                        }
                   } while (h++ < oS.R)
            }
        }, EDAll);
        NewEle("dButton5", "button", "position:absolute;left:150px;top:580px;width:80px;height:20px;z-index:255", {
            innerHTML: "种植植物",
            onclick: function() {
                PlayAudio("tap"), SetNone($("dButton1"), $("dButton2"), $("dButton3"), $("dButton4"),$("dButton5"),  $("dCardList")), SetBlock(dChoosePlant)
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
        oP.Monitor(), BeginCool();
        SetVisible($("dTop"));
    }
});
