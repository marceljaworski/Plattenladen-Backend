export const postUser = {
    type: "object",
    additionalProperties: false,
    properties: {
        email: {type: "string", format: "email"},
        password: {type: "string"}
    }
};