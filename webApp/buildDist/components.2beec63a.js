// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utilities/checkCDN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
{
  /* <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script> */
}
{
  /* <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> */
}
{
  /* <script crossorigin src="https://cdn.jsdelivr.net/npm/animejs@3.2.0/lib/anime.min.js"></script> */
}

function checkCDNexist() {
  try {
    anime = anime;
    React = React;
    ReactDOM = ReactDOM;
    console.log("All CDNs imported");
  } catch (error) {
    alert("One or more CDNs could not be imported, issues with page may occur");
  }
}

var _default = checkCDNexist;
exports.default = _default;
},{}],"assets/sortingAlgoList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubbleSort = bubbleSort;
exports.countingSort = countingSort;
exports.heapSort = heapSort;
exports.insertionSort = insertionSort;
exports.radixSort = radixSort;
exports.selectionSort = selectionSort;
exports.mergeSortHandler = mergeSortHandler;
exports.quickSortHandler = quickSortHandler;
exports.sortingAlgoList = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sortingAlgoList = [{
  id: "bubbleSort",
  name: "Bubble Sort",
  timeComplexity: "n\^2",
  spaceComplexity: "1",
  desc: "The simplest sorting algorithim for one to understand, however performance wise, this algorithim is one of the worst. The algorithm works by continously swapping algorithims adjacent to each other until no more can be swapped, at which point the array is sorted."
}, {
  id: "insertionSort",
  name: "Insertion Sort",
  timeComplexity: "n\^2",
  spaceComplexity: "1",
  desc: "Similar to how humans sort, insertion sort work by looking through the array, and inserting each element to its correct place in the indices before."
}, {
  id: "heapSort",
  name: "Heap Sort",
  timeComplexity: "n*log(n)",
  spaceComplexity: "1",
  desc: "The array is processed as a \"heap\" tree where the nodes/elements above is always greater than the nodes below. This allows for the algorithim to remove the top node and know that it is the largest element in the heap. This loop is processed until there is no more elements in the heap."
}, {
  id: "selectionSort",
  name: "Selection Sort",
  timeComplexity: "n\^2",
  spaceComplexity: "1",
  desc: "Selection sort works by looking through the list of elements and constantly selecting the element with lowest value and appending it onto a new list. This is done n times where n is the length of the orignal element. The animation shown is the final output array where values are selected and placed."
}, {
  id: "countingSort",
  name: "Counting Sort",
  timeComplexity: "n+k",
  spaceComplexity: "k",
  desc: "Black Magic. Just kidding this is the best sorting algorithim but only works when the said values have distinct key values (like integers). This algorithim works by creating a second array of size k (the largest number in the original array) and counts how many times that each element occurs in the orignal array. This second array provides a map of exactly which element should be where, this allows for the algorithim to know exactly where to place each element in the final output array."
}, {
  id: "radixSort",
  name: "Radix Sort",
  timeComplexity: "nk",
  spaceComplexity: "n+k",
  desc: "This algorithim only works with integers. It sorts each element in the array by looping through each decimal place and sorting these chunks of numbers until the biggest magnitude of input numbers are processed. The input array shown above and passed into all other algorithims are raised by 2^(element) for processing to exaggerate the effects of radix sort."
}, {
  id: "mergeSort",
  name: "Merge Sort",
  timeComplexity: "n*log(n)",
  spaceComplexity: "n",
  desc: "Merge sort uses a \"divide and conquer\" technique where it recursively breaks the array down into smaller and smaller halves until each halve is an individual element. At which point the algorithim merges each haves by comparing its values until everything is merged."
}, {
  id: "quickSort",
  name: "Quick Sort",
  timeComplexity: "n*log(n)",
  spaceComplexity: "log(n)",
  desc: "Quick sort also uses a \"divide and conquer\" technique, however it instead takes a random number from the list and move all elements smaller than said number to one side, and all elements larger than side number to the other side. This is done recursively until blocks of elements moved only contains one element."
}]; //for bubbleSort

exports.sortingAlgoList = sortingAlgoList;

function swapWithNext(inputArray, indexLoc) {
  var firstItem = inputArray[indexLoc];
  inputArray[indexLoc] = inputArray[indexLoc + 1];
  inputArray[indexLoc + 1] = firstItem;
  return inputArray;
}

