export const productSchema = {
    type: "object",
    additionalProperties: false,
};
export const postProductSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        title: {
            type: "string",
        },
        artist: {
            type: "string",
        },
        year: {
            type: "string",
        },
        picture: {
            type: "string",
            format: "url"
        },
        price: {
            type: "string",
        }
    }
};

