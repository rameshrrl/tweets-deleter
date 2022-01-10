export const unknownRoute = (req, res) => {
    res.status(404).send('No such endpoint!');
}