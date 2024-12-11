import FormSignUp from "@/components/Forms/Auth/SignUp";
import AuthLayout from "@/components/Layout/AuthLayout";
import { useAuthProps } from "@/hooks/useAuthProps";

export default function SignIn() {
    const props = useAuthProps("SignIn");

    return (
        <AuthLayout props={props.layout}>
            <FormSignUp t={props.form} />
        </AuthLayout>
    );
}
