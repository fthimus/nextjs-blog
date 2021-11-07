// `req` is an instance of http.IncomingMessage, plus some built middlewares
// `res` is an instance of http.ServerResponse, plus some helper functions

export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
}

{/*
    You should not fetch an API route from `getStaticProps` or `getStaticPaths`. Instead, write your server-side code directly in `getStaticProps` or `getStaticPaths` (or call a helper function)

    `getStaticProps` and `getStaticPaths` runs only on the server-side. It will never be run on the client-side. It won't even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

    A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a `POST` request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.

    ---------------------------------------------
    export default function handler (req, res) {
        const email = req.body.email
    }
    ---------------------------------------------

    Then save email to your database, etc.

    API routes can be dynamic, just like regular pages.
*/}
