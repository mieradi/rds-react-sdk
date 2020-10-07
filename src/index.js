"use strict";
exports.__esModule = true;
var React = require("react");
require("./styles.scss");
var useState = React.useState, useEffect = React.useEffect;
var Counter = function (_a) {
    var count = _a.count, className = _a.className;
    return (<div className={"counter " + className}>
    <p key={count} className={"counter__count " + (className ? className + '__count' : '')}>
      {count}
    </p>
  </div>);
};
var App = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b;
    var _c = useState(0), count = _c[0], setCount = _c[1];
    useEffect(function () {
        var interval = setInterval(function () {
            if (count > 99)
                return setCount(0);
            setCount(count + 1);
        }, 1000);
        return function () { return clearInterval(interval); };
    }, [count, setCount]);
    return <Counter className={className} count={count}/>;
};
exports["default"] = App;
