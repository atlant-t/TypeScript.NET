"use strict";
var assert = require("assert");
var TypeValidator_1 = require("../../../dist/commonjs/System/TypeValidator");
var example = new TypeValidator_1.TypeInfoHelper({
    a: {},
    b: "hello",
    c: 1,
    d: true,
    e: {
        f: "whatever",
        g: false,
        h: [
            0,
            1,
            "2"
        ]
    },
    i: "noise"
});
describe('.contains(descriptor)', function () {
    it('should detect a positive match', function () {
        assert.ok(example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: Array
            }
        }));
        assert.ok(example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number,
                    Number,
                    String
                ]
            }
        }));
        assert.ok(example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number,
                    Number,
                    String
                ]
            },
            i: "noise"
        }));
        assert.ok(example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number
                ]
            }
        }));
    });
    it('should detect a negative match', function () {
        assert.ok(!example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number,
                    Boolean,
                    String
                ]
            }
        }));
        assert.ok(!example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    String
                ]
            }
        }));
        assert.ok(!example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number
                ]
            },
            i: "goo"
        }));
        assert.ok(!example.contains({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number
                ]
            },
            i: Boolean
        }));
    });
});
describe("Example", function () {
    return it("should work", function () {
        var MyTypeValidator = new TypeValidator_1.TypeValidator({
            a: Object,
            b: String,
            c: Number,
            d: Boolean,
            e: {
                f: String,
                g: Boolean,
                h: [
                    Number,
                    Boolean,
                    String
                ]
            }
        });
        var myItem = {
            a: {},
            b: "hello",
            c: 1,
            d: true,
            e: {
                f: "whatever",
                g: false,
                h: [
                    0,
                    true,
                    "2"
                ]
            },
            i: "noise"
        };
        if (MyTypeValidator.isSubsetOf(myItem)) {
            assert.equal(myItem.e.h.length, 3);
            assert.equal(myItem.b, "hello");
        }
        else {
            assert.ok(false, "Should have validated ok.");
        }
        assert.ok(!MyTypeValidator.isSubsetOf(true));
        assert.ok(!MyTypeValidator.isSubsetOf("no"));
        assert.ok(!MyTypeValidator.isSubsetOf({
            a: {},
            b: "hello"
        }));
    });
});
describe("Complex test", function () {
    return it("should work", function () {
        var ISystemTypeValidator = new TypeValidator_1.TypeValidator({
            volume_str: String,
            buy: Boolean,
            issued: String,
            price: Number,
            volumeEntered: Number,
            minVolume: Number,
            volume: Number,
            range: String,
            href: String,
            duration_str: String,
            location: {
                id_str: String,
                href: String,
                id: Number,
                name: String,
            },
            duration: Number,
            minVolume_str: String,
            volumeEntered_str: String,
            type: {
                id_str: String,
                href: String,
                id: Number,
                name: String,
            },
            id: Number,
            id_str: String,
        });
        assert.ok(ISystemTypeValidator.isSubsetOf({
            "volume_str": "590653",
            "buy": false,
            "issued": "2016-04-03T06:18:39",
            "price": 4.96,
            "volumeEntered": 1090653,
            "minVolume": 1,
            "volume": 590653,
            "range": "region",
            "href": "https://crest-tq.eveonline.com/market/10000007/orders/4490918296/",
            "duration_str": "90",
            "location": {
                "id_str": "61000748",
                "href": "https://crest-tq.eveonline.com/universe/locations/61000748/",
                "id": 61000748,
                "name": "I6-SYN I - MegaAdmiral respect obelisk"
            },
            "duration": 90,
            "minVolume_str": "1",
            "volumeEntered_str": "1090653",
            "type": {
                "id_str": "34",
                "href": "https://crest-tq.eveonline.com/types/34/",
                "id": 34,
                "name": "Tritanium"
            },
            "id": 4490918296,
            "id_str": "4490918296"
        }));
    });
});
//# sourceMappingURL=TypeValidator.js.map