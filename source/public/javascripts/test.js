function MyObject() {
    this.id = Math.random() * Date.now() >>> 0;
}

MyObject.prototype = {
    getId: function() {
        return this.id;
    }
}

function NewObject(type) {
    this.type = type;
}

function extend(proto) {
    function F() {}
    F.prototype = proto;
    return new F
}

NewObject.prototype = extend(MyObject.prototype);
var object = new NewObject('object');