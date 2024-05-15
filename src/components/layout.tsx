import type { FC, PropsWithChildren } from "react";

import { Link } from "react-router-dom";

export interface LayoutProps extends PropsWithChildren {
    title?: string;
}

/**
 * Renders the layout component with the main content and footer.
 */
const Layout: FC<LayoutProps> = ({ children, title }) => {
    const year = new Date().getFullYear();

    return (
        <>
            <main className="w-full min-h-screen pt-4 pb-12 md:pb-24 lg:pb-32 bg-gray-100 dark:bg-gray-900 dark:text-slate-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/">
                            <img
                                src="/sw-logo.png"
                                alt="sw-logo"
                                className="w-32 sm:w-48"
                            />
                        </Link>
                        {title && (
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-slate-200">
                                {title}
                            </h2>
                        )}
                        <div className="mt-12">{children}</div>
                    </div>
                </div>
            </main>
            <footer className="bg-gray-200 py-6 dark:bg-gray-800">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {year} Star Wars Characters. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Created by{" "}
                        <a
                            href="https://www.linkedin.com/in/pablo-jose-leyton-lozano-a638b158/"
                            rel="noreferrer"
                            target="_blank"
                            className="underline"
                        >
                            Pablo Leyton
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export { Layout };
