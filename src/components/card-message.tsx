import { cn } from "@/utils/cn";
import type { FC, PropsWithChildren } from "react";

export interface CardMessageProps extends PropsWithChildren {
    className?: string;
}

/**
 * Renders a card message with the provided children.
 */
const CardMessage: FC<CardMessageProps> = ({ className, children }) => (
    <div
        className={cn(
            "bg-white border-gray-200 rounded-lg px-8 py-6 mt-12 shadow-md dark:bg-slate-800 dark:text-slate-400",
            className,
        )}
    >
        <div className="text-lg font-semibold text-center mx-auto dark:text-slate-200 max-w-80">
            {children}
        </div>
    </div>
);

export { CardMessage };
