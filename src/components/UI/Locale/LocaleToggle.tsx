"use client";

import React, { memo } from "react";
import { routing } from "@/i18n/routing";
import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import useLocaleSwitcher from "@/hooks/useLocaleSwither";
import { localeToggleStyles } from "@/components/UI/Locale/styled/localeToggleStyles";

function LocaleSwitcher() {
    const { t, locale, handleLocaleToggle } = useLocaleSwitcher();

    return (
        <>
            <ToggleButtonGroup
                value={locale}
                sx={localeToggleStyles.root}
                exclusive
                onChange={handleLocaleToggle}
                aria-label="locale toggle"
            >
                {routing.locales.map((loc, index) => (
                    <React.Fragment key={loc}>
                        {index > 0 && <Typography sx={localeToggleStyles.divider} />}
                        <ToggleButton value={loc}>
                            {t(loc)}
                        </ToggleButton>
                    </React.Fragment>
                ))}

            </ToggleButtonGroup>

        </>

    );

}

export default memo(LocaleSwitcher);