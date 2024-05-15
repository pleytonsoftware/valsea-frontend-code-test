import type { FilmConnectionsFragment } from "@/generated/graphql";

/**
 * Calculates the count of producers for each film in the provided list.
 */
function getProducerCounts(
    films: FilmConnectionsFragment["films"],
): Record<string, number> {
    const producerCount: Record<string, number> = {};

    if (films) {
        films.forEach((film) => {
            if (film && film.producers) {
                film.producers.forEach((producer) => {
                    if (producer) {
                        if (producerCount[producer]) {
                            producerCount[producer]++;
                        } else {
                            producerCount[producer] = 1;
                        }
                    }
                });
            }
        });
    }

    return producerCount;
}

export { getProducerCounts };
