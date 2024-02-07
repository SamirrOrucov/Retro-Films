import jwt from 'jsonwebtoken'

export const authMiddleware = function (roles) {
    return function (req, res, next) {
        try {
            const token = req.headers.authorization
            if (!token) {
                res.status(403).send("you don't have token")
                return
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            if (!roles.includes(decoded.role)) {
                res.status(403).send("you don't have access")
                return
            }
            next()
        } catch (error) {
            res.send(error.message)
        }
      }
}