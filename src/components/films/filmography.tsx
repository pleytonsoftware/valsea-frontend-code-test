import type { FilmConnectionsFragment } from "@/generated/graphql";

import { useState, type FC } from "react";
import { CardMessage } from "@/components/card-message";
import { FilmCard } from "@/components/films/film-card";
import { FilmographyButtons } from "@/components/films/filmography-buttons";

export interface FilmographyProps {
    filmConnection: FilmConnectionsFragment;
}

/**
 * Renders the Filmography component based on the provided filmConnection.
 */
const Filmography: FC<FilmographyProps> = ({ filmConnection }) => {
    const [index, setIndex] = useState<number>(0);

    if (!filmConnection.films) return null;

    const currentFilm = filmConnection.films[index];
    const maxIndex = filmConnection.films.length - 1;
    const { planets } = currentFilm?.planetConnection ?? {};
    const numberOfPlanetsWithoutWater = planets?.reduce(
        (prevCounter, planet) => {
            if (planet?.surfaceWater && planet?.surfaceWater > 0) {
                return prevCounter + 1;
            }
            return prevCounter;
        },
        0,
    );

    return (
        <div className="grid grid-cols-1 justify-items-center mt-8 w-full">
            <h2 className="font-semibold text-2xl">Filmography</h2>
            <div className="w-full max-w-96 relative">
                <CardMessage className="w-full h-48">
                    {currentFilm ? (
                        <FilmCard
                            title={currentFilm.title}
                            releaseDate={currentFilm.releaseDate}
                            numberOfPlanetsWithoutWater={
                                numberOfPlanetsWithoutWater
                            }
                        />
                    ) : (
                        <p>No films found. May the Force be with you.</p>
                    )}
                </CardMessage>
                {currentFilm && (
                    <FilmographyButtons
                        index={index}
                        maxIndex={maxIndex}
                        onClickPrev={() =>
                            setIndex((prev) => Math.max(0, prev - 1))
                        }
                        onClickNext={() =>
                            setIndex((prev) => Math.min(prev + 1, maxIndex))
                        }
                    />
                )}
            </div>
        </div>
    );
};

export { Filmography };
