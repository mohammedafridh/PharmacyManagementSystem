import jwt from "jsonwebtoken";
import AdminModel from '../Models/Admin.js';

export const authMiddleware = async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        try{
           if(token){
            const decoded = jwt.verify(token, process.env.SECRET);
            const admin = await AdminModel.findById(decoded?.id);
            req.admin = admin;
            next();
           }
        }catch(err){
            throw new Error("Authorized token expired. Please login again.");
        }
    }else{
        throw new Error("There is no token attached to header");
    }
};