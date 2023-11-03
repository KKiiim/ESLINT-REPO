/**
 * pnpm install esprima estraverse escodegen
 */
const fs = require('fs');
const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

fs.readFile(__dirname + "/textfile.ts", "utf8", function(error, data){
    if(error){
        console.log("Failed to load testfile:", error);
        rejects(error);
        return;
    }
    const ast = esprima.parseScript(data);

    visAllnode(ast);
})


function visAllnode(mynode){
    if(mynode != undefined){
        console.log(mynode);
        console.log("#######################")
        if(mynode.hasOwnProperty("body")){
            //if(mynode.body.hasOwnProperty("type")){
                if(mynode.body.type == "ClassBody" || mynode.body.type == "BlockStatement"){
                    visAllnode(mynode.body);
                }else{
                    for(let i = 0; i < mynode.body.length; i++){
                        visAllnode(mynode.body[i]);
                    }
                }
            //}
        }
    }
}