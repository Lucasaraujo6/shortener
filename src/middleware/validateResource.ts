// import { Request, Response, NextFunction } from "express";
// import { AnyZodObject } from "zod";

// const validate =
//   (schema: AnyZodObject) =>
//   (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse({
//         body: req.body,
//         query: req.query,
//         params: req.params,
//       });
//       next();
//     //   return res.status(200);
//     } catch (e: any) {
//       return res.status(400).send(e.errors);
//     }
//   };

// export default validate;