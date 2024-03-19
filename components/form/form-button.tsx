"use client";

import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Peddana } from "next/font/google";

interface FormSubmitProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
};


export const FormSubmit = ({
    children,
    disabled,
    className,
    variant

}: FormSubmitProps) =>  {
    const {pending }  =  useFormStatus();

    return(
        <Button  disabled={pending || disabled} type="submit" variant={variant}  size="sm" className={cn(className)}>
            {children}
        </Button>
    )
}