var oGargantuar = InheritO(oZombie, {
  PicArr: (function() {
    var a = "images/Zombies/Gargantuar/";
    return ["images/Card/Zombies/Gargantuar.png", a + "0.gif", a + "Walk.gif", a + "Attack.gif" + $Random + Math.random(), a + "ImpToLand.gif", a + "throwImp.gif", a + "ImplessDie.gif", a + "Die.gif", a + "ImplessWalk.gif", a + "0.gif", a + "ImplessAttack.gif" + $Random + Math.random()]
  })(),
  throwImpGif: 5,
  ImpToLandGif: 4,
  ImplessDieGif: 6,
  ImplessWalkGif: 8,
  DieGif: 7,
  throwImpnum: 1,
  Lvl: 7,
  hasthrew: 0,
  AudioArr: ["ImpToLand", "GargantuarDie", "zaji"],
  width: 350,
  CanPass: function(d, c) {
    return c
  },
  beAttackedPointL: 154,
  beAttackedPointR: 285,
  ImplessAttackGif: 10,
  HP: 3000,
  WalkToLadder: function() {}, //不走梯子
  height: 300,
  BreakPoint: 1,
  NormalDie: function() {
    var c = this;
	if(!c.isDie){
    c.PrivateDie(c);
    PlayAudio("GargantuarDie");
    c.EleBody.src = c.PicArr[c.DieGif];
    oSym.addTask(400, ClearChild, [c.Ele]);
    c.HP = 0;
    delete $Z[c.id];
    c.PZ && oP.MonPrgs()
	}
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
        h && h.canWalk(h,h.id)&&h.beAttacked && ((g = $Z[e]) && g.getHit0(g, 1000, 0),
          oSym.addTask(50, function(h) {
            $Z[f] && h.JudgeAttack()
          }, [h]))
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
      d = oZ.getHZ1(e.ZX - 20, e.R),
      f = e.id,
      c;
    if (d && d.Altitude == 1) {
      (!e.isAttacking ? e.AttackZombie(f, c = d.id) : e.AttackZombie(f, d.id, 1))
      return d
    }
  },
  getRaven: function() {
    this.getHit0(this, 40)
  },
  JudgeAttack: function() {
    var g = this,
      d = g.ZX,
      e = g.R + "_",
      f = GetC(d),
      h = oGd.$,
      a,
      c;
    (a = g.JudgeAttackH1()) || (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), !a && g.NormalAttack(c[0], c[1])) :
    g.isAttacking && (g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif])
  },
  JudgeAttackH: function() {
    var e = this,
      d = oZ.getZ0(e.ZX + 20, e.R),
      f = e.id,
      c;
    d && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif], e.AttackZombie(f, c = d.id)) : e.AttackZombie(f, d.id, 1)) :
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
          oSym.addTask(50, function(h) {
            $Z[f] && h.JudgeAttack()
          }, [h]))
      }
    }, [d, c]);
  },
  ExplosionDie: function() {
    this.NormalDie()
  },
  DisappearDie: function() {
    this.NormalDie(this)
  },
  getr: function(e, l, c) {
    if (c) {
      CZombies.prototype.getr(e, l)
    }
  },
  hasthrew: 0,
  PrivateAct: function(h) {
    var ImgLeft;
    h.canWalk(h, h.id) && !h.intowater && (oGd.$LF[h.R] == 2) && h.ZX < GetX(9) && h.ZX > GetX(0) && (SetStyle(h.EleBody, {
        top: "100px",
        clip: "rect(0,auto,200px,0)"
      }), h.intowater = true,
      $(h.Ele.FumeDoor) && ($(h.Ele.FumeDoor).style.top = "180px"),
      SetHidden(h.EleShadow), NewEle(a = h.id + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:126px;top:" + (h.height - 88) + "px;width:97px;height:88px;over-flow:hidden", 0, h.Ele), ImgSpriter(a, h.id, [
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
    h.canWalk(h, h.id) && h.intowater && ((oGd.$LF[h.R] == 2 && (h.ZX > GetX(9) || h.ZX < GetX(0))) || oGd.$LF[h.R] != 2) && (SetStyle(h.EleBody, {
      top: "0px",
      clip: "rect(0,auto,300px,0)"
    }, SetVisible(h.EleShadow)), $(h.Ele.FumeDoor) && ($(h.Ele.FumeDoor).style.top = "80px"), h.intowater = false);
    if (h.jinyin) {
      var P = $(h.id);
      !h.hasthrew && (h.WalkDirection == h.check) && (
        EditImg($(P.FumeDoor), 0, h.num >= 50 ? "images/interface/target.png" : "images/Plants/Blover/Blover.gif", {
          transform: !h.WalkDirection ? "rotateY(0deg)" : "rotateY(180deg)",
          left: !h.WalkDirection ? "200px" : "20px"
        }, 0),
        h.check = h.WalkDirection ? 0 : 1);
    }
    h.canWalk(h, h.id) && h.hasthrew < h.throwImpnum && (GetC(h.ZX) > 3 || !h.PZ) && !h.isAttacking && (h.HP <= h.MaxHP * 0.5) && h.throwImp(h);
  },
  jinyinAct: function(a) {
    a.num = Math.random() * 100 || a.Privatenum;
    var z = $(a.id);
    z.FumeDoor = "Fume" + Math.random();
    var Sh = NewImg(z.FumeDoor, a.num >= 50 ? "images/interface/target.png" : "images/Plants/Blover/Blover.gif", "position:absolute;transform:" + (a.PZ ? "rotateY(0deg);" : "rotateY(180deg);") + "left:200px;top:80px", 0);
    z.appendChild(Sh);
    if (a.num >= 50) {
      var z = oS.ZName;
      a.zl = [];
      for (i = 0; i < z.length; i++) {
        z[i].prototype.Lvl < 4 && z[i].prototype.CanSelect && a.zl.push(z[i]);
      }!a.zl.length && (a.zl = [oZombie]);
      oSym.addTask(1000, function(b) {
        $Z[b.id] && b.hasthrew < b.throwImpnum && (oP.SetTimeoutAirdropZombie(5, 9, 1, b.zl, !b.PZ),
          oSym.addTask(1000, arguments.callee, [b]));
      }, [a]);
    } else {
      oSym.addTask(1500, function(b) {
        $Z[b.id] && (b.Jump(b), oSym.addTask(1500, arguments.callee, [b]));
      }, [a]);
    }
  },
  Jump: function(a) {
    a.Altitude = 4;
    a.isAttacking = 1;
    PlayAudio("zaji");
    a.FreeSetbodyTime = 1;
    SetHidden(a.EleShadow);
    a.EleBody.src = a.PicArr[a.AttackGif];
    var B;
    oSym.addTask(1,
      function(l, k, j, a, Dire, Img, ITop) {
        if (!$Z[a.id]) return;
        k = Dire ? Math.min(k + j, !a.intowater ? 0 : 100) : Math.max(k - j, B);
        SetStyle(l, {
          top: k + "px"
        });
        ITop = Dire ? Math.min(ITop + j, !a.intowater ? 80 : 180) : Math.max(ITop - j, -920);
        SetStyle(Img, {
          top: ITop + "px"
        });
        k == B && (Dire = 1, a.getr(a, !a.WalkDirection ? Math.round(Math.random() * 50 - 150) : Math.round(Math.random() * 100 + 50), 1), a.ChangeR({
          R: a.R,
          ar: [Math.ceil(Math.random() * oS.R)]
        }),a.EleBody.src = a.PicArr[a.AttackGif]);
        k != (!a.intowater ? 0 : 100) ? oSym.addTask(5, arguments.callee, [l, k, j, a, Dire, Img, ITop]) : (!a.intowater && SetVisible(a.EleShadow), a.FreeSetbodyTime = 0, a.Altitude = 1, a.EleBody.src = a.PicArr[a.NormalGif], a.isAttacking = 0)
      },
      [a.EleBody, parseInt(a.EleBody.style.top), -(B = -1000) * 0.05, a, 0, $(a.Ele.FumeDoor), parseInt($(a.Ele.FumeDoor).style.top)]);
  },
  PrivateDie: oScreenDoorZombie.prototype.PrivateDie,
  throwImp: function(g) {
    g.ChkActs = function() {
        return 1
      },
      g.ChkActs1 = function() {
        return 1
      },
      g.hasthrew += 1,
      g.EleBody.src = g.PicArr[g.throwImpGif], oSym.addTask(100,
        function(m, l) {
          var k = $Z[m];
          if (!k) {
            return
          }
          k.DieGif = k.ImplessDieGif;
          PlayAudio("ImpToLand");
          var AC = Math.max(GetC(k.ZX) - 4 * k.PZ, 3);
          oSym.addTask(100, ClearChild, [NewImg(0, k.PicArr[k.ImpToLandGif], "left:" + (GetX(AC) - 30) + "px;top:" + (k.pixelTop + 150) + "px;transform:" + (k.PZ ? "rotateY(0px)" : "rotateY(180px)") + ";z-index:" + k.zIndex, EDPZ)]);
          k && (k.num >= 50) && ClearChild($(k.Ele.FumeDoor));
          oSym.addTask(100, function(k) {
            CustomZombie(oImp, k.R, AC, k.PZ ? 0 : 1);
            k && (k.num>=50) && (k.throwImpnum == 1) && oP.SetTimeoutAirdropZombie(5, 9, 5, k.zl, !k.PZ)
          }, [k]);
          var j = CZombies.prototype;
          k.ChkActs = !k.WalkDirection ? j.ChkActs : j.ChkActs1;
          k.ChkActs1 = j.ChkActs1;
          k.EleBody.src = l;
        },
        [g.id, g.PicArr[[g.NormalGif = g.ImplessWalkGif, g.AttackGif = g.ImplessAttackGif][g.isAttacking]]])
  },
  SunNum: 275,
  EName: "oGargantuar",
  CName: "伽刚特尔",
  Produce: '非常强力的僵尸<br>韧性：<font color="#FF0000">极高(3000)</font><br>特点：<font color="#FF0000">半血丢小鬼，砸击植物，免疫击退</font><br>精英形态一：<font color="#FF0000">背着标靶，扔小鬼前每10秒空降一只僵尸，扔小鬼时召唤五个空降僵尸</font><br>精英形态二：<font color="#FF0000">每隔一段时间跳到随机位置</font><br>伽刚特尔的气场，是任何僵尸都无法比拟的，他是僵尸世界公认的偶像，他是最成功之僵。只是他出道十几年以来一直有个老大难的问题：他还是没有女朋友！'
}),
oPeaZombie = InheritO(oZombie, {
  EName: "oPeaZombie",
  CName:"豌豆僵尸",
  StandGif: 9,
  PicArr: (function() {
    var a = "images/Zombies/Zombie/";
    return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif"]
  })(),
shootPeaSpeed:140,
CanPass:CZombies.prototype.CanPass,
   HP:300,
  jinyinAct:function(a){a.Ele.style.opacity=0.5,a.HP*=1.5},
  GoingDieHead:function(){},
  PrivateBirth: function() {
    var c = this;
    c.BulletEle = NewImg(0, oPeashooter.prototype.PicArr[3], "left:" + (c.AttackedLX) + "px;top:" + (c.pixelTop + 20) + "px;visibility:hidden;z-index:" + (c.zIndex + 2));
    oSym.addTask(100, function(c) {
      c.canWalk(c,c.id) && c.beAttacked && (c.shootPea(c),c.jinyin&&c.getHit0(c,10));
      $Z[c.id] ? oSym.addTask(c.shootPeaSpeed-(c.jinyin*c.shootPeaSpeed*0.5), arguments.callee, [c]) : c.BulletEle = null;
    }, [c]);
	var z = $(c.id);
    z.PeaHead = "Pea" + Math.random();
    var pea = NewImg(z.PeaHead,"images/Plants/Peashooter/Peashooter.gif","position:absolute;width:80px;height:80px;transform:rotateY(180deg);left:45px;top:15px;",0);
    z.appendChild(pea);
  },
  bedevil: function(c,a) {
    c.ExchangeLR(c, 1);
	c.WalkDirection = 1;
    c.ZX = c.AttackedRX;
    c.ChkActs = c.ChkActs1;
	c.PeaDire=c.PeaKind=0;
    c.shootPea = oPeashooter.prototype.NormalAttack;
	if(!a){
    c.JudgeAttack = c.JudgeAttackH;
    c.PZ = 0;
    oP.MonPrgs()
	}
  },
  PrivateAct:function(a){
var z=a.Ele;
	  if($Z[a.id]&&!a.isDie){
	a.WalkDirection==a.check&&(
	EditImg($(z.PeaHead),0,"images/Plants/Peashooter/Peashooter.gif",{
		transform:!a.WalkDirection?"rotateY(180deg)":"rotateY(0deg)"
	},0),a.check=a.WalkDirection?0:1);
	!a.beAttacked&&(ClearChild($(z.PeaHead)),a.isDie=true);
	  }
  },
PrivateDie:function(a){
	var z=a.Ele;
	$(z.PeaHead)&&ClearChild($(z.PeaHead))
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
		Z && Z.Altitude == 1 && (Z.getPea(Z,20*a.level,0),isHit=true);
        while (Kind--) {
          (d = oGd.$[i + "_" + e + "_" + Kind]) && (d.canEat) && (d.Stature >= 0) && (d.EName != "oBrains") && (d.AttackedLX < n) && (d.AttackedRX > n) && (isHit = true, d.getHurt(a, 3, 20*a.level))
        }
	  isHit?((SetStyle(j, {
            left: o + 28 + "px",
            width: "52px",
            height: "46px"
          })).src = "images/Plants/PeaBulletHit.gif", oSym.addTask(10, ClearChild, [j])):((n += (l = -5)) < oS.W && n > 100 ? (j.style.top = (GetY(i) - 140) + "px",j.style.left = (o += l) + "px", oSym.addTask(1, arguments.callee, [f, j, n, i, o])) : ClearChild(j))
      },
      [b, $(b), a.ZX, a.R, a.ZX - 40])
  },
