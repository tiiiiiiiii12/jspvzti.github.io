oS.Init({
	PName: [oFumeShroom, oStarfruit, oPumpkinHead, oDoomShroom,oSniperPea,oRepeater,oBlover,oSplitPea,oGraveBuster],
	ZName: [oGargantuarBoss, oConeheadZombie, oZombie, oFootballZombie, oFlagZombie, oBucketheadZombie, oPoleVaultingZombie, oScreenDoorZombie, oImp, oZomboni, oGargantuar, oPeaZombie, oJackinTheBoxZombie, oWallNutZombie, oTallNutZombie, oLadderZombie, oNewspaperZombie, oDancingZombie, oBackupDancer, oJalapenoZombie, oGatlingPeaZombie],
	PicArr: ["images/interface/background2.jpg", "images/interface/trophy.png", "images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png"],
	backgroundImage: "images/interface/background2.jpg",
	CanSelectCard: 0,
	DKind: 0,
	LevelName: "关卡 4-10",
	LvlEName: 40,
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag1")
	},
	StaticCard: 0,
	StartGameMusic: "Ultimate battle",
	StartGame: function() {
		StopMusic();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		SetHidden($("dSunNum"));
		AppearTombstones(4,9,7);
		PrepareGrowPlants(function() {
			oP.Monitor({
				f: function() {
					(function() {
						var a = ArCard.length;
						if (a < 10) {
							var c = oS.PName,
								b = Math.floor(Math.random() * c.length),
								e = c[b],
								d = e.prototype,
								f = "dCard" + Math.random();
							ArCard[a] = {
								DID: f,
								PName: e,
								PixelTop: 600
							};
							NewImg(f, d.PicArr[d.CardGif], "top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)", $("dCardList"), {
								onmouseover: function(g) {
									ViewPlantTitle(GetChoseCard(f), g)
								},
								onmouseout: function() {
									SetHidden($("dTitle"))
								},
								onclick: function(g) {
									ChosePlant(g, oS.ChoseCard, oS.ChoseCard)
								}
							})
						}
						oSym.addTask(600, arguments.callee, [])
					})();
					(function() {
						var b = ArCard.length,
							a, c;
						while (b--) {
							(c = (a = ArCard[b]).PixelTop) > 60 * b && ($(a.DID).style.top = (a.PixelTop = c - 1) + "px")
						}
						oSym.addTask(5, arguments.callee, [])
					})();
				},
				ar: []
			});
			oP.AddZombiesFlag();
			SetVisible($("dFlagMeterContent"))
		})
	}
}, {
	AZ: [
    [oGargantuarBoss, 0, 100,[10]],
    [oZombie, 1, 0]
	],
	FlagNum: 10,
	FlagToSumNum: {
		a1: [9],
		a2: [0,1]
	},
	FlagToMonitor: {
		9: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
			onclick: function() {
				SelectModal(0)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:198px;left:269px", EDAll)
	}
}, {
		GetChoseCard: function(b) {
			var a = ArCard.length;
			while (a--) ArCard[a].DID == b && (oS.ChoseCard = a, a = 0);
			return oS.ChoseCard
		},
		ChosePlant: function(a, b) {
			PlayAudio("seedlift"); a = window.event || a;
			var f = ArCard[oS.ChoseCard = b], e = a.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft, d = a.clientY + EBody.scrollTop || EElement.scrollTop, c = f.PName.prototype;
			EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(false), "MovePlantAlpha", "", { visibility: "hidden", filter: "alpha(opacity=40)", opacity: 0.4, zIndex: 30 }, EDAll);
			SetAlpha($(f.DID), 50, 0.5);
			SetHidden($("dTitle"));
			oS.Chose = 1, GroundOnmousemove = GroundOnmousemove1;
		},
		CancelPlant: function() {
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			oS.Chose = 0, oS.ChoseCard = "";
			for(let Idx of ArCard) SetAlpha($(Idx.DID), 100, 1);		
			GroundOnmousemove = function() {};
		},
	GrowPlant: function(l, c, b, f, a) {
		var j = oS.ChoseCard,
			g = ArCard[j],
			i = g.PName,
			k = i.prototype,
			d = g.DID,
			e, h = oGd.$LF[f];
		k.CanGrow(l, f, a) && function() {
			PlayAudio(h != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water");
			(new i).Birth(c, b, f, a, l);
			oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), {
				left: c - 30 + "px",
				top: b - 40 + "px",
				zIndex: 3 * f,
				visibility: "visible"
			})]);
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			$("dCardList").removeChild(e = $(d));
			e = null;
			ArCard.splice(j, 1);
			oS.ChoseCard = "";
			oS.Chose = 0;
			GroundOnmousemove = function() {}
		}()
	},
	ViewPlantTitle: function(a) {}
});
