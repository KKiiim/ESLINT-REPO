/**
 * pnpm install @babel/core @babel/types
 * pnpm install babel-plugin-transform-es2015-arrow-functions
 */
// es6 --> es5, typical syntax conversion of an arrow function into a normal function
// @babel/core (can put in the corresponding babel plug-ins, which can be called by default during conversion)

const babel = require('@babel/core');
const types = require('@babel/types');
// const transformFunction = require('babel-plugin-transform-es2015-arrow-functions');  // transform approach 1

const transformFunction = {                                                             // transform approach 2
    visitor: {
        ArrowFunctionExpression(path){
            // let {node} = path;
            // console.log(node);
            //      ==      console.log(path.node);
            let {node} = path;
            node.type = 'FunctionExpression';
            hoistFunction(path);
            let body = node.body;

            if(!types.isBlockStatement(body)){
                node.body = types.blockStatement([types.returnStatement(body)])
            }

        }
    }
}
function getThisPath(path){
    let arr = [];
    path.traverse({
        ThisExpression(path){
            arr.push(path);
        }
    })
    return arr;
}
function hoistFunction(path){
    // find parent scope
    // parent.isProgram() ==> root scope
    const thisEnv = path.findParent((parent)=>(parent.isFunction() && !parent.isArrowFunctionExpression()) || parent.isProgram());
    const bingingThis = '_this';    // var _this = this;
    const thisPaths = getThisPath(path);
    // 1) change current this to _this
    thisPaths.forEach(path => {
        path.replaceWith(types.identifier(bingingThis))
    })
    // add ' var _this = this'
    thisEnv.scope.push({
        id: types.identifier(bingingThis),
        init: types.thisExpression()
    })
    

}




//const code = 'const sun = ()=> a+b';    // js code
const code = 'function a(){const sun = ()=> a+b}';    // js code
const result = babel.transform(code,{
    /**
     * plugins  single 
     * presets  set pf plugins
     */
    plugins: [transformFunction]
})
console.log(result.code);

