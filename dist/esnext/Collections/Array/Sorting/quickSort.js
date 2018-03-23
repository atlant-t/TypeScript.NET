/*!
 * @author Sebastian Belmar / https://github.com/sebabelmar/
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import ArgumentNullException from "../../../Exceptions/ArgumentNullException";
/**
 * Quick internalSort O(n log (n))
 * Warning: Uses recursion.
 * @param target
 * @returns {[]}
 */
export default function quickSort(target) {
    if (!target)
        throw new ArgumentNullException("target");
    var len = target.length;
    return target.length < 2 ? target : sort(target, 0, len - 1);
}
function sort(target, low, high) {
    if (low < high) {
        // Partition first...
        var swap = void 0;
        var pivotIndex = Math.floor((low + high) / 2);
        swap = target[pivotIndex];
        target[pivotIndex] = target[high];
        target[high] = swap;
        var i = low;
        for (var j = low; j < high; j++) {
            if (target[j] < target[high]) {
                swap = target[i];
                target[i] = target[j];
                target[j] = swap;
                i++;
            }
        }
        swap = target[i];
        target[i] = target[high];
        target[high] = swap;
        sort(target, low, i - 1);
        sort(target, i + 1, high);
    }
    return target;
}
//# sourceMappingURL=quickSort.js.map