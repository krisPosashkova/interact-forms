import { usePathname } from "next/navigation";

export function useActiveTag(id?: number | null) {
    const pathname = usePathname();

    const hrefTag = id === -1 ? "/" : `/tags/${id}`;

    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");

    const isActive = id === -1
        ? pathWithoutLocale === "/" || pathWithoutLocale === ""
        : pathWithoutLocale === `/tags/${id}`;

    return { hrefTag, isActive };
}
