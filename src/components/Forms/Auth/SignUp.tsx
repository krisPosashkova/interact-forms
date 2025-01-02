"use client";

import React from "react";
import { useAuthFormFields } from "./useAuthFormFields";
import DynamicForm from "../index";
import { FieldValues } from "react-hook-form";
import { FormContent } from "@/types/components/form.types";
import { register } from "@/app/actions/auth";
import { IUser } from "@/types/api/user.type";
import { useRouter } from "@/i18n/routing";


interface FormSignUpProps {
    t: FormContent;
}

const FormSignUp = ({ t }: FormSignUpProps) => {
    const { signUpFields } = useAuthFormFields();
    const router = useRouter();

    const handleRegister = async (
        data: FieldValues
    ): Promise<{ success: boolean; message: string }> => {

        const reg = await register<IUser>(data);

        if (reg.success) {
            console.log(reg, "Registration success");
            router.push("/signin");
            return { success: true, message: reg.message };
        } else {
            return { success: false, message: reg.error };
        }
    };

    const { title, description } = t;
    const content = {
        title,
        description
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
