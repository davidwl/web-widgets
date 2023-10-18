import { createElement, ReactElement } from "react";

import { LayoutGrid as LayoutgridComponent } from "./components/LayoutGrid";
import { LayoutGridContainerProps } from "../typings/LayoutGridProps";

export default function LayoutGrid(props: LayoutGridContainerProps): ReactElement {
    const { content, name, tabIndex, style, class: className } = props;

    return (
        <LayoutgridComponent name={name} tabIndex={tabIndex} style={style} className={className}>
            {content}
        </LayoutgridComponent>
    );
}
