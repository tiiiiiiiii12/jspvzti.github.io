var oGargantuar = InheritO(oZombie, {
  PicArr: (function() {
    var a = "images/Zombies/Gargantuar/";
    return ["images/Card/Zombies/Gargantuar.png", a + "0.gif", a + "Walk.gif", a + "Attack.gif" + $Random, a + "ImpToLand.gif", a + "throwImp.gif", a + "ImplessDie.gif" + $Random, a + "Die.gif" + $Random, a + "ImplessWalk.gif", a + "0.gif", a + "ImplessAttack.gif" + $Random]
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
    c.EleBody.src = c.PicArr[c.DieGif] + Math.random();
    oSym.addTask(500, ClearChild, [c.Ele]);
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
        h && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 1000, 0), h.JudgeAttack())
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
    !h.intowater && (oGd.$LF[h.R] == 2) && h.ZX < GetX(9) && h.ZX > GetX(0) && (SetStyle(h.EleBody, {
      top: "100px",
      clip: "rect(0,auto,200px,0)"
    }), h.intowater = true, SetHidden(h.EleShadow));
    h.intowater && (oGd.$LF[h.R] == 2) && (h.ZX > GetX(9) || h.ZX < GetX(0)) && (SetStyle(h.EleBody, {
      top: "0px",
      clip: "rect(0,auto,300px,0)"
    }), h.intowater = false, SetVisible(h.EleShadow), NewEle(a = h.id + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:61px;top:" + (h.height - 88) + "px;width:194px;height:176px;over-flow:hidden", 0, h.id), ImgSpriter(a, h.id, [
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
    h.PrivateAct && h.PrivateAct(h);
    return g
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
    g.isAttacking && (oSym.addTask(25, function(g) {
      g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif]
    }, [g]))
  },
  JudgeAttackH: function() {
    var e = this,
      d = oZ.getZ0(e.ZX, e.R),
      f = e.id,
      c;
    d && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif] + Math.random(), e.AttackZombie(f, c = d.id)) : e.AttackZombie(f, d.id, 1)) : e.isAttacking && (e.isAttacking = 0, e.EleBody.src = e.PicArr[e.NormalGif])
  },
  JudgeLR: function(f, d, e, c, g) {
    return e > 10 || e < 1 ? false : function() {
      d += --e + "_";
      var h = 3,
        i;
      while (h--) {
        if (i = g[d + h]) {
          return i.AttackedRX >= c - 40 && i.AttackedLX <= c - 40 ? [f.id, i.id] : false
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
          return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
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
        h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((d = $P[e]) && (tp = oGd.$[d.R + "_" + d.C + "_" + i]) && tp.getHurt(h, 1, 50), h.JudgeAttack())
      }
    }, [d, c]);
  },
  ExplosionDie: function() {
    this.NormalDie()
  },
  DisappearDie: function(a) {
    this.getHit(this, 1800)
  },
  hasthrew: 0,
  PrivateAct: function(a) {
    !a.hasthrew && (GetC(a.ZX) > 4 || !a.PZ) && !a.isAttacking && (a.HP <= 1500) && $Z[a.id] && a.throwImp(a);
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
          oSym.addTask(50, ClearChild, [NewImg(0, k.PicArr[k.ImpToLandGif], "left:" + (GetX(AC) - 30) + "px;top:" + (k.pixelTop + 120) + "px;transform:" + (k.PZ ? "rotateY(0px)" : "rotateY(180px)") + ";z-index:" + k.zIndex, EDPZ)])
          oSym.addTask(50, function(k) {
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
  Produce: '非常强力的僵尸<p>韧性：<font color="#FF0000">极高(3000)</font><br>特点：<font color="#FF0000">半血丢小鬼，砸击植物</font><br>伽刚特尔的气场，是任何僵尸都无法比拟的，他是僵尸世界公认的偶像，他是最成功之僵。只是他出道十几年以来一直有个老大难的问题：他还是没有女朋友！'
})
