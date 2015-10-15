/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
///<reference path="Collections/Dictionaries/IDictionary.d.ts"/>
///<reference path="Disposable/IDisposable.d.ts"/>
const NAME = 'Exception';
export default class Exception {
    constructor(message = null, innerException = null) {
        this.message = message;
        var _ = this;
        _.name = _.getName();
        _.data = {};
        if (innerException)
            _.data['innerException'] = innerException;
        Object.freeze(_);
    }
    getName() { return NAME; }
    toString() {
        var _ = this, m = _.message;
        m = m ? (': ' + m) : '';
        return '[' + _.name + m + ']';
    }
    dispose() {
        var data = this.data;
        for (let k in data)
            if (data.hasOwnProperty(k))
                delete data[k];
    }
}
//# sourceMappingURL=Exception.js.map