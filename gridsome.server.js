// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs');
const yaml = require('js-yaml');

const socialIconsContents = fs.readFileSync('./src/data/social_icons.yml', 'utf8');
const socialIcons = yaml.safeLoad(socialIconsContents);

const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async action => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    action.addSchemaTypes(`
      type Metadata {
        siteName: String
        siteSubName: String
        siteDescription: String
        avatar: String
        gravatar_email: String
        footer: Footer
        left_side: LeftSide
        researchmap_modified_date: String
      }
      
      type Footer {
        copyright_text: String
      }
      
      type LeftSide {
        background_image: String
        text_color: String
      }
    `)

    const collection = action.addCollection({
      typeName: 'SocialIcons'
    })

    for (const icon of socialIcons) {
      collection.addNode(icon);
    }

    const res = await axios.get('https://api.researchmap.jp/fujiwara.kenji/published_papers');

    const papers = action.addCollection( {
      typeName: 'Papers'
    })

    for (item of res.data.items){
      papers.addNode(item);
    }

    const res2 = await axios.get('https://api.researchmap.jp/fujiwara.kenji');
    action.addMetadata('researchmap_modified_date', res2.data['rm:modified']);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

