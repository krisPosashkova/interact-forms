import { usePathname } from "next/navigation";

export function useActiveTag(id?: number | string) {
    const pathname = usePathname();

    const hrefTag = !id ? "/" : `/tags/${id}`;

    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");

    const isActive = !id
        ? pathWithoutLocale === "/" || pathWithoutLocale === ""
        : pathWithoutLocale === `/tags/${id}`;

    return { hrefTag, isActive };
}
