"use client";

import { useState, ChangeEvent } from "react";
import { useTranslations } from "next-intl";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [results, setResults] = useState<
        { id: number; title: string; description: string }[]
    >([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const search = useTranslations("Search");
    const event = useTranslations("Event");

    const content = {
        title: search("title"),
        placeholder: search("placeholder"),
        noResult: search("noResult"),
        close: event("close"),
    };

    //temporary data
    const dataStub = [
        {
            id: 1,
            title: "Template 1",
            description: "Description for template 1",
        },
        {
            id: 2,
            title: "Template 2",
            description: "Description for template 2",
        },
        {
            id: 3,
            title: "Template 3",
            description: "Comment about this template",
        },
    ];

    const handleSearch = (query: string) => {
        if (!query) {
            setResults([]);
            return;
        }

        setIsLoading(true);

        // Full-text search emulation
        const searchResults = dataStub.filter(
            (item) =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(searchResults);
        setIsLoading(false);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    return {
        isLoading,
        content,
        searchTerm,
        results,
        handleInputChange,
        handleSearch,
    };
};
