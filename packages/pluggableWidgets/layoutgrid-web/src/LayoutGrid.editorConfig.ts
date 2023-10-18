import {
    DropZoneProps,
    RowLayoutProps,
    StructurePreviewProps,
    structurePreviewPalette
} from "@mendix/widget-plugin-platform/preview/structure-preview-api";
import { LayoutGridPreviewProps } from "../typings/LayoutGridProps";

export function getPreview(values: LayoutGridPreviewProps, isDarkMode: boolean): StructurePreviewProps | null {
    const palette = structurePreviewPalette[isDarkMode ? "dark" : "light"];
    return {
        type: "Container",
        borders: true,
        borderWidth: 1,
        children: [
            {
                type: "Container",
                backgroundColor: palette.background.topbarStandard,
                children: [
                    {
                        type: "Container",
                        padding: 10,
                        children: []
                    }
                ]
            },
            {
                type: "RowLayout",
                children: [
                    {
                        type: "DropZone",
                        property: values.content,
                        placeholder: "Place LayoutGridRow here"
                    } as DropZoneProps
                ]
            } as RowLayoutProps
        ]
    };
}
