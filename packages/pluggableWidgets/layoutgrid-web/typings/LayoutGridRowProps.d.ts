/**
 * This file was generated from LayoutGridRow.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type HorizontalAlignmentEnum = "none" | "start" | "center" | "end";

export type VerticalAlignmentEnum = "none" | "start" | "center" | "end";

export interface LayoutGridRowContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    horizontalAlignment: HorizontalAlignmentEnum;
    verticalAlignment: VerticalAlignmentEnum;
    content: ReactNode;
    spacingBetweenColumns: boolean;
}

export interface LayoutGridRowPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    horizontalAlignment: HorizontalAlignmentEnum;
    verticalAlignment: VerticalAlignmentEnum;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    spacingBetweenColumns: boolean;
}
