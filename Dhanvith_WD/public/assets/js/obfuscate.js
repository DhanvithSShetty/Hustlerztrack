// obfuscate.js
const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const inputFile = 'accordions.js';
const outputFile = 'obfuscated_script.js';

const code = fs.readFileSync(inputFile, 'utf-8');

const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringArray: true,
    splitStrings: true,
    stringArray: true,
    stringArrayThreshold: 0.75,
});

fs.writeFileSync(outputFile, obfuscationResult.getObfuscatedCode());
