import express, {Request ,Response}  from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
//@ts-ignore
 const middleware = 
 ({name}:{name: string}) => 
 (req: Request,res:Response, next: NextFunction) =>{
//@ts-ignore
    req.name =name;  
    
    next();
 };

 app.use(middleware({name: 'TomDoesTech'}));

 routes(app);

app.listen(3000, () =>{
    console.log('Appliction listening at http://localhost:3000');
});