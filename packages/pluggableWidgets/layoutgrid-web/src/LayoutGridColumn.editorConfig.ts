import {
    DropZoneProps,
    RowLayoutProps,
    StructurePreviewProps,
    structurePreviewPalette
} from "@mendix/widget-plugin-platform/preview/structure-preview-api";
import { LayoutGridColumnPreviewProps } from "../typings/LayoutGridColumnProps";

export function getPreview(values: LayoutGridColumnPreviewProps, isDarkMode: boolean): StructurePreviewProps | null {
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
                        placeholder: "Place Contents here"
                    } as DropZoneProps
                ]
            } as RowLayoutProps
        ]
    };
}
