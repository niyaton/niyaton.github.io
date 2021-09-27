<template>
  <Layout>
    <h1>業績（開発途中）</h1>
    <h3 style="text-align: right">最終更新日時: {{ $static.metadata.researchmap_modified_date | formatDate }}</h3>
    <h2>論文誌</h2>
    <ol>
      <li v-for="edge in $page.accepted_journals.edges">{{ edge.node | formatJaPaper }}</li>
      <li v-for="edge in $page.published_journals.edges">{{ edge.node | formatJaPaper }}</li>
    </ol>
    <h2>国際会議</h2>
    <ol>
      <li v-for="edge in $page.international_conference_papers.edges">{{ edge.node | formatEnPaper }}</li>
    </ol>
    <h2>国内学会シンポジウム，ワークショップ，研究会，全国大会</h2>
    <ol>
      <li v-for="edge in $page.domestic_papers.edges">{{ edge.node | formatJaPaper }}</li>
    </ol>
  </Layout>
</template>

<static-query>
query{
  metadata {
    researchmap_modified_date
  }
}
</static-query>
<page-query>
query {
  accepted_journals: allPapers(filter: {published_paper_type: { eq: "scientific_journal" }, publication_date: { eq: "9999"}}, sortBy: "publication_date") {
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
  published_journals: allPapers(filter: {published_paper_type: { eq: "scientific_journal" }, publication_date: { ne: "9999"}}, sortBy: "publication_date") {
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
  international_conference_papers: allPapers(filter: {published_paper_type: { eq: "international_conference_proceedings" }, publication_date: { ne: "9999"}}, sortBy: "publication_date") {
    edges {
      node {
        paper_title {
          en
        }
        authors {
          en {
            name
          }
        }
        publication_name {
          en
        }
        starting_page
        ending_page
        volume
        number
        publication_date
      }
    }
  }
  domestic_papers: allPapers(filter: {published_paper_type: { eq: "symposium" }, publication_date: { ne: "9999"}}, sortBy: "publication_date") {
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
import moment from 'moment';

export default {
  metaInfo: {
    title: 'Publications'
  },
  filters: {
    formatJaPaper: function(paper) {
      let items = [];
      let authors = paper.authors.ja.map(x => x.name).join(', ');
      items.push(authors + ',');
      items.push(`\`\`${paper.paper_title.ja},''`);
      items.push(paper.publication_name.ja + ',');

      if (paper.volume) {
        items.push(`Vol.${paper.volume},`);
      }
      if (paper.number) {
        items.push(`No.${paper.number},`);
      }
      if (paper.starting_page) {
        items.push(`${paper.starting_page}-${paper.ending_page},`)
      }
      if (paper.publication_date == '9999') {
        items.push('（採録決定）.')
      } else {
        items.push(`${paper.publication_date}.`);
      }
      return items.join(' ');
    },
    formatEnPaper: function(paper) {
      let items = [];
      let authors = paper.authors.en.map(x => x.name).join(', ');
      items.push(authors + ',');
      items.push(`\`\`${paper.paper_title.en},''`);
      items.push(paper.publication_name.en + ',');

      if(paper.volume){
        items.push(`Vol.${paper.volume},`);
      }
      if(paper.number){
        items.push(`No.${paper.number},`);
      }
      if(paper.starting_page){
        items.push(`${paper.starting_page}-${paper.ending_page},`)
      }
      if(paper.publication_date == '9999'){
        items.push('（採録決定）.')
      } else {
        items.push(`${paper.publication_date}.`);
      }
      return items.join(' ');
    },
    formatDate: function(date){
      let d = moment(date);
      return d.format("YYYY年MM月DD日 HH時mm分");
    }
  }
}
</script>

<style>
</style>
