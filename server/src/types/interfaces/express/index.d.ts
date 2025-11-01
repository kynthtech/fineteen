import "express";
import { Types } from "mongoose";

declare module "express" {
  export interface Request {
    student?: {
      id: Types.ObjectId;
      name: string;
      classStandard: string;
      school: Types.ObjectId;
      section: string;
    };
    admin?: {
      id: Types.ObjectId;
      username: string;
    };
  }
}
