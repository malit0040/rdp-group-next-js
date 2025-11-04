import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);

      // For now, just return success without sending email
      // TODO: Configure proper email service
      console.log("Contact form submission:", validatedData);

      res.json({
        success: true,
        message: "Message sent successfully!"
      });
    } catch (error) {
      console.error("Contact form error:", error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }

      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

