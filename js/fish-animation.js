var _0x5ef1 = [
  "fishAnimation",
  "assets/fish.png",
  "assets/fin.png",
  "#000",
  "fn",
  "string",
  "plugin_",
  "data",
  "commandFishAnimation",
  "destroy",
  "extend",
  "push",
  "detectBrowser",
  "each",
  "canvas",
  "createElement",
  "getContext",
  "browserSupport",
  "isLoaded",
  "initPreload",
  "stageW",
  "canvasW",
  "width",
  "attr",
  "stageH",
  "canvasH",
  "height",
  "manifest",
  "fishArray",
  "fishImage",
  "fish",
  "IMAGE",
  "LoadQueue",
  "fishFinImage",
  "fishFin",
  "loader",
  "complete",
  "handleLoaderComplete",
  "on",
  "progress",
  "handleLoaderProgress",
  "loadManifest",
  "location",
  "parent",
  "referrer",
  "href",
  "initFishCanvas",
  "buildFishCanvas",
  "createFishes",
  "stage",
  "id",
  "interact",
  "enable",
  "Touch",
  "enableMouseOver",
  "mouseMoveOutside",
  "setFPS",
  "Ticker",
  "tick",
  "addEventListener",
  "itemCanvasContainer",
  "fishImageRegX",
  "fishImageRegY",
  "fishImageH",
  "fishImageW",
  "spritesheetSpeed",
  "static",
  "fishData",
  "src",
  "getResult",
  "fishAnimate",
  "framerate",
  "fishFinImageRegX",
  "fishFinImageRegY",
  "fishFinImageH",
  "fishFinImageW",
  "fishFinData",
  "fishFinLeftAnimate",
  "fishFinRightAnimate",
  "scaleX",
  "x",
  "drawRect",
  "red",
  "beginFill",
  "graphics",
  "addChild",
  "resizeCanvas",
  "scaleY",
  "scalePercent",
  "resizeHolder",
  "getElementById",
  "number",
  "createFish",
  "colour",
  "updateFishes",
  "clone",
  "scaleNum",
  "random",
  "floor",
  "scale",
  "scaleRange",
  "type",
  "swimspeed",
  "turn",
  "swimTimer",
  "getNumFrames",
  "gotoAndPlay",
  "length",
  "y",
  "rotation",
  "mouseover",
  "target",
  "setFishRotate",
  "moveFish",
  "finLeft",
  "finRight",
  "updateCache",
  "currentFrame",
  "PI",
  "sin",
  "cos",
  "rounder",
  "downspeed",
  "turning",
  "pow",
  "turnhard",
  "turnmedium",
  "turnsoft",
  "uncache",
  "#",
  "",
  "replace",
  "match",
  "filters",
  "cache",
  "removeChild",
  "splice",
  "update",
  "autoClear",
  "removeAllChildren",
  "indexOf",
  "removeEventListener",
  "substring",
  "www.",
  "demonisblack.com",
  "codecanyon.net",
  "preview.codecanyon.net",
  "localhost",
  "https://codecanyon.net/user/demonisblack",
  "://",
  "/",
  "split",
  ":",
];

