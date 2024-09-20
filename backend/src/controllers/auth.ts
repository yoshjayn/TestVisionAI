import type { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";

// TODO: Implement password hashing before it is stored in the db.
// TODO: Add proper http error handling.
// TODO: Implement jwt
export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (!userExists) {
    await prisma.user.create({
      data: { email, password },
    });
    res.cookie("jwt", "jwt_token").status(200);
  } else {
    res.status(400);
  }

  return res.send();
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("signin");
};
