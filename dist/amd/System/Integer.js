/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./Exceptions/ArgumentException","./Exceptions/ArgumentOutOfRangeException"],function(e,n,t,r){"use strict";function u(e){return 0|e}n.Integer=u;var u;!function(e){function n(e){return Math.random()*e|0}function u(e){return o(e,"maxExclusive"),n(e)}function a(e){return e===(0|e)}function o(e,n){var r=a(e);if(!r)throw new t["default"](n||"n","Must be a integer.");return r}function i(e,n){var t=o(e,n)&&e>=0;if(!t)throw new r["default"](n||"n",e,"Must be a valid integer greater than or equal to zero.");return t}function c(e,n){var t=o(e,n)&&e>0;if(!t)throw new r["default"](n||"n",e,"Must be greater than zero.");return t}e.random=u;var u;!function(e){function t(e,t){return o(e,"max"),0===e?0:(t&&(e+=e/Math.abs(e)),n(e))}function r(e,n,r){o(e,"min"),o(n,"max");var u=n-e;return 0===u?e:(r&&(u+=u/Math.abs(u)),e+t(u))}function u(e){return e&&e.length?e[n(e.length)]:void 0}e.next=t,e.nextInRange=r,e.select=u;var u;!function(n){function t(n){return e.select(n)}n.one=t}(u=e.select||(e.select={}))}(u=e.random||(e.random={})),e.is=a,e.assert=o,e.assertZeroOrGreater=i,e.assertPositive=c}(u=n.Integer||(n.Integer={})),Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=u});
//# sourceMappingURL=Integer.js.map
