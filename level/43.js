var oPoleVaultingZombie = InheritO(OrnNoneZombies, {
        EName: "oPoleVaultingZombie",
        CName: "撑杆僵尸",
        HP: 600,
        width: 348,
        height: 218,
        OSpeed: 3.2,
        Speed: 3.2,
	    HitAttack:1000,
        beAttackedPointL: 215,
        beAttackedPointR: 260,
        StandGif: 13,
        GetDX: function() {
            return -238
        },
        GetDY: function() {
            return 2
        },
        Lvl: 4,
        SunNum: 175,
		    jinyinGif:14,
		    ZKind:-2,
        BookHandPosition: "-30px 70%",
        PicArr: (function() {
            var a = "images/Zombies/PoleVaultingZombie/";
            return ["images/Card/Zombies/PoleVaultingZombie.png", a + "0.gif", a + "PoleVaultingZombie.gif", a + "PoleVaultingZombieAttack.gif", a + "PoleVaultingZombieLostHead.gif", a + "PoleVaultingZombieLostHeadAttack.gif", a + "PoleVaultingZombieHead.gif" + $Random, a + "PoleVaultingZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "PoleVaultingZombieWalk.gif", a + "PoleVaultingZombieLostHeadWalk.gif", a + "PoleVaultingZombieJump.gif", a + "PoleVaultingZombieJump2.gif", a + "1.gif", a + "jinyinrun.gif",a + "jinyinjump.gif"]
        })(),
        AudioArr: ["polevault", "grassstep"],
        Produce: '撑杆僵尸运用标杆高高地跃过障碍物。<br>韧性：<font color="#FF0000">中（600)</font><br>精英形态一：反向，跳跃完毕后于3×3植物上召唤血量低的普通撑杆<br>精英形态二：箭头撑杆，自身行进至第七列时自动锁定本行最靠右的植物并跳过它，跳跃时碾压身下的植物<br>速度：<font color="#FF0000">快,而后慢(跳跃后)</font><BR>特点：<font color="#FF0000">跃过他所碰到的“第一株”植物</font><br>一些僵尸渴望走得更远、得到更多，这也促使他们由普通成为……不那么普通？那就是撑杆僵尸。',
        getShadow: function(a) {
            return "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 35) + "px"
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "left:" + b.X + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
		  bedevil: function(c,a) {
    !(c.num>=50 && c.NormalAttack != oGargantuar.prototype.NormalAttack) && c.ExchangeLR(c, 1);
    c.WalkDirection = 1;
    c.ZX = c.AttackedRX;
    c.ChkActs = c.ChkActs1;
	if(!a){
	c.JudgeAttack = c.JudgeAttackH;
    c.PZ = 0;
    oP.MonPrgs()
	}
  },
PoleNum:0,
        JudgeAttack: function() {
            var g = this,
                b = g.ZX,
                d = g.R + "_",
                c = GetC(b),
                h = oGd.$,
                f,
                a,
                e = b - 74;
			if(!g.JudgeAttackH1()){
            for (f = c - 2; f <= c; f++) {
                if (f > 9) {
                    continue
                }
                for (a = 2; a > -1;
                    (p = h[d + f + "_" + a--]) && (p.EName != "oBrains" ? p.AttackedRX >= e && p.AttackedLX < b && p.canEat && (a = -1,++g.PoleNum>2&&(g.JudgeAttackH1=CZombies.prototype.JudgeAttackH1, g.JudgeAttackH= CZombies.prototype.JudgeAttackH,g.JudgeAttack = CZombies.prototype.JudgeAttack), g.NormalAttack(g.id, p.id, p.AttackedLX)) : p.AttackedRX >= b && p.AttackedLX < b && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack, g.JudgeAttackH1= CZombies.prototype.JudgeAttackH1,(g.NormalAttack = CZombies.prototype.NormalAttack)(g.id, p.id)))) {}
               }
			}
        },
  JudgeAttackH: function() {
    var e = this,
      d = oZ.getZ0(e.ZX + 74, e.R),
      f = e.id,
      c;
    d && d.AttackedLX < oS.W && d.Altitude == 1 && !e.isAttacking && (++e.PoleNum>2&&(e.JudgeAttackH1 = CZombies.prototype.JudgeAttackH1,e.JudgeAttack=e.JudgeAttackH = CZombies.prototype.JudgeAttackH), e.NormalAttack(f, c = d.id, d.ZX+20))
  },
  jinyinAct: function(a) {
	a.num = a.Privatenum||Math.random() * 100;
    a.num>=50?a.ExchangeLR(a, 1):(a.PrivateAct=function(a){
	for (let i = GetC(a.ZX-30);i>=1;i--) {
        for (let j = 0; j < 4; j++) {
          let g = oGd.$[a.R + "_" + i + "_" + j];
        GetC(a.ZX+30)<=8&&a.canWalk(a,a.id)&&a.PZ&&!a.isAttacking&&g&&g.canEat&&(++a.PoleNum>2&&(a.JudgeAttackH1 = CZombies.prototype.JudgeAttackH1,
			  a.JudgeAttackH= CZombies.prototype.JudgeAttackH,
			  a.JudgeAttack = CZombies["prototype"][a.PZ?"JudgeAttack":"JudgeAttackH"]),
			a.NormalAttack(a.id,g.id,g.AttackedLX));
        }
      }
	},a.NormalGif=a.jinyinGif,
	a.EleBody.src=a.PicArr[a.NormalGif]);
  },
  JudgeAttackH1: function() {
    var e = this,
      d = oZ.getHZ1(e.ZX - 74, e.R),
      f = e.id,
      c;
    if (d && d.Altitude == 1) {
      !e.isAttacking && (++e.PoleNum>2&&(e.JudgeAttackH1 = CZombies.prototype.JudgeAttackH1,e.JudgeAttackH=CZombies.prototype.JudgeAttackH,e.JudgeAttack = CZombies.prototype.JudgeAttack), e.NormalAttack(f, c = d.id, d.ZX-20))
      return d
    }
  },
        getCrushed: function(a) {
            this.NormalAttack(this.id, a.id, a.AttackedLX);
            this.getCrushed = function() {
                return false
            };
            a.Stature > 0 && oSym.addTask(50,
                function(c) {
                    var b = $Z[c];
                    b && b.CrushDie()
                },
                [this.id]);
            return false
		},
        getRaven: function(a) {
            return !this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX),
                0
        },
        NormalAttack: function(d, b, g) {
            var f = $Z[d],
                a = f.Ele,
                c = f.EleShadow,
                e = f.EleBody;
		f&&(f.PrivateAct=function(){});
		f.num>=50&&(PlayAudio("dancer"),f.PoleNum==1&&f.PZ&&f.ExchangeLR(f,0));
            e.src = !(f.jinyin&&f.num<50)?"images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump.gif" + $Random + Math.random():"images/Zombies/PoleVaultingZombie/jinyinjump.gif" + $Random + Math.random();
            PlayAudio("grassstep");
            SetHidden(c);
            f.isAttacking = 1;
            f.Altitude = 2;
            f.getFreeze = function() {
                f.getSnowPea(f, 20)
            };
			if(f&&f.jinyin&&f.num<50){
			for(let k = 0;k <= 3;k++){
				var P=oGd.$[f.R+"_"+GetC(f.ZX-75)+"_"+k];
				f.PZ&&P&&P.getHurt(P,3,1800)
			}
			var Z=oZ[f.PZ?"getArHZ":"getArZ"](f.ZX-75,f.ZX+75,f.R);
				      Zl=Z.length;
				      while(Zl--){
						  f&&f.canWalk(f,d)&&Z[Zl].getThump(1800);
					  }
			}
            oSym.addTask(50,
                function(h) {
                    $Z[h] && PlayAudio("polevault")
                },
                [d]);
            oSym.addTask(100,
                function(m, j, i, l, n) {
                    var h = $Z[m],
                        k,
                        q,
                        r,
						Z,
						Z2;
                    h && (!((k=$P[j]||$Z[j])&&k.Stature>0)&& (h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g) - h.beAttackedPointR) + h.beAttackedPointL, SetStyle(i, {
                        left: h.X + "px"
                    })), SetVisible(l),n.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump2.gif" + $Random + Math.random(),h.PoleNum>2?(oSym.addTask(80,
                        function(s, v) {
                            var u = $Z[s],
                                t;
                            u && (v.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif", u.isAttacking = 0, u.Altitude = 1, u.OSpeed = u.Speed = 1.6, u.NormalGif = 9, u.LostHeadGif = 10,u.NormalAttack = (t = oGargantuar.prototype).NormalAttack, u.AttackZombie = t.AttackZombie, u.getCrushed = t.getCrushed, u.getFreeze = t.getFreeze, u.getRaven = CZombies.prototype.getRaven)
                        },
                        [m, n])):(oSym.addTask(80,
                        function(s, v) {
                            var u = $Z[s],
                                t;
                            u && (v.src = u.PicArr[u.NormalGif], u.isAttacking = 0, u.Altitude = 1)
                        },
                        [m, n])));
					var C = GetC(h.ZX);
			if(h.num>=50){
					var R = Math.max(h.R - 1,1),
                        RM = h.R + 1 <= oS.R ? h.R + 1 : oS.R;
			for(let i = R;i <= RM;i++){
                    for(let j = C - 1;j <= C + 1;j++){
                        for(let k = 0;k <= 3;k++){
                            let p = oGd.$[i+"_"+j+"_"+k];
							h&&h.PZ&&h.canWalk(h,m)&&p&&((Z=CustomZombie(oPoleVaultingZombie,i,j,!h.PZ)).HP*=0.2,Z.BreakPoint=40,Z.jinyinnum=0);
                        }
                    }
				  var Z=oZ[h.PZ?"getArHZ":"getArZ"](h.ZX-100,h.ZX+100,i);
				      Zl=Z.length;
				      while(Zl--){
						  h&&h.canWalk(h,m)&&((Z2=CustomZombie(oPoleVaultingZombie,i,GetC(Z[Zl].ZX),!h.PZ)).HP*=0.2,Z2.BreakPoint=40,Z2.jinyinnum=0);
					  }
                   }
			}
                },
                [d, b, a, c, e])
        }
  });
oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit,oPumpkinHead,oGarlic,oUmbrellaLeaf,oCabbage],
	ZName: [oZombie, oZombie2, oZombie3, oImp,oJackinTheBoxZombie,oConeheadZombie,oFootballZombie,oPoleVaultingZombie,oPeaZombie,oCatapultZombie],
	PicArr: function() {
		var a = oMelonPult.prototype,
			b = a.PicArr;
		return ["images/interface/background_Dark.jpg","images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background_Dark.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: Math.round(Math.random()*100+50),
	LevelName: "5-3",
	LvlEName: 43,
	AudioArr: ["puff"],
	LargeWaveFlag: {
  10: $("imgFlag3"),
  20: $("imgFlag2"),
	30: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [7, 9, 15]
	},
	UserDefinedFlagFunc: function(a) {
		if(oP.FlagZombies>24){
      AppearTombstones(8,9,2),oP.SetTimeoutTomZombie([oZombie,oConeheadZombie,oPeaZombie,oImp,oFootballZombie])
    }
    switch (true){
      case oP.FlagZombies>10:
        for (i in $Z) $Z[i]&&$Z[i].PZ&&Math.random()*100>Math.ceil(oP.FlagZombies*1.5)&&oLadderZombie.prototype.getAid($Z[i],0,oP.FlagZombies*100);
      case oP.FlagZombies>22:
        for (i in $Z) $Z[i]&&$Z[i].PZ&&Math.random()*100>oP.FlagZombies&&($Z[i].oPrivateAct=$Z[i].PrivateAct,$Z[i].PrivateAct=function(a){
          a.oPrivateAct(a);
          oNewspaperZombie.prototype.JudgeHidden(a)
        });
    }
	},
	StartGameMusic: "rebeatedupnight",
	LoadAccess: function(a) {
	if($User.Visitor.Progress<43)return document.write("跳关好玩吗？");
	oAudio["Look up at the Sky"].playbackRate=Math.random()*0.7+0.7;//音乐变速
	NewEle("DivTeach", "div", 0, 0, EDAll);
		(function(d) {
			var b = arguments.callee,
				c = $("DivTeach");
			switch (d) {
				case 0:
            innerText(c, "……",1);
						c.onclick = function() {
							oSym.addTask(50, b, [1]);
							c.onclick=null;
						};
					break;
				case 1:
					c.onclick = function() {
						oSym.addTask(50, b, [2]);
						c.onclick=null;
					};
					innerText(c, "看来戴夫是凶多吉少了",1);
					break;
				case 2:
						c.onclick = function() {
							oSym.addTask(50, b, [3]);
							c.onclick=null;
						};
					innerText(c, "前院开始变得无法预料",1);
					break;
				case 3:
						c.onclick = function() {
							oSym.addTask(50, b, [4]);
							c.onclick=null;
					};
					innerText(c, "甚至能感觉到所见的僵尸已经大变样了",1);
					break;
				case 4:
						c.onclick = function() {
							oSym.addTask(50, b, [5]);
							c.onclick=null;
						};
					innerText(c, "唉，祸福各由天命吧。",1);
					break;
				case 5:
			ClearChild($("DivTeach"));
			a(0)
			}
		})(0)
	}
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oImp, 2, 1],
    [oConeheadZombie, 1, 1],
    [oJackinTheBoxZombie, 1, 1],
    [oFootballZombie, 1, 5,[10,20,30]],
    [oPoleVaultingZombie, 1, 1],
    [oPeaZombie, 1, 1],
	  [oCatapultZombie, 1, 1]
	],
	FlagNum: 33,
  FlagToSumNum: {
		a1: [3, 5, 9,13,15,19,23,25,29],
		a2: [2, 3, 10,18,6,12,25,10,20,35]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
    19: [ShowLargeWave, 0],
    29: [ShowFinalWave, 0] 
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/MelonPult.png", "left:667px;top:220px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
        ClearChild($("PointerUD"));
				GetNewCard(this,oMelonPult, 44);
				alert("下次打开游戏时，您可以在指令行输入“WomtXsHevoJsyv”以证明你通过此关（建议自行保存）");
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
	}
});
