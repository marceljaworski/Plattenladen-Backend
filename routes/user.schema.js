export const postUser = {
    type: "object",
    additionalProperties: true,
    properties: {
        email: {type: "string", format: "email"},
        password: {type: "string"}
    }
};