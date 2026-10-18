import jwt from 'jsonwebtoken';
import cookie from 'cookie-parser'


export const  genrateAuthTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'12d'})

    res.cookie("jwt",token,{
        mexAge: 12 * 24 * 60 * 60 * 100, // 12_day
        httpOnly:true,
        semeSite : "secret",
        secure :process.env.NODE_ENV !== "development",
    })
}