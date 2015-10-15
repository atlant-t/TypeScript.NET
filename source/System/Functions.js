/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require", "exports"], function (require, exports) {
    var Functions = (function () {
        function Functions() {
        }
        Functions.prototype.Identity = function (x) { return x; };
        Functions.prototype.True = function () { return true; };
        Functions.prototype.False = function () { return false; };
        Functions.prototype.Blank = function () { };
        return Functions;
    })();
    var rootFunctions = new Functions();
    var Functions;
    (function (Functions) {
        Functions.Identity = rootFunctions.Identity;
        Functions.True = rootFunctions.True;
        Functions.False = rootFunctions.False;
        Functions.Blank = rootFunctions.Blank;
    })(Functions || (Functions = {}));
    Object.freeze(Functions);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Functions;
});
//# sourceMappingURL=Functions.js.map