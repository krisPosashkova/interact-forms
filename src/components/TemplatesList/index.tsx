import TagsList from "@/components/UI/Tags/TagsList";

export default function TemplatesList() {
    const mockTags = [
        { id: 1, name: "Education" },
        { id: 2, name: "Art" },
    ];
    return (
        <>
            <TagsList tags={mockTags} />
        </>
    );
}
