# LearnPlaywright

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Progress-orange)

This repository contains learning materials for Playwright and JavaScript basics.

## Prerequisites

Before getting started, ensure you have the following installed:

| Tool | Description | Download Link |
|------|-------------|---------------|
| **Node.js** | JavaScript runtime required to run examples | [nodejs.org](https://nodejs.org/) |
| **VS Code** | Recommended code editor with built-in terminal | [code.visualstudio.com](https://code.visualstudio.com/) |

Verify installation:
```bash
node --version
npm --version
```

## How to Use This Repository

### Clone the Repository

```bash
git clone https://github.com/AishwaryaBPatil/playwrightlearnings.git
cd playwrightlearnings
```

### Open in VS Code

1. Open VS Code
2. Go to **File > Open Folder** (or press `Ctrl+K Ctrl+O`)
3. Select the `playwrightlearnings` folder
4. Open the integrated terminal with `` Ctrl+` ``

### Run Examples

Run any JavaScript file directly from the VS Code terminal:

```bash
node chapter_01_Basics/01_basics.js
node chapter_04_javascriptBasis/01_variable.js
node chapter_06_operators/02_Arithmatic.js
```

Alternatively, use the **Code Runner** extension in VS Code to run files with a single click (right-click > Run Code or press `Ctrl+Alt+N`).

## Project Structure

```
LearnPlaywright/
├── chapter_01_Basics/
│   ├── 01_basics.js
│   ├── 02_JS.js
│   └── 03_JS_commands.js
├── chapter_02_JavaScript_Concepts/
│   └── javascript_basics.js
├── chapter_03_identifier_Literals/
│   ├── 01_identifier_rules.js
│   ├── 02_Comments.js
│   └── VS_Code_Keyword_Shortcut_windows.md
├── chapter_04_javascriptBasis/
│   ├── 01_variable.js
│   ├── 02_functions.js
│   ├── 03_let.js
│   ├── 04_const.js
│   ├── 05_Hoisting.js
│   ├── 06_Hoisting_fn.js
│   ├── 07_let_hoisting.js
│   ├── 08_let_hosting_block.js
│   ├── 09_let_const.js
│   └── 10_jr_QA.js
├── chapter_05_literals/
│   ├── 01_literals.js
│   ├── 02_null_undefined.js
│   ├── 03_null.js
│   ├── 04_literalAll.js
│   ├── 05_literal_number_all.js
│   ├── 06_string.js
│   ├── 07_template_literal.js
│   └── 08_backtik_single_double.js
├── chapter_06_operators/
│   ├── 01_Assignment.js
│   ├── 02_Arithmatic.js
│   ├── 03_Modulus_OP.js
│   ├── 04_exponentiation_OP.js
│   ├── 05_Compound_OP.js
│   ├── 06_Comparison_OP.js
│   ├── 07_comparison_Strict_loose.js
│   ├── 08_IQ_loose_Strict.js
│   ├── 09_confusing_comaprisons.js
│   ├── 10_logical_OP.js
│   ├── 11_string_con_OP.js
│   ├── 12_null.js
│   ├── 13.ternary_OP.js
│   ├── 14_typeof_OP.js
│   └── 15_increment_decrement_OP.js
├── chapter_07_if_else/
│   ├── 01_basic_ifElse.js
│   ├── 02_ifelse_ifelse.js
│   ├── 03_RealIf_else.js
│   ├── 04_API_IFELSE.js
│   ├── 05_IQ_IFELSE.js
│   ├── 06_Real_IF_else.js
│   ├── 07_IQ.js
│   ├── 08_single_if.js
│   ├── 09_if_even_odd.js
│   ├── 10_gradeCalculator.js
│   ├── 11_leap_year.js
│   ├── 12_http_statuscode.js
│   ├── 13_passfail_verdict.js
│   ├── 14_Bug_severity.js
│   ├── 15_BuildHealth_reporter.js
│   ├── 16_Login_Logout.js
│   ├── 17_triangle.js
│   └── README.md
├── chapter_08_SwitchStatement/
│   ├── 01_switch.js
│   ├── 02_no_break.js
│   ├── 03_switchdefault.js
│   ├── 04_realtimeEX.js
│   ├── 05_switchgroups.js
│   ├── 06_IQ.js
│   ├── 07_IQ2.js
│   ├── 08_IQ3.js
│   └── 09_IQ4.js
├── chapter_09_userInput/
│   ├── 01_userinput.js
│   ├── 02_nodeReadline.js
│   └── 03_prompt_sync.js
├── chapter_10_loops/
│   ├── 01_forLoop.js
│   ├── 02_for_loop.js
│   ├── 03_for_loop3.js
│   ├── 04_IQ.js
│   ├── 05_whileloop.js
│   ├── 06_Do_while.js
│   ├── 07_Do_while.js
│   ├── 08_IQ.js
│   ├── 09_IQ.js
│   ├── 10_continue.js
│   ├── 11_IQ.js
│   └── README.md
├── chapter_11_Arrays/
│   ├── 01_array.js
│   ├── 02.array.js
│   ├── 03_Access_array.js
│   ├── 04_arrays.Adding_removing.js
│   ├── 05_arrays_splice_indexing.js
│   ├── 06_realexample.js
│   ├── 07_searching.js
│   ├── 08_iterate.js
│   ├── 09_transformArray.js
│   ├── 10_array.js
│   ├── 11_slice_combining.js
│   ├── 12_concat.js
│   └── 13_arrays._checking.js
├── chapter_12_Functions/
│   ├── 01_functons.js
│   ├── 02_basicFunction.js
│   ├── 03_function_with_para_noreturn.js
│   ├── 04_without_param_bt_with_returntype.js
│   ├── 05_both_param_returntype.js
│   ├── 06_template_literals.js
│   ├── 07_funcion_expresssii.js
│   ├── 08_arrowfunction.js
│   ├── 09_arrow_function_realex.js
│   ├── 10_IIFE.js
│   ├── 11_default_param_functio.js
│   ├── 12_IQ.js
│   ├── 13_rest_param_fu.js
│   ├── 14_IQ.js
│   ├── 15_spead.js
│   ├── 16_scope.js
│   ├── 17_IQ.js
│   ├── 18_closure.js
│   ├── 19_closure1.js
│   ├── 20_API_closure.js
│   ├── 21_higher_function.js
│   └── 22_pure_fu.js
├── chapter_13_String/
│   ├── 01_string.js
│   ├── 02_String_properties.js
│   ├── 03_search_check.js
│   ├── 04_substring.js
│   ├── 05_transform.js
│   ├── 06_SC.js
│   ├── 07_cheat_sheet.js
│   └── 08_string_methods_cheat_sheet.js
├── chapter_Basics_01/
│   └── 01_basics.js
├── SimpleJavaProject/
│   └── src/
│       └── Main.java
└── README.md
```

## Chapter Descriptions

**Chapter 01 - Basics**
Introduction to Playwright, basic setup, and writing your first scripts.

**Chapter 02 - JavaScript Concepts**
Core JavaScript concepts and fundamentals to build a strong foundation.

**Chapter 03 - Identifier & Literals**
JavaScript identifier naming rules, how to write comments, and useful VS Code keyboard shortcuts for Windows.

**Chapter 04 - JavaScript Basis**
Deep dive into variables (`var`, `let`, `const`), functions, hoisting behavior, block scope, and the temporal dead zone (TDZ).

**Chapter 05 - Literals**
Understanding JavaScript literals, the difference between null and undefined, strings, template literals, and number types.

**Chapter 06 - Operators**
Complete coverage of JavaScript operators including assignment, arithmetic, modulus, exponentiation, compound, comparison (strict vs loose), logical, string concatenation, ternary, typeof, and increment/decrement operators.

**Chapter 07 - If/Else**
Conditional statements including basic if/else, nested conditions, real-world QA scenarios, API status checks, grade calculators, login/logout flows, and triangle classification.

**Chapter 08 - Switch Statement**
Switch statements, case fall-through behavior, default cases, grouping cases, and interview-style questions.

**Chapter 09 - User Input**
Handling user input in Node.js using readline, prompt-sync, and other input methods.

**Chapter 10 - Loops**
JavaScript loops including for loops, while loops, do-while loops, continue statements, and interview-style loop problems.

**Chapter 11 - Arrays**
Array creation using literals, `Array()` constructor, `Array.of()`, and `Array.from()`, accessing elements, adding/removing items, splice, indexing, searching, iteration, transforming arrays, slicing, combining, and real-world examples.

**Chapter 12 - Functions**
Functions with and without parameters, return types, function expressions, arrow functions, IIFE, default parameters, rest parameters, spread operator, scope, closures, higher-order functions, pure functions, and interview-style questions.

**Chapter 13 - String Methods**
JavaScript String methods including string creation and properties, character access, searching and checking, extracting substrings, case conversion, trimming, replacing, splitting and joining, repeating and padding, concatenation, string conversion, regex methods, unicode handling, and useful string patterns with cheat sheets.

## Topics Covered

- Playwright basics and test commands
- JavaScript variables (`var`, `let`, `const`)
- Functions and hoisting
- Block scope and temporal dead zone (TDZ)
- Literals and data types
- Strings and template literals
- Null vs Undefined
- Arithmetic, comparison, and logical operators
- Ternary and typeof operators
- Increment/decrement operators
- If/else and nested conditional statements
- Real-world QA scenarios with conditionals
- Switch statements and case fall-through
- User input handling with readline and prompt-sync
- For loops, while loops, and do-while loops
- Continue statements and loop control flow
- Loop interview questions and patterns
- Arrays: creation, access, adding/removing elements
- Array methods: splice, indexing, `Array.of()`, `Array.from()`
- Array searching, iteration, and transformation
- Array slicing, combining, and concat
- Functions: declaration, parameters, and return types
- Function expressions and arrow functions
- IIFE (Immediately Invoked Function Expressions)
- Default parameters and rest parameters
- Spread operator
- Scope and closures
- Higher-order functions and pure functions
- Function interview questions
- String methods: creation, properties, and character access
- String searching: includes, startsWith, endsWith, indexOf, lastIndexOf
- String extraction: slice, substring, substr
- String transformation: toUpperCase, toLowerCase, trim
- String manipulation: replace, replaceAll, split, join
- String padding and repeating: padStart, padEnd, repeat
- String concatenation and template literals
- String to number conversion: parseInt, parseFloat, Number
- String regex methods: match, search, replace with regex
- String comparison and locale methods
- String iteration and spread operator
- VS Code keyboard shortcuts for Windows

## Running Examples

| Command | Description |
|---------|-------------|
| `node chapter_01_Basics/01_basics.js` | Run basic Playwright example |
| `node chapter_02_JavaScript_Concepts/javascript_basics.js` | Run JavaScript basics |
| `node chapter_03_identifier_Literals/01_identifier_rules.js` | Run identifier rules example |
| `node chapter_04_javascriptBasis/01_variable.js` | Run variable example |
| `node chapter_05_literals/01_literals.js` | Run literals example |
| `node chapter_06_operators/01_Assignment.js` | Run assignment operator example |
| `node chapter_06_operators/02_Arithmatic.js` | Run arithmetic operator example |
| `node chapter_06_operators/10_logical_OP.js` | Run logical operator example |
| `node chapter_06_operators/13.ternary_OP.js` | Run ternary operator example |
| `node chapter_07_if_else/01_basic_ifElse.js` | Run basic if/else example |
| `node chapter_07_if_else/10_gradeCalculator.js` | Run grade calculator example |
| `node chapter_08_SwitchStatement/01_switch.js` | Run switch statement example |
| `node chapter_09_userInput/02_nodeReadline.js` | Run readline input example |
| `node chapter_07_if_else/17_triangle.js` | Run triangle classifier example |
| `node chapter_10_loops/01_forLoop.js` | Run for loop example |
| `node chapter_10_loops/05_whileloop.js` | Run while loop example |
| `node chapter_10_loops/06_Do_while.js` | Run do-while loop example |
| `node chapter_10_loops/10_continue.js` | Run continue statement example |
| `node chapter_11_Arrays/01_array.js` | Run array creation example |
| `node chapter_11_Arrays/03_Access_array.js` | Run array access example |
| `node chapter_11_Arrays/04_arrays.Adding_removing.js` | Run array add/remove example |
| `node chapter_11_Arrays/07_searching.js` | Run array searching example |
| `node chapter_11_Arrays/09_transformArray.js` | Run array transformation example |
| `node chapter_12_Functions/02_basicFunction.js` | Run basic function example |
| `node chapter_12_Functions/08_arrowfunction.js` | Run arrow function example |
| `node chapter_12_Functions/10_IIFE.js` | Run IIFE example |
| `node chapter_12_Functions/13_rest_param_fu.js` | Run rest parameter example |
| `node chapter_12_Functions/18_closure.js` | Run closure example |
| `node chapter_12_Functions/21_higher_function.js` | Run higher-order function example |
| `node chapter_13_String/01_string.js` | Run string basics example |
| `node chapter_13_String/03_search_check.js` | Run string search methods example |
| `node chapter_13_String/04_substring.js` | Run substring extraction example |
| `node chapter_13_String/05_transform.js` | Run string transformation example |
| `node chapter_13_String/07_cheat_sheet.js` | Run string methods cheat sheet |
| `node chapter_13_String/08_string_methods_cheat_sheet.js` | Run complete string methods cheat sheet |

## License

This repository is for educational purposes only.
