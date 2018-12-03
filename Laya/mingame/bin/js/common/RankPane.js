var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 封装了排行榜的sprite
 * 因为GameOverRank和GamePageRank都在用
 */
var RankPane = /** @class */ (function (_super) {
    __extends(RankPane, _super);
    //20,190
    function RankPane() {
        var _this = _super.call(this) || this;
        _this.rankSC = new WXSCSprite(500, 600);
        _this.addChild(_this.rankSC);
        return _this;
    }
    //true表示先把分数存一下，然后再get,这样提取数据比较准确
    RankPane.prototype.Show = function (needSaveCoin) {
        //保存得分
        if (needSaveCoin) {
            WXPlatform.inst.SaveScore(GameData.inst.highCoinSD.value);
        }
        //退出的时候，sc要清理掉
        WXPlatform.inst.ODC_Clear(500, 600);
        //-
        this.rankSC.Clear();
    };
    //~show了以后，要turnPage
    RankPane.prototype.TurnPage = function (pageIdx) {
        WXPlatform.inst.ODC_DrawRank(pageIdx);
        this.rankSC.Start(0.5, 6);
    };
    RankPane.prototype.Clear = function () {
        this.rankSC.Clear();
    };
    RankPane.prototype.Update = function () {
        this.rankSC.Update();
    };
    return RankPane;
}(Laya.Sprite));
//# sourceMappingURL=RankPane.js.map