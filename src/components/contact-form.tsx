import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Button, Textarea } from "@shadcn/ui"; // Assuming you have these components available
import { contactFormSchema, ContactFormData } from "./path-to-schema";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Name</label>
        <Input id="name" {...register("name")} placeholder="Your name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Your email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Your message"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
