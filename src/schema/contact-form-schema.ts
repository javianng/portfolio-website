import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
