import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { SelectChangeEvent } from "@mui/material";

function useLocaleSwitcher() {
    const t = useTranslations("locales");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function handleLocaleChange(event: SelectChangeEvent<string>) {
        const nextLocale = event.target.value;
        router.replace({ pathname }, { locale: nextLocale });
    }

    return {
        t,
        locale,
        handleLocaleChange,
    };
}

export default useLocaleSwitcher;
