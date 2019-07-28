// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MNclude',
  plugins: [
    {
      use: '~/src/sources',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        base: process.env.AIRTABLE_BASE,
      },
    },
  ]
}