function bubbleSort(randomArray) {
  var returnArraySteps = [];

  do {
    var finishPassing = true;

    for (var i = 0; i < randomArray.length; i++) {
      if (randomArray[i] > randomArray[i + 1]) {
        randomArray = _toConsumableArray(swapWithNext(randomArray, i));
        returnArraySteps.push(randomArray);
        finishPassing = false;
      }
    }
  } while (finishPassing == false);

  return returnArraySteps;
}

function countingSort(randomArray) {
  var returnArraySteps = []; //get the max value

  var max = Math.max.apply(null, randomArray);
  var countArray = new Array(max + 1).fill(0); //fill out counts

  for (var i = 0; i < randomArray.length; i++) {
    countArray[randomArray[i]] = countArray[randomArray[i]] + 1;
  } //create cumulative counts


  for (var i = 0; i < max; i++) {
    countArray[i + 1] = countArray[i + 1] + countArray[i];
  }

  var sortedArray = Array(randomArray.length).fill(0); //place in sorted array and decrement

  for (var i = randomArray.length - 1; i > -1; i--) {
    var value = randomArray[i];
    sortedArray[countArray[value] - 1] = value;
    countArray[value] = countArray[value] - 1;
    returnArraySteps.push(_toConsumableArray(sortedArray));
  }

  return returnArraySteps;
} //for heapSort


var returnChildren = function returnChildren(node) {
  return [node * 2 + 1, node * 2 + 2];
};

function swapPositon(inputArray, pos1, pos2) {
  var tempVariable = inputArray[pos1];
  inputArray[pos1] = inputArray[pos2];
  inputArray[pos2] = tempVariable;
  return inputArray;
}

function heapify(randomArray, node) {
  var nodeChildren = returnChildren(node);

  do {
    var lastLoop = true; //if the node is smaller than the children nodes, swap

    if (randomArray[node] < randomArray[nodeChildren[1]]) {
      //try the right child
      randomArray = swapPositon(randomArray, node, nodeChildren[1]);
      lastLoop = false;
    }

    if (randomArray[node] < randomArray[nodeChildren[0]]) {
      //try the left child
      randomArray = swapPositon(randomArray, node, nodeChildren[0]);
      lastLoop = false;
    } //call heapify on the childs


    if (randomArray[nodeChildren[0]] != undefined) {
      randomArray = heapify(randomArray, nodeChildren[0]);
    }

    if (randomArray[nodeChildren[1]] != undefined) {
      randomArray = heapify(randomArray, nodeChildren[1]);
    }
  } while (lastLoop == false);

  return randomArray;
}

function heapSort(randomArray) {
  var sortedArray = [];
  var returnArray = [];

  while (randomArray != undefined && randomArray.length != 0) {
    randomArray = heapify(randomArray, 0); //heap is built, now swap the first and last element

    randomArray = swapPositon(randomArray, 0, randomArray.length - 1); //remove the last element as it is the max

    var lastElement = randomArray.pop();
    sortedArray.push(lastElement);
    returnArray.push(_toConsumableArray(randomArray.concat(sortedArray).reverse()));
  } //reverse the array


  return returnArray;
} //for insertionSort


function insert(inputArray, number) {
  //everything to the left should be sorted
  for (var i = 0; i < inputArray.length; i++) {
    if (number <= inputArray[i]) {
      inputArray.splice(i, 0, number);
      return inputArray;
    }
  }
}

function insertionSort(randomArray) {
  var returnArraySteps = [];

  for (var i = 1; i < randomArray.length; i++) {
    if (randomArray[i - 1] > randomArray[i]) {
      var insertionValue = randomArray.splice(i, 1)[0];
      randomArray = _toConsumableArray(insert(randomArray, insertionValue));
      returnArraySteps.push(randomArray);
    }
  }

  return returnArraySteps;
} //for radixSort


var radixMagnitudeValue = function radixMagnitudeValue(value, magnitude) {
  var strValue = "" + value;
  var magValue = parseInt(strValue[strValue.length - magnitude - 1]);

  if (isNaN(magValue)) {
    return 0;
  } else {
    return magValue;
  }
};

