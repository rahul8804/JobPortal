import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log("token", token);
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            })
        }
        const docodeToken = await jwt.verify(token, process.env.SECRET_KEY);
        console.log(docodeToken);
        if (!docodeToken) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            })
        }
        req.id = docodeToken.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}