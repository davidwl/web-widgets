import { createElement, ReactElement } from "react";

import { LayoutGridRow as LayoutgridRowComponent } from "./components/LayoutGridRow";
import { LayoutGridRowContainerProps } from "../typings/LayoutGridRowProps";

export default function LayoutGridRow(props: LayoutGridRowContainerProps): ReactElement {
    const { horizontalAlignment, content, class: className, ...rowProps } = props;

    return (
        <LayoutgridRowComponent className={className} {...rowProps}>
            {content}
        </LayoutgridRowComponent>
    );
}
