const slugify = (name?: string | null) =>
    name?.toLowerCase().replace(/ /g, "-");

const getImgSrc = (imageName?: string | null) =>
    `https://pub-fa0e5ffa31a241e8a8ff20bc4ff51a06.r2.dev/${encodeURI(
        slugify(imageName) ?? "no-image",
    )}.jpg`;

export { getImgSrc };
