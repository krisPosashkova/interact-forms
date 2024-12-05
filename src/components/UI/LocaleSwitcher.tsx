"use client";

import { memo } from "react";
import { routing } from "@/i18n/routing";
import { Select, MenuItem } from "@mui/material";
import useLocaleSwitcher from "@/hooks/useLocaleSwither";

function LocaleSwitcher() {
    const { t, locale, handleLocaleChange } = useLocaleSwitcher();

    return (
        <Select
            sx={{ width: 50, borderBottom: "none" }}
            labelId="locale-switcher-label"
            value={locale}
            onChange={handleLocaleChange}
            variant="standard">
            {routing.locales.map((cur) => (
                <MenuItem key={cur} value={cur}>
                    {t(cur)}
                </MenuItem>
            ))}
        </Select>
    );
}

export default memo(LocaleSwitcher);
