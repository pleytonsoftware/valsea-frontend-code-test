import type { FC } from "react";

export interface FilmCardProps {
    title?: string | null;
    releaseDate?: string | null;
    numberOfPlanetsWithoutWater?: number | null;
}

/**
 * Renders a Film Card component with title, release date, and number of planets without water.
 */
const FilmCard: FC<FilmCardProps> = ({
    title,
    releaseDate,
    numberOfPlanetsWithoutWater = 0,
}) => (
    <div className="flex flex-col gap-6 text-left">
        <h3 className="font-semibold text-2xl">🎬 {title}</h3>
        <p className="text-sm font-normal">
            📆{" "}
            {releaseDate ? new Date(releaseDate).toLocaleDateString() : "N/A"}
        </p>
        <p className="text-sm font-normal">
            🪐 {numberOfPlanetsWithoutWater}{" "}
            <span className="font-semibold">planets without water</span>
        </p>
    </div>
);

export { FilmCard };
