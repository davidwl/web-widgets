import { createElement, ReactElement } from "react";

import { LayoutGridColumn as LayoutgridColumnComponent } from "./components/LayoutGridColumn";
import { LayoutGridColumnContainerProps } from "../typings/LayoutGridColumnProps";

export default function LayoutGridColumn(props: LayoutGridColumnContainerProps): ReactElement {
    const { content, class: className, ...columnrops } = props;

    return (
        <LayoutgridColumnComponent className={className} {...columnrops}>
            {content}
        </LayoutgridColumnComponent>
    );
}
