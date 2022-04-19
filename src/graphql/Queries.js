import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  query products(
    $name: String!
    ) { 
        products(
          search: $name
        ) {
          items {
            name
            sku
            
          }
        }
      }
`;
// getCityByName($name: String!) {
//   getCityByName(name: $name) {
//     name
//     country
//     weather {
//       summary {
//         title
//         description
//         icon
//       }
//       temperature {
//         actual
//         feelsLike
//         min
//         max
//       }
//       wind {
//         speed
//         deg
//       }
//       clouds {
//         all
//         visibility
//         humidity
//       }
//       timestamp
//     }
//   }
// }