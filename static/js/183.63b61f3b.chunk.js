webpackJsonp([183],{131:function(e,a){!function(e){var a=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/;e.languages.handlebars=e.languages.extend("markup",{handlebars:{pattern:a,inside:{delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/}}}),e.languages.insertBefore("handlebars","tag",{"handlebars-comment":{pattern:/\{\{![\s\S]*?\}\}/,alias:["handlebars","comment"]}}),e.hooks.add("before-highlight",function(e){"handlebars"===e.language&&(e.tokenStack=[],e.backupCode=e.code,e.code=e.code.replace(a,function(a){for(var n=e.tokenStack.length;-1!==e.backupCode.indexOf("___HANDLEBARS"+n+"___");)++n;return e.tokenStack[n]=a,"___HANDLEBARS"+n+"___"}))}),e.hooks.add("before-insert",function(e){"handlebars"===e.language&&(e.code=e.backupCode,delete e.backupCode)}),e.hooks.add("after-highlight",function(a){if("handlebars"===a.language){for(var n=0,t=Object.keys(a.tokenStack);n<t.length;++n){var o=t[n],r=a.tokenStack[o];a.highlightedCode=a.highlightedCode.replace("___HANDLEBARS"+o+"___",e.highlight(r,a.grammar,"handlebars").replace(/\$/g,"$$$$"))}a.element.innerHTML=a.highlightedCode}})}(Prism)}});
//# sourceMappingURL=183.63b61f3b.chunk.js.map