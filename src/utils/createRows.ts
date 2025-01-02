export const createRows = <T>(
    data: Array<T> | null
): T[] => {
    if (!data || data.length === 0) {
        return [];
    }
    return data.map((item) => ({ ...item }));
};
