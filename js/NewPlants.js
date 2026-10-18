oUmbrellaLeaf = InheritO(CPlants, {
        EName: "oUmbrellaLeaf",
        CName: "叶子保护伞",
        width: 320,
        height: 210,
        beAttackedPointL: 100,
        beAttackedPointR: 183,
        power:0,
        SunNum: 100,
        HP:500,
        IngoreFallDown:false,
        PicArr: ["images/Card/Plants/UmbrellaLeaf.png", "images/Plants/UmbrellaLeaf/UmbrellaLeaf.gif", "images/Plants/UmbrellaLeaf/UmbrellaLeaf.gif","images/Plants/UmbrellaLeaf/Protect.gif"],
        Tooltip: "抵御天上的攻击",
        Produce: '叶子保护伞可以抵御空中的攻击<p>特点：<font color="#FF0000">弹走篮球、豌豆和蹦极僵尸</font><br>精英形态：每隔一段时间发动一次强力弹击，弹走保护范围内几只小体型僵尸</p>只是一个叶子保护伞',
getTriggerRange:function(a, b, c) {
            return [
                [this.AttackedLX-80, this.AttackedRX+80, 0]
            ]
        },
PrivateBirth:function(a){
for (let l = a.C-1; l <= a.C+1; l++) {
    for (let i = Math.max(a.R-1,1); i <= Math.min(a.R+1,oS.R);i++) {
        for (let K = 0; K <= 3;K++) {
      var b = oGd.$[i + "_" + l + "_" + K];
      $P[a.id] && b &&!b.Protected&&(b.EName!=a.EName)&& (b.Protected=true,b.getSnowPea = b.getPea = function(h, c, b) {
        var d = this,
          num,
          a = d.id;
for (let l = d.C-1; l <= d.C+1; l++) {
    for (let i = Math.max(d.R-1,1); i <= Math.min(d.R+1,oS.R);i++) {
          var e = oGd.$[i + "_" + l + "_" + oUmbrellaLeaf.prototype.PKind];
          e && (e.EName == "oUmbrellaLeaf") && !num && (e.getPea(h, c, b), num = 1)
    }
};
	  },b.getSnowPea1=b.getSnowPea,b.getPea1=b.getPea)
        }
    }
}
    $P[a.id] && oSym.addTask(1, arguments.callee, [a]);
},
PrivateDie:function(a){
   for (let l = a.C-1; l <= a.C+1; l++) {
    for (let i = Math.max(a.R-1,1); i <= Math.max(a.R+1,oS.R);i++) {
        for (let K = 0; K <= 3;K++) {
      var b = oGd.$[i + "_" + l + "_" + K];
      b && b.Protected&& (b.Protected=false,b.getSnowPea=b.getSnowPea1,b.getPea=b.getPea1)
        }
    }
}     
},
getTriggerR:oGatlingPea.prototype.getTriggerR,
getPea:function(a){
     var a=this.id;
	 $P[a]&&!$P[a].isProtecting&&($P[a].isProtecting=true,$(a).childNodes[1].src = $P[a].PicArr[3],
     oSym.addTask(80,function(a){
$P[a] && ($(a).childNodes[1].src = $P[a].PicArr[$P[a].NormalGif],$P[a].isProtecting=false);
},[a]))
},
getSnowPea:function(a){
     var a=this.id;
	 $P[a]&&!$P[a].isProtecting&&($P[a].isProtecting=true,$(a).childNodes[1].src = $P[a].PicArr[3],
     oSym.addTask(80,function(a){
$P[a] && ($(a).childNodes[1].src = $P[a].PicArr[$P[a].NormalGif],$P[a].isProtecting=false);
},[a]))
},
isProtecting:0,
LoadingComplete: function(a) {
a.IngoreFallDown=true;
a.CanIngoreNum=Math.ceil(Math.random()*2+1);
$(a.id).style.opacity = 0.7
},
jinyinAct:function(b){
var B = NewEle("dskill"+b.id,"div", "position:absolute;color:white;top:200px;left:100px;width:100px;font-size:16px;z-index:50", "", $(b.id));
    var C = $("dskill"+b.id);
    oSym.addTask(100, function(C, B, b) {
      B.innerHTML = b.power < 40 ? (40 - b.power) : b.CanIngoreNum;
      b.HP > 1 && (b.power < 40 ? (b.power += 1) : (!b.IngoreFallDown&&b.LoadingComplete(b)));
      b.HP > 1 && oSym.addTask(100, arguments.callee, [C, B, b])
    }, [C, B, b])
},
  TriggerCheck: function(a) {
    !this.FreeFreezeTime&&this.AttackCheck2(a) && (this.NormalAttack(this.id, a.id,this.IngoreFallDown))
  },
  AttackCheck2: function(a) {
    return a.Altitude == 1 && (a.FallDownZombie||this.IngoreFallDown) &&!a.BodyType&&a.canWalk(a,a.id)
  },
CanIngoreNum:0,
NormalAttack:function(a,b,t){
var c=$Z[b];
c&&(c.FreeSetbodyTime=1,c.beAttacked=0,oBungeeZombie.prototype.Move(c.EleBody,0,-600));
$P[a] && (t&&(!--$P[a].CanIngoreNum&&($P[a].power=0,$P[a].IngoreFallDown=false,$(a).style.opacity=1)),$(a).childNodes[1].src = $P[a].PicArr[3]);
oSym.addTask(80,function(a){
$P[a] && ($(a).childNodes[1].src = $P[a].PicArr[$P[a].NormalGif]);
},[a]);
oSym.addTask(110,function(c){
c&&c.DisappearDie();
},[c]);
}
}),
oCabbage = InheritO(oPeashooter, {
  EName: "oCabbage",
  CName: "卷心菜投手",
  width: 140,
  height: 103,
  beAttackedPointL: 20,
  beAttackedPointR: 80,
  SunNum: 100,
  AttackGif: 5,
  Attack: 40,
  AudioArr: ["CabbageAttack1", "CabbageAttack2"],
  PicArr: (function() {
    var a = "images/Plants/Cabbage/";
    return [
      "images/Card/Plants/Cabbagepult.png",
      a + "Cabbage.gif",
      a + "Cabbage.gif",
      a + "CabbageBullet.png",
      a + "CabbageBulletHit.gif",
      a + "CabbageAttack.gif",
    ];
  })(),
  Tooltip: "向敌人抛出卷心菜",
  Produce: '卷心菜投手可以投掷卷心菜。<p>伤害：<font color="#FF0000">一般<br></font>精英形态：<font color="#FF0000">按规律连续投掷卷心菜<br></font>距离：<font color="#FF0000">投掷</font></p>卷心菜投手用卷心菜砸僵尸干得很好，它以此赚钱，毕竟，它擅长这个。只是首先他不明白僵尸们是怎么爬上屋顶的。',
  TriggerCheck: function(b, a) {
    this.AttackCheck2(b) && ((this.canTrigger = 0), this.CheckLoop(b.id, a));
  },
  AttackCheck2: function(c) {
    var b = c.Altitude;
    return b == 1 || c.EName == "oSnorkelZombie";
  },
jinyinAct:function(a){
a.Ele.style.opacity=0.5;
a.NormalAttack2=a.NormalAttack;
a.ThrowNum=4;
a.NormalAttack= function(a) {
            oSym.addTask(0,
                function(d, b) {
                    var c = $P[d];
                    c && (c.NormalAttack2(),c.ThrowNum<=1&&(c.ThrowNum=4));
                    --b && oSym.addTask(15, arguments.callee, [d, b])
                },
                [this.id,--this.ThrowNum])
        }
},
  PrivateBirth(a) {
    a.BulletEle = NewImg(
      0,
      a.PicArr[3],
      "left:" +
      (a.pixelLeft + 50) +
      "px;top:" +
      (a.pixelTop + 10) +
      "px;visibility:hidden;z-index:" +
      (a.zIndex + 2)
    );
  },
  getAngle(x, y, lastX, lastY) {
    return (180 / Math.PI) * Math.atan2(y - lastY, x - lastX);
  },
  CheckLoop(zid, direction) {
    var self = this;
    var pid = self.id;
    if ($P[pid]) {
      self.NormalAttack(zid);
      oSym.addTask(290, (_) => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },
  HitZombie(zombieTarget, self) {
    zombieTarget.getPea(zombieTarget, 0);
    zombieTarget.getHit2(zombieTarget, self.Attack);
  },
  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif] + "?" + this.id;
  },
  NormalAttack(zid) {
    var self = this;
    var ele = $(self.id);
    var zombieTarget;
    var zombieT = oZ.getArZ(
      self.pixelLeft + self.beAttackedPointR,
      oS.W,
      self.R
    );
   for (Le=0;Le<zombieT.length;Le++){
    if (!self.AttackCheck2(zombieT[Le])) continue;
	zombieTarget=zombieT[Le];
        break
       }
    var bullet = EditEle(
      self.BulletEle.cloneNode(false), {
        id: "CB" + Math.random(),
      },
      0,
      EDPZ
    );
    //alert(bullet);
    self.AttackAnim(ele, self);
    oSym.addTask(
      120,
      (_) =>
      $P[self.id] &&
      (ele.childNodes[1].src = self.PicArr[self.NormalGif] + "?" + this.id)
    );
    oSym.addTask(95, (_) => {
      //PlayAudio(self.AudioArr.slice(0, 2).random());
	  if(!$P[self.id]||!zombieTarget)return;
      SetVisible(bullet);
      var x = self.pixelLeft + 50;
      var y = self.pixelTop + 10;
      var zomRelativePos = [zombieTarget.AttackedLX+20, GetY(zombieTarget.R)-80];
      var s =
        zomRelativePos[0] -
        10 -
        x -
        !zombieTarget.isAttacking *
        (zombieTarget.WalkDirection?-zombieTarget.Speed:zombieTarget.Speed) *
        10 *
        1;
      //alert(1);
      var x2 = x + s;
      var gravity = 0.2;
      var vy = -10;
      var vx = -(gravity * s) / (2 * vy);
      var lastTime = 0;
      var zY =
        zomRelativePos[1] - 20;
      var [lastX, lastY] = [x, y];
      var defAngle = self.getAngle(x + vx, y + vy + gravity, lastX, lastY);
      var bulletShadow = NewEle(
        `${self.id}_B_${Math.random()}_Shadow`,
        "div",
        `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${
          self.pixelTop + self.height - 10
        }px;`, {
          className: "Shadow",
        },
        EDPZ
      );
      (function drawFrame() {
        vy += gravity;
        bullet.style.left = (x += vx) + "px";
        bulletShadow.style.left = x + "px";
        bullet.style.top = (y += vy) + "px";
        bullet.style.transform = `rotate(${
          self.getAngle(x, y, lastX, lastY) - defAngle - 25
        }deg)`;
        if (!$Z[zombieTarget.id]) {
          zY = GetY(self.R) - 70;
        }
        if ((x >= x2 - 0 && y >= zY && vy > 0) || s < 40) {
          bullet &&
            ((bullet.src = self.PicArr[4]),
              (bullet.style.transform = `rotate(0deg)`),
              oSym.addTask(120, ClearChild, [bullet]));
		  let z=oZ.getRangeLeftZ(x,x+10,self.R,true);
		  z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&self.HitZombie(z,self);
          return;
        }
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
        oSym.addTask(timeToCall, drawFrame);
        lastTime = currTime + timeToCall;
        [lastX, lastY] = [x, y];
      })();
    });
  }
}),
oMelonPult= InheritO(oCabbage, {
  EName: "oMelonPult",
  CName: "西瓜投手",
  width: 210,
  height: 133,
  beAttackedPointL: 0,
  beAttackedPointR: 140,
  SunNum: 300,
  AttackGif: 4,
  Attack: 80,
  SpreadAttMax:26,
  SpreadAttMin:1,//溅射伤害
  PicArr: (function() {
    var a = "images/Plants/MelonPult/";
    return [
      "images/Card/Plants/Melonpult.png",
      a + "MelonPult.gif",
      a + "MelonPult.gif",
      a + "Bullet.png",
      a + "MelonPultAttack.gif"
    ];
  })(),
  Tooltip: "向敌人投出西瓜造成极大伤害",
  Produce: '西瓜投手可以对成群的敌人造成伤害。<p>伤害：<font color="#FF0000">高（80）<br></font>精英形态：<font color="#FF0000">一次性投出多个西瓜攻击整行僵尸<br></font>距离：<font color="#FF0000">投掷</font></p>没错，西瓜投手是“重力系”，他会用自己的“重力”打退成群的僵尸',
jinyinAct:function(a){},
  PrivateBirth(a) {
    a.BulletEle = NewImg(
      0,
      a.PicArr[3],
      "left:" +
      (a.pixelLeft + 50) +
      "px;top:" +
      (a.pixelTop + 10) +
      "px;visibility:hidden;z-index:" +
      (a.zIndex + 2)
    );
  },
  getAngle(x, y, lastX, lastY) {
    return (180 / Math.PI) * Math.atan2(y - lastY, x - lastX);
  },
  CheckLoop(zid, direction) {
    var self = this;
    var pid = self.id;
    if ($P[pid]) {
      self.NormalAttack(zid,0);
	  if(Math.random()*100<self.SpecialAttackChance||self.jinyin){
		self.NormalAttack(zid,1);
		if(Math.random()*100<self.SpecialAttackChance&&self.jinyin){
			for (P=0;P<Math.min(5,oZ.getArZ(self.pixelLeft + self.beAttackedPointR,oS.W,self.R).length);P++){
				self.NormalAttack(zid,1);
			}
		}
	}
      oSym.addTask(290, (_) => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },
  HitZombie(zombieTarget, self) {
	for (i=Math.max(zombieTarget.R-1,1);i<=Math.min(zombieTarget.R+1,oS.R);i++){
		let SpreadZ=oZ.getArZ(zombieTarget.ZX-10,zombieTarget.ZX+10,i);
		let ZL=SpreadZ.length;
		var Att;
		ZL&&(Att=Math.max(Math.min(80/ZL,self.SpreadAttMax),self.SpreadAttMin));
		while(ZL--){
			let z=SpreadZ[ZL];
			z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&(z.id!=zombieTarget.id)&&z.getHit1(z,Att);
		}
	}//处理溅射伤害
    zombieTarget.getPea(zombieTarget, 0);
    zombieTarget.getHit1(zombieTarget, self.Attack);
  },
  SpecialAttackChance:20,
  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif] + "?" + this.id;
  },
  NormalAttack(zid,IsSpecial) {
    var self = this;
    var ele = $(self.id);
    var zombieTarget;
    var zombieT = oZ.getArZ(
      self.pixelLeft + self.beAttackedPointR,
      oS.W,
      self.R
    );
   if(IsSpecial){
	   zombieTarget=zombieT[Math.floor(Math.random()*zombieT.length)];
   }else{
   for (Le=0;Le<zombieT.length;Le++){
    if (!self.AttackCheck2(zombieT[Le])) continue;
	zombieTarget=zombieT[Le];
        break
       }
   }
    var bullet = EditEle(
      self.BulletEle.cloneNode(false), {
        id: "CB" + Math.random(),
      },
      0,
      EDPZ
    );
    //alert(bullet);
    self.AttackAnim(ele, self);
    oSym.addTask(
      120,
      (_) =>
      $P[self.id] &&
      (ele.childNodes[1].src = self.PicArr[self.NormalGif] + "?" + this.id)
    );
    oSym.addTask(95, (_) => {
      //PlayAudio(self.AudioArr.slice(0, 2).random());
	  if(!$P[self.id]||!zombieTarget)return;
      SetVisible(bullet);
      var x = self.pixelLeft + 50;
      var y = self.pixelTop + 10;
      var zomRelativePos = [zombieTarget.AttackedLX+20, GetY(zombieTarget.R)-80];
      var s =
        zomRelativePos[0] -
        10 -
        x -
        !zombieTarget.isAttacking *
        (zombieTarget.WalkDirection?-zombieTarget.Speed:zombieTarget.Speed) *
        10 *
        1;
      //alert(1);
      var x2 = x + s;
      var gravity = 0.2;
      var vy = -10;
      var vx = -(gravity * s) / (2 * vy);
      var lastTime = 0;
      var zY =
        zomRelativePos[1] - 20;
      var [lastX, lastY] = [x, y];
      var defAngle = self.getAngle(x + vx, y + vy + gravity, lastX, lastY);
      var bulletShadow = NewEle(
        `${self.id}_B_${Math.random()}_Shadow`,
        "div",
        `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${
          self.pixelTop + self.height - 10
        }px;`, {
          className: "Shadow",
        },
        EDPZ
      );
      (function drawFrame() {
        vy += gravity;
        bullet.style.left = (x += vx) + "px";
        bulletShadow.style.left = x + "px";
        bullet.style.top = (y += vy) + "px";
        bullet.style.transform = `rotate(${
          self.getAngle(x, y, lastX, lastY) - defAngle - 25
        }deg)`;
        if (!$Z[zombieTarget.id]) {
          zY = GetY(self.R) - 70;
        }
        if ((x >= x2 - 0 && y >= zY && vy > 0) || s < 40) {
          bullet &&ClearChild(bullet);
		  let z=oZ.getRangeLeftZ(x,x+15,self.R,true);
		  z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&self.HitZombie(z,self);
          return;
        }
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
        oSym.addTask(timeToCall, drawFrame);
        lastTime = currTime + timeToCall;
        [lastX, lastY] = [x, y];
      })();
    });
  }
}),
oMelonPult= InheritO(oCabbage, {
  EName: "oMelonPult",
  CName: "西瓜投手",
  width: 210,
  height: 133,
  beAttackedPointL: 0,
  beAttackedPointR: 140,
  SunNum: 300,
  AttackGif: 4,
  Attack: 80,
  SpreadAttMax:26,
  SpreadAttMin:1,//溅射伤害
  PicArr: (function() {
    var a = "images/Plants/MelonPult/";
    return [
      "images/Card/Plants/Melonpult.png",
      a + "MelonPult.gif",
      a + "MelonPult.gif",
      a + "Bullet.png",
      a + "MelonPultAttack.gif"
    ];
  })(),
  Tooltip: "向敌人投出西瓜造成极大伤害",
  Produce: '西瓜投手可以对成群的敌人造成伤害。<p>伤害：<font color="#FF0000">高（80）<br></font>精英形态：<font color="#FF0000">一次性投出多个西瓜攻击整行僵尸<br></font>距离：<font color="#FF0000">投掷</font></p>没错，西瓜投手是“重力系”，他会用自己的“重力”打退成群的僵尸',
jinyinAct:function(a){},
  PrivateBirth(a) {
    a.BulletEle = NewImg(
      0,
      a.PicArr[3],
      "left:" +
      (a.pixelLeft + 50) +
      "px;top:" +
      (a.pixelTop + 10) +
      "px;visibility:hidden;z-index:" +
      (a.zIndex + 2)
    );
  },
  getAngle(x, y, lastX, lastY) {
    return (180 / Math.PI) * Math.atan2(y - lastY, x - lastX);
  },
  CheckLoop(zid, direction) {
    var self = this;
    var pid = self.id;
    if ($P[pid]) {
      self.NormalAttack(zid,0);
	  if(Math.random()*100<self.SpecialAttackChance||self.jinyin){
		self.NormalAttack(zid,1);
		if(Math.random()*100<self.SpecialAttackChance&&self.jinyin){
			for (P=0;P<Math.min(5,oZ.getArZ(self.pixelLeft + self.beAttackedPointR,oS.W,self.R).length);P++){
				self.NormalAttack(zid,1);
			}
		}
	}
      oSym.addTask(290, (_) => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },
  HitZombie(zombieTarget, self) {
	for (i=Math.max(zombieTarget.R-1,1);i<=Math.min(zombieTarget.R+1,oS.R);i++){
		let SpreadZ=oZ.getArZ(zombieTarget.ZX-20,zombieTarget.ZX+20,i);
		let ZL=SpreadZ.length;
		var Att;
		ZL&&(Att=Math.max(Math.min(80/ZL,self.SpreadAttMax),self.SpreadAttMin));
		while(ZL--){
			let z=SpreadZ[ZL];
			z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&(z.id!=zombieTarget.id)&&z.getHit1(z,Att);
		}
	}//处理溅射伤害
    zombieTarget.getPea(zombieTarget, 0);
    zombieTarget.getHit1(zombieTarget, self.Attack);
  },
  SpecialAttackChance:20,
  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif] + "?" + this.id;
  },
  NormalAttack(zid,IsSpecial) {
    var self = this;
    var ele = $(self.id);
    var zombieTarget;
    var zombieT = oZ.getArZ(
      self.pixelLeft + self.beAttackedPointR,
      oS.W,
      self.R
    );
   if(IsSpecial){
	   zombieTarget=zombieT[Math.floor(Math.random()*zombieT.length)];
   }else{
   for (Le=0;Le<zombieT.length;Le++){
    if (!self.AttackCheck2(zombieT[Le])) continue;
	zombieTarget=zombieT[Le];
        break
       }
   }
    var bullet = EditEle(
      self.BulletEle.cloneNode(false), {
        id: "CB" + Math.random(),
      },
      0,
      EDPZ
    );
    //alert(bullet);
    self.AttackAnim(ele, self);
    oSym.addTask(
      120,
      (_) =>
      $P[self.id] &&
      (ele.childNodes[1].src = self.PicArr[self.NormalGif] + "?" + this.id)
    );
    oSym.addTask(95, (_) => {
      //PlayAudio(self.AudioArr.slice(0, 2).random());
	  if(!$P[self.id]||!zombieTarget)return;
      SetVisible(bullet);
      var x = self.pixelLeft + 50;
      var y = self.pixelTop + 10;
      var zomRelativePos = [zombieTarget.AttackedLX+20, GetY(zombieTarget.R)-80];
      var s =
        zomRelativePos[0] -
        10 -
        x -
        !zombieTarget.isAttacking *
        (zombieTarget.WalkDirection?-zombieTarget.Speed:zombieTarget.Speed) *
        10 *
        1;
      //alert(1);
      var x2 = x + s;
      var gravity = 0.2;
      var vy = -10;
      var vx = -(gravity * s) / (2 * vy);
      var lastTime = 0;
      var zY =
        zomRelativePos[1] - 20;
      var [lastX, lastY] = [x, y];
      var defAngle = self.getAngle(x + vx, y + vy + gravity, lastX, lastY);
      var bulletShadow = NewEle(
        `${self.id}_B_${Math.random()}_Shadow`,
        "div",
        `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${
          self.pixelTop + self.height - 10
        }px;`, {
          className: "Shadow",
        },
        EDPZ
      );
      (function drawFrame() {
        vy += gravity;
        bullet.style.left = (x += vx) + "px";
        bulletShadow.style.left = x + "px";
        bullet.style.top = (y += vy) + "px";
        bullet.style.transform = `rotate(${
          self.getAngle(x, y, lastX, lastY) - defAngle - 25
        }deg)`;
        if (!$Z[zombieTarget.id]) {
          zY = GetY(self.R) - 70;
        }
        if ((x >= x2 - 0 && y >= zY && vy > 0) || s < 40) {
          bullet &&ClearChild(bullet);
		  let z=oZ.getRangeLeftZ(x-15,x+15,self.R,true);
		  z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&self.HitZombie(z,self);
          return;
        }
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
        oSym.addTask(timeToCall, drawFrame);
        lastTime = currTime + timeToCall;
        [lastX, lastY] = [x, y];
      })();
    });
  }
}),
oWinterMelon= InheritO(oMelonPult, {
  EName: "oWinterMelon",
  CName: "冰西瓜投手",
  SunNum: 200,
  CanGrow:function(b, a, d) {
            var c = b[1];
            return c && c.EName == "oMelonPult"
        },
  PicArr: (function() {
    var a = "images/Plants/WinterMelon/";
    return [
      "images/Card/Plants/WinterMelonpult.png",
      a + "WinterMelon.gif",
      a + "WinterMelon.gif",
      a + "Bullet.png",
      a + "WinterMelonAttack.gif"
    ];
  })(),
  Tooltip: "向敌人投出冰西瓜造成极大伤害",
  Produce: '冰西瓜投手可以对成群的敌人造成伤害。<p>伤害：<font color="#FF0000">高（80）<br></font><font color="#FF0000">一次性投出多个西瓜攻击整行僵尸<br></font>距离：<font color="#FF0000">投掷</font></p>没错，冰西瓜投手也是“重力系”，他会用自己冰冷的“重力”打退成群的僵尸',
  CheckLoop(zid, direction) {
    var self = this;
    var pid = self.id;
    if ($P[pid]) {
      self.NormalAttack(zid,0);
		self.NormalAttack(zid,1);
		if(Math.random()*100>self.SpecialAttackChance){
			for (P=0;P<Math.min(5,oZ.getArZ(self.pixelLeft + self.beAttackedPointR,oS.W,self.R).length);P++){
				self.NormalAttack(zid,1);
			}
	}
      oSym.addTask(290, (_) => {
        $P[pid] && self.AttackCheck1(zid, direction);
      });
    }
  },
  HitZombie(zombieTarget, self) {
	for (i=Math.max(zombieTarget.R-1,1);i<=Math.min(zombieTarget.R+1,oS.R);i++){
		let SpreadZ=oZ.getArZ(zombieTarget.ZX-29,zombieTarget.ZX+20,i);
		let ZL=SpreadZ.length;
		var Att;
		ZL&&(Att=Math.max(Math.min(80/ZL,self.SpreadAttMax),self.SpreadAttMin));
		while(ZL--){
			let z=SpreadZ[ZL];
			z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&(z.id!=zombieTarget.id)&&(z.getSlow(z,z.id),z.getHit1(z,Att));
		}
	}//处理溅射伤害
    zombieTarget.getPea(zombieTarget, 0);
	zombieTarget.getSlow(zombieTarget, zombieTarget.id);
    zombieTarget.getHit1(zombieTarget, self.Attack);
  },
  SpecialAttackChance:20,
  AttackAnim(ele, self) {
    ele.childNodes[1].src = self.PicArr[self.AttackGif] + "?" + this.id;
  },
  NormalAttack(zid,IsSpecial) {
    var self = this;
    var ele = $(self.id);
    var zombieTarget;
    var zombieT = oZ.getArZ(
      self.pixelLeft + self.beAttackedPointR,
      oS.W,
      self.R
    );
   if(IsSpecial){
	   zombieTarget=zombieT[Math.floor(Math.random()*zombieT.length)];
   }else{
   for (Le=0;Le<zombieT.length;Le++){
    if (!self.AttackCheck2(zombieT[Le])) continue;
	zombieTarget=zombieT[Le];
        break
       }
   }
    var bullet = EditEle(
      self.BulletEle.cloneNode(false), {
        id: "CB" + Math.random(),
      },
      0,
      EDPZ
    );
    //alert(bullet);
    self.AttackAnim(ele, self);
    oSym.addTask(
      120,
      (_) =>
      $P[self.id] &&
      (ele.childNodes[1].src = self.PicArr[self.NormalGif] + "?" + this.id)
    );
    oSym.addTask(95, (_) => {
      //PlayAudio(self.AudioArr.slice(0, 2).random());
	  if(!$P[self.id]||!zombieTarget)return;
      SetVisible(bullet);
      var x = self.pixelLeft + 50;
      var y = self.pixelTop + 10;
      var zomRelativePos = [zombieTarget.AttackedLX+20, GetY(zombieTarget.R)-80];
      var s =
        zomRelativePos[0] -
        10 -
        x -
        !zombieTarget.isAttacking *
        (zombieTarget.WalkDirection?-zombieTarget.Speed:zombieTarget.Speed) *
        10 *
        1;
      //alert(1);
      var x2 = x + s;
      var gravity = 0.2;
      var vy = -10;
      var vx = -(gravity * s) / (2 * vy);
      var lastTime = 0;
      var zY =
        zomRelativePos[1] - 20;
      var [lastX, lastY] = [x, y];
      var defAngle = self.getAngle(x + vx, y + vy + gravity, lastX, lastY);
      var bulletShadow = NewEle(
        `${self.id}_B_${Math.random()}_Shadow`,
        "div",
        `opacity:0.5;background-size:29px;background-repeat: no-repeat;width:29px;left:${x}px;top:${
          self.pixelTop + self.height - 10
        }px;`, {
          className: "Shadow",
        },
        EDPZ
      );
      (function drawFrame() {
        vy += gravity;
        bullet.style.left = (x += vx) + "px";
        bulletShadow.style.left = x + "px";
        bullet.style.top = (y += vy) + "px";
        bullet.style.transform = `rotate(${
          self.getAngle(x, y, lastX, lastY) - defAngle - 25
        }deg)`;
        if (!$Z[zombieTarget.id]) {
          zY = GetY(self.R) - 70;
        }
        if ((x >= x2 - 0 && y >= zY && vy > 0) || s < 40) {
          bullet &&ClearChild(bullet);
		  let z=oZ.getRangeLeftZ(x-15,x+15,self.R,true);
		  z&&(z.Altitude==1||z.EName=="oSnorkelZombie")&&self.HitZombie(z,self);
          return;
        }
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 50 / 3 - (currTime - lastTime)) / 10;
        oSym.addTask(timeToCall, drawFrame);
        lastTime = currTime + timeToCall;
        [lastX, lastY] = [x, y];
      })();
    });
  }
})
