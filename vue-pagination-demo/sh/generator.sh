npm init -y
mkdir sh webpack src
cd webpack
touch dev.js loader.js proc.js
cd ..
touch index.html

npm install --save-dev html-webpack-plugin

npm install --save vue 

npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev vue-template-compiler vue-loader css-loader vue-style-loader
