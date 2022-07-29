# nature-ai2html

Custom build of the excellent [ai2html](http://ai2html.org/) project from The New York Times, restructured to be easily used to produce [Nature](https://www.nature.com) infographics.

## Changes from NYT version

- Code is split into modules.
- Typescript is used along with [types-for-adobe](https://github.com/aenhancers/types-for-adobe) for Adobe Illustrator types.
- NYT specific settings are removed.

## To get started

Install dependencies with

    npm install

## To debug Adobe Illustrator fuctions

Compile `src/debug.ts` into `dist/nature-ai2html-debug-VERSION.js` with:

    npm run rollup:debug

Then either [install and run the script in Adobe Illustrator](https://helpx.adobe.com/uk/illustrator/using/automation-scripts.html) or use the [ExtendScript Debugger extension](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) in VS Code.
