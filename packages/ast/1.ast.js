/**
 * pnpm install esprima estraverse escodegen
 */
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');
let code = 'function a(){}';
// code ---> ast
const ast = esprima.parseScript(code);
console.log(ast);

// vistor mode, one enter, one leave
estraverse.traverse(ast, {
    enter(node){
        console.log('enter:' + node.type)

        if(node.type == 'FunctionDeclaration'){
            node.id.name = 'ast'
        }
    },
    leave(node){
        console.log('leave:' + node.type)
    }
})
//console.log(ast);
console.log(escodegen.generate(ast));