import type { PersonQuery, PersonQueryVariables } from "@/generated/graphql";

import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { CardMessage } from "@/components/card-message";
import { Layout } from "@/components/layout";
import { CharacterDetails } from "@/components/characters/details";
import { Loading } from "@/components/loading";
import { getPersonQuery } from "@/gql/get-person.gql";
import { getProducerCounts } from "@/utils/producers";

const PersonPage = () => {
    const { personId } = useParams<{ personId: string }>();
    const [data] = useQuery<PersonQuery, PersonQueryVariables>({
        query: getPersonQuery,
        variables: { id: personId! },
    });
    const filmsProducers = useMemo(
        () => getProducerCounts(data.data?.person?.filmConnection?.films),
        [data.data?.person?.filmConnection?.films],
    );

    let detailsElement = data.fetching && !data.data ? <Loading /> : null;

    if (!personId || (!data.fetching && !data.data?.person)) {
        detailsElement = <div className="text-center">Person not found</div>;
    }

    if (data.data?.person) {
        detailsElement = (
            <CharacterDetails
                person={data.data.person}
                filmsProducers={filmsProducers}
            />
        );
    }

    const errorElement = data.error && detailsElement && (
        <CardMessage>
            Oops! It seems we've encountered a data malfunction, a disturbance
            in the digital force, if you will. Our droids are diligently working
            to restore order to the data galaxy. In the meantime, feel free to
            enjoy some virtual cantina music while we get things back on track!
        </CardMessage>
    );

    if (data.error) {
        console.error(data.error);
    }

    return (
        <Layout>
            {detailsElement}
            {errorElement}
        </Layout>
    );
};

export default PersonPage;
