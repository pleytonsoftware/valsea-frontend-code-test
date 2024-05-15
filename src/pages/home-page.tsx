import type { HomeQuery, HomeQueryVariables } from "@/generated/graphql";

import { useQuery } from "urql";
import { CharacterList } from "@/components/characters/list";
import { CardMessage } from "@/components/card-message";
import { Layout } from "@/components/layout";
import { Loading } from "@/components/loading";
import { getAllPeopleQuery } from "@/gql/get-all-people.gql";

const HomePage = () => {
    const [data] = useQuery<HomeQuery, HomeQueryVariables>({
        query: getAllPeopleQuery,
    });

    return (
        <Layout title="Characters">
            {data.fetching ? (
                <Loading />
            ) : data.error ? (
                <CardMessage>
                    Oops! It seems we've encountered a data malfunction, a
                    disturbance in the digital force, if you will. Our droids
                    are diligently working to restore order to the data galaxy.
                    In the meantime, feel free to enjoy some virtual cantina
                    music while we get things back on track!
                </CardMessage>
            ) : (
                <CharacterList data={data.data} />
            )}
        </Layout>
    );
};

export default HomePage;
