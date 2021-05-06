const faunaDb = require('faunadb'), q = faunaDb.query;
const client = new faunaDb.Client({
    secret: process.env.NEXT_PUBLIC_FAUNA_KEY,
    keepAlive: false,
})

export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const {username, password, orgName} = req.body;
            const info = await client.query(
                q.Create(q.Collection("organizations"), {
                    data: {
                        username,
                        password,
                        orgName
                    },
                })
            );
            console.log(info);
            res.send('done');
        } catch (e) {
            console.log(e)
            res.status(400).send(e.message);
        }
    } else res.redirect('/404')
}
