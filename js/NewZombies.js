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
  WalkToLadder:function(){},//不走梯子
  height: 300,
  BreakPoint: 1,
  NormalDie: function() {
    var c = this;
	c.PrivateDie(c);
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
          oSym.addTask(40, function(h) {
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
    (a = g.JudgeAttackH1()) || (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif] + Math.random()), !a && g.NormalAttack(c[0], c[1])) :
    g.isAttacking && (g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif])
  },
  JudgeAttackH: function() {
    var e = this,
      d = oZ.getZ0(e.ZX + 20, e.R),
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
          oSym.addTask(40, function(h) {
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
    h.canWalk(h,h.id)&&!h.intowater && (oGd.$LF[h.R] == 2) && h.ZX < GetX(9) && h.ZX > GetX(0) && (SetStyle(h.EleBody, {
      top: "100px",
      clip: "rect(0,auto,200px,0)"
    }), h.intowater = true, 
	$(h.Ele.FumeDoor)&&($(h.Ele.FumeDoor).style.top=((ImgLeft=parseInt($(h.Ele.FumeDoor).style.top))+100)+"px"),
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
    h.canWalk(h,h.id)&&h.intowater && (oGd.$LF[h.R] == 2) && (h.ZX > GetX(9) || h.ZX < GetX(0)) && (SetStyle(h.EleBody, {
      top: "0px",
      clip: "rect(0,auto,300px,0)"
    }, SetVisible(h.EleShadow)),$(h.Ele.FumeDoor)&&($(h.Ele.FumeDoor).style.top=((ImgLeft=parseInt($(h.Ele.FumeDoor).style.top))-200)+"px"), h.intowater = false);
    if (h.jinyin) {
      var P = $(h.id);
      !h.hasthrew&&(h.WalkDirection == h.check) && (
        EditImg($(P.FumeDoor), 0,"images/interface/target.png", {
          transform: !h.WalkDirection ? "rotateY(0deg)" : "rotateY(180deg)",
          left: !h.WalkDirection ? "185px" : "25px"
        }, 0),
        h.check = h.WalkDirection?0:1);
    }
	h.canWalk(h,h.id)&&h.hasthrew < h.throwImpnum && (GetC(h.ZX) > 3 || !h.PZ) && !h.isAttacking && (h.HP <= h.MaxHP*0.5) && h.throwImp(h);
  },
  jinyinAct: function(a) {
    var z = $(a.id);
	a.num=Math.round(Math.random()*1+0)||a.Privatenum;
    z.FumeDoor = "Fume" + Math.random();
    var Sh = NewImg(z.FumeDoor, "images/interface/target.png", "position:absolute;transform:" + (a.PZ ? "rotateY(0deg);" : "rotateY(180deg);") + "left:185px;top:80px", 0);
    z.appendChild(Sh);
		var z=oS.ZName;
	  a.zl=[];
	for (i=0;i<z.length;i++){
		z[i].prototype.Lvl<4&&z[i].prototype.CanSelect&&a.zl.push(z[i]);
	}
	!a.zl.length&&(a.zl=[oZombie]);
	oSym.addTask(1000,function(b){
		$Z[b.id]&&b.hasthrew < b.throwImpnum &&(oP.SetTimeoutAirdropZombie(5, 9, 1, b.zl, !b.PZ),
		oSym.addTask(1000,arguments.callee,[b]));		
	},[a]);
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
          k && k.jinyin && ClearChild($(k.Ele.FumeDoor));
          oSym.addTask(100, function(k) {
            CustomZombie(oImp, k.R, AC, k.PZ ? 0 : 1);
            k && k.jinyin&&(k.throwImpnum==1)&& oP.SetTimeoutAirdropZombie(5, 9, 5,k.zl, !k.PZ)
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
  Produce: '非常强力的僵尸<br>韧性：<font color="#FF0000">极高(3000)</font><br>特点：<font color="#FF0000">半血丢小鬼，砸击植物，免疫击退</font><br>精英形态一：<font color="#FF0000">背着标靶，扔小鬼前每10秒空降一只僵尸，扔小鬼时召唤五个空降僵尸</font><br>伽刚特尔的气场，是任何僵尸都无法比拟的，他是僵尸世界公认的偶像，他是最成功之僵。只是他出道十几年以来一直有个老大难的问题：他还是没有女朋友！'
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
      return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "1.gif", "images/Plants/WallNut/WallNut.gif", "images/Plants/WallNut/Wallnut_cracked1.gif", "images/Plants/WallNut/Wallnut_cracked2.gif", "images/Plants/WallNut/BoomWallNutRoll.gif"]
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
              (m = r[j + l]) && m.BoomDie()
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
    jinyinAct: function(a) {
      a.OSpeed *= 2;
      a.Speed *= 2;
      a.OrnGif = 15;
	  a.OrnHP*=0.5;
      a.checkHP = function() {};
      a.NormalAttack = function(a, b) {
        $P[b] && $P[b].getHurt(a, 3, 2000)
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
      a.jinyin && a.isAttacking && a.Boom(a);
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
    Produce: '韧性：<font color="#FF0000">中(1100+270)</font><br>精英形态：爆炸坚果，碰到植物产生爆炸并自身死亡</p>他有限的感官，只能让他在被植物打时感到一种麻麻的感觉'
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
    jinyinAct: function(c) {      
	  var z = $(c.id);
      z.NutHead = "Nut" + Math.random();
      var Nut = NewImg(z.NutHead2, oWallNutZombie.prototype.PicArr[c.OrnGif], "position:absolute;transform:rotateY(180deg);left:" + c.OrnLeft + "px;top:80px;", 0);
      z.appendChild(Nut);
	  oSym.addTask(1500,function(c){
		  c.canWalk(c,c.id)&&c.beAttacked&&(CustomZombie(oNutZombie,Math.floor(Math.random()*oS.R+1),Math.floor(Math.random()*4+5),!c.PZ),oSym.addTask(1500,arguments.callee,[c]));
	  },[c]);
	},
	PriavteDie:function(c){
		ClearChild(c.Ele.NutHead2);
	},
    Boom: function() {},
    Produce: '韧性：<font color="#FF0000">极高(2200+270)</font><br>精英形态：每隔一段时间在场上放置一个坚果障碍</p>太好了，高仁僵尸来了'
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
    Lvl: 3,
	PicArr: (function() {
      var a = "images/Zombies/Zombie/";
      return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "1.gif", "images/Plants/WallNut/WallNut.gif", "images/Plants/WallNut/Wallnut_cracked1.gif", "images/Plants/WallNut/Wallnut_cracked2.gif", "images/Plants/WallNut/BoomWallNutRoll.gif"]
    })(),
	GoingDie:function(a){
		this.DisappearDie();
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
    jinyinAct: function(){
		SetHidden(this.EleBody);
	},
    Produce: '韧性：<font color="#FF0000">1100</font><br>精英形态：暂无</p>由精英高坚果僵尸召唤'
  }),
    oGatlingPeaZombie = InheritO(oNewspaperZombie, {
        EName: "oGatlingPeaZombie",
        CName: "机枪读报僵尸",
        Lvl: 4,
		HP:450,
		shootPeaSpeed:15,
		SunNum:150,
        PicArr: (function() {
            var a = "images/Zombies/GatlingPeaZombie/";
            return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostPaper.gif", a + "1.gif"]
        })(),
        AudioArr: ["newspaper_rarrgh2"],
        Produce: '他的报纸只能提供有限的防御。<p>韧性：<font color="#FF0000">中（450，发怒后50%减伤）</font><br>报纸韧性：<font color="#FF0000">低</font><br>速度：正常，而后快(失去报纸后)</font><br>伤害：正常，而后2.5倍(失去报纸后)<br>精英形态：<font color="#FF0000">暂无</font></p>读报僵尸总是误伤别人',
		jinyinAct:function(a){
			a.HP*=1.5;
		},
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
		Z && Z.Altitude == 1 && (Z.getPea(Z,20*a.level,0),isHit=true);
        while (Kind--) {
          (d = oGd.$[i + "_" + e + "_" + Kind]) && (d.canEat) && (d.Stature >= 0) && (d.EName != "oBrains") && (d.AttackedLX < n) && (d.AttackedRX > n) && (isHit = true, d.getHurt(a, 3, 20*a.level))
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
    oSym.addTask(k.shootPeaSpeed, function(k,m) {
      k.canWalk(k,m) && k.beAttacked && k.shootPea(k);
      $Z[k.id] ? oSym.addTask(k.shootPeaSpeed, arguments.callee, [k,m]) : k.BulletEle = null;
    }, [k,m]);
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
		a.jianshang*=0.5;
		a.getFreeze=a.getSlow=function(){};
		a.getr=oGargantuar.prototype.getr;
		oSym.addTask(500,function(a){
		var Z=oZ[a.PZ?"getArZ":"getArHZ"](a.ZX-100,a.ZX+100,a.R);
			Zl=Z.length;
		while(Zl--){
		a.canWalk(a,a.id)&&a.beAttacked&&(Z[Zl].jianshang>=1)&&(a.getAid(Z[Zl],a.id));
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
 getAid:function(a,d){
	 a.jianshang*=0.5;
	 a.EleBody.style.filter = "sepia(1) hue-rotate(20deg) brightness(5)";
	 oSym.addTask(500,function(a,d){
		$Z[a.id]&&(a.id!=d)&&(a.jianshang/=0.5,a.EleBody.style.filter = "sepia(0) hue-rotate(0deg) brightness(1)");
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
      b.PZ && (function(k, g) {
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
              (m = r[j + l]) && m.getHurt(m, 3, 1600)
            }
          } while (g++ < h)
        } while (q++ < o)
      })(a.R, GetC(a.AttackedLX + 20));
      (function(j, l) {
        var m = j - 120,
          o = j + 120,
          h = Math.max(1, l - 1),
          g = Math.min(oS.R, l + 1),
          n,
          k;
        do {
          k = (n = oZ["getAr" + (b.PZ ? "HZ" : "Z")](m, o, h)).length;
          while (k--) {
            n[k].getExplosion(1600)
          }
        } while (h++ < g)
      })(a.AttackedLX, a.R);
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
      a&&a.beAttacked&&a.Ornaments&& $P[b] && ($P[b].getLadder(), !a.num&&a.getHit0(a, a.OrnHP, 0), a.JudgeAttack());
    }, [a, b])
  },
  canLadderList: {
    oWallNut,
    oTallNut,
    oPumpkinHead,
    oGarlic: true
  },
  Produce: '他遇到防御植物可将梯子搭在上面<br>韧性：<font color="#FF0000">中</font><br>扶梯韧性：<font color="#FF0000">中(500)</font><br>精英形态一：<font color="#FF0000">扶梯→玉米加农炮，速度变慢，每隔一段时间朝随机一颗植物发射炮弹，对该植物的3*3范围造成1600伤害</font><br>精英形态二：<font color="#FF0000">金色扶梯，无限搭梯，自身有一半减伤，免疫减速、冻结、击退，每隔一段时间给周围僵尸附上一半减伤</font><br>这架梯子花了他$114514。',
  CheckOrnHP: function(g, h, d, c, f, b, a) {
    var e = OrnNoneZombies.prototype;
    (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.Ornaments = 0, g.EleBody.src = f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]], g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getPea = e.getPea, g.getFreezePea = e.getFreezePea, g.getFirePea = e.getFirePea, g.getFirePeaSputtering = e.getFirePeaSputtering,g.OSpeed=g.LostPaperSpeed,g.Speed=g.LostPaperSpeed*(g.FreeSlowTime?0.5:1),g.getSnowPea = e.getSnowPea, g.PlayNormalballAudio = e.PlayNormalballAudio, g.PlayFireballAudio = e.PlayFireballAudio, g.PlaySlowballAudio = e.PlaySlowballAudio, g.canLadderList = [], g.Boom = function() {}, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit)
  }
})
