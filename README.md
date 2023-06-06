# restaurantPageTOP

Project: Restaurant Page on The Odin Project

## webpack note

- The 'source' code (./src) is the code that we'll write and edit
- The 'distribution code' (./dist) is the minimized and optimized output of our build process that will eventually be loaded in the browser
- You may noticed that index.html was created manually, even though it is now placed in the dist directory. Later on, we will generate index.html rather than edit it manually. Once this is done, it should be safe to empty the dist directory and to regenerate all the files within it
- When installing a package that will be bundled into your production bundle, you should use npm install --save. If you're installing a package for development purpose (e.g. a linter, testing libraries, etc) then you should use npm install --save-dev.
- When we installed a package use in our production bundle with npm install --save. Then we can import in our script, as we now import it, and modify the other `<script>` tag to load the bundle, instead of the raw ./src file
- Change our index.html file from script src="./src/index.js" to script src="./main.js"
- When we run npx webpack, which will take our script at src/index.js as the entry point, and will generate dist/main.js as the output. The npx command, which ships with Nodejs, run the webpack binary of the webpack package we installed in the beginning
- One of the coolest webpack features is that you can also INCLUDE ANY OTHER TYPE OF FILE, besides JavaScript, for which there is a loader or built-in Asset Modules support. This means that the same benifits listed above for JavaScript can be applied to everything used in building a website or webapp.
- In order to import a css file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration with npm install --save-dev style-loader css-loader
- the style-loader is responsible for injecting the CSS into the document at runtime, while the css-loader processes the CSS file and resolves any @import and url() statements

[View all my projects Live demo links](https://minhhoccode111.github.io/allProjectssLiveDemo/)

[View this project Live demo](https://minhhoccode111.github.io/restaurantPageTOP/)
