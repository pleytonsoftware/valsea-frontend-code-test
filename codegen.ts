import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    documents: "src/**/*.ts*",
    schema: "schema.graphql",
    overwrite: true,
    generates: {
        "src/generated/graphql.ts": {
            plugins: [
                {
                    typescript: {},
                },
                "typescript-operations",
            ],
        },
    },
};

export default config;
