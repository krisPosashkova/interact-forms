import { Order } from "@/types/components/table.types";

export function descendingComparator<Key extends keyof T, T>(
    a: T,
    b: T,
    orderBy: Key
): number {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    if (valueA == null || valueB == null) {
        return 0;
    }

    if (valueA < valueB) {
        return 1;
    }
    if (valueA > valueB) {
        return -1;
    }
    return 0;
}

export function getComparator<Key extends keyof T, T>(
    order: Order,
    orderBy: Key
): (a: T, b: T) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
