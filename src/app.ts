/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { SpecialtyRoutes } from "./app/module/specialty/specialty.route";
import { AuthRotes } from "./app/module/auth/auth.route";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/v1/auth", AuthRotes);
app.use("/api/v1/specialties", SpecialtyRoutes);

// Basic route
app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    },
  });
  res.status(201).json({
    success: true,
    message: "API is working",
    data: specialty,
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
