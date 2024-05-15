import type { FC } from "react";

export interface ProducerProps {
    producer: string;
    numberOfFilms: number;
}

/**
 * Renders a producer component with the given producer name and number of films.
 */
const Producer: FC<ProducerProps> = ({ producer, numberOfFilms }) => (
    <div className="flex items-center justify-between">
        <span>{producer}</span>
        <span>{numberOfFilms} Films</span>
    </div>
);

export { Producer };
