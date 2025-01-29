"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { memo, useCallback, useState } from "react";
import { useForm, type Control } from "react-hook-form";
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

type FormValues = z.infer<typeof formSchema>;

// Memoized form field components for better performance
const NameField = memo(({ control }: { control: Control<FormValues> }) => (
  <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>name</FormLabel>
        <FormControl>
          <Input placeholder="your name" className="normal-case" {...field} />
        </FormControl>
        <FormDescription>please enter your full name.</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
));
NameField.displayName = "NameField";

const EmailField = memo(({ control }: { control: Control<FormValues> }) => (
  <FormField
    control={control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>email</FormLabel>
        <FormControl>
          <Input placeholder="your email" className="normal-case" {...field} />
        </FormControl>
        <FormDescription>i&apos;ll use this to reach you</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
));
EmailField.displayName = "EmailField";

const MessageField = memo(({ control }: { control: Control<FormValues> }) => (
  <FormField
    control={control}
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
        <FormDescription>share your thoughts or inquiries</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
));
MessageField.displayName = "MessageField";

export function ContactForm() {
  const form = useForm<FormValues>({
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

  const onSubmit = useCallback(
    async (values: FormValues) => {
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
        form.reset();
      } catch (error) {
        toast({
          title: "Error",
          variant: "destructive",
          description:
            "There was an issue sending your message. Please try again later.",
        });
        console.error("Failed to send email:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, toast],
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <NameField control={form.control} />
        <EmailField control={form.control} />
        <MessageField control={form.control} />
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