function radixSort(randomArray) {
  var returnArraySteps = [];
  randomArray = randomArray.map(function (element) {
    return Math.pow(2, element);
  });

  for (var magnitude = 0; Math.pow(10, magnitude) <= Math.max.apply(null, randomArray); magnitude++) {
    var sortedArray = Array(10).fill([]);

    for (var index = 0; index < randomArray.length; index++) {
      var value = randomArray[index];
      var magVal = radixMagnitudeValue(value, magnitude);
      sortedArray[magVal] = sortedArray[magVal].concat([value]);
    }

    randomArray = sortedArray.flat();
    returnArraySteps.push(_toConsumableArray(randomArray.map(function (element) {
      return Math.log2(element);
    })));
  }

  return returnArraySteps;
} //for selectionSort


function indexLoc(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == Math.min.apply(null, nums)) {
      return i;
    }
  }
}

function selectionSort(randomArray) {
  var returnArraySteps = [];
  var sortedArray = [];

  while (randomArray.length > 0) {
    //While the original array is not empty
    //Get the min/max value
    var value = Math.min.apply(null, randomArray); //Remove the value from original array

    randomArray.splice(indexLoc(randomArray), 1); //Add the value to the list

    sortedArray.push(value);
    returnArraySteps.push(sortedArray.concat(Array(randomArray.length).fill(0)));
  }

  return returnArraySteps;
} //for mergeSort and quickSort


function range(from, to) {
  return _toConsumableArray(Array(to - from).keys()).map(function (i) {
    return i + from;
  });
}

function copytoSteps(inMemoryArray, newArray, leftBound, rightBound) {
  var indexRange = range(leftBound, rightBound);

  for (var i = 0; i < indexRange.length; i++) {
    inMemoryArray[indexRange[i]] = newArray[i];
  }
} //TODO: find a better way to visualize mergeSort and quickSort
//for mergeSort


var mergeSortSteps = [];
var arrayMemoryMS = [];

function mergeSortMerge(firstHalf, secondHalf) {
  var mergedArray = []; // while there is still numbers to merge

  do {
    //check to see if either array is empty, if so, then we know the remaining values are just the other array
    if (firstHalf === undefined || firstHalf.length == 0) {
      mergedArray = mergedArray.concat(secondHalf);
      break;
    } else if (secondHalf === undefined || secondHalf.length == 0) {
      mergedArray = mergedArray.concat(firstHalf);
      break;
    } //Check to see which array starts with a smaller value and append it into the new array


    if (firstHalf[0] < secondHalf[0]) {
      var appendValue = firstHalf.shift();
      mergedArray.push(appendValue);
    } else {
      var _appendValue = secondHalf.shift();

      mergedArray.push(_appendValue);
    }
  } while (firstHalf.length + secondHalf.length > 0);

  return mergedArray;
}

function mergeSort(randomArray, leftBound, rightBound) {
  if (randomArray.length > 1) {
    //keep splitting until size 1
    var midpoint = Math.ceil(_toConsumableArray(randomArray).length / 2); //Get the midpoint, if uneven, get the rounded up midpoint
    //if not sorted

    var firstHalf = mergeSort(randomArray.slice(0, midpoint), leftBound, midpoint + leftBound);
    var secondHalf = mergeSort(randomArray.slice(midpoint, randomArray.length), midpoint + leftBound, rightBound);
    randomArray = mergeSortMerge(firstHalf, secondHalf);
  }

  copytoSteps(arrayMemoryMS, randomArray, leftBound, rightBound);
  mergeSortSteps.push(_toConsumableArray(arrayMemoryMS));
  return randomArray;
}

function mergeSortHandler(randomArray) {
  arrayMemoryMS = randomArray;
  mergeSort(randomArray, 0, randomArray.length);
  return mergeSortSteps;
} //for quickSort


var quickSortSteps = [];
var arrayMemoryQS = [];