(function (_0x8192x1) {
  var _0x8192x2 = _0x5ef1[0],
    _0x8192x3 = [],
    _0x8192x4 = false,
    _0x8192x5 = {
      fishImage: _0x5ef1[1],
      fishFinImage: _0x5ef1[2],
      spritesheetSpeed: 1,
      colour: _0x5ef1[3],
      number: 25,
      swimspeed: 5,
      downspeed: 0.98,
      rounder: 10,
      turning: 3,
      scaleRange: 3,
      swimTimer: 50,
      canvasW: 0,
      canvasH: 0,
      scalePercent: 1,
      manifest: [],
      fishArray: [],
      isLoaded: false,
      browserSupport: false,
      fishImageW: 46,
      fishImageH: 102,
      fishImageRegX: 7,
      fishImageRegY: 20,
      fishFinImageW: 12,
      fishFinImageH: 14,
      fishFinImageRegX: 16,
      fishFinImageRegY: 12,
      interact: true,
    };
  _0x8192x1[_0x5ef1[4]][_0x8192x2] = function (
    _0x8192x6,
    _0x8192x7,
    _0x8192x8
  ) {
    if (typeof _0x8192x6 == _0x5ef1[5]) {
      var _0x8192x9 = _0x8192x1(this);
      var _0x8192xa = _0x8192x9[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      if (_0x8192xa != undefined) {
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[8]](
          this,
          _0x8192x6,
          _0x8192x7,
          _0x8192x8
        );
      }
    } else {
      return this[_0x5ef1[13]](function () {
        var _0x8192x9 = _0x8192x1(this);
        var _0x8192xa = _0x8192x9[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[9]](_0x8192x9);
        var _0x8192xa = _0x8192x1[_0x5ef1[10]]({}, _0x8192x5, _0x8192x6);
        _0x8192x9[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2, _0x8192xa);
        _0x8192x3[_0x5ef1[11]](_0x8192x9);
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[12]](_0x8192x9);
      });
    }
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[12]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      var _0x8192xd = document[_0x5ef1[15]](_0x5ef1[14]);
      if (_0x8192xd[_0x5ef1[16]]) {
        _0x8192xa[_0x5ef1[17]] = true;
      }
      if (_0x8192xa[_0x5ef1[17]]) {
        if (!_0x8192xa[_0x5ef1[18]]) {
          _0x8192xa[_0x5ef1[18]] = true;
          _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[19]](_0x8192xc);
        }
      }
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[19]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      _0x8192xa[_0x5ef1[20]] = _0x8192xa[_0x5ef1[21]] = _0x8192xc[_0x5ef1[23]](
        _0x5ef1[22]
      );
      _0x8192xa[_0x5ef1[24]] = _0x8192xa[_0x5ef1[25]] = _0x8192xc[_0x5ef1[23]](
        _0x5ef1[26]
      );
      _0x8192xa[_0x5ef1[27]] = [];
      _0x8192xa[_0x5ef1[28]] = [];
      _0x8192xa[_0x5ef1[27]][_0x5ef1[11]]({
        src: _0x8192xa[_0x5ef1[29]],
        id: _0x5ef1[30],
        type: createjs[_0x5ef1[32]][_0x5ef1[31]],
      });
      _0x8192xa[_0x5ef1[27]][_0x5ef1[11]]({
        src: _0x8192xa[_0x5ef1[33]],
        id: _0x5ef1[34],
        type: createjs[_0x5ef1[32]][_0x5ef1[31]],
      });
      _0x8192xa[_0x5ef1[35]] = new createjs.LoadQueue(false);
      _0x8192xa[_0x5ef1[35]][_0x5ef1[38]](_0x5ef1[36], function () {
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[37]](_0x8192xc);
      });
      _0x8192xa[_0x5ef1[35]][_0x5ef1[38]](_0x5ef1[39], function () {
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[40]](_0x8192xc);
      });
      _0x8192xa[_0x5ef1[35]][_0x5ef1[41]](_0x8192xa[_0x5ef1[27]]);
      /*_0x8192x2f(
        window[_0x5ef1[42]] != window[_0x5ef1[43]][_0x5ef1[42]]
          ? document[_0x5ef1[44]]
          : document[_0x5ef1[42]][_0x5ef1[45]]
      );*/
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[37]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[46]](_0x8192xc);
      _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[47]](_0x8192xc);
      _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[48]](_0x8192xc);
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[40]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[46]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      _0x8192xa[_0x5ef1[49]] = new createjs.Stage(
        _0x8192xc[_0x5ef1[23]](_0x5ef1[50])
      );
      if (_0x8192xa[_0x5ef1[51]]) {
        createjs[_0x5ef1[53]][_0x5ef1[52]](_0x8192xa[_0x5ef1[49]]);
        _0x8192xa[_0x5ef1[49]][_0x5ef1[54]](20);
        _0x8192xa[_0x5ef1[49]][_0x5ef1[55]] = true;
      }
      if (!_0x8192x4) {
        _0x8192x4 = true;
        createjs[_0x5ef1[57]][_0x5ef1[56]](60);
        createjs[_0x5ef1[57]][_0x5ef1[59]](
          _0x5ef1[58],
          _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[58]]
        );
      }
    });
  };

  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[47]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      _0x8192xa[_0x5ef1[60]] = new createjs.Container();

      var _0x8192xe = {
        regX: _0x8192xa[_0x5ef1[61]],
        regY: _0x8192xa[_0x5ef1[62]],
        height: _0x8192xa[_0x5ef1[63]],
        count: 91,
        width: _0x8192xa[_0x5ef1[64]],
      };
      var _0x8192xf = {
        static: {
          frames: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32,
          ],
          speed: _0x8192xa[_0x5ef1[65]],
          next: _0x5ef1[66],
        },
        turnsoft: {
          frames: [
            33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
            50,
          ],
          speed: _0x8192xa[_0x5ef1[65]],
          next: _0x5ef1[66],
        },
        turnmedium: {
          frames: [
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
            68,
          ],
          speed: _0x8192xa[_0x5ef1[65]],
          next: _0x5ef1[66],
        },
        turnhard: {
          frames: [
            69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 90,
          ],
          speed: _0x8192xa[_0x5ef1[65]],
          next: _0x5ef1[66],
        },
      };

      _0x8192xa[_0x5ef1[67]] = new createjs.SpriteSheet({
        images: [_0x8192xa[_0x5ef1[35]][_0x5ef1[69]](_0x5ef1[30])[_0x5ef1[68]]],
        frames: _0x8192xe,
        animations: _0x8192xf,
      });
      _0x8192xa[_0x5ef1[70]] = new createjs.Sprite(
        _0x8192xa[_0x5ef1[67]],
        _0x5ef1[66]
      );
      _0x8192xa[_0x5ef1[70]][_0x5ef1[71]] = 20;
      var _0x8192xe = {
        regX: _0x8192xa[_0x5ef1[72]],
        regY: _0x8192xa[_0x5ef1[73]],
        height: _0x8192xa[_0x5ef1[74]],
        count: 23,
        width: _0x8192xa[_0x5ef1[75]],
      };
      var _0x8192xf = {
        static: {
          frames: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22,
          ],
          speed: _0x8192xa[_0x5ef1[65]],
          next: _0x5ef1[66],
        },
      };
      _0x8192xa[_0x5ef1[76]] = new createjs.SpriteSheet({
        images: [_0x8192xa[_0x5ef1[35]][_0x5ef1[69]](_0x5ef1[34])[_0x5ef1[68]]],
        frames: _0x8192xe,
        animations: _0x8192xf,
      });
      _0x8192xa[_0x5ef1[77]] = new createjs.Sprite(
        _0x8192xa[_0x5ef1[76]],
        _0x5ef1[66]
      );
      _0x8192xa[_0x5ef1[77]][_0x5ef1[71]] = 20;
      _0x8192xa[_0x5ef1[78]] = new createjs.Sprite(
        _0x8192xa[_0x5ef1[76]],
        _0x5ef1[66]
      );
      _0x8192xa[_0x5ef1[78]][_0x5ef1[71]] = 20;
      _0x8192xa[_0x5ef1[78]][_0x5ef1[79]] = -1;
      _0x8192xa[_0x5ef1[70]][_0x5ef1[80]] -= 200;
      _0x8192xa[_0x5ef1[77]][_0x5ef1[80]] -= 200;
      _0x8192xa[_0x5ef1[78]][_0x5ef1[80]] -= 200;
      var _0x8192x10 = new createjs.Shape();
      _0x8192x10[_0x5ef1[84]]
        [_0x5ef1[83]](_0x5ef1[82])
        [_0x5ef1[81]](0, 0, _0x8192xa[_0x5ef1[64]], _0x8192xa[_0x5ef1[63]]);
      _0x8192xa[_0x5ef1[60]][_0x5ef1[85]](
        _0x8192xa[_0x5ef1[70]],
        _0x8192xa[_0x5ef1[77]],
        _0x8192xa[_0x5ef1[78]]
      );
      _0x8192xa[_0x5ef1[49]][_0x5ef1[85]](_0x8192xa[_0x5ef1[60]]);
      _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[86]](_0x8192xc);
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[86]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      if (_0x8192xa[_0x5ef1[60]] != undefined) {
        _0x8192xa[_0x5ef1[60]][_0x5ef1[79]] = _0x8192xa[_0x5ef1[60]][
          _0x5ef1[87]
        ] = _0x8192xa[_0x5ef1[88]];
      }
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[89]] = function (
    _0x8192xb,
    _0x8192x11,
    _0x8192x12
  ) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      _0x8192xa[_0x5ef1[88]] = _0x8192x11 / stageW;
      if (_0x8192xa[_0x5ef1[24]] * _0x8192xa[_0x5ef1[88]] > _0x8192x11) {
        _0x8192xa[_0x5ef1[88]] = _0x8192x12 / _0x8192xa[_0x5ef1[24]];
      }
      var _0x8192x13 = document[_0x5ef1[90]](
        _0x8192xc[_0x5ef1[23]](_0x5ef1[50])
      );
      _0x8192x13[_0x5ef1[22]] = _0x8192xa[_0x5ef1[20]] * _0x8192xa[_0x5ef1[88]];
      _0x8192x13[_0x5ef1[26]] = _0x8192xa[_0x5ef1[24]] * _0x8192xa[_0x5ef1[88]];
      _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[86]](_0x8192xc);
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[48]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      for (f = 0; f < _0x8192xa[_0x5ef1[91]]; f++) {
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[92]](_0x8192xc);
      }
      _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[94]](_0x8192xc, _0x5ef1[93]);
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[92]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      var _0x8192x14 = _0x8192xa[_0x5ef1[70]][_0x5ef1[95]]();
      var _0x8192x15 = _0x8192xa[_0x5ef1[77]][_0x5ef1[95]]();
      var _0x8192x16 = _0x8192xa[_0x5ef1[78]][_0x5ef1[95]]();
      _0x8192x14[_0x5ef1[96]] =
        Math[_0x5ef1[98]](Math[_0x5ef1[97]]() * 5) * 0.1;
      _0x8192x14[_0x5ef1[99]] =
        _0x8192x14[_0x5ef1[96]] * _0x8192xa[_0x5ef1[100]];
      _0x8192x14[_0x5ef1[101]] = 1;
      _0x8192x14[_0x5ef1[102]] = _0x8192xa[_0x5ef1[102]];
      _0x8192x14[_0x5ef1[103]] = Math[_0x5ef1[97]]() * 180;
      _0x8192x14[_0x5ef1[104]] =
        _0x8192xa[_0x5ef1[104]] +
        Math[_0x5ef1[97]]() * (_0x8192xa[_0x5ef1[104]] / 2);
      var _0x8192x17 = Math[_0x5ef1[98]](
        Math[_0x5ef1[97]]() * _0x8192xa[_0x5ef1[76]][_0x5ef1[105]]() - 1
      );
      _0x8192x15[_0x5ef1[106]](
        Math[_0x5ef1[98]](Math[_0x5ef1[97]]() * _0x8192x17)
      );
      _0x8192x16[_0x5ef1[106]](
        Math[_0x5ef1[98]](Math[_0x5ef1[97]]() * _0x8192x17)
      );
      _0x8192x14[_0x5ef1[79]] = _0x8192x14[_0x5ef1[87]] =
        _0x8192x14[_0x5ef1[99]];
      _0x8192x15[_0x5ef1[79]] = _0x8192x15[_0x5ef1[87]] =
        _0x8192x14[_0x5ef1[99]];
      _0x8192x16[_0x5ef1[87]] = _0x8192x14[_0x5ef1[99]];
      _0x8192x16[_0x5ef1[79]] = -_0x8192x14[_0x5ef1[99]];
      _0x8192x14[_0x5ef1[50]] = _0x8192xa[_0x5ef1[28]][_0x5ef1[107]] - 1;
      _0x8192xa[_0x5ef1[28]][_0x5ef1[11]]({
        fish: _0x8192x14,
        finLeft: _0x8192x15,
        finRight: _0x8192x16,
      });
      var _0x8192x18 = _0x8192xa[_0x5ef1[28]][_0x5ef1[107]] - 1;
      _0x8192x14[_0x5ef1[80]] =
        Math[_0x5ef1[97]]() * ((_0x8192xa[_0x5ef1[21]] / 100) * 60) +
        (_0x8192xa[_0x5ef1[21]] / 100) * 20;
      _0x8192x14[_0x5ef1[108]] =
        Math[_0x5ef1[97]]() * ((_0x8192xa[_0x5ef1[25]] / 100) * 60) +
        (_0x8192xa[_0x5ef1[25]] / 100) * 20;
      _0x8192x14[_0x5ef1[109]] = Math[_0x5ef1[98]](
        Math[_0x5ef1[97]]() * 360 - 180
      );
      _0x8192xa[_0x5ef1[60]][_0x5ef1[85]](_0x8192x14, _0x8192x15, _0x8192x16);
      if (_0x8192xa[_0x5ef1[51]]) {
        _0x8192x14[_0x5ef1[59]](_0x5ef1[110], function (_0x8192x19) {
          _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[112]](
            _0x8192xc,
            _0x8192x19[_0x5ef1[111]][_0x5ef1[50]]
          );
          _0x8192x19[_0x5ef1[111]][_0x5ef1[102]] = _0x8192xa[_0x5ef1[102]] * 4;
        });
      }
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[113]] = function (
    _0x8192xb,
    _0x8192x18
  ) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      var _0x8192x1a = _0x8192xa[_0x5ef1[28]][_0x8192x18][_0x5ef1[30]];
      var _0x8192x1b = _0x8192xa[_0x5ef1[28]][_0x8192x18][_0x5ef1[114]];
      var _0x8192x1c = _0x8192xa[_0x5ef1[28]][_0x8192x18][_0x5ef1[115]];
      _0x8192x1a[_0x5ef1[116]]();
      _0x8192x1b[_0x5ef1[116]]();
      _0x8192x1c[_0x5ef1[116]]();
      if (_0x8192x1a[_0x5ef1[104]] <= 0) {
        _0x8192x1a[_0x5ef1[104]] =
          _0x8192xa[_0x5ef1[104]] +
          Math[_0x5ef1[97]]() * (_0x8192xa[_0x5ef1[104]] / 3);
        _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[112]](_0x8192xc, _0x8192x18);
      } else {
        _0x8192x1a[_0x5ef1[104]]--;
      }
      if (_0x8192x1a[_0x5ef1[117]] < 32) {
        _0x8192x1a[_0x5ef1[101]] = 1;
      }
      _0x8192x1a[_0x5ef1[80]] +=
        _0x8192x1a[_0x5ef1[102]] *
        Math[_0x5ef1[119]](
          (_0x8192x1a[_0x5ef1[109]] * Math[_0x5ef1[118]]) / 180
        );
      _0x8192x1a[_0x5ef1[108]] -=
        _0x8192x1a[_0x5ef1[102]] *
        Math[_0x5ef1[120]](
          (_0x8192x1a[_0x5ef1[109]] * Math[_0x5ef1[118]]) / 180
        );
      _0x8192x1a[_0x5ef1[109]] +=
        (_0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]) /
        _0x8192xa[_0x5ef1[121]];
      _0x8192x1a[_0x5ef1[102]] *= _0x8192xa[_0x5ef1[122]];
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[112]] = function (
    _0x8192xb,
    _0x8192x18
  ) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      var _0x8192x1a = _0x8192xa[_0x5ef1[28]][_0x8192x18][_0x5ef1[30]];
      _0x8192x1a[_0x5ef1[102]] = _0x8192xa[_0x5ef1[102]];
      var _0x8192x1d = (_0x8192xa[_0x5ef1[25]] / 100) * 20;
      var _0x8192x1e = (_0x8192xa[_0x5ef1[25]] / 100) * 80;
      var _0x8192x1f = (_0x8192xa[_0x5ef1[21]] / 100) * 80;
      var _0x8192x20 = (_0x8192xa[_0x5ef1[21]] / 100) * 20;
      if (_0x8192x1a[_0x5ef1[108]] < _0x8192x1d) {
        if (_0x8192x1a[_0x5ef1[109]] < 0) {
          _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(120);
          if (_0x8192x1a[_0x5ef1[80]] < _0x8192x20) {
            _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(150);
          }
        } else {
          _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(120);
          if (_0x8192x1a[_0x5ef1[80]] > _0x8192x1f) {
            _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(150);
          }
        }
      } else {
        if (_0x8192x1a[_0x5ef1[108]] > _0x8192x1e) {
          if (_0x8192x1a[_0x5ef1[109]] < 0) {
            _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(60);
            if (_0x8192x1a[_0x5ef1[80]] > _0x8192x20) {
              _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(30);
            }
          } else {
            _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(60);
            if (_0x8192x1a[_0x5ef1[80]] < _0x8192x1f) {
              _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(30);
            }
          }
        } else {
          if (_0x8192x1a[_0x5ef1[80]] > _0x8192x1f) {
            if (_0x8192x1a[_0x5ef1[109]] < 90) {
              _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(30);
              if (_0x8192x1a[_0x5ef1[108]] < _0x8192x1d) {
                _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(60);
              }
            } else {
              _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(150);
              if (_0x8192x1a[_0x5ef1[108]] < _0x8192x1e) {
                _0x8192x1a[_0x5ef1[103]] = -_0x8192x2d(120);
              }
            }
          } else {
            if (_0x8192x1a[_0x5ef1[80]] < _0x8192x20) {
              if (_0x8192x1a[_0x5ef1[109]] > -90) {
                _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(30);
                if (_0x8192x1a[_0x5ef1[108]] < _0x8192x1d) {
                  _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(60);
                }
              } else {
                _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(150);
                if (_0x8192x1a[_0x5ef1[108]] > _0x8192x1e) {
                  _0x8192x1a[_0x5ef1[103]] = _0x8192x2d(120);
                }
              }
            }
          }
        }
      }
      _0x8192x1a[_0x5ef1[103]] += Math[_0x5ef1[98]](
        Math[_0x5ef1[124]](
          Math[_0x5ef1[97]]() * _0x8192xa[_0x5ef1[123]] -
            _0x8192xa[_0x5ef1[123]] / 2,
          3
        )
      );
      if (_0x8192x1a[_0x5ef1[101]] == 1) {
        if (90 < _0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]) {
          _0x8192x1a[_0x5ef1[101]] = 2;
          _0x8192x1a[_0x5ef1[79]] = _0x8192x1a[_0x5ef1[99]];
          _0x8192x1a[_0x5ef1[106]](_0x5ef1[125]);
        } else {
          if (-90 > _0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]) {
            _0x8192x1a[_0x5ef1[101]] = 3;
            _0x8192x1a[_0x5ef1[79]] = -_0x8192x1a[_0x5ef1[99]];
            _0x8192x1a[_0x5ef1[106]](_0x5ef1[125]);
          } else {
            if (60 < _0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]) {
              _0x8192x1a[_0x5ef1[101]] = 4;
              _0x8192x1a[_0x5ef1[79]] = _0x8192x1a[_0x5ef1[99]];
              _0x8192x1a[_0x5ef1[106]](_0x5ef1[126]);
            } else {
              if (-60 > _0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]) {
                _0x8192x1a[_0x5ef1[101]] = 5;
                _0x8192x1a[_0x5ef1[79]] = -_0x8192x1a[_0x5ef1[99]];
                _0x8192x1a[_0x5ef1[106]](_0x5ef1[126]);
              } else {
                if (30 < _0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]) {
                  _0x8192x1a[_0x5ef1[101]] = 6;
                  _0x8192x1a[_0x5ef1[79]] = _0x8192x1a[_0x5ef1[99]];
                  _0x8192x1a[_0x5ef1[106]](_0x5ef1[127]);
                } else {
                  if (
                    -30 >
                    _0x8192x1a[_0x5ef1[103]] - _0x8192x1a[_0x5ef1[109]]
                  ) {
                    _0x8192x1a[_0x5ef1[101]] = 7;
                    _0x8192x1a[_0x5ef1[79]] = -_0x8192x1a[_0x5ef1[99]];
                    _0x8192x1a[_0x5ef1[106]](_0x5ef1[127]);
                  }
                }
              }
            }
          }
        }
      }
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[94]] = function (
    _0x8192xb,
    _0x8192x21
  ) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      if (_0x8192x21 == _0x5ef1[93]) {
        for (t = 0; t < _0x8192xa[_0x5ef1[28]][_0x5ef1[107]]; t++) {
          var _0x8192x22 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[30]];
          var _0x8192x23 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[114]];
          var _0x8192x24 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[115]];
          _0x8192x22[_0x5ef1[128]]();
          _0x8192x23[_0x5ef1[128]]();
          _0x8192x24[_0x5ef1[128]]();
          var _0x8192x25 = _0x8192xa[_0x5ef1[93]][_0x5ef1[131]](
            _0x5ef1[129],
            _0x5ef1[130]
          );
          var _0x8192x26 =
            _0x8192x25[_0x5ef1[107]] === 3
              ? _0x8192x25[0] +
                _0x8192x25[0] +
                _0x8192x25[1] +
                _0x8192x25[1] +
                _0x8192x25[2] +
                _0x8192x25[2]
              : _0x8192x25;
          var _0x8192x27 = _0x8192x26[_0x5ef1[132]](/.{2}/g);
          var _0x8192x28 = parseInt(_0x8192x27[0], 16);
          var _0x8192x29 = parseInt(_0x8192x27[1], 16);
          var _0x8192x2a = parseInt(_0x8192x27[2], 16);
          _0x8192x22[_0x5ef1[133]] =
            _0x8192x23[_0x5ef1[133]] =
            _0x8192x24[_0x5ef1[133]] =
              [
                new createjs.ColorFilter(
                  0,
                  0,
                  0,
                  1,
                  _0x8192x28,
                  _0x8192x29,
                  _0x8192x2a,
                  0
                ),
              ];
          _0x8192x22[_0x5ef1[134]](
            -_0x8192xa[_0x5ef1[61]],
            -_0x8192xa[_0x5ef1[62]],
            _0x8192xa[_0x5ef1[64]],
            _0x8192xa[_0x5ef1[63]]
          );
          _0x8192x23[_0x5ef1[134]](
            -_0x8192xa[_0x5ef1[72]],
            -_0x8192xa[_0x5ef1[73]],
            _0x8192xa[_0x5ef1[75]],
            _0x8192xa[_0x5ef1[74]]
          );
          _0x8192x24[_0x5ef1[134]](
            -_0x8192xa[_0x5ef1[72]],
            -_0x8192xa[_0x5ef1[73]],
            _0x8192xa[_0x5ef1[75]],
            _0x8192xa[_0x5ef1[74]]
          );
        }
      } else {
        if (_0x8192x21 == _0x5ef1[100]) {
          for (t = 0; t < _0x8192xa[_0x5ef1[28]][_0x5ef1[107]]; t++) {
            var _0x8192x22 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[30]];
            var _0x8192x23 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[114]];
            var _0x8192x24 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[115]];
            _0x8192x22[_0x5ef1[99]] =
              _0x8192x22[_0x5ef1[96]] * _0x8192xa[_0x5ef1[100]];
            _0x8192x22[_0x5ef1[79]] = _0x8192x22[_0x5ef1[87]] =
              _0x8192x22[_0x5ef1[99]];
            _0x8192x23[_0x5ef1[79]] = _0x8192x23[_0x5ef1[87]] =
              _0x8192x22[_0x5ef1[99]];
            _0x8192x24[_0x5ef1[87]] = _0x8192x22[_0x5ef1[99]];
            _0x8192x24[_0x5ef1[79]] = -_0x8192x22[_0x5ef1[99]];
          }
        } else {
          if (_0x8192x21 == _0x5ef1[91]) {
            if (_0x8192xa[_0x5ef1[91]] > _0x8192xa[_0x5ef1[28]][_0x5ef1[107]]) {
              for (
                t = _0x8192xa[_0x5ef1[28]][_0x5ef1[107]];
                t < _0x8192xa[_0x5ef1[91]];
                t++
              ) {
                _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[92]](_0x8192xc);
              }
              _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[94]](
                _0x8192xc,
                _0x5ef1[93]
              );
            } else {
              for (
                t = _0x8192xa[_0x5ef1[91]];
                t < _0x8192xa[_0x5ef1[28]][_0x5ef1[107]];
                t++
              ) {
                var _0x8192x22 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[30]];
                var _0x8192x23 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[114]];
                var _0x8192x24 = _0x8192xa[_0x5ef1[28]][t][_0x5ef1[115]];
                _0x8192xa[_0x5ef1[60]][_0x5ef1[135]](
                  _0x8192x22,
                  _0x8192x23,
                  _0x8192x24
                );
                _0x8192xa[_0x5ef1[28]][_0x5ef1[136]](t, 1);
              }
            }
          }
        }
      }
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[58]] = function () {
    for (n = 0; n < _0x8192x3[_0x5ef1[107]]; n++) {
      var _0x8192xc = _0x8192x3[n];
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      if (_0x8192xa[_0x5ef1[28]][_0x5ef1[107]] > 0) {
        for (f = 0; f < _0x8192xa[_0x5ef1[28]][_0x5ef1[107]]; f++) {
          _0x8192xa[_0x5ef1[28]][f][_0x5ef1[114]][_0x5ef1[80]] = _0x8192xa[
            _0x5ef1[28]
          ][f][_0x5ef1[115]][_0x5ef1[80]] =
            _0x8192xa[_0x5ef1[28]][f][_0x5ef1[30]][_0x5ef1[80]];
          _0x8192xa[_0x5ef1[28]][f][_0x5ef1[114]][_0x5ef1[108]] = _0x8192xa[
            _0x5ef1[28]
          ][f][_0x5ef1[115]][_0x5ef1[108]] =
            _0x8192xa[_0x5ef1[28]][f][_0x5ef1[30]][_0x5ef1[108]];
          _0x8192xa[_0x5ef1[28]][f][_0x5ef1[114]][_0x5ef1[109]] = _0x8192xa[
            _0x5ef1[28]
          ][f][_0x5ef1[115]][_0x5ef1[109]] =
            _0x8192xa[_0x5ef1[28]][f][_0x5ef1[30]][_0x5ef1[109]];
          _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[113]](_0x8192xc, f);
        }
        _0x8192xa[_0x5ef1[49]][_0x5ef1[137]]();
      }
    }
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[8]] = function (
    _0x8192xb,
    _0x8192x2b,
    _0x8192x7,
    _0x8192x8
  ) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      switch (_0x8192x2b) {
        case _0x5ef1[9]:
          _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[9]](_0x8192xc);
          break;
        default:
          if (_0x8192xa[_0x8192x7] != undefined) {
            _0x8192xa[_0x8192x7] = _0x8192x8;
            if (_0x8192x7 == _0x5ef1[91]) {
              _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[94]](
                _0x8192xc,
                _0x5ef1[91]
              );
            } else {
              if (_0x8192x7 == _0x5ef1[100]) {
                _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[94]](
                  _0x8192xc,
                  _0x5ef1[100]
                );
              } else {
                if (_0x8192x7 == _0x5ef1[93]) {
                  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[94]](
                    _0x8192xc,
                    _0x5ef1[93]
                  );
                }
              }
            }
          }
      }
    });
  };
  _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[9]] = function (_0x8192xb) {
    return _0x8192xb[_0x5ef1[13]](function () {
      var _0x8192xc = _0x8192x1(this);
      var _0x8192xa = _0x8192xc[_0x5ef1[7]](_0x5ef1[6] + _0x8192x2);
      if (_0x8192xa != undefined) {
        if (_0x8192xa[_0x5ef1[18]]) {
          _0x8192xa[_0x5ef1[18]] = false;
          _0x8192xa[_0x5ef1[35]] = null;
          _0x8192xa[_0x5ef1[49]][_0x5ef1[138]] = true;
          _0x8192xa[_0x5ef1[49]][_0x5ef1[139]]();
          _0x8192xa[_0x5ef1[49]][_0x5ef1[137]]();
          var _0x8192x2c = _0x8192x3[_0x5ef1[140]](_0x8192xc);
          _0x8192x3[_0x5ef1[136]](_0x8192x2c, 1);
          createjs[_0x5ef1[57]][_0x5ef1[141]](
            _0x5ef1[58],
            _0x8192xa[_0x5ef1[49]]
          );
          if (_0x8192x3[_0x5ef1[107]] == 0) {
            _0x8192x4 = false;
            createjs[_0x5ef1[57]][_0x5ef1[141]](
              _0x5ef1[58],
              _0x8192x1[_0x5ef1[4]][_0x8192x2][_0x5ef1[58]]
            );
          }
        }
      }
    });
  };
  function _0x8192x2d(_0x8192x2e) {
    return (
      _0x8192x2e + Math[_0x5ef1[98]](Math[_0x5ef1[97]]() * (_0x8192x2e / 3))
    );
  }
  function _0x8192x2f(_0x8192x30) {
    var _0x8192x31 = _0x8192x30;
    _0x8192x31 =
      _0x8192x31[_0x5ef1[142]](0, 4) == _0x5ef1[143]
        ? _0x8192x31[_0x5ef1[142]](4, _0x8192x31[_0x5ef1[107]])
        : _0x8192x31;
    var _0x8192x32 = _0x8192x35(_0x8192x31);
    var _0x8192x33 = false;
    var _0x8192x34 = [_0x5ef1[144], _0x5ef1[145], _0x5ef1[146], _0x5ef1[147]];
    if (_0x8192x34[_0x5ef1[140]](_0x8192x32) == -1) {
      window[_0x5ef1[42]] = _0x5ef1[148];
    }
  }
  function _0x8192x35(_0x8192x30) {
    var _0x8192x36;
    if (_0x8192x30[_0x5ef1[140]](_0x5ef1[149]) > -1) {
      _0x8192x36 = _0x8192x30[_0x5ef1[151]](_0x5ef1[150])[2];
    } else {
      _0x8192x36 = _0x8192x30[_0x5ef1[151]](_0x5ef1[150])[0];
    }
    _0x8192x36 = _0x8192x36[_0x5ef1[151]](_0x5ef1[152])[0];
    return _0x8192x36;
  }
})(jQuery);
