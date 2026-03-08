var oGargantuar = InheritO(oZombie, {
  PicArr: (function() {
    var a = "images/Zombies/Gargantuar/";
    return ["images/Card/Zombies/Gargantuar.png", a + "0.gif", a + "Walk.gif", a + "Attack.gif" + $Random, a + "ImpToLand.gif", a + "throwImp.gif", a + "ImplessDie.gif", a + "Die.gif", a + "ImplessWalk.gif", a + "0.gif", a + "ImplessAttack.gif" + $Random]
  })(),
  throwImpGif: 5,
  ImpToLandGif: 4,
  ImplessDieGif: 6,
  ImplessWalkGif: 8,
  DieGif: 7,
  AudioArr: ["ImpToLand", "GargantuarDie","zaji"],
  width: 350,
  CanPass: function(d, c) {
    return c
  },
  beAttackedPointL: 154,
  beAttackedPointR: 285,
  ImplessAttackGif: 10,
  HP: 3000,
  height: 300,
  BreakPoint: 1,
  NormalDie: function() {
    var c = this;
    PlayAudio("GargantuarDie");
    c.EleBody.src = c.PicArr[c.DieGif];
    oSym.addTask(400, ClearChild, [c.Ele]);
    c.HP = 0;
    delete $Z[c.id];
    c.PZ && oP.MonPrgs()
  },
  GoingDie: function() {
    this.NormalDie()
  },
  AttackZombie: function(d, c) {
    PlayAudio("zaji");
    oSym.addTask(125,
      function(f, e) {
        var h = $Z[f],
          g;
        h && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 1000, 0),
      oSym.addTask(25, function(h) {
              h&&h.JudgeAttack()
            },[h]))
      },
      [d, c])
  },
  getShadow: function(c) {
    return "left:" + (c.beAttackedPointL - 20) + "px;top:" + (c.height - 54) + "px;width:172px;height:72px"
  },
  ChkActs: function(h, f, j, e) {
    var d, c, g, a;
    !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
      R: f,
      ar: [oS.R - 1],
      CustomTop: 400 - h.height + h.GetDY()
    })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
    h.PrivateAct && h.PrivateAct(h);
    return g
  },
  JudgeAttackH1: function() {
                    var e = this,
                        d = oZ.getHZ1(e.ZX-20, e.R),
                        f = e.id,
                        c;
					if(d && d.Altitude == 1){
          (!e.isAttacking ? e.AttackZombie(f, c = d.id) : e.AttackZombie(f, d.id, 1))
					return d
				   }
  },
  jinyinAct: function() {},
  JudgeAttack: function() {
    var g = this,
      d = g.ZX,
      e = g.R + "_",
      f = GetC(d),
      h = oGd.$,
      a,
      c;
    (a = g.JudgeAttackH1()) || (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif] + Math.random()), !a && g.NormalAttack(c[0], c[1])) :
    g.isAttacking && (g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif])
  },
  JudgeAttackH: function() {
    var e = this,
      d = oZ.getZ0(e.ZX+20, e.R),
      f = e.id,
      c;
    d && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif] + Math.random(), e.AttackZombie(f, c = d.id)) : e.AttackZombie(f, d.id, 1)) : 
    e.isAttacking && (e.isAttacking = 0, e.EleBody.src = e.PicArr[e.NormalGif])
  },
  JudgeLR: function(f, d, e, c, g) {
    return e > 10 || e < 1 ? false : function() {
      d += --e + "_";
      var h = 3,
        i;
      while (h--) {
        if (i = g[d + h]) {
          return i.AttackedRX >= c - 20 && i.AttackedLX <= c - 20 ? [f.id, i.id] : false
        }
      }
    }()
  },
  JudgeSR: function(f, d, e, c, g) {
    return e > 9 ? false : function() {
      d += e + "_";
      var h = 3,
        i;
      while (h--) {
        if (i = g[d + h]) {
          return i.AttackedRX >= c - 20 && i.AttackedLX <= c - 20 ? [f.id, i.id] : false
        }
      }
    }()
  },
  NormalAttack: function(d, c) {
    PlayAudio("zaji");
    oSym.addTask(125, function(f, e) {
      var h = $Z[f];
      var tp;
      for (i = -1; i <= 3; i++) {
        h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((d = $P[e]) && (tp = oGd.$[d.R + "_" + d.C + "_" + i]) && tp.getHurt(h, 1, 50),
            oSym.addTask(25, function(h) {
              h&&h.JudgeAttack()
            },[h]))
      }
    }, [d, c]);
  },
  ExplosionDie: function() {
    this.NormalDie()
  },
  DisappearDie: function() {
    this.NormalDie(this)
  },
