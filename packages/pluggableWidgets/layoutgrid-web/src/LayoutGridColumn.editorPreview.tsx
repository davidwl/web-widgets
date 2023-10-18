import { createElement, ReactElement } from "react";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

import { LayoutGridColumn } from "./components/LayoutGridColumn";
import { LayoutGridColumnPreviewProps } from "../typings/LayoutGridColumnProps";

export function preview(props: LayoutGridColumnPreviewProps): ReactElement {
    const { className, verticalAlignment, weight, tabletWeight, phoneWeight } = props;
    const style = parseStyle(props.style);
    const ContentRenderer = props.content.renderer;

    return (
        <LayoutGridColumn
            className={className}
            verticalAlignment={verticalAlignment}
            weight={weight ?? 0}
            tabletWeight={tabletWeight ?? 0}
            phoneWeight={phoneWeight ?? 0}
            style={style}
        >
            <ContentRenderer>
                <div />
            </ContentRenderer>
        </LayoutGridColumn>
    );
}
