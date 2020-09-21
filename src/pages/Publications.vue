<template>
  <Layout>
    <h1>業績（開発途中）</h1>
    <ul>
      <li v-for="edge in $page.allPapers.edges">{{ edge.node | formatPaper }}</li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allPapers(sortBy: "publication_date") {
    edges {
      node {
        paper_title {
          ja
        }
        authors {
          ja {
            name
          }
        }
        publication_name {
          ja
        }
        starting_page
        ending_page
        volume
        number
        publication_date
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Publications'
  },
  filters: {
    formatPaper: function(paper) {
      let items = [];
      let authors = paper.authors.ja.map(x => x.name).join(', ');
      items.push(authors + ',');
      items.push(`\`\`${paper.paper_title.ja},''`);
      items.push(paper.publication_name.ja + ',');
      items.push(`Vol.${paper.volume},`);
      items.push(`No.${paper.number},`);
      items.push(`${paper.starting_page}-${paper.ending_page},`)
      items.push(`${paper.publication_date}.`)
      return items.join(' ');
    }
  }
}
</script>

<style>
</style>
