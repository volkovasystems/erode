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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVyb2RlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwibXRjaCIsInByb3R5cGUiLCJTWU1CT0xfUEFUVEVSTiIsImVyb2RlIiwic3ltYm9sIiwiZW50aXR5IiwiTlVNQkVSIiwiU1RSSU5HIiwiU1lNQk9MIiwiRXJyb3IiLCJGVU5DVElPTiIsIk9CSkVDVCIsInRvU3RyaW5nIiwiZm9yRWFjaCIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLGlCQUFpQixtQkFBdkI7O0FBRUEsSUFBTUMsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxNQUFoQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsS0FBSVAsTUFBT00sTUFBUCxLQUFtQixDQUFDSCxRQUFTRyxNQUFULEVBQWlCRSxTQUFTQyxNQUFULEdBQWtCQyxNQUFuQyxDQUF4QixFQUFxRTtBQUNwRSxRQUFNLElBQUlDLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSVgsTUFBT08sTUFBUCxLQUFtQixDQUFDSixRQUFTSSxNQUFULEVBQWlCSyxXQUFXQyxNQUE1QixDQUF4QixFQUE4RDtBQUM3RCxRQUFNLElBQUlGLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxRQUFPTCxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCSSxNQUFyQixFQUE2QjtBQUM1QkosV0FBU0osS0FBTUksT0FBT1EsUUFBUCxFQUFOLEVBQTBCVixjQUExQixFQUEwQyxDQUExQyxDQUFUOztBQUVBLEVBSEQsTUFHSztBQUNKRSxXQUFTQSxPQUFPUSxRQUFQLEVBQVQ7QUFDQTs7QUFFRCxLQUFHO0FBQ0YsdUNBQThCUCxNQUE5QixFQUF1Q1EsT0FBdkMsQ0FBZ0QsVUFBRUMsUUFBRixFQUFnQjtBQUMvRCxPQUFJZCxLQUFNYyxTQUFTRixRQUFULEVBQU4sRUFBNEJWLGNBQTVCLEVBQTRDLENBQTVDLEtBQW1ERSxNQUF2RCxFQUErRDtBQUM5RCxXQUFPQyxPQUFRUyxRQUFSLENBQVA7QUFDQTtBQUNELEdBSkQsRUFJR0MsU0FKSDs7QUFNQSxFQVBELENBT0MsT0FBT0MsS0FBUCxFQUFjLENBQUc7O0FBRWxCLFFBQU9YLE1BQVA7QUFDQSxDQTFDRDs7QUE0Q0FZLE9BQU9DLE9BQVAsR0FBaUJmLEtBQWpCIiwiZmlsZSI6ImVyb2RlLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVyb2RlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlcm9kZS9lcm9kZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZXJvZGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZXJvZGUgXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lcm9kZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVyb2RlLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RGVsZXRlIHN5bWJvbCBwcm9wZXJ0eS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJtdGNoXCI6IFwibXRjaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBtdGNoID0gcmVxdWlyZSggXCJtdGNoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4rPylcXCkkLztcblxuY29uc3QgZXJvZGUgPSBmdW5jdGlvbiBlcm9kZSggc3ltYm9sLCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzeW1ib2w6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHN5bWJvbCApIHx8ICFwcm90eXBlKCBzeW1ib2wsIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc3ltYm9sXCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZiggdHlwZW9mIHN5bWJvbCA9PSBTWU1CT0wgKXtcblx0XHRzeW1ib2wgPSBtdGNoKCBzeW1ib2wudG9TdHJpbmcoICksIFNZTUJPTF9QQVRURVJOLCAxICk7XG5cblx0fWVsc2V7XG5cdFx0c3ltYm9sID0gc3ltYm9sLnRvU3RyaW5nKCApO1xuXHR9XG5cblx0dHJ5e1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoIGVudGl0eSApLmZvckVhY2goICggcHJvcGVydHkgKSA9PiB7XG5cdFx0XHRpZiggbXRjaCggcHJvcGVydHkudG9TdHJpbmcoICksIFNZTUJPTF9QQVRURVJOLCAxICkgPT0gc3ltYm9sICl7XG5cdFx0XHRcdGRlbGV0ZSBlbnRpdHlbIHByb3BlcnR5IF07XG5cdFx0XHR9XG5cdFx0fSwgdW5kZWZpbmVkICk7XG5cblx0fWNhdGNoKCBlcnJvciApeyB9XG5cblx0cmV0dXJuIGVudGl0eTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXJvZGU7XG4iXX0=
//# sourceMappingURL=erode.support.js.map
