import type { FC } from "react";

import { HomeQuery } from "@/generated/graphql";
import { Character } from "@/components/characters/character";
import { CardMessage } from "@/components/card-message";

export interface CharacterProps {
    data?: HomeQuery;
}

/**
 * Renders a list of characters based on the provided data.
 */
const CharacterList: FC<CharacterProps> = ({ data }) => {
    const peopleData = Array.isArray(data?.allPeople?.edges)
        ? data?.allPeople?.edges.filter((node) => Boolean(node?.node))
        : null;

    return peopleData?.length ? (
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
            {peopleData.map(
                (node, index) =>
                    node?.node && <Character key={index} person={node?.node} />,
            )}
        </div>
    ) : (
        <CardMessage key="no-data">
            Looks like we've entered a galaxy far, far away from any Star Wars
            characters! Don't worry, the force is still with us. Feel free to
            explore other corners of the universe here. May the search be ever
            in your favor!
        </CardMessage>
    );
};

export { CharacterList };
