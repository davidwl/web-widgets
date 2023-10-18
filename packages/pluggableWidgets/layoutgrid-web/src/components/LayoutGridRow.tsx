import { createElement, CSSProperties, PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";
import { VerticalAlignmentEnum } from "../../typings/LayoutGridRowProps";

export interface LayoutGridRowProps {
    name?: string;
    className: string;
    style?: CSSProperties;
    tabIndex?: number;
    verticalAlignment: VerticalAlignmentEnum;
    spacingBetweenColumns: boolean;
}

export function LayoutGridRow(props: PropsWithChildren<LayoutGridRowProps>): ReactElement {
    const { tabIndex, style, className, children } = props;

    return (
        <div tabIndex={tabIndex} style={style} className={classNames(className, "row")}>
            {children}
        </div>
    );
}
