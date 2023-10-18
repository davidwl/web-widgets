import { createElement, ReactElement } from "react";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

import { LayoutGridRow } from "./components/LayoutGridRow";
import { LayoutGridRowPreviewProps } from "../typings/LayoutGridRowProps";

export function preview(props: LayoutGridRowPreviewProps): ReactElement {
    const { className, verticalAlignment, spacingBetweenColumns } = props;
    const style = parseStyle(props.style);
    const ContentRenderer = props.content.renderer;

    return (
        <LayoutGridRow
            className={className}
            verticalAlignment={verticalAlignment}
            spacingBetweenColumns={spacingBetweenColumns}
            style={style}
        >
            <ContentRenderer>
                <div />
            </ContentRenderer>
        </LayoutGridRow>
    );
}
