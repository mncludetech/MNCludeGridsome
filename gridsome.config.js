// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "MNClude",
  plugins: [
    {
      use: "gridsome-plugin-sass-resources-loader",
      options: {
        // provide path to the file with resources
        resources: "@/assets/_globals.scss"
      }
    }
  ]
};
