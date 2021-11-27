(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!./styles.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/commission-site/commission-site/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/runner/work/commission-site/commission-site/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-9-2!/home/runner/work/commission-site/commission-site/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-9-3!./styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize *//*\nDocument\n========\n*//**\nUse a better box model (opinionated).\n*/*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}/**\nUse a more readable tab size (opinionated).\n*/html {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/html {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}/*\nSections\n========\n*//**\nRemove the margin in all browsers.\n*/body {\n\tmargin: 0;\n}/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/body {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}/*\nGrouping content\n================\n*//**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/hr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}/*\nText-level semantics\n====================\n*//**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/abbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}/**\nAdd the correct font weight in Edge and Safari.\n*/b,\nstrong {\n\tfont-weight: bolder;\n}/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/code,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}/**\nAdd the correct font size in all browsers.\n*/small {\n\tfont-size: 80%;\n}/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/sub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}sub {\n\tbottom: -0.25em;\n}sup {\n\ttop: -0.5em;\n}/*\nTabular data\n============\n*//**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/table {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}/*\nForms\n=====\n*//**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/button,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/button,\nselect { /* 1 */\n\ttext-transform: none;\n}/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}/**\nRemove the inner border and padding in Firefox.\n*/::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}/**\nRestore the focus styles unset by the previous rule.\n*/:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/:-moz-ui-invalid {\n\tbox-shadow: none;\n}/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/legend {\n\tpadding: 0;\n}/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/progress {\n\tvertical-align: baseline;\n}/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}/*\nInteractive\n===========\n*//*\nAdd the correct display in Chrome and Safari.\n*/summary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n *//**\n * Removes the default spacing and border for appropriate elements.\n */blockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}button {\n  background-color: transparent;\n  background-image: none;\n}fieldset {\n  margin: 0;\n  padding: 0;\n}ol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}/**\n * Tailwind custom reset styles\n *//**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */html {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */body {\n  font-family: inherit;\n  line-height: inherit;\n}/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}/*\n * Ensure horizontal rules are visible by default\n */hr {\n  border-top-width: 1px;\n}/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */img {\n  border-style: solid;\n}textarea {\n  resize: vertical;\n}input::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}button,\n[role=\"button\"] {\n  cursor: pointer;\n}/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */:-moz-focusring {\n\toutline: auto;\n}table {\n  border-collapse: collapse;\n}h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */a {\n  color: inherit;\n  text-decoration: inherit;\n}/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */button,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */pre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */img,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */img,\nvideo {\n  max-width: 100%;\n  height: auto;\n}/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */[hidden] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5zY3NzIiwiJTNDaW5wdXQlMjBjc3MlMjAzTUZ4ZTAlM0UiLCIlM0NpbnB1dCUyMGNzcyUyMGQtbFFfbSUzRSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBQSxDQUFBLDhGQUFBLENBQUE7OztDQUFBLENBQUE7O0NBQUEsQ0FBQTs7O0NDY0Msc0JBQXNCO0FEZHZCLENBQUE7O0NBQUEsQ0FBQTtDQ3NCQyxnQkFBZ0I7Q0FDaEIsV0FBVztBRHZCWixDQUFBOzs7Q0FBQSxDQUFBO0NDZ0NDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBRGpDdkMsQ0FBQTs7O0NBQUEsQ0FBQTs7Q0FBQSxDQUFBO0NDOENDLFNBQVM7QUQ5Q1YsQ0FBQTs7Q0FBQSxDQUFBO0NDc0RDOzs7Ozs7Ozs7a0JBU2lCO0FEL0RsQixDQUFBOzs7Q0FBQSxDQUFBOzs7Q0FBQSxDQUFBO0NDNkVDLFNBQVMsRUFBRSxNQUFNO0NBQ2pCLGNBQWMsRUFBRSxNQUFNO0FEOUV2QixDQUFBOzs7Q0FBQSxDQUFBOztDQUFBLENBQUE7Q0MyRkMseUNBQWlDO1NBQWpDLGlDQUFpQztBRDNGbEMsQ0FBQTs7Q0FBQSxDQUFBOztDQ29HQyxtQkFBbUI7QURwR3BCLENBQUE7OztDQUFBLENBQUE7Ozs7Q0NnSEM7Ozs7OztXQU1VLEVBQUUsTUFBTTtDQUNsQixjQUFjLEVBQUUsTUFBTTtBRHZIdkIsQ0FBQTs7Q0FBQSxDQUFBO0NDK0hDLGNBQWM7QUQvSGYsQ0FBQTs7Q0FBQSxDQUFBOztDQ3dJQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGtCQUFrQjtDQUNsQix3QkFBd0I7QUQzSXpCLENBQUE7Q0MrSUMsZUFBZTtBRC9JaEIsQ0FBQTtDQ21KQyxXQUFXO0FEbkpaLENBQUE7OztDQUFBLENBQUE7OztDQUFBLENBQUE7Q0NpS0MsY0FBYyxFQUFFLE1BQU07Q0FDdEIscUJBQXFCLEVBQUUsTUFBTTtBRGxLOUIsQ0FBQTs7O0NBQUEsQ0FBQTs7O0NBQUEsQ0FBQTs7Ozs7Q0NvTEMsb0JBQW9CLEVBQUUsTUFBTTtDQUM1QixlQUFlLEVBQUUsTUFBTTtDQUN2QixpQkFBaUIsRUFBRSxNQUFNO0NBQ3pCLFNBQVMsRUFBRSxNQUFNO0FEdkxsQixDQUFBOzs7Q0FBQSxDQUFBO1NDZ01TLE1BQU07Q0FDZCxvQkFBb0I7QURqTXJCLENBQUE7O0NBQUEsQ0FBQTs7OztDQzRNQywwQkFBMEI7QUQ1TTNCLENBQUE7O0NBQUEsQ0FBQTtDQ29OQyxrQkFBa0I7Q0FDbEIsVUFBVTtBRHJOWCxDQUFBOztDQUFBLENBQUE7Q0M2TkMsOEJBQThCO0FEN04vQixDQUFBOzs7Q0FBQSxDQUFBO0NDc09DLGdCQUFnQjtBRHRPakIsQ0FBQTs7Q0FBQSxDQUFBO0NDOE9DLFVBQVU7QUQ5T1gsQ0FBQTs7Q0FBQSxDQUFBO0NDc1BDLHdCQUF3QjtBRHRQekIsQ0FBQTs7Q0FBQSxDQUFBOztDQytQQyxZQUFZO0FEL1BiLENBQUE7OztDQUFBLENBQUE7Q0N3UUMsNkJBQTZCLEVBQUUsTUFBTTtDQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FEelE3QixDQUFBOztDQUFBLENBQUE7Q0NpUkMsd0JBQXdCO0FEalJ6QixDQUFBOzs7Q0FBQSxDQUFBO0NDMFJDLDBCQUEwQixFQUFFLE1BQU07Q0FDbEMsYUFBYSxFQUFFLE1BQU07QUQzUnRCLENBQUE7OztDQUFBLENBQUE7O0NBQUEsQ0FBQTtDQ3dTQyxrQkFBa0I7QUR4U25CLENBQUE7Ozs7RUFBQSxDQUFBOztFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7RUV1QkUsU0FBUztBRnZCWCxDQUFBO0VFMkJFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUY1QnhCLENBQUE7RUVnQ0UsU0FBUztFQUNULFVBQVU7QUZqQ1osQ0FBQTs7RUVzQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FGeENaLENBQUE7O0VBQUEsQ0FBQTs7Ozs7RUFBQSxDQUFBO0VFdURFLDROQUFzUCxFQUFFLE1BQU07RUFDOVAsZ0JBQWdCLEVBQUUsTUFBTTtBRnhEMUIsQ0FBQTs7O0VBQUEsQ0FBQTtFRWtFRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FGbkV0QixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxDQUFBOzs7RUVtR0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07QUZ0R3BDLENBQUE7O0VBQUEsQ0FBQTtFRThHRSxxQkFBcUI7QUY5R3ZCLENBQUE7Ozs7Ozs7O0VBQUEsQ0FBQTtFRTRIRSxtQkFBbUI7QUY1SHJCLENBQUE7RUVnSUUsZ0JBQWdCO0FGaElsQixDQUFBOztFRXFJRSxVQUFVO0VBQ1YsY0FBd0M7QUZ0STFDLENBQUE7O0VFMklFLGVBQWU7QUYzSWpCLENBQUE7Ozs7OztFQUFBLENBQUE7Q0V1SkMsYUFBYTtBRnZKZCxDQUFBO0VFMkpFLHlCQUF5QjtBRjNKM0IsQ0FBQTs7Ozs7O0VFb0tFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUZyS3RCLENBQUE7OztFQUFBLENBQUE7RUU4S0UsY0FBYztFQUNkLHdCQUF3QjtBRi9LMUIsQ0FBQTs7Ozs7O0VBQUEsQ0FBQTs7Ozs7RUUrTEUsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixjQUFjO0FGak1oQixDQUFBOzs7OztFQUFBLENBQUE7Ozs7RUUrTUUsK0dBQXlJO0FGL00zSSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7RUFBQSxDQUFBOzs7Ozs7OztFRTJPRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixzQkFBc0IsRUFBRSxNQUFNO0FGNU9oQyxDQUFBOzs7OztFQUFBLENBQUE7O0VFd1BFLGVBQWU7RUFDZixZQUFZO0FGelBkLENBQUE7O0VBQUEsQ0FBQTtFRWlRRSxhQUFhO0FGalFmIiwiZmlsZSI6InN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7XG4iLCIvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xuXG4vKlxuRG9jdW1lbnRcbj09PT09PT09XG4qL1xuXG4vKipcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKipcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cbiovXG5cbmh0bWwge1xuXHQtbW96LXRhYi1zaXplOiA0O1xuXHR0YWItc2l6ZTogNDtcbn1cblxuLyoqXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiovXG5cbmh0bWwge1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLypcblNlY3Rpb25zXG49PT09PT09PVxuKi9cblxuLyoqXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xufVxuXG4vKipcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXG4qL1xuXG5ib2R5IHtcblx0Zm9udC1mYW1pbHk6XG5cdFx0c3lzdGVtLXVpLFxuXHRcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xuXHRcdCdTZWdvZSBVSScsXG5cdFx0Um9ib3RvLFxuXHRcdEhlbHZldGljYSxcblx0XHRBcmlhbCxcblx0XHRzYW5zLXNlcmlmLFxuXHRcdCdBcHBsZSBDb2xvciBFbW9qaScsXG5cdFx0J1NlZ29lIFVJIEVtb2ppJztcbn1cblxuLypcbkdyb3VwaW5nIGNvbnRlbnRcbj09PT09PT09PT09PT09PT1cbiovXG5cbi8qKlxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXG4qL1xuXG5ociB7XG5cdGhlaWdodDogMDsgLyogMSAqL1xuXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuVGV4dC1sZXZlbCBzZW1hbnRpY3Ncbj09PT09PT09PT09PT09PT09PT09XG4qL1xuXG4vKipcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJiclt0aXRsZV0ge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG5cdGZvbnQtZmFtaWx5OlxuXHRcdHVpLW1vbm9zcGFjZSxcblx0XHRTRk1vbm8tUmVndWxhcixcblx0XHRDb25zb2xhcyxcblx0XHQnTGliZXJhdGlvbiBNb25vJyxcblx0XHRNZW5sbyxcblx0XHRtb25vc3BhY2U7IC8qIDEgKi9cblx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcblx0Zm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG5cdGZvbnQtc2l6ZTogNzUlO1xuXHRsaW5lLWhlaWdodDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG5cdGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcblx0dG9wOiAtMC41ZW07XG59XG5cbi8qXG5UYWJ1bGFyIGRhdGFcbj09PT09PT09PT09PVxuKi9cblxuLyoqXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuKi9cblxudGFibGUge1xuXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkZvcm1zXG49PT09PVxuKi9cblxuLyoqXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHRtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4qL1xuXG46Oi1tb3otZm9jdXMtaW5uZXIge1xuXHRib3JkZXItc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcblx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKlxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmxlZ2VuZCB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG5cdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cblx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuSW50ZXJhY3RpdmVcbj09PT09PT09PT09XG4qL1xuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcblx0ZGlzcGxheTogbGlzdC1pdGVtO1xufVxuIiwiLyoqXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXG4gKiBBIHRoaW4gbGF5ZXIgb24gdG9wIG9mIG5vcm1hbGl6ZS5jc3MgdGhhdCBwcm92aWRlcyBhIHN0YXJ0aW5nIHBvaW50IG1vcmVcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuICovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogVGFpbHdpbmQgY3VzdG9tIHJlc2V0IHN0eWxlc1xuICovXG5cbi8qKlxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXG4gKiAyLiBVc2UgVGFpbHdpbmQncyBkZWZhdWx0IFwibm9ybWFsXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxuICovXG5cbmh0bWwge1xuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiKTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXG59XG5cblxuLyoqXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcbiAqIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxuICovXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qKlxuICogMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC5cbiAqXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxuICogICAgdGhlIHBhcmVudCBlbGVtZW50IGZvciBldmVyeXRoaW5nIGVsc2UuIFRoaXMgY2F1c2VkIGlzc3Vlc1xuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXG4gKlxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XG4gKlxuICpcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxuICpcbiAqICAgIEJ5IGRlZmF1bHQsIHRoZSB3YXkgdGhlIGJyb3dzZXIgc3BlY2lmaWVzIHRoYXQgYW4gZWxlbWVudCBzaG91bGQgaGF2ZSBub1xuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XG4gKiAgICBzdHlsZXNoZWV0LlxuICpcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxuICogICAgdXNlIGJvcmRlci13aWR0aCB0byBoaWRlIHRoZW0gaW5zdGVhZC4gVGhpcyB3YXkgb3VyIGBib3JkZXJgIHV0aWxpdGllcyBvbmx5XG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXG4gKlxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XG4gKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cbn1cblxuLypcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcbiAqL1xuXG5ociB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbn1cblxuLyoqXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxuICpcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgI2ExYTFhYSk7XG59XG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKipcbiAqIE92ZXJyaWRlIGxlZ2FjeSBmb2N1cyByZXNldCBmcm9tIE5vcm1hbGl6ZSB3aXRoIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlcy5cbiAqXG4gKiBUaGlzIGlzIGFjdHVhbGx5IGFuIGltcHJvdmVtZW50IG92ZXIgdGhlIG5ldyBkZWZhdWx0cyBpbiBGaXJlZm94IGluIG91ciB0ZXN0aW5nLFxuICogYXMgaXQgdHJpZ2dlcnMgdGhlIGJldHRlciBmb2N1cyBzdHlsZXMgZXZlbiBmb3IgbGlua3MsIHdoaWNoIHN0aWxsIHVzZSBhIGRvdHRlZFxuICogb3V0bGluZSBpbiBGaXJlZm94IGJ5IGRlZmF1bHQuXG4gKi9cbiBcbjotbW96LWZvY3VzcmluZyB7XG5cdG91dGxpbmU6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxuICogb3B0LW91dC5cbiAqL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLyoqXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcbiAqIG5vcm1hbGl6ZS5jc3MuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4vKipcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxuICovXG5cbnByZSxcbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5Lm1vbm8nLCB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UpO1xufVxuXG4vKipcbiAqIDEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0IGFzIHRoYXQnc1xuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XG4gKiAgICBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXG4gKlxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxuICogXG4gKiAyLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmVcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxuICogICAgdXRpbGl0eSBsaWtlIGBpbmxpbmVgLlxuICpcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcbiAqICAgIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXG4gKiBcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxuICovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmVcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxuICovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************!*\
  !*** /home/runner/work/commission-site/commission-site/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-9-3!./styles.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/sass-loader/dist/cjs.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!***************************!*\
  !*** multi ./styles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/commission-site/commission-site/apps/art-commission/src/styles.scss */"./styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map