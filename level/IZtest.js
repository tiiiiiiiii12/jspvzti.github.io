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
            PNameList: { // 植物数据
                "default": "01", // 默认
                oPeashooter: "01", // 普通植物 1 ~ 40
                oSunFlower: "02",
                oCherryBomb: "03",
                oWallNut: "04",
                oPotatoMine: "05",
                oSnowPea: "06",
                oChomper: "07",
                oRepeater: "08",
                oPuffShroom: "09",
                oSunShroom: "10",
                oFumeShroom: "11",
                oGraveBuster: "12",
                oHypnoShroom: "13",
                oScaredyShroom: "14",
                oIceShroom: "15",
                oDoomShroom: "16",
                oLilyPad: "17",
                oSquash: "18",
                oThreepeater: "19",
                oTangleKelp: "20",
                oJalapeno: "21",
                oSpikeweed: "22",
                oTorchwood: "23",
                oTallNut: "24",
                oSeaShroom: "25",
                oPlantern: "26",
                oCactus: "27",
                oBlover: "28",
                oSplitPea: "29",
                oStarfruit: "30",
                oPumpkinHead: "31",
                oFlowerPot: "34",
                oCoffeeBean: "36",
                oGarlic: "37",
                oGatlingPea: "41", // 紫卡: 41 ~ 48 
                oTwinSunflower: "42",
                oGloomShroom: "43",
                oSpikerock: "47",
                oBrains: "51", // 其他植物: 50 ~ 70
                oLawnCleaner: "52",
                oPoolCleaner: "53",
                oNutBowling: "54",
                oHugeNutBowling: "55",
                oBoomNutBowling: "56",
                oRepeater2: "57",
                oSniperPea: "58",
                oPoolCleaner: "59"
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
                    PlayAudio("tap"), SetBlock($("dCardList")), SetNone(dChoosePlant);
                }
            }, dChoosePlant, {
                "type": "button",
                "value": "返回"
            });
            var dChoosePlantBoard = NewEle("dChoosePlantBoard", "div", "position:relative;width:850px;height:455px;left:25px;", 0, dChoosePlant, {
                "class": "dPCard"
            });
            var PList = oS.PNameList; // 引用对象
            { // 负责生成每张卡片
                var NormalLeft = 20,
                    NormalTop = 30,
                    LeftAdd = 140,
                    TopAdd = 80,
                    LineMax = 6;
                var Left = NormalLeft,
                    Top = NormalTop,
                    LineNum = 0;
                // 生成卡片元素
                for (var _ = 0; _ < oS.PNameList.length; ++_) {
                    Obj = oS.PNameList[_].prototype; // 获取当前的卡片数据
                    var dCard = NewEle("dCard_" + _, "div", "position:absolute;width:100;height:60;overflow:hidden;left:" + Left + "px;top:" + Top + "px;cursor:pointer;", {
                        value: _,
                        "onmouseout": function() {
                            SetHidden($("dTitle"));
                        },
                        "onmousemove": function(event) {
                            ViewCardTitle(PList[this.value], event);
                        },
                        "onclick": function(i) {
                            SetBlock($("dCardList")),SetNone(dChoosePlant),ChosePlant(i,this.value);
                        }
                    }, dChoosePlantBoard);
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
                PlayAudio("tap"), SetNone($("dCardList")), SetBlock(dChoosePlant)
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
