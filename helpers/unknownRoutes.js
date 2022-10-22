import { generateResponse } from "./response.js";

export const unknownRoute = (req, res) => {
    res.status(404).send(generateResponse('No such endpoint!'));
}