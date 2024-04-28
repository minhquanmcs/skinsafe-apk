/**
 * @flow
 */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const argv = require('yargs-parser')(process.argv.slice(2));
//$FlowFixMe
String.prototype.format = function () {
  let a = this;
  for (let k in arguments) {
    //$FlowFixMe
    a = a.replace(('{' + k + '}').toRegex('g'), arguments[k]);
  }
  return a;
};
//$FlowFixMe
String.prototype.toRegex = function (option = 'i') {
  let regexStr = this.replace(/[\.\*\+\?\^\$\{\}\(\)\|\[\]\\]/g, '\\$&');
  regexStr = regexStr.replace(/\s/g, '\\s?');
  //
  return new RegExp(regexStr, option);
};
const getFileName = (file) => {
  var fileNameMatch = file.match(/^(.+)\.[^\.]+$/);
  return fileNameMatch && fileNameMatch[1].replace(/[\s-\+]+/g, '_');
};
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//
const folder = argv.folder || argv.d || argv._[0];
var match = folder.match(/^(.+\/([^\/]+))\/?$/);
//$FlowFixMe
var output = match && '{0}/{1}.tsx'.format(match[1], match[2]);
output = argv.output || argv.o || output;

let outputMatch = output.match(/^(?:(.*)\/)?([^\/]+)$/);
//
let outputName = outputMatch[2];
let outputPath = outputMatch[1] || '.';

let requirePath = path.relative(outputPath, folder);
//
let author = argv.author || argv.a || 'tuankhanhtrn45@gmail.com';
let template = `/**
 * @author {2}
 * @flow
 */
 
export const {0} = {
 {1}
};

export type {3}Types = keyof typeof {0};`;

let moduleName = argv.name || getFileName(outputName);
//
fs.readdir(folder, (err, files) => {
  if (err) {
    return;
  }
  var strCodes = [];
  files.forEach((file) => {
    if (file.match(/@\dx\.(png|jpg)/)) return;
    var fileName = getFileName(file);

    if (fileName) {
      //$FlowFixMe
      strCodes.push(`    {0}: require('./{1}/{2}'),`.format(fileName, requirePath, file));
      //
    }
  });
  //$FlowFixMe
  let typeFileName = capitalizeFirstLetter(moduleName);
  let code = template.format(moduleName, strCodes.join('\n'), author, typeFileName);

  fs.writeFileSync(output, code);
});
