const path = require("path");

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

// const basePath = "/vue-install-odessa/";
// const basePath = "/vue-tab-gallery/";
const basePath = "/";

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    filenameHashing: true,
    publicPath: isProd ? basePath : "/",
    
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("./src"))
            .set("@models", resolve("./src/models"))
            .set("@shared", resolve("./src/_shared"))
            .set("@components", resolve("./src/components"))
            .set("@abstractStyle", resolve("./src/_shared/assets/scss/abstract"))
            //Работает везде, кроме внутри тега style =)
            .set("@style", resolve("./src/assets/scss"))
            //Работает внутри тега style
            .set("_style", resolve("./src/assets/scss"));
    },
    
    css: {
        loaderOptions: {
            sass: {
                prependData: `
			        @import "@abstractStyle";
			        $env: ${process.env.NODE_ENV};
			    `,
            },
        },
    },
};
