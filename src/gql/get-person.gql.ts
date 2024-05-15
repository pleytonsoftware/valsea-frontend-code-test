import { gql } from "urql";

const getPersonQuery = gql`
    fragment PersonDetails on Person {
        id
        name
        birthYear
        species {
            averageHeight
        }
    }

    fragment FilmDetails on Film {
        title
        releaseDate
        producers
        planetConnection {
            planets {
                surfaceWater
            }
        }
    }

    fragment FilmConnections on PersonFilmsConnection {
        films {
            ...FilmDetails
        }
    }

    query Person($id: ID!) {
        person(id: $id) {
            ...PersonDetails
            filmConnection {
                ...FilmConnections
            }
        }
    }
`;

export { getPersonQuery };
