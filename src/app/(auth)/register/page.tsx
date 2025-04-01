"use client";

import { zodResolver } from "@hookform/resolvers/zod"; // Required for schema validation
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  fullname: z.string().min(4, {
    message: "Fullname must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Email is not valid",
  }),
  password: z.string().min(6, {
    message: "Password at leaset 6 charecters",
  }),
});

export default function Resister() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: {
    fullname: string;
    email: string;
    password: string;
  }) => {
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-1/3 m-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:border-1 p-6 rounded-2xl md:shadow-md"
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-md">
              <span>Aleady have an account?</span> {"  "}
              <Link className="text-blue-500" href="/login">
                login
              </Link>
            </p>
            <Button type="submit">Register</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
