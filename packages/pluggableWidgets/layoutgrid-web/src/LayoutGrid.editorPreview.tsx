import { createElement, ReactElement } from "react";
import { parseStyle } from "@mendix/widget-plugin-platform/preview/parse-style";

import { LayoutGrid } from "./components/LayoutGrid";
import { LayoutGridPreviewProps } from "../typings/LayoutGridProps";

export function preview(props: LayoutGridPreviewProps): ReactElement {
    const { className } = props;
    const style = parseStyle(props.style);
    const ContentRenderer = props.content.renderer;

    return (
        <LayoutGrid className={className} style={style}>
            <ContentRenderer>
                <div />
            </ContentRenderer>
        </LayoutGrid>
    );
}
