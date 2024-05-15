import type { FC } from "react";

import ArrowLeftIcon from "@/svg/arrow-left.svg?react";
import ArrowRightIcon from "@/svg/arrow-right.svg?react";

export interface FilmographyButtonsProps {
    index: number;
    maxIndex: number;
    onClickPrev: () => void;
    onClickNext: () => void;
}

/**
 * Renders the filmography buttons component with navigation functionality.
 */
const FilmographyButtons: FC<FilmographyButtonsProps> = ({
    index,
    maxIndex,
    onClickPrev,
    onClickNext,
}) => (
    <div className="flex justify-between pt-4">
        <button
            disabled={index === 0}
            onClick={onClickPrev}
            className="filmography--buttons sm:-left-14 sm:top-1/2 sm:mt-2 sm:-translate-y-1/2"
        >
            <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <button
            disabled={index === maxIndex}
            onClick={onClickNext}
            className="filmography--buttons sm:-right-14 sm:top-1/2 sm:mt-2 sm:-translate-y-1/2"
        >
            <ArrowRightIcon className="h-4 w-4" />
        </button>
    </div>
);

export { FilmographyButtons };
