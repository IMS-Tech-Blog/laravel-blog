var base = "../node_modules/";
requirejs.config({
    "baseUrl": "./javascripts/",
    "paths": {
        "react": base + "react/dist/react.min", 
        "react-dom": base + "react-dom/dist/react-dom.min", 
        "redux": base + "redux/dist/redux.min", 
        "react-redux": base + "react-redux/dist/react-redux.min"
    }
});
