"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "erode",
              			"path": "erode/erode.js",
              			"file": "erode.js",
              			"module": "erode ",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/erode.git",
              			"test": "erode-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Delete symbol property.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"mtch": "mtch",
              			"protype": "protype"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var mtch = require("mtch");
var protype = require("protype");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var erode = function erode(symbol, entity) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"symbol:required": [
                                            				"number",
                                            				"string",
                                            				"symbol"
                                            			],
                                            			"entity:required": [
                                            				"function",
                                            				"object"
                                            			]
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(symbol) || !protype(symbol, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid symbol");
	}

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	if ((typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) == SYMBOL) {
		symbol = mtch(symbol.toString(), SYMBOL_PATTERN, 1);

	} else {
		symbol = symbol.toString();
	}

	try {
		(0, _getOwnPropertySymbols2.default)(entity).forEach(function (property) {
			if (mtch(property.toString(), SYMBOL_PATTERN, 1) == symbol) {
				delete entity[property];
			}
		}, undefined);

	} catch (error) {}

	return entity;
};

module.exports = erode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVyb2RlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwibXRjaCIsInByb3R5cGUiLCJTWU1CT0xfUEFUVEVSTiIsImVyb2RlIiwic3ltYm9sIiwiZW50aXR5IiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiRXJyb3IiLCJGVU5DVElPTiIsIk9CSkVDVCIsInRvU3RyaW5nIiwiZm9yRWFjaCIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLGlCQUFpQixtQkFBdkI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsS0FBSVAsTUFBT00sTUFBUCxLQUFtQixDQUFDSCxRQUFTRyxNQUFULEVBQWlCRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFuQyxDQUF4QixFQUFxRTtBQUNwRSxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVgsTUFBT08sTUFBUCxLQUFtQixDQUFDSixRQUFTSSxNQUFULEVBQWlCSyxXQUFXQyxNQUE1QixDQUF4QixFQUE4RDtBQUM3RCxRQUFNLElBQUlGLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxRQUFPTCxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCSSxNQUFyQixFQUE2QjtBQUM1QkosV0FBU0osS0FBTUksT0FBT1EsUUFBUCxFQUFOLEVBQTBCVixjQUExQixFQUEwQyxDQUExQyxDQUFUOztBQUVBLEVBSEQsTUFHSztBQUNKRSxXQUFTQSxPQUFPUSxRQUFQLEVBQVQ7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsdUNBQThCUCxNQUE5QixFQUF1Q1EsT0FBdkMsQ0FBZ0QsVUFBRUMsUUFBRixFQUFnQjtBQUMvRCxPQUFJZCxLQUFNYyxTQUFTRixRQUFULEVBQU4sRUFBNEJWLGNBQTVCLEVBQTRDLENBQTVDLEtBQW1ERSxNQUF2RCxFQUErRDtBQUM5RCxXQUFPQyxPQUFRUyxRQUFSLENBQVA7QUFDQTtBQUNELEdBSkQsRUFJR0MsU0FKSDs7QUFNQSxFQVBELENBT0MsT0FBT0MsS0FBUCxFQUFjLENBQUc7O0FBRWxCLFFBQU9YLE1BQVA7QUFDQSxDQTFDRDs7QUE0Q0FZLE9BQU9DLE9BQVAsR0FBaUJmLEtBQWpCIiwiZmlsZSI6ImVyb2RlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZXJvZGVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZXJvZGUvZXJvZGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwiZXJvZGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJlcm9kZSBcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZXJvZGUuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImVyb2RlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0RGVsZXRlIHN5bWJvbCBwcm9wZXJ0eS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJtdGNoXCI6IFwibXRjaFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IG10Y2ggPSByZXF1aXJlKCBcIm10Y2hcIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuXHJcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15TeW1ib2xcXCgoLis/KVxcKSQvO1xyXG5cclxuY29uc3QgZXJvZGUgPSBmdW5jdGlvbiBlcm9kZSggc3ltYm9sLCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInN5bWJvbDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIm51bWJlclwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwic3ltYm9sXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwib2JqZWN0XCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBzeW1ib2wgKSB8fCAhcHJvdHlwZSggc3ltYm9sLCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc3ltYm9sXCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Ygc3ltYm9sID09IFNZTUJPTCApe1xyXG5cdFx0c3ltYm9sID0gbXRjaCggc3ltYm9sLnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApO1xyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHN5bWJvbCA9IHN5bWJvbC50b1N0cmluZyggKTtcclxuXHR9XHJcblxyXG5cdHRyeXtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoIGVudGl0eSApLmZvckVhY2goICggcHJvcGVydHkgKSA9PiB7XHJcblx0XHRcdGlmKCBtdGNoKCBwcm9wZXJ0eS50b1N0cmluZyggKSwgU1lNQk9MX1BBVFRFUk4sIDEgKSA9PSBzeW1ib2wgKXtcclxuXHRcdFx0XHRkZWxldGUgZW50aXR5WyBwcm9wZXJ0eSBdO1xyXG5cdFx0XHR9XHJcblx0XHR9LCB1bmRlZmluZWQgKTtcclxuXHJcblx0fWNhdGNoKCBlcnJvciApeyB9XHJcblxyXG5cdHJldHVybiBlbnRpdHk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGVyb2RlO1xyXG4iXX0=
//# sourceMappingURL=erode.support.js.map
