// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: 'https://niyaton.github.io',
  siteName: 'Kenji Fujiwara',
  metadata: createMetadata(),
  plugins: []
}

function createMetadata() {
  const metadata = {
    gravatar_email: 'fujiwara@toyota-ct.ac.jp',
    footer: {
      copyright_text: "&copy; Kenji Fujiwara"
    },
    left_side: {
      background_image: "/images/left-background.jpg"
    }
  }

  addAvatar(metadata);
  return metadata;
}

function addAvatar( metadata ) {
  let gravatar = require('gravatar');

  if( 'avatar' in metadata){
    return;
  }
  if( 'gravatar_email' in metadata){
    metadata.avatar = gravatar.url(metadata.gravatar_email, {s: '150', r: 'g', d: 'mm'});
    return;
  }

  metadata.avatar = metadata.avatar || 'https://secure.gravatar.com/avatar/?d=mm&r=g&s=40';
}
