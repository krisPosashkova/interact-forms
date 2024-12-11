"use client";

import React from "react";
import DynamicForm from "../index";
import { useAuthFormFields } from "./useAuthFormFields";

import { FieldValues } from "react-hook-form";
import { FormContent } from "@/types/components/form.types";

const handleLogin = async (
    data: FieldValues
): Promise<{ success: boolean; message: string }> => {
    console.log("Login", data);
    return { success: true, message: "User login successfully" };
};

interface FormSignInProps {
    t: FormContent;
}

const FormSignIn = ({ t }: FormSignInProps) => {
    const { signInFields } = useAuthFormFields();

    const { title, description } = t;
    const content = {
        title,
        description,
    };
    return (
        <DynamicForm
            content={content}
            fields={signInFields}
            onSubmit={handleLogin}
        />
    );
};

export default FormSignIn;
