import FormSignIn from "@/components/Forms/Auth/SignIn";
import AuthLayout from "@/components/Layout/AuthLayout";
import { useAuthProps } from "@/hooks/useAuthProps";

export default function SignIn() {
    const props = useAuthProps("SignIn");

    return (
        <AuthLayout props={props.layout}>
            <FormSignIn t={props.form} />
        </AuthLayout>
    );
}
