const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    //get Todo, create Todo
    app.use(
        createProxyMiddleware("/todo", {
            target: "http://localhost:8000",
            changeOrigin: true,
        })
    );
    // delete Todo, update Todo
    app.use(
        createProxyMiddleware("/todo/:todoId", {
            target: "http://localhost:8000",
            changeOrigin: true,
        })
    );
};
