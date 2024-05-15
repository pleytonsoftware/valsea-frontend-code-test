import type { FC } from "react";

import LoadingIcon from "@/svg/loading.svg?react";

/**
 * Renders a loading component with a loading icon and a loading text.
 */
const Loading: FC = () => (
    <>
        <LoadingIcon className="w-16 h-16" />
        <p>Loading...</p>
    </>
);

export { Loading };
