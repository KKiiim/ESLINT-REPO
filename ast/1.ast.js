/**
 * pnpm install esprima estraverse escodegen
 */
const fs = require('fs');
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
// let code;
//code = 'function a(){}';
fs.readFile("textfile.ts", "utf8", function(error, data){
    if(error){
        console.log("Failed to load testfile:", error);
        rejects(error);
        return;
    }
    const ast = esprima.parseScript(data);
    console.log(ast);
    console.log(ast.body);
    console.log(ast.body[0].body);
    console.log(ast.body[0].body.body);
})
// code ---> ast
// const ast = esprima.parseScript(code);
// console.log(ast);

// vistor mode, one enter, one leave
// estraverse.traverse(ast, {
//     enter(node){
//         console.log('enter:' + node.type)

//         if(node.type == 'FunctionDeclaration'){
//             node.id.name = 'ast'
//         }
//     },
//     leave(node){
//         console.log('leave:' + node.type)
//     }
// })
// //console.log(ast);
// console.log(escodegen.generate(ast));