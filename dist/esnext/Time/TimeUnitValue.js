/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import * as tslib_1 from "tslib";
import TimeQuantity from "./TimeQuantity";
import TimeUnit from "./TimeUnit";
/**
 * TimeUnitValue allows for passing around a reference to a changeable measure of time coerced by its unit type.
 */
var TimeUnitValue = /** @class */ (function (_super) {
    tslib_1.__extends(TimeUnitValue, _super);
    function TimeUnitValue(value, _units) {
        var _this = _super.call(this, typeof value == 'number'
            ? value
            : getUnitQuantityFrom(value, _units)) || this;
        _this._units = _units;
        TimeUnit.assertValid(_units);
        return _this;
    }
    Object.defineProperty(TimeUnitValue.prototype, "value", {
        get: function () {
            return this._quantity;
        },
        set: function (v) {
            this._quantity = v;
            this._resetTotal();
        },
        enumerable: true,
        configurable: true
    });
    TimeUnitValue.prototype.getTotalMilliseconds = function () {
        return TimeUnit.toMilliseconds(this._quantity, this._units);
    };
    Object.defineProperty(TimeUnitValue.prototype, "units", {
        // To avoid confusion, the unit type can only be set once at construction.
        get: function () {
            return this._units;
        },
        enumerable: true,
        configurable: true
    });
    TimeUnitValue.prototype.to = function (units) {
        if (units === void 0) { units = this.units; }
        return TimeUnitValue.from(this, units);
    };
    TimeUnitValue.from = function (value, units) {
        if (units === void 0) { units = TimeUnit.Milliseconds; }
        return new TimeUnitValue(value, units);
    };
    return TimeUnitValue;
}(TimeQuantity));
export default TimeUnitValue;
function getUnitQuantityFrom(q, units) {
    return TimeUnit.fromMilliseconds(q.getTotalMilliseconds(), units);
}
//# sourceMappingURL=TimeUnitValue.js.map