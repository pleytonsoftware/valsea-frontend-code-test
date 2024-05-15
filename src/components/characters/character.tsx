import type { Person } from "@/generated/graphql";

import { useState, type FC } from "react";
import { Link } from "react-router-dom";
import { getImgSrc } from "@/utils/internet";
import { CharacterImage } from "./image";

export interface CharacterProp {
    person: Person;
}

/**
 * Renders a character component with an image and name.
 */
const Character: FC<CharacterProp> = ({ person }) => {
    const [imgSrc, setImgSrc] = useState<string>(getImgSrc(person.name));
    const name = person.name || "unknown name";

    const handleImageError = () => {
        setImgSrc(getImgSrc());
    };

    return (
        <Link to={`/person/${person.id}`}>
            <div className="flex flex-col justify-center rounded-lg bg-white shadow-sm transition-all duration-300 md:hover:scale-105 hover:shadow-xl dark:bg-slate-800 dark:text-slate-400 hover:cursor-pointer">
                <CharacterImage name={name} />
                <h3 className="text-lg font-medium py-4 px-6 text-center">
                    {name}
                </h3>
            </div>
        </Link>
    );
};

export { Character };
