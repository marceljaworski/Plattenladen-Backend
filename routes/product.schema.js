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
            type: "number",
        },
        picture: {
            type: "string",
            format: "url"
        },
        price: {
            type: "number",
        }
    }
};

