"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "~/hooks/use-toast";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isValid } = form.formState;

  async function onSubmit(values: {
    name: string;
    email: string;
    message: string;
  }) {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      toast({
        title: "Success",
        variant: "default",
        description: "Thank you! Your message has been sent.",
      });
      console.log("Email sent successfully:", result.text);

      // Reset form fields after successful submission
      form.reset();
    } catch (error: unknown) {
      toast({
        title: "Error",
        variant: "destructive",
        description:
          "There was an issue sending your message. Please try again later.",
      });
      console.log("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input
                  placeholder="your name"
                  className="normal-case"
                  {...field}
                />
              </FormControl>
              <FormDescription>please enter your full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your email"
                  className="normal-case"
                  {...field}
                />
              </FormControl>
              <FormDescription>i&apos;ll use this to reach you</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="your message"
                  className="normal-case"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                share your thoughts or inquiries
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-fit"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="w-12 animate-spin" size={16} />
          ) : (
            "submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
