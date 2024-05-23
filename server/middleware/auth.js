import jwt from 'jsonwebtoken';


// this function if to verifyToken and acts a middleware
export const verifyToken = async (req, res, next) => {
    try {

        //this token variable will grab header named authorization that we will process here as part of middleware
        let token = req.header("Authorization");
        if(!token) return res.status(403).send("Access Denied");

        if(token.startWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;

        next();


    }
    catch(err){
        res.status(500).json({err: err.message})
    }
}