function mergeArrays(leftArray, partitionValue, rightArray) {
  if (rightArray == undefined && leftArray == undefined) {
    var sortedArray = [partitionValue];
  } else if (rightArray == undefined) {
    var sortedArray = leftArray.concat([partitionValue]);
  } else if (leftArray == undefined) {
    var sortedArray = [partitionValue].concat(rightArray);
  } else {
    var sortedArray = leftArray.concat([partitionValue].concat(rightArray));
  }

  return sortedArray;
}

function getHalves(partitionValue, randomArray) {
  var leftHalf = [];
  var rightHalf = []; //place into new arrays

  for (var i = 0; i < randomArray.length; i++) {
    var value = randomArray[i];

    if (value < partitionValue) {
      leftHalf.push(value);
    } else {
      rightHalf.push(value);
    }
  }

  return [leftHalf, rightHalf];
}

function quickSort(randomArray, leftBound, rightBound) {
  if (randomArray != undefined && randomArray.length > 1) {
    var partitionValue = randomArray.pop();
    var halves = getHalves(partitionValue, randomArray);
    var leftHalfSorted = quickSort(halves[0], leftBound, leftBound + halves[0].length);
    var rightHalfSorted = quickSort(halves[1], leftBound + halves[0].length, rightBound);
    randomArray = mergeArrays(leftHalfSorted, partitionValue, rightHalfSorted);
  }

  copytoSteps(arrayMemoryQS, randomArray, leftBound, rightBound);
  quickSortSteps.push(_toConsumableArray(arrayMemoryQS));
  return randomArray;
}

function quickSortHandler(randomArray) {
  arrayMemoryQS = randomArray;
  quickSort(randomArray, 0, randomArray.length);
  return quickSortSteps;
}
},{}],"components/Dots.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var refreshPeriod = 400;

var Dot =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dot, _React$Component);

  function Dot() {
    _classCallCheck(this, Dot);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dot).apply(this, arguments));
  }

  _createClass(Dot, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "dot",
        style: {
          opacity: this.props.value / 100
        }
      });
    }
  }]);

  return Dot;
}(React.Component);

var Dots =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Dots, _React$Component2);

  function Dots(props) {
    var _this;

    _classCallCheck(this, Dots);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dots).call(this));
    _this.state = {
      sortingSteps: props.inputArray,
      currentArray: props.inputArray[0],
      index: 0
    };
    return _this;
  }

  _createClass(Dots, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.setState(function (state) {
          return {
            index: state.index < state.sortingSteps.length - 1 ? state.index + 1 : 0,
            currentArray: state.sortingSteps[state.index]
          };
        });
      }, refreshPeriod);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var dots = this.state.currentArray.map(function (element, index) {
        return React.createElement(Dot, {
          value: _this3.state.currentArray[index]
        });
      });
      return React.createElement("div", {
        className: "dotContainer"
      }, dots);
    }
  }]);

  return Dots;
}(React.Component);

var _default = Dots;
exports.default = _default;
},{}],"assets/sortingAlgoHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var headerContent = {
  title: "Sorting Algorithims",
  description: "Hello! This site is meant to be a quick reference guide to sorting algorithims. It provides a quick description and a pretty animation for each algorithim. The input array is randomly generated each time this site loads and is then processed via each algorithim. The time it takes for each animation to loop is not an indicator of how fast the algorithims are, as I am only displaying noteworthy events in the processsing of said random Array.",
  link: "https://thomasshih.codes/"
};
var _default = headerContent;
exports.default = _default;
},{}],"components/SortingAlgorithims.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sortingAlgoList = require("../assets/sortingAlgoList");

var _Dots = _interopRequireDefault(require("./Dots"));

