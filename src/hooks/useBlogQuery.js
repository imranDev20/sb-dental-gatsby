import { useStaticQuery, graphql } from "gatsby";

const useBlogQuery = () => {
  const data = useStaticQuery(graphql`
    query BlogsQuery {
      allStrapiBlog(sort: { fields: createdAt, order: DESC }) {
        nodes {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 360)
              }
            }
            alternativeText
          }
          title
          excerpt
          slug
          strapi_id
          createdAt(fromNow: true, locale: "GB", formatString: "DD MMMM YYYY")
          category {
            name
            slug
            strapi_id
          }
        }
      }
    }
  `);
  return data;
};

export default useBlogQuery;
