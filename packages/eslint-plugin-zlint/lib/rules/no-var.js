/**
 * @fileoverview don not use 'var' in project
 * @author Kim
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "don not use 'var' in project",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      VariableDeclaration(node){
        if(node.kind == 'var'){
          context.report({
            node,
            data: { type: 'var' },
            messageId: 'unexpected',
            fix(fixer){
              const varToken = sourceCode.getFirstToken(node, {filter: t => t.value == 'var'})
              console.log(varToken)
              return fixer.replaceText(varToken, 'let')
            }
          })
        }
      }
    };
  },
};
