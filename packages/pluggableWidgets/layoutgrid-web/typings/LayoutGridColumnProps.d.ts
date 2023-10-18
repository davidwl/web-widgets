/**
 * This file was generated from LayoutGridColumn.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type VerticalAlignmentEnum = "none" | "start" | "center" | "end";

export interface LayoutGridColumnContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    weight: number;
    tabletWeight: number;
    phoneWeight: number;
    previewWidth: number;
    verticalAlignment: VerticalAlignmentEnum;
    content: ReactNode;
}

export interface LayoutGridColumnPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    weight: number | null;
    tabletWeight: number | null;
    phoneWeight: number | null;
    previewWidth: number | null;
    verticalAlignment: VerticalAlignmentEnum;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
