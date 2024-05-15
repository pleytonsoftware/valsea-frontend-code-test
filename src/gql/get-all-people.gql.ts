import { gql } from "urql";

const getAllPeopleQuery = gql`
    query Home {
        allPeople {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`;

export { getAllPeopleQuery };
