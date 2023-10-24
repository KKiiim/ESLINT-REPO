module.exports = {
    "env": {    // which env gloabl param can i use
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [    
        // if some extends are integrated, you can use rules that others wrote
        // extend = plugin + rule !!!
        "eslint:recommended",
        // "plugin:@typescript-eslint/recommended"  // just plugin use recommended
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest", // describe grammar
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true     // whether support jsx
        }
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {                                          // just rule
        // 0 off 1 warn 2 error
        "quotes": ["error", "double"],   // new rules will override rules extended/integrated before
        //"@typescript-eslint/no-inferrable-types": "error"
    },
    plugins: ['@typescript-eslint/eslint-plugin'],      // just plugin
    // specify a particular parser
    //parser: 'esprima',  // default inner parser is espress
    parser: '@typescript-eslint/parser',
    globals:{
        // custom: "readonly"
        custom: "writable"
    }
}