var _sortingAlgoHeader = _interopRequireDefault(require("../assets/sortingAlgoHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function processSort(randomArray, algoName) {
  if (algoName == "Bubble Sort") {
    var arraySteps = (0, _sortingAlgoList.bubbleSort)(_toConsumableArray(randomArray));
  } else if (algoName == "Counting Sort") {
    var arraySteps = (0, _sortingAlgoList.countingSort)(_toConsumableArray(randomArray));
  } else if (algoName == "Heap Sort") {
    var arraySteps = (0, _sortingAlgoList.heapSort)(_toConsumableArray(randomArray));
  } else if (algoName == "Insertion Sort") {
    var arraySteps = (0, _sortingAlgoList.insertionSort)(_toConsumableArray(randomArray));
  } else if (algoName == "Merge Sort") {
    var arraySteps = (0, _sortingAlgoList.mergeSortHandler)(_toConsumableArray(randomArray));
  } else if (algoName == "Quick Sort") {
    var arraySteps = (0, _sortingAlgoList.quickSortHandler)(_toConsumableArray(randomArray));
  } else if (algoName == "Radix Sort") {
    var arraySteps = (0, _sortingAlgoList.radixSort)(_toConsumableArray(randomArray));
  } else if (algoName == "Selection Sort") {
    var arraySteps = (0, _sortingAlgoList.selectionSort)(_toConsumableArray(randomArray));
  } else {
    var arraySteps = (0, _sortingAlgoList.bubbleSort)(_toConsumableArray(randomArray));
  }

  return arraySteps;
}

var Algorithim =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Algorithim, _React$Component);

  function Algorithim() {
    _classCallCheck(this, Algorithim);

    return _possibleConstructorReturn(this, _getPrototypeOf(Algorithim).apply(this, arguments));
  }

  _createClass(Algorithim, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "algorithim"
      }, React.createElement("h1", {
        className: "algoName"
      }, this.props.name), React.createElement("h2", {
        className: "timeComplexity"
      }, "Time: ", this.props.timeComplexity), React.createElement("h2", {
        className: "spaceComplexity"
      }, "Space: ", this.props.spaceComplexity), React.createElement("h1", {
        className: "desc"
      }, this.props.desc), React.createElement(_Dots.default, {
        className: "algorithimAnimation",
        inputArray: processSort(this.props.inputArray, this.props.name)
      }));
    }
  }]);

  return Algorithim;
}(React.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "sortingAlgorithimHeader"
      }, React.createElement("h1", null, _sortingAlgoHeader.default.title), React.createElement("h2", null, _sortingAlgoHeader.default.description), React.createElement("h3", null, "For a link to all my other work and GitHub, please visit me at ", React.createElement("a", {
        href: _sortingAlgoHeader.default.link
      }, "thomasshih.codes")), React.createElement(_Dots.default, {
        inputArray: [this.props.inputArray]
      }));
    }
  }]);

  return Header;
}(React.Component);

var SortingAlgorithims =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(SortingAlgorithims, _React$Component3);

  function SortingAlgorithims() {
    var _this;

    _classCallCheck(this, SortingAlgorithims);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SortingAlgorithims).call(this)); //Generate a list of unique numbers

    _this.inputArray = [];

    while (_this.inputArray.length < 40) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (_this.inputArray.indexOf(r) === -1) _this.inputArray.push(r);
    }

    _this.algorithimList = _sortingAlgoList.sortingAlgoList.map(function (algo) {
      return React.createElement(Algorithim, {
        id: algo.id,
        name: algo.name,
        timeComplexity: algo.timeComplexity,
        spaceComplexity: algo.spaceComplexity,
        desc: algo.desc,
        inputArray: _this.inputArray,
        directory: "../SortingAlgorithims"
      });
    });
    return _this;
  }

  _createClass(SortingAlgorithims, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "sortingAlgoPage"
      }, React.createElement(Header, {
        inputArray: this.inputArray
      }), this.algorithimList);
    }
  }]);

  return SortingAlgorithims;
}(React.Component);

var _default = SortingAlgorithims;
exports.default = _default;
},{"../assets/sortingAlgoList":"assets/sortingAlgoList.js","./Dots":"components/Dots.js","../assets/sortingAlgoHeader":"assets/sortingAlgoHeader.js"}],"components/index.js":[function(require,module,exports) {
"use strict";

var _checkCDN = _interopRequireDefault(require("../utilities/checkCDN"));

var _SortingAlgorithims = _interopRequireDefault(require("../components/SortingAlgorithims"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _checkCDN.default)();
ReactDOM.render(React.createElement(_SortingAlgorithims.default, null), document.getElementById("body"));
},{"../utilities/checkCDN":"utilities/checkCDN.js","../components/SortingAlgorithims":"components/SortingAlgorithims.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54919" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","components/index.js"], null)
//# sourceMappingURL=/components.2beec63a.js.map