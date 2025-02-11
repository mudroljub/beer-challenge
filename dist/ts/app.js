"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var closeButton = document.getElementById('close-button');
var modal = document.getElementById('modal');
var orderBtn = document.getElementById('order-button');
var orderMenu = document.getElementById('dropdown');
/* INIT */
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, container;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.jsonbin.io/v3/b/6630fd9be41b4d34e4ecd1f9')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    container = document.getElementById('container');
                    data.record.forEach(function (item) {
                        var div = document.createElement('div');
                        div.className = "item bg".concat(Math.min(Math.floor(item.ibu / 10), 9));
                        div.innerHTML = "\n      <p class=\"ibu ribbon\">IBU: ".concat(item.ibu, "</p>\n      <p class=\"abv\">ABV: ").concat(item.abv, "</p>\n      <img src=\"").concat(item.image_url, "\" />\n      <h3>").concat(item.name, "</h3>\n    ");
                        div.onclick = function () { return showModal(item); };
                        container.appendChild(div);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
fetchData();
/* EVENTS */
function showModal(item) {
    modal.hidden = false;
    document.getElementById('modal-description').textContent = item.description;
    var modalImage = document.getElementById('modal-image');
    modalImage.src = item.image_url;
}
closeButton.addEventListener('click', function () {
    modal.hidden = orderMenu.hidden = true;
});
orderBtn.addEventListener('click', function () {
    orderMenu.hidden = !orderMenu.hidden;
});
