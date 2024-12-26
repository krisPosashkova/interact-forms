"use client";

import React from "react";
import DynamicForm from "../index";
import {useAuthFormFields} from "./useAuthFormFields";
import {loginWithCreds} from "@/app/actions/auth";

import {FieldValues} from "react-hook-form";
import {FormContent} from "@/types/components/form.types";
import {useRouter} from "@/i18n/routing";

const FormSignIn = ({t}: { t: FormContent }) => {
    const {signInFields} = useAuthFormFields();
    const router = useRouter();
    const handleLogin = async (data: FieldValues) => {
        const login = await loginWithCreds(data);

        if (login.success) {
            console.log(login, "login success");
            router.push("/")
            return {success: true, message: login.message};
        } else {
            return {success: false, message: login.error};
        }
    };

    const {title, description} = t;
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
