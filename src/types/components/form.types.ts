import {
    FieldValues,
    UseFormRegister,
    FieldError,
    FieldErrorsImpl,
} from "react-hook-form";
import * as z from "zod";
import FormField from "@/components/Forms/FormField";

export interface DynamicField extends FormField {
    validation: z.ZodTypeAny;
}

export interface FormContent {
    title: string;
    description?: string;
}

export type FormProps<T extends FieldValues> = {
    content: FormContent;
    fields: DynamicField[];

    onSubmit: (data: T) => Promise<{ success: boolean; message: string }>;
};

export type FormField = {
    name: string;
    label: string;
    type: string;
};

export type FormFieldProps<T extends FieldValues> = {
    field: FormField;
    register: UseFormRegister<T>;
    error?: FieldError | FieldErrorsImpl<T>[string];
};
