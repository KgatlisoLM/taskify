"use client"

import { Input } from "@/components/ui/input";
import React from "react";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus();



  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FormInput;