Lvl:2,
  Produce: '韧性：<font color="#FF0000">低(300)</font><br>精英形态：450血，攻速变快，但每次攻击扣自己10血</p>只是一只普普通通的小豌豆僵尸'
}),
oWallNutZombie = InheritO(oConeheadZombie, {
    EName: "oWallNutZombie",
    CName: "坚果僵尸",
    OrnHP: 1100,
    SunNum: 150,
    StandGif: 11,
    Lvl: 3,
    OrnGif: 12,
    OrnLeft: 42,
    OrnTop: 12,
    PicArr: (function() {
      var a = "images/Zombies/Zombie/";
      return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "1.gif", "images/Plants/WallNut/WallNut.gif", "images/Plants/WallNut/Wallnut_cracked1.gif", "images/Plants/WallNut/Wallnut_cracked2.gif", "images/Plants/WallNut/BoomWallNutRoll.gif",a+"jinyinNutZombie.gif",a+"jinyinNutZombieAttack.gif"]
    })(),
    Boom: function(a) {
      var e = $Z[a.id],
        d;
      e && (PlayAudio("cherrybomb"), (d = NewImg("", "images/interface/blank.png", "width:306px;height:300px;left:" + (e.X - 16) + "px;top:" + (e.pixelTop - 90) + "px;z-index:20"),
        d.src = "images/Plants/CherryBomb/Boom.gif", EDPZ.appendChild(d), oSym.addTask(70, ClearChild, [d])), e.PZ && (function(k, g) {
        var q = Math.max(1, k - 1),
          q = Math.max(1, k - 1),
          o = Math.min(oS.R, k + 1),
          n = Math.max(1, g - 1),
          h = Math.min(oS.C, g + 1),
          r = oGd.$,
          l,
          j = "",
          m;
        do {
          g = n;
          do {
            j = q + "_" + g + "_";
            for (l = 0; l < 4; l++) {
              (m = r[j + l]) && m.getHurt(e,3,1600*a.level)
            }
          } while (g++ < h)
        } while (q++ < o)
      })(e.R, GetC(e.ZX)), (function(j, l) {
        var m = j - 120,
          o = j + 120,
          h = Math.max(1, l - 1),
          g = Math.min(oS.R, l + 1),
          n,
          k;
        do {
          k = (n = oZ["getAr" + (e.PZ ? "HZ" : "Z")](m, o, h)).length;
          while (k--) {
            n[k].getExplosion(1600)
          }
        } while (h++ < g)
      })(e.ZX, e.R), e.NormalDie())
    },
    GoingDieHead: function() {},
    PrivateBirth: function(c) {
      var z = $(c.id);
      z.NutHead = "Nut" + Math.random();
      var Nut = NewImg(z.NutHead, c.PicArr[c.OrnGif], "position:absolute;transform:rotateY(180deg);left:" + c.OrnLeft + "px;top:" + c.OrnTop + "px;", 0);
      z.appendChild(Nut);
      c.OrnBreakPoint1 = c.MaxOrnHP * 0.66;
      c.OrnBreakPoint2 = c.MaxOrnHP * 0.33;
    },
	PlayNormalballAudio:OrnNoneZombies.prototype.PlayNormalballAudio,
    jinyinAct: function(a) {
	a.num=Math.random()*100||a.Privatenum;
	if(a.num>=50){
      a.OSpeed *= 2;
      a.Speed *= 2;
      a.OrnGif = 15;
	  a.OrnHP*=0.5;
      a.checkHP = function() {};
      a.NormalAttack = function(a, b) {
        $P[b] && $P[b].getHurt(a, 3, 2000)
      }
	}else{
		a.NormalGif=16;
		a.AttackGif=17;
		a.EleBody.src=a.PicArr[16];
		a.getHit=a.getHit0=a.getHit1=a.getHit2=a.getHit3=function(a,b){
			OrnIZombies.prototype.getHit0(a,b);
			a.DamagePlant(a);
		}
	}
    },
	DamagePlant:function(a){
		for (let l=GetC(a.ZX-10)-1;l<=GetC(a.ZX-10)+1;l++){
		    for (let i = 0; i < 4; i++) {
                    let p = oGd.$[a.R + "_" + l + "_" + i];
                    a.PZ&& p && p.getHurt(a, 3, 15);
            }
		};
			var n = oZ["getAr" + (a.PZ ? "HZ" : "Z")](a.ZX-80,a.ZX+80, a.R);
            var k = n.length;
            while (k--) {
                n[k].getHit1(n[k],15,0);
            }
	},
    PrivateAct: function(a) {
      var z = a.Ele;
      var c = a.HP;
      if ($Z[a.id] && a.beAttacked) {
		a.checkHP(z, a);
        a.WalkDirection == a.check &&
        ($(z.NutHead).style.transform = !a.WalkDirection ? "rotateY(180deg)" : "rotateY(0deg)",a.check=(a.WalkDirection?0:1))
      }!a.beAttacked && (ClearChild($(z.NutHead)));
      a.num>=50 && a.isAttacking && a.Boom(a);
    },
    PrivateDie: function(a) {
      var z = a.Ele;
      $(z.NutHead) && ClearChild($(z.NutHead))
    },
    checkHP: function(z, a) {
	if(!$Z[a.id]&&a.beAttacked)return;
      var c = a.OrnHP;
      switch (true) {
        case c < a.OrnBreakPoint2:
          $(z.NutHead).src = a.PicArr[14]
          break;
        case c < a.OrnBreakPoint1:
          $(z.NutHead).src = a.PicArr[13]
      }
    },
    Produce: '韧性：<font color="#FF0000">中(1100+270)</font><br>精英形态一：<font color="#FF0000">爆炸坚果，碰到植物产生爆炸并自身死亡</font><br>精英形态二：<font color="#FF0000">一类防具存在时每次受伤反伤1x3的植物15点</font></p>他有限的感官，只能让他在被植物打时产生一种麻麻的感觉'
  }),
  oTallNutZombie = InheritO(oWallNutZombie, {
    EName: "oTallNutZombie",
    CName: "高坚果僵尸",
    OrnHP: 2200,
    SunNum: 225,
    Boom: function() {},
    StandGif: 11,
    OrnTop: -40,
    OrnLeft: 20,
    Lvl: 5,
	SetNutTime:1200,
    jinyinAct: function(c) {      
	  var z = c.Ele;
      z.NutHead2 = "nut" + Math.random();
      var Nut = NewImg(z.NutHead2, oWallNutZombie.prototype.PicArr[c.OrnGif], "position:absolute;transform:rotateY(180deg);left:" + c.OrnLeft + "px;top:80px;", 0);
      z.appendChild(Nut);
	  c.num=Math.random()*100||c.Privatenum;
	if(c.num>=50){
	  oSym.addTask(c.SetNutTime,function(c){
		  c.canWalk(c,c.id)&&c.beAttacked&&(PlayAudio("groan"+Math.floor(Math.random()*5+1)),CustomZombie(oNutZombie,Math.floor(Math.random()*oS.R+1),Math.floor(Math.random()*4+5),!c.PZ),oSym.addTask(c.SetNutTime,arguments.callee,[c]));
	  },[c]);
	}else{
		c.checkHP=function(z,a){
			oWallNutZombie.prototype.checkHP(z,a);
			var g=oGargantuar.prototype;
			a.OrnHP<=a.OrnBreakPoint1&&a.beAttacked&&(SetStyle($(z.NutHead2),{
				src:oWallNut.prototype.PicArr[8]
			}),a.JudgeAttack=a.PZ?g.JudgeAttack:g.JudgeAttack1,a.NormalAttack=g.NormalAttack,a.AttackZombie=g.AttackZombie,a.JudgeLR=g.JudgeLR,a.JudgeSR=g.JudgeSR,a.checkHP=oWallNutZombie.prototype.checkHP)
		}
	}
	},
	PrivateDie:function(c){
		ClearChild($(c.Ele.NutHead));
		ClearChild($(c.Ele.NutHead2));
	},
    Boom: function() {},
    Produce: '韧性：<font color="#FF0000">极高(2200+270)</font><br>精英形态一：每隔一段时间在场上放置一个坚果障碍，坚果障碍所在格不可种植植物<br>精英形态二：头部到达第一个损伤点时攻击方式变为巨人</p>太好了，高仁僵尸来了'
  }, {
    PicArr: {
      12: "images/Plants/TallNut/TallNut.gif",
      13: "images/Plants/TallNut/TallnutCracked1.gif",
      14: "images/Plants/TallNut/TallnutCracked2.gif"
    }
  }),
