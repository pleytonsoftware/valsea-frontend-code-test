import { useState, type FC } from "react";
import { getImgSrc } from "@/utils/internet";
import { cn } from "@/utils/cn";
import LoadingIcon from "@/svg/loading.svg?react";

export interface CharacterImageProps {
    name: string | null | undefined;
    className?: string;
    size?: number;
}

/**
 * Renders a character image with the provided name, class, and size.
 */
const CharacterImage: FC<CharacterImageProps> = ({
    name,
    className,
    size = 400,
}) => {
    const characterName = name || "unknown name";
    const [imgSrc, setImgSrc] = useState<string>(getImgSrc(characterName));
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleImageError = () => {
        setImgSrc(getImgSrc());
    };

    return (
        <div className="relative">
            <img
                alt={characterName}
                className={cn(
                    "w-full h-auto object-cover rounded-t-lg aspect-square",
                    !loaded && "invisible",
                    className,
                )}
                height={size}
                onLoad={() => setLoaded(true)}
                onError={handleImageError}
                src={imgSrc}
                width={size}
            />
            {!loaded && (
                <div className="w-full h-auto flex flex-col justify-center align-center absolute inset-0">
                    <LoadingIcon className="w-24 h-24 mx-auto" />
                </div>
            )}
        </div>
    );
};

export { CharacterImage };
