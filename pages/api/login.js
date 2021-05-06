const faunaDb = require('faunadb'), q = faunaDb.query;
const client = new faunaDb.Client({
    secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
    keepAlive: false,
})
export default function handler(req, res) {
    if (req.method === 'POST') {
        res.send(req.body)
    } else res.redirect('/404')
}
