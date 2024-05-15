import type { PersonQuery } from "@/generated/graphql";

import { useMemo, type FC } from "react";
import { CharacterImage } from "@/components/characters/image";
import { Filmography } from "@/components/films/filmography";
import { Producer } from "@/components/films/producer";

export interface CharacterDetailsProps {
    person: NonNullable<PersonQuery["person"]>;
    filmsProducers: Record<string, number>;
}

/**
 * Renders the character details including image, name, birth year, average height, and list of producers.
 */
const CharacterDetails: FC<CharacterDetailsProps> = ({
    person,
    filmsProducers,
}) => {
    const producers = useMemo(
        () =>
            filmsProducers
                ? Object.entries(filmsProducers).sort(
                      ([, numberOfFilmsA], [, numberOfFilmsB]) =>
                          numberOfFilmsB - numberOfFilmsA,
                  )
                : [],
        [filmsProducers],
    );
    return (
        <>
            <div className="grid gap-6 md:col-span-2 md:grid-cols-2 items-start">
                <div className="grid gap-4 items-start">
                    <CharacterImage
                        name={person?.name}
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        size={600}
                    />
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">
                            {person.name}
                        </h1>
                        {person.birthYear && (
                            <p className="text-sm font-normal">
                                🎂 {person.birthYear}
                            </p>
                        )}
                        <div>
                            <p>
                                📏{" "}
                                {person.species?.averageHeight
                                    ? `Average Height: ${person.species.averageHeight}cm`
                                    : "Average height not found. May the Force be with you."}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 items-start">
                    <div className="grid gap-1">
                        <h2 className="font-semibold text-2xl">Producers</h2>
                        <hr className="my-2 mx-2 border-gray-200 dark:border-gray-800" />
                        {producers.length ? (
                            <div className="grid gap-1">
                                {producers.map(([producer, numberOfFilms]) => (
                                    <Producer
                                        producer={producer}
                                        numberOfFilms={numberOfFilms}
                                        key={producer}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm font-normal">
                                No producers found. May the Force be with you.
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {person.filmConnection?.films?.length && (
                <>
                    <hr className="mt-6 mx-2 border-gray-200 dark:border-gray-800" />
                    <Filmography filmConnection={person.filmConnection} />
                </>
            )}
        </>
    );
};

export { CharacterDetails };