oNutZombie = InheritO(oTallNutZombie, {
    EName: "oNutZombie",
    CName: "坚果障碍",
    OrnHP: 1100,
    SunNum: 75,
	HP:1,
    Boom: function() {},
    StandGif: 11,
    OrnTop: 80,
    OrnLeft: 80,
	jinyinnum:100,
    Lvl: 2,
	PicArr: (function() {
      var a = "images/Zombies/Zombie/";
      return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "1.gif", "images/Plants/WallNut/WallNut.gif", "images/Plants/WallNut/Wallnut_cracked1.gif", "images/Plants/WallNut/Wallnut_cracked2.gif", "images/Plants/WallNut/BoomWallNutRoll.gif"]
    })(),
	GoingDie:function(a){
		this.DisappearDie();
		if(this.PZ){
		delete oGd.$Crater[this.SetR+"_"+this.SetC];
		}
	},
	getr:function(){},
	getSlow:function(){},
	getFreeze:function(){},
	ExplosionDie:function(a){
		this.DisappearDie();
	},
	ChkActs:function(a){
		a.PrivateAct(a);
		return 1
	},
	ChkActs1:function(a){
		a.PrivateAct(a);
		return 1
	},
	ChangeR:function(){},
	WalkToLadder:function(){},
    jinyinAct: function(a){
		SetHidden(a.EleBody);
		a.SetR=a.R;
		a.SetC=GetC(a.ZX);
		oSym.addTask(1,function(a){
		a.PZ&&(oGd.$Crater[a.SetR+"_"+a.SetC]=1);
		},[a])
	},
    Produce: '韧性：<font color="#FF0000">1100</font><br>精英形态：无</p>由精英高坚果僵尸召唤'
  }),
	oJalapenoZombie= InheritO(oZombie,{
	EName: "oJalapenoZombie",
	CName: "辣椒僵尸",
	Lvl: 4,
	HP:500,
	SunNum: 125,
	BirthImg: function(a) {
    var z = a.Ele;
	z.jinyinImg = "jinyin_" + Math.random();
    var Sh = NewImg(z.jinyinImg, a.num>=50 ? "images/Zombies/Imp/ZombieImpHead.png" : "images/Plants/Jalapeno/Jalapeno.gif", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "left:40px;top:40px;", 0);
    z.appendChild(Sh);
  },
	GoingDieHead:function(){},
    PrivateBirth:function(a) {
		var z=a.Ele;
		z.JaHead = "Ja" + Math.random();
      var Ja = NewImg(z.JaHead,"images/Plants/Jalapeno/Jalapeno.gif","position:absolute;transform:"+(a.PZ?"rotateY(180deg);":"rotateY(0deg);")+"left:50px;top:0px;",0);
      z.appendChild(Ja);
			},
		PrivateAct:function(a){     
		var z=a.Ele;
		a.ZX<=850&&!a.intograss&&(oSym.addTask(Math.random()*700+2000,function(a){
			$Z[a.id]&&a.beAttacked&&(a.BoomFire(a.R),a.checkBoomR(a),a.jinyin&&a.num<50&&a.canBoomR.length&&a.BoomFire(a.canBoomR[Math.floor(Math.random() * a.canBoomR.length)]),a.DisappearDie())
		},[a]),a.intograss=true);
	  if($Z[a.id]&&!a.isDie){
	a.WalkDirection==a.check&&(
EditImg($(z.JaHead),0,"images/Plants/Jalapeno/Jalapeno.gif",{transform:!a.WalkDirection?"rotateY(180deg)":"rotateY(0deg)"},0),
z.jinyinImg&&EditImg($(z.jinyinImg),0,a.num>=50 ? "images/Zombies/Imp/ZombieImpHead.png" : "images/Plants/Jalapeno/Jalapeno.gif", {transform:a.PZ?"rotateY(180deg)":"rotateY(0deg)"},0),a.check=a.WalkDirection?0:1);
	!a.beAttacked&&(ClearChild($(z.jinyinImg)),ClearChild($(z.JaHead)),a.isDie=true);
	  }
	},
	canBoomR:[],
	jinyinAct:function(a){
		a.num=Math.random()*100||a.Privatenum;
		a.BirthImg(a);
		if(a.num>=50){
			a.PrivateCustom=function(i){
				try{
					CustomZombie(oImp,this.R,i,!this.PZ).jinyinnum=0
				}catch{}
			}
		}
		a.PrivateDie=function(a){
			a.Ele.jinyinImg&&ClearChild($(a.Ele.jinyinImg))
		}
	},
	checkBoomR:function(a){
		for(i=1;i<=oS.R;i++){
			i!=a.R&&a.canBoomR.push(i)
		}
	},
	PrivateCustom:function(){},
    BoomFire: function (y) {
      PlayAudio("jalapeno");
      fireid = "fire_" + Math.random();
      NewImg(
        fireid,
        "images/Plants/Jalapeno/JalapenoAttack.gif",
        "width:755px;height:131px;left:120px;top:" + (GetY(y - 1) - 42) + "px",
        EDAll
      );
      oSym.addTask(
        135,
        (id) => {
          ClearChild($(id));
        },
        [fireid]
      );
	var n = oZ["getAr"+(this.PZ?"HZ":"Z")](0, oS.W, y);
	var k = n.length;
                while (k--) {
                  n[k].getExplosion(1600*this.level);
				  n[k].HP<=0&&this.PrivateCustom(GetC(n[k].ZX))
                }
		if(this.PZ){
      for (let i = 1; i <= oS.C; i++) {
        for (let j = 0; j < 4; j++) {
          let g = oGd.$[y + "_" + i + "_" + j];
          g&&(g.getHurt(this,3,1600*this.level),g.HP<=0&&this.PrivateCustom(i))//精英小鬼辣椒僵尸释放技能
        }
      }
	}
    },
	PicArr:oPeaZombie.prototype.PicArr,
	Produce: '他过一段时间会给你的阵容以“火热”的惊喜<p>韧性：<font color="#FF0000">中（500）</font><br>特点：<font color="#FF0000">过段时间爆炸</font><br>精英形态一：<font color="#FF0000">在本路爆炸时，另外随机一行产生爆炸</font><br>精英形态二：<font color="#FF0000">爆炸烧死植物时在植物的格子召唤一个小鬼僵尸</font><br>他对待什么都是热情似火'
}),
oPeashooterZombie=oPeaZombie,
oSquashZombie = InheritO(oScreenDoorZombie, {
  EName: "oSquashZombie",
  CName: "窝瓜铁门僵尸",
  SunNum: 75,
  StandGif: 13,
  width: 166,
  height: 144,
  OSpeed: 4,
  Speed: 4,
  beAttackedPointL: 60,
  beAttackedPointR: 116,
  PicArr: (function() {
    var a = "images/Zombies/ScreenDoorZombie/",
      b = "images/Zombies/Zombie/";
    return ["images/Card/Zombies/ScreenDoorZombie.png", a + "0.gif", a + "LostHeadWalk1.gif", a + "LostHeadWalk1.gif", a + "LostHeadWalk1.gif", a + "LostHeadWalk1.gif", b + "ZombieLostHead.gif", b + "ZombieLostHead.gif", b + "ZombieLostHead.gif", b + "ZombieLostHead.gif", b + "ZombieHead.gif" + $Random, b + "ZombieDie.gif" + $Random, b + "BoomDie.gif" + $Random, a + "1.gif"]
  })(),
  CanPass:function(d,c){return c},
  GoingDieHead: function() {},
  JudgeAttack: function() {},
  JudgeAttackH: function() {},
  PrivateBirth: function(a) {
    var z = a.Ele;
    z.SquashHeadId = "Squash" + Math.random();
    let squash = NewImg(z.SquashHeadId, "images/Plants/Squash/Squash.gif", "position:absolute;left:40px;top:-150px;", 0);
    z.appendChild(squash);
	a.num>=50&&SetHidden(squash);
  },
  PrivateAct: function(a) {
    let z = a.Ele;
    let s = $(z.SquashHeadId);
    if (!a.beAttacked) {
      return ClearChild(s)
    }
	if(a.num>=50){
	a.PZ&&oGd.$[a.R + "_" + GetC(a.ZX) + "_" + 1]&&oGd.$[a.R + "_" + GetC(a.ZX) + "_" + 1].EName=="oBrains"&&(a.JudgeAttack=CZombies.prototype.JudgeAttack);
	}else{
    for (let i = 3; i >= 0; i--) {
      let p = oGd.$[a.R + "_" + GetC(a.ZX) + "_" + i];
      Z = oZ[a.PZ ? "getHZ1" : "getZ0"](a.ZX, a.R);
      if ((p && p.canEat && a.PZ) || (Z && Z.beAttacked&&Z.Altitude==1)) {
        a.canHit = true;
      }
    }
}
    a.canHit && a.HitPlant(a);
  },
  HitPlant: function(a) {
    var z = a.Ele;
    var s = $(z.SquashHeadId);
    a.OrnHP = a.jianshang = 1;
    a.getHit0(a, 1);
	var SunMinus=(a.PZ&&!oS.CardKind&&a.num<50)?1:0;
    a.ChkActs = a.ChkActs1 = function() {
      return 1
    };
    a.GoingDie(a.PicArr[a.LostHeadGif]);
    EditImg(s, 0, "images/Plants/Squash/SquashAttack.gif", {
      left: "0px",
      top: "-50px"
    }, 0);
    oSym.addTask(60, function(a, s, Z) {
      let g = oZ[a.PZ ? "getArHZ" : "getArZ"](a.ZX - 60, a.ZX + 60, a.R),
        h = g.length;
      while (h--) {
        $Z[a.id] && (g[h].getHit0(g[h], 1850, 0),g[h].HP<=0&&a.jinyin&&(SunMinus?(ESSunNum.innerHTML = +ESSunNum.innerHTML-g[h].SunNum,oS.SunNum-=g[h].SunNum):AppearSun(a.ZX,GetY(a.R),g[h].SunNum)))
      }
      PlayAudio("gargantuar_thump");
      for (let i = 3; i >= 0; i--) {
        let p = oGd.$[a.R + "_" + GetC(a.ZX) + "_" + i];
        p && $Z[a.id] && (p.getHurt(a, 3, 1850),p.HP<=0&&a.jinyin&&(SunMinus?(ESSunNum.innerHTML = +ESSunNum.innerHTML-p.SunNum,oS.SunNum-=p.SunNum):AppearSun(a.ZX,GetY(a.R),p.SunNum)));
      }
      oSym.addTask(20, ClearChild, [s,$(a.Ele.FumeDoor)]);
    }, [a, s, Z]);
  },
  jinyinAct: function(a) {
    var z = a.Ele;
    a.num = Math.random() * 100 || a.Privatenum;
	if (a.num<50){
	z.FumeDoor = "Fume" + Math.random();
    var Sh = NewImg(z.FumeDoor, "images/interface/Sun.gif", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "left:25px;top:60px;", 0);
    z.appendChild(Sh);
	}
  },
  PrivateDie: function(a) {
    ClearChild($(a.Ele.SquashHeadId));
	ClearChild($(a.Ele.FumeDoor));
  },
  Produce: '他的铁栅门是有效的盾牌。<br>韧性：<font color="#FF0000">低</font><br>铁栅门韧性：<font color="#FF0000">高(1000)</font><br>精英形态一：<font color="#FF0000">无头僵尸，完全无视植物</font><br>精英形态二：<font color="#FF0000">阳光窝瓜僵尸，砸植物扣除对应的阳光（在iz模式或魅惑状态下加对应的阳光）</font><br>窝哥变成了僵尸，顺带捎走了铁门僵尸的铁门',
  GoingDie: CZombies.prototype.GoingDie,
  back: function(a) {}
}),
oGatlingPeaZombie = InheritO(oNewspaperZombie, {
  EName: "oGatlingPeaZombie",
  CName: "机枪读报僵尸",
  Lvl: 4,
  HP: 550,
  shootPeaSpeed: 15,
  SunNum: 150,
  PicArr: (function() {
    var a = "images/Zombies/GatlingPeaZombie/";
    return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostPaper.gif", a + "1.gif"]
  })(),
  AudioArr: ["newspaper_rarrgh2"],
  Produce: '他的报纸只能提供有限的防御，失去报纸后快速发射豌豆<p>韧性：<font color="#FF0000">中（550）</font><br>报纸韧性：<font color="#FF0000">低</font><br>速度：正常，而后快(失去报纸后)</font><br>伤害：正常，而后4倍(失去报纸后)<br>精英形态：<font color="#FF0000">发怒后攻速减半，速度为0，几秒后射速加快，快速移动，50%减伤生效</font></p>读报僵尸总是误伤别人',
  jinyinAct: function(a) {
    a.shootPeaSpeed *= 2;
    a.LostPaperSpeed = 0;
  },
  bedevil: oPeaZombie.prototype.bedevil,
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
          Z = oZ["getHZ1"](n, i),
          d, isHit;
        Z && Z.Altitude == 1 && (Z.getPea(Z, 20 * a.level, 0), isHit = true);
        while (Kind--) {
          (d = oGd.$[i + "_" + e + "_" + Kind]) && (d.canEat) && (d.Stature >= 0) && (d.EName != "oBrains") && (d.AttackedLX < n) && (d.AttackedRX > n) && (isHit = true, d.getHurt(a, 3, 20 * a.level))
        }
        isHit ? ((SetStyle(j, {
          left: o + 28 + "px",
          width: "52px",
          height: "46px"
        })).src = "images/Plants/PeaBulletHit.gif", oSym.addTask(10, ClearChild, [j])) : ((n += (l = -5)) < oS.W && n > 100 ? (j.style.top = (GetY(i) - 100) + "px", j.style.left = (o += l) + "px", oSym.addTask(1, arguments.callee, [f, j, n, i, o])) : ClearChild(j))
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
      g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea, g.getFreezePea = e.getFreezePea, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit, oSym.addTask(150,
        function(m, l) {
          var k = $Z[m];
          if (!k) {
            return
          }
          var j = CZombies.prototype,
            i = k.OSpeed = k.LostPaperSpeed;
          k.ChkActs = !k.WalkDirection ? j.ChkActs : j.ChkActs1;
          k.ChkActs1 = j.ChkActs1;
          k.tasktime *= 0.25;
          k.BulletEle = NewImg(0, oPeashooter.prototype.PicArr[3], "left:" + (k.ZX) + "px;top:" + (k.pixelTop + 60) + "px;visibility:hidden;z-index:" + (k.zIndex + 2));
          k.jinyin && oSym.addTask(600, function(k) {
            k && (k.jianshang*=0.5,k.Speed = k.OSpeed = 8.1, k.shootPeaSpeed /= 5, k.tasktime /= 2, PlayAudio("newspaper_rarrgh2"));
          }, [k]);
          oSym.addTask(k.shootPeaSpeed, function(k, m) {
            k.canWalk(k, m) && k.beAttacked && k.shootPea(k);
            $Z[k.id] ? oSym.addTask(k.shootPeaSpeed, arguments.callee, [k, m]) : k.BulletEle = null;
          }, [k, m]);
          k.Speed && (k.Speed = !k.FreeSlowTime ? i : 0.5 * i);
          oSym.addTask(1, function(k, Contrast, Brightness) {
            if (!k) return;
            k.jinyin && (k.EleBody.style.filter = "brightness(" + (Brightness -= 0.001) + ") contrast(" + (Contrast += 0.001) + ")");
            !k.Speed && oSym.addTask(1, arguments.callee, [k, Contrast, Brightness])
          }, [k, 1, 1]);//精英读报黑化
          if (!k.beAttacked) {
            return
          }
          PlayAudio("newspaper_rarrgh2");
          k.EleBody.src = l;
          k.JudgeAttack()
        },
        [h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
  }
}),
oLadderZombie = InheritO(oScreenDoorZombie, {
  EName: "oLadderZombie",
  CName: "扶梯僵尸",
  OrnHP: 500,
  Lvl:3,
  HP: 340,
  BreakPoint: 1,
  SunNum: 125,
  StandGif: 13,
  LadGif: 14,
  width: 166,
  height: 164,
  beAttackedPointL: 60,
  beAttackedPointR: 116,
  CobCoolTime:2500,
  OSpeed: 4.8,
  Speed: 4.8,
  LostPaperSpeed: 1.6,
  PicArr: (function() {
    var a = "images/Zombies/LadderZombie/",
      b = "images/Zombies/Zombie/";
    return ["images/Card/Zombies/LadderZombie.png", a + "1.gif", a + "Walk.gif", a + "Attack.gif", a + "Die.gif", a + "LostHeadAttack1.gif", a + "LostLadderWalk.gif", a + "LostLadderAttack.gif", a + "Die.gif", a + "Die.gif", b + "ZombieHead.gif" + $Random, a + "Die.gif" + $Random, b + "BoomDie.gif" + $Random, a + "1.gif", a + "throwLadder.gif"]
  })(),
  jinyinAct: function(a) {
	a.num=Math.round(Math.random()*1+0)||a.Privatenum;
	if(!a.num){
    a.OSpeed /= 2;
    a.Speed /= 2;
	a.canLadderList=[];
    var z = $(a.id);
    z.FumeDoor = "Fume" + Math.random();
    var Sh = NewImg(z.FumeDoor, "images/Plants/CobCannon/noReady.gif", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "left:-70px;top:-110px;", 0);
    z.appendChild(Sh);
    a.Ready(a);
	}else{
		a.EleBody.style.filter = "sepia(1) hue-rotate(20deg) brightness(5)";
		a.jianshang*=0.75;
		a.getFreeze=a.getSlow=function(){};
		a.getr=oGargantuar.prototype.getr;
		oSym.addTask(500,function(a){
		var Z=oZ[a.PZ?"getArZ":"getArHZ"](a.ZX-100,a.ZX+100,a.R);
			Zl=Z.length;
		while(Zl--){
		a.canWalk(a,a.id)&&a.beAttacked&&(Z[Zl].jianshang>=1)&&(a.getAid(Z[Zl],a.id,a.jianshangtime));
		  }
		PlayAudio("wakeup");
		$Z[a.id]&&oSym.addTask(750,arguments.callee,[a])
		},[a]);
	}
    a.PrivateAct = function(b) {
      (b.WalkDirection == b.check) && (!b.num&&b.Ornaments && (
        SetStyle($(b.Ele.FumeDoor), {
          "left": !b.WalkDirection ? "-70px" : "30px",
          transform: !b.WalkDirection ? "rotateY(180deg)" : "rotateY(0deg)"
        }),
        b.check=(b.WalkDirection?0:1)));
      !b.Ornaments && ClearChild($(b.Ele.FumeDoor));
      b.CanShoot && b.Ornaments && b.checkP(b);
    }
  },
jianshangtime:500,
 getAid:function(a,d,c){
	 a.jianshang*=0.75;
	 a.EleBody.style.filter = "sepia(1) hue-rotate(20deg) brightness(5)";
	 oSym.addTask(c,function(a,d){
		$Z[a.id]&&(a.id!=d)&&(a.jianshang/=0.75,a.EleBody.style.filter = "sepia(0) hue-rotate(0deg) brightness(1)");
	 },[a,d])
 },
  checkP: function(b) {
    let a = [];
    for (let i in oGd.$) {
      let p = oGd.$[i];
      if (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains") {
        b.PZ && a.push(oGd.$[i]);
      }
    }
    for (let l in $Z) {
      let Z = $Z[l];
      Z && Z.PZ != b.PZ && Z.beAttacked && a.push(Z);
    }
    if (!a.length) return;
    var i = Math.floor(Math.random() * a.length);
    b.Boom(a[i], b)
  },
  Boom: function(a, b) {
    b.CanShoot = 0;
    $(b.Ele.FumeDoor).src = "images/Plants/CobCannon/shoot.gif";
    oSym.addTask(200, function(a, b) {
      if (!$Z[b.id] || !b.Ornaments || !b.beAttacked||!a) return;
      let l = a.AttackedRX - 160,
        t = GetY(a.R) - 450;
      var Img = NewImg(0, "images/Plants/CobCannon/Boom.gif", "left:" + l + "px;top:" + t + "px;z-index:25;", EDPZ);
	  oSym.addTask(50,function(a,b){
	  if (!a) return;
      PlayAudio("cherrybomb");
      b.PZ && (function(k, g,b) {
        var q = Math.max(1, k - 1),
          o = Math.min(oS.R, k + 1),
          n = Math.max(1, g - 1),
          h = Math.min(oS.C, g + 1),
          r = oGd.$,
          l,
          j = "",
          m;
        do {
          g = n;
          do {
            j = q + "_" + g + "_";
            for (l = 0; l < 4; l++) {
              (m = r[j + l]) && m.getHurt(m, 3, 1600*b.level)
            }
          } while (g++ < h)
        } while (q++ < o)
      })(a.R, GetC(a.AttackedLX + 20),b);
      (function(j, l,b) {
        var m = j - 120,
          o = j + 120,
          h = Math.max(1, l - 1),
          g = Math.min(oS.R, l + 1),
          n,
          k;
        do {
          k = (n = oZ["getAr" + (b.PZ ? "HZ" : "Z")](m, o, h)).length;
          while (k--) {
            n[k].getExplosion(1600*b.level)
          }
        } while (h++ < g)
      })(a.AttackedLX, a.R,b);
      b.HP > b.BreakPoint && b.Ornaments && (b.Ready(b), $(b.Ele.FumeDoor).src = "images/Plants/CobCannon/noReady.gif");
	},[a,b]);
    oSym.addTask(80,ClearChild,[Img]);
    }, [a, b]);
  },
  Ready: function(b) {
    oSym.addTask(b.CobCoolTime, function(b) {
      if (!$Z[b.id] || !b.Ornaments || !b.beAttacked) return;
      $(b.Ele.FumeDoor).src = "images/Plants/CobCannon/beReady.gif";
      oSym.addTask(50, function(b) {
        if (!$Z[b.id] || !b.Ornaments || !b.beAttacked) return;
        $(b.Ele.FumeDoor).src = "images/Plants/CobCannon/CobCannonReady.gif";
        b.CanShoot = 1;
      }, [b])
    }, [b])
  },
  GoingDie: function(d) {
    var c = this,
      e = c.id;
    c.beAttacked = 0;
    c.FreeFreezeTime = c.FreeSetbodyTime = c.FreeSlowTime = 0;
    c.AutoReduceHP(e)
  },
  JudgeAttack: function() {
    var g = this,
      d = g.ZX,
      e = g.R + "_",
      f = GetC(d),
      h = oGd.$,
      a,
      c;
    (a = g.JudgeAttackH1()) || (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), !a && (g.canLadderList[$P[c[1]].EName] ? g.throwLadder(c[0], c[1]) : g.NormalAttack(c[0], c[1]))) : g.isAttacking && (g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif])
  },
  throwLadder: function(c, b) {
    var a = $Z[c];
    a&&(a.EleBody.src = a.PicArr[a.LadGif]);
    oSym.addTask(50, function(a, b) {
      a&&a.beAttacked&&($P[b]&&$P[b].canEat&&(a.Ornaments&&$P[b].getLadder(), !a.num&&(a.OrnHP=0,a.getHit0(a, 0, 0))), a.JudgeAttack());
    }, [a, b])
  },
  canLadderList: {
    oWallNut,
    oTallNut,
    oPumpkinHead,
    oGarlic: true
  },
  Produce: '他遇到防御植物可将梯子搭在上面<br>韧性：<font color="#FF0000">中</font><br>扶梯韧性：<font color="#FF0000">中(500)</font><br>精英形态一：<font color="#FF0000">扶梯→玉米加农炮，速度变慢，每隔一段时间朝随机一颗植物发射炮弹，对该植物的3*3范围造成1600伤害</font><br>精英形态二：<font color="#FF0000">金色扶梯，无限搭梯，自身有25%减伤，免疫减速、冻结、击退，每隔一段时间给周围僵尸附上25%减伤</font><br>这架梯子花了他$114514。',
  CheckOrnHP: function(g, h, d, c, f, b, a) {
    var e = OrnNoneZombies.prototype;
    (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.Ornaments = 0, g.EleBody.src = f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]], g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getPea = e.getPea, g.getFreezePea = e.getFreezePea, g.getFirePea = e.getFirePea, g.getFirePeaSputtering = e.getFirePeaSputtering,g.OSpeed=g.LostPaperSpeed,g.Speed=g.LostPaperSpeed*(g.FreeSlowTime?0.5:1),!g.num&&(g.getSnowPea = e.getSnowPea), g.PlayNormalballAudio = e.PlayNormalballAudio, g.PlayFireballAudio = e.PlayFireballAudio, g.PlaySlowballAudio = e.PlaySlowballAudio, g.canLadderList = [], g.Boom = function() {}, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit)
  }
})