getr:function(e,l,c){
	if(c){CZombies.prototype.getr(e,l)}
},
  hasthrew: 0,
  PrivateAct: function(h) {
        !h.intowater && (oGd.$LF[h.R] == 2) && h.ZX < GetX(9) && h.ZX > GetX(0) && (SetStyle(h.EleBody, {
      top: "100px",
      clip: "rect(0,auto,200px,0)"
    }), h.intowater = true, SetHidden(h.EleShadow), NewEle(a = h.id + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:126px;top:" + (h.height - 88) + "px;width:97px;height:88px;over-flow:hidden", 0, h.Ele), ImgSpriter(a, h.id, [
        ["0 0", 9, 1],
        ["-97px 0", 9, 2],
        ["-194px 0", 9, 3],
        ["-291px 0", 9, 4],
        ["-388px 0", 9, 5],
        ["-485px 0", 9, 6],
        ["-582px 0", 9, 7],
        ["-679px 0", 9, -1]
      ], 0,
      function(i) {
        ClearChild($(i))
      }), PlayAudio("zombie_entering_water"));
    h.intowater && (oGd.$LF[h.R] == 2) && (h.ZX > GetX(9) || h.ZX < GetX(0)) && (SetStyle(h.EleBody, {
      top: "0px",
      clip: "rect(0,auto,300px,0)"
    }, SetVisible(h.EleShadow)), h.intowater = false);
    !h.hasthrew && (GetC(h.ZX) > 4 || !h.PZ) && !h.isAttacking && (h.HP <= 1500) && $Z[h.id] && h.throwImp(h);
  },
  throwImp: function(g) {
    g.ChkActs = function() {
        return 1
      },
      g.ChkActs1 = function() {
        return 1
      },
      g.hasthrew = 1,
      g.EleBody.src = g.PicArr[g.throwImpGif], oSym.addTask(100,
        function(m, l) {
          var k = $Z[m];
          if (!k) {
            return
          }
          k.DieGif = k.ImplessDieGif;
          PlayAudio("ImpToLand");
          var AC = Math.max(GetC(k.ZX) - 4 * k.PZ, 3);
          oSym.addTask(100, ClearChild, [NewImg(0, k.PicArr[k.ImpToLandGif], "left:" + (GetX(AC) - 30) + "px;top:" + (k.pixelTop + 150) + "px;transform:" + (k.PZ ? "rotateY(0px)" : "rotateY(180px)") + ";z-index:" + k.zIndex, EDPZ)])
          oSym.addTask(100, function(k) {
            CustomZombie(oImp, k.R, AC, k.PZ ? 0 : 1);
          }, [k]);
          var j = CZombies.prototype;
          k.ChkActs = !k.WalkDirection ? j.ChkActs : j.ChkActs1;
          k.ChkActs1 = j.ChkActs1;
          k.EleBody.src = l;
        },
        [g.id, g.PicArr[[g.NormalGif = g.ImplessWalkGif, g.AttackGif = g.ImplessAttackGif][g.isAttacking]]])
  },
  SunNum: 250,
  EName: "oGargantuar",
  CName: "伽刚特尔",
  Produce: '非常强力的僵尸<p>韧性：<font color="#FF0000">极高(3000)</font><br>特点：<font color="#FF0000">半血丢小鬼，砸击植物，免疫击退</font><br>伽刚特尔的气场，是任何僵尸都无法比拟的，他是僵尸世界公认的偶像，他是最成功之僵。只是他出道十几年以来一直有个老大难的问题：他还是没有女朋友！'
}),
oPeaZombie = InheritO(oZombie, {
  EName: "oPeaZombie",
  CName:"豌豆僵尸",
  StandGif: 9,
  PicArr: (function() {
    var a = "images/Zombies/Zombie/";
    return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif"]
  })(),
HP:300,
  jinyinAct:function(a){a.Ele.style.opacity=0.5,a.HP*=1.5},
  GoingDieHead:function(){},
  PrivateBirth: function() {
    var c = this;
    c.BulletEle = NewImg(0, oPeashooter.prototype.PicArr[3], "left:" + (c.AttackedLX) + "px;top:" + (c.pixelTop + 20) + "px;visibility:hidden;z-index:" + (c.zIndex + 2));
    oSym.addTask(100, function(c) {
      $Z[c.id] && c.beAttacked && (c.shootPea(c),c.jinyin&&c.getHit0(c,10));
      $Z[c.id] ? oSym.addTask(140-(c.jinyin*70), arguments.callee, [c]) : c.BulletEle = null;
    }, [c]);
	var z = $(c.id);
    z.PeaHead = "Pea" + Math.random();
    var pea = NewImg(z.PeaHead,"images/Plants/Peashooter/Peashooter.gif","position:absolute;width:80px;height:80px;transform:rotateY(180deg);left:45px;top:15px;",0);
    z.appendChild(pea);
  },
  bedevil: function(c) {
    c.ExchangeLR(c, 1);
    c.JudgeAttack = c.JudgeAttackH;
    c.PZ = 0;
    c.WalkDirection = 1;
    c.ZX = c.AttackedRX;
    c.ChkActs = c.ChkActs1;
    c.shootPea = oPeashooter.prototype.NormalAttack;
    oP.MonPrgs()
  },
check:1,
  PrivateAct:function(a){
var z=$(a.id);
	  if($Z[a.id]&&!a.isDie){
	!(a.PZ==a.check)&&(
	EditImg($(z.PeaHead),0,"images/Plants/Peashooter/Peashooter.gif",{
		transform:a.PZ?"rotateY(180deg)":"rotateY(0deg)"
	},0));
	!a.beAttacked&&(ClearChild($(z.PeaHead)),a.isDie=true);
	  }
  },
PrivateDie:function(a){
	var z=$(a.id);
	z.PeaHead&&ClearChild($(z.PeaHead))
},
  shootPea: function() {
    var a = this,
      b = "PB" + Math.random();
    EditEle(a.BulletEle.cloneNode(false), {
        id: b
      },
      0, EDPZ);
	EditEle($(b), {
        top:(GetY(a.R)-60) + "px"
      },
      0, EDPZ);
    oSym.addTask(1,
      function(d) {
        var c = $(d);
        c && SetVisible(c)
      },
      [b]);
    oSym.addTask(1,
      function(f, j, n, i, o) {
        var l, e = GetC(n);
        var Kind = 3,
			Z = oZ["getHZ1"](n,i),
          d, isHit;
		Z && Z.Altitude == 1 && (Z.getPea(Z,20,0),isHit=true);
        while (Kind--) {
          (d = oGd.$[i + "_" + e + "_" + Kind]) && (d.canEat) && (d.Stature >= 0) && (d.EName != "oBrains") && (d.AttackedLX < n) && (d.AttackedRX > n) && (isHit = true, d.getHurt(a, 3, 20))
        }
	  isHit?((SetStyle(j, {
            left: o + 28 + "px",
            width: "52px",
            height: "46px"
          })).src = "images/Plants/PeaBulletHit.gif", oSym.addTask(10, ClearChild, [j])):((n += (l = -5)) < oS.W && n > 100 ? (j.style.top = (GetY(i) - 140) + "px",j.style.left = (o += l) + "px", oSym.addTask(1, arguments.callee, [f, j, n, i, o])) : ClearChild(j))
      },
      [b, $(b), a.ZX, a.R, a.ZX - 40])
  },
  Produce: '韧性：<font color="#FF0000">低(300)</font><br>精英形态：450血，攻速变快，但每次攻击扣自己10血</p>这种僵尸喜爱脑髓，贪婪而不知足。脑髓，脑髓，脑髓，夜以继日地追求着。老而臭的脑髓？腐烂的脑髓？都没关系。僵尸需要它们。'
}),
    oGatlingPeaZombie = InheritO(oNewspaperZombie, {
        EName: "oGatlingPeaZombie",
        CName: "机枪读报僵尸",
        Lvl: 4,
		HP:450,
		SunNum:175,
        PicArr: (function() {
            var a = "images/Zombies/GatlingPeaZombie/";
            return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostPaper.gif", a + "1.gif"]
        })(),
        AudioArr: ["newspaper_rarrgh2"],
        Produce: '他的报纸只能提供有限的防御。<p>韧性：<font color="#FF0000">中（450，发怒后50%减伤）</font><br>报纸韧性：<font color="#FF0000">低</font><br>速度：正常，而后快(失去报纸后)</font><br>伤害：正常，而后4倍(失去报纸后)</p>读报僵尸，他正痴迷于完成他的数独难题。难怪他这么反常。',
		jinyinAct:function(a){},
		bedevil:oPeaZombie.prototype.bedevil,
		  shootPea: function() {
    var a = this,
      b = "PB" + Math.random();
    EditEle(a.BulletEle.cloneNode(false), {
        id: b
      },
      0, EDPZ);
    oSym.addTask(2,
      function(d) {
        var c = $(d);
        c && SetVisible(c)
      },
      [b]);
    oSym.addTask(1,
      function(f, j, n, i, o) {
        var l, e = GetC(n);
        var Kind = 3,
			Z = oZ["getHZ1"](n,i),
          d, isHit;
		Z && Z.Altitude == 1 && (Z.getPea(Z,20,0),isHit=true);
        while (Kind--) {
          (d = oGd.$[i + "_" + e + "_" + Kind]) && (d.canEat) && (d.Stature >= 0) && (d.EName != "oBrains") && (d.AttackedLX < n) && (d.AttackedRX > n) && (isHit = true, d.getHurt(a, 3, 20))
        }
	  isHit?((SetStyle(j, {
            left: o + 28 + "px",
            width: "52px",
            height: "46px"
          })).src = "images/Plants/PeaBulletHit.gif", oSym.addTask(10, ClearChild, [j])):((n += (l = -5)) < oS.W && n > 100 ? (j.style.top = (GetY(i) - 100) + "px",j.style.left = (o += l) + "px", oSym.addTask(1, arguments.callee, [f, j, n, i, o])) : ClearChild(j))
      },
      [b, $(b), a.ZX, a.R, a.ZX - 40])
  },
        CheckOrnHP: function(g, h, d, c, f, b, a) {
            var e = OrnNoneZombies.prototype;
            (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.ChkActs = function() {
                    return 1
                },
                g.ChkActs1 = function() {
                    return 1
                },
                g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea, g.getFreezePea = e.getFreezePea,g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit, oSym.addTask(150,
                    function(m, l) {
                        var k = $Z[m];
                        if (!k) {
                            return
                        }
                        var j = CZombies.prototype,
                            i = k.OSpeed = k.LostPaperSpeed;
                        k.ChkActs =!k.WalkDirection?j.ChkActs:j.ChkActs1;
                        k.ChkActs1 = j.ChkActs1;
						k.tasktime*=0.4;
						k.jianshang=0.5;
    k.BulletEle = NewImg(0, oPeashooter.prototype.PicArr[3], "left:" + (k.ZX) + "px;top:" + (k.pixelTop + 60) + "px;visibility:hidden;z-index:" + (k.zIndex + 2));
    oSym.addTask(100, function(k) {
      $Z[k.id] && k.beAttacked && k.shootPea(k);
      $Z[k.id] ? oSym.addTask(20, arguments.callee, [k]) : k.BulletEle = null;
    }, [k]);
                        k.Speed && (k.Speed = !k.FreeSlowTime ? i : 0.5 * i);
                        if (!k.beAttacked) {
                            return
                        }
                        PlayAudio("newspaper_rarrgh2");
                        k.EleBody.src = l;
                        k.JudgeAttack()
                    },
                    [h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
        }
    })
