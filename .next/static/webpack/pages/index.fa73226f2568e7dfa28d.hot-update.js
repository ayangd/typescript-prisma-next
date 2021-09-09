"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\asus\\Desktop\\typescript-prisma-next\\pages\\index.tsx",
    _s = $RefreshSig$();








var __N_SSP = true;
function Home(_ref) {
  _s();

  var initialUsers = _ref.initialUsers;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialUsers),
      users = _useState[0],
      setUsers = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      firstName = _useState2[0],
      setFirstName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      lastName = _useState3[0],
      setLastName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      avatar = _useState5[0],
      setAvatar = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      role = _useState6[0],
      setRole = _useState6[1];

  var handleChange = function handleChange(e, _ref2) {
    var value = _ref2.value;
    return setRole(value);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var body;
      return C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = {
                firstName: firstName,
                lastName: lastName,
                role: role,
                email: email,
                avatar: avatar
              };
              _context.next = 3;
              return (0,_utils_fetcher__WEBPACK_IMPORTED_MODULE_5__.fetcher)("/api/create", {
                user: body
              });

            case 3:
              _context.next = 5;
              return setUsers([].concat((0,C_Users_asus_Desktop_typescript_prisma_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(users), [body]));

            case 5:
              setFirstName("");
              setLastName("");
              setAvatar("");
              setRole(null);
              setEmail("");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("meta", {
        name: "description",
        content: "Testing stack prisma"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
      mt: "20px",
      p: "2%",
      w: "100%",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {
        as: "h3",
        children: "This app is powered by NextJS, Chakra UI"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
        as: "form",
        gridGap: 3,
        mt: "30px",
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "first-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "First name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "First name",
            value: firstName,
            onChange: function onChange(e) {
              return setFirstName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "last-name",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Last name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Last name",
            value: lastName,
            onChange: function onChange(e) {
              return setLastName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "email",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Email",
            value: email,
            onChange: function onChange(e) {
              return setEmail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "avatar",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
            placeholder: "Avatar",
            value: avatar,
            onChange: function onChange(e) {
              return setAvatar(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          id: "eole",
          isRequired: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.FormLabel, {
            children: "Role"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Select, {
            placeholder: "Role",
            value: role,
            onChange: function onChange(e) {
              return setAvatar(e.target.value);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "USER",
              children: "USER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "ADMIN",
              children: "ADMIN"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "DEVELOPER",
              children: "DEVELOPER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
        type: "submit",
        mt: "20px",
        children: "Test!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(Home, "8PT6ZIvJPnzL9j/HucS8iV4M+F8=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmE3MzIyNmYyNTY4ZTdkZmEyOGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFVQTtBQUNBO0FBRUE7Ozs7QUFVZSxTQUFTVyxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFDOUMsa0JBQ0NILCtDQUFRLENBQW9DRyxZQUFwQyxDQURUO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsbUJBQWtDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPTSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFnQ1AsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBMEJULCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9VLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE0QlgsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdCYiwrQ0FBUSxFQUFoQztBQUFBLE1BQU9jLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQ7QUFBQSxRQUFNQyxLQUFOLFNBQU1BLEtBQU47QUFBQSxXQUFrQkgsT0FBTyxDQUFDRyxLQUFELENBQXpCO0FBQUEsR0FBckI7O0FBRUEsTUFBTUMsWUFBWTtBQUFBLDhVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQyxjQUFBQSxJQURjLEdBQ2lCO0FBQ3BDZCxnQkFBQUEsU0FBUyxFQUFUQSxTQURvQztBQUVwQ0UsZ0JBQUFBLFFBQVEsRUFBUkEsUUFGb0M7QUFHcENNLGdCQUFBQSxJQUFJLEVBQUpBLElBSG9D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SyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsZUFrREMsOERBQUMsb0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixVQUFFLEVBQUMsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQ7QUFBQSxrQkFERDtBQWdFQTs7R0E3RnVCaEI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWEgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7XG5cdEJveCxcblx0SGVhZGluZyxcblx0RmxleCxcblx0Rm9ybUNvbnRyb2wsXG5cdEZvcm1MYWJlbCxcblx0SW5wdXQsXG5cdFNlbGVjdCxcblx0QnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuXHRjb25zdCB1c2VyczogUHJpc21hLlVzZXJVbmNoZWNrZWRDcmVhdGVJbnB1dFtdID1cblx0XHRhd2FpdCBwcmlzbWEudXNlci5maW5kTWFueSgpO1xuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7IGluaXRpYWxVc2VyczogdXNlcnMgfSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGluaXRpYWxVc2VycyB9KSB7XG5cdGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID1cblx0XHR1c2VTdGF0ZTxQcmlzbWEuVXNlclVuY2hlY2tlZENyZWF0ZUlucHV0W10+KGluaXRpYWxVc2Vycyk7XG5cdGNvbnN0IFtmaXJzdE5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2F2YXRhciwgc2V0QXZhdGFyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZSgpO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlLCB7IHZhbHVlIH0pID0+IHNldFJvbGUodmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBib2R5OiBQcmlzbWEuVXNlckNyZWF0ZUlucHV0ID0ge1xuXHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRyb2xlLFxuXHRcdFx0ZW1haWwsXG5cdFx0XHRhdmF0YXIsXG5cdFx0fTtcblxuXHRcdGF3YWl0IGZldGNoZXIoXCIvYXBpL2NyZWF0ZVwiLCB7IHVzZXI6IGJvZHkgfSk7XG5cdFx0YXdhaXQgc2V0VXNlcnMoWy4uLnVzZXJzLCBib2R5XSk7XG5cdFx0c2V0Rmlyc3ROYW1lKFwiXCIpO1xuXHRcdHNldExhc3ROYW1lKFwiXCIpO1xuXHRcdHNldEF2YXRhcihcIlwiKTtcblx0XHRzZXRSb2xlKG51bGwpO1xuXHRcdHNldEVtYWlsKFwiXCIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRlc3Rpbmcgc3RhY2sgcHJpc21hXCIgLz5cblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8Qm94IG10PVwiMjBweFwiIHA9XCIyJVwiIHc9XCIxMDAlXCI+XG5cdFx0XHRcdDxIZWFkaW5nIGFzPVwiaDNcIj5cblx0XHRcdFx0XHRUaGlzIGFwcCBpcyBwb3dlcmVkIGJ5IE5leHRKUywgQ2hha3JhIFVJXG5cdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0PEZsZXggYXM9XCJmb3JtXCIgZ3JpZEdhcD17M30gbXQ9XCIzMHB4XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwiZmlyc3QtbmFtZVwiIGlzUmVxdWlyZWQ+XG5cdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsPkZpcnN0IG5hbWU8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17Zmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XG5cdFx0XHRcdFx0PEZvcm1Db250cm9sIGlkPVwibGFzdC1uYW1lXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+TGFzdCBuYW1lPC9Gb3JtTGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bGFzdE5hbWV9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxuXHRcdFx0XHRcdDxGb3JtQ29udHJvbCBpZD1cImVtYWlsXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJhdmF0YXJcIiBpc1JlcXVpcmVkPlxuXHRcdFx0XHRcdFx0PEZvcm1MYWJlbD5BdmF0YXI8L0Zvcm1MYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkF2YXRhclwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXthdmF0YXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXZhdGFyKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgaWQ9XCJlb2xlXCIgaXNSZXF1aXJlZD5cblx0XHRcdFx0XHRcdDxGb3JtTGFiZWw+Um9sZTwvRm9ybUxhYmVsPlxuXHRcdFx0XHRcdFx0PFNlbGVjdFxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlJvbGVcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cm9sZX1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRBdmF0YXIoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVVNFUlwiPlVTRVI8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFETUlOXCI+QURNSU48L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkRFVkVMT1BFUlwiPkRFVkVMT1BFUjwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0PC9TZWxlY3Q+XG5cdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtdD1cIjIwcHhcIj5cblx0XHRcdFx0XHRUZXN0IVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvQm94PlxuXHRcdDwvPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkhlYWRpbmciLCJGbGV4IiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlNlbGVjdCIsIkJ1dHRvbiIsIkhlYWQiLCJ1c2VTdGF0ZSIsImZldGNoZXIiLCJIb21lIiwiaW5pdGlhbFVzZXJzIiwidXNlcnMiLCJzZXRVc2VycyIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiYXZhdGFyIiwic2V0QXZhdGFyIiwicm9sZSIsInNldFJvbGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJib2R5IiwidXNlciIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=