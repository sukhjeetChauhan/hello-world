"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.button_click = function () {
        //if(this._y = true)
        //{console.log('now likes are ',this._x + 1);}
        if (this._y = false) {
            console.log('not liked, Likes are ', this._x);
        }
    };
    Object.defineProperty(Like.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw console.error('invalid value');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
