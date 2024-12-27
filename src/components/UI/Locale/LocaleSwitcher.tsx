"use client";

import { memo } from "react";
import { routing } from "@/i18n/routing";
import { Select, MenuItem } from "@mui/material";
import useLocaleSwitcher from "@/hooks/useLocaleSwither";
import { localeSwitcherStyles } from "@/components/UI/Locale/styled/localeSwitcherStyles";

function LocaleSwitcher() {
    const { t, locale, handleLocaleChange } = useLocaleSwitcher();

    return (
        <Select
            value={locale}
            onChange={handleLocaleChange}
            variant="outlined"
            size="small"
            sx={localeSwitcherStyles.root}
        >
            {routing.locales.map((cur) => (
                <MenuItem key={cur} value={cur}>
                    {t(cur)}
                </MenuItem>
            ))}
        </Select>
    );
}

export default memo(LocaleSwitcher);