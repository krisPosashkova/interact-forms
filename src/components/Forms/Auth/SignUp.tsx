"use client";

import React from "react";
import { useAuthFormFields } from "./useAuthFormFields";
import DynamicForm from "../index";
import { FieldValues } from "react-hook-form";
import { FormContent } from "@/types/components/form.types";

const handleRegister = async (
    data: FieldValues
): Promise<{ success: boolean; message: string }> => {
    console.log("Register", data);
    return { success: true, message: "User registered successfully" };
};

interface FormSignUpProps {
    t: FormContent;
}

const FormSignUp = ({ t }: FormSignUpProps) => {
    const { signUpFields } = useAuthFormFields();
    const { title, description } = t;
    const content = {
        title,
        description,
    };
    return (
        <DynamicForm
            content={content}
            fields={signUpFields}
            onSubmit={handleRegister}
        />
    );
};

export default FormSignUp;
