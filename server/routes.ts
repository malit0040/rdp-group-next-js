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

app.get("/test", (req, res) => {
  res.send("GET request working!");
});

  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);

      // For now, just return success without sending email
      // TODO: Configure proper email service
      console.log("Contact form submission:", validatedData);


let p = process.env.EMAIL_PASSWORD;
console.log(p);

      // Create SMTP transporter with Hostinger settings
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 587,
        secure: false, // true for 465, false for 587
        auth: {
          user: process.env.EMAIL_USER || "support@rdp-ksa.com",
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER || "support@rdp-ksa.com",
        to: "support@rdp-ksa.com", // Send to your support email
        replyTo: validatedData.email,
        subject: `Contact Form: ${validatedData.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #024442;">New Contact Form Submission</h2>
            
            <div style="background-color: #f6f7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-left: 4px solid #1bc195;">
              <h3 style="color: #024442; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
            
            <p style="color: #666; font-size: 12px;">
              This email was sent from the RdP Group contact form on ${new Date().toLocaleString()}.
            </p>
          </div>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);



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
