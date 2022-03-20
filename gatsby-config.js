module.exports = {
    siteMetadata: {
      title: "Fusion Delight 美食坊",
      description: "A contemporary Asian restaurant that pushes the limits on foreign cuisine, combining aspects of other cultures to create beautiful dishes.",
      author: "James Zeng"
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-plugin-sass",
      "gatsby-plugin-react-helmet",
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${__dirname}/locales`,
          name: 'locale'
        }
      },
      {
        resolve: 'gatsby-plugin-react-i18next',
        options: {
          localeJsonSourceName: 'locale',
          languages: ['en', 'zh'],
          defaultLanguage: 'en',
          siteUrl: 'https://fusiondelight.gatsbyjs.io',
          i18nextOptions: {
            lowerCaseLng: true,
            saveMissing: false,
            interpolation: {
              escapeValue: false
            },
            keySeparator: false,
            nsSeparator: false
          }
        }
      }
    ]
}