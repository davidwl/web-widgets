import { createElement, CSSProperties, PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";
import { VerticalAlignmentEnum } from "../../typings/LayoutGridColumnProps";

export interface LayoutGridColumnProps {
    name?: string;
    className: string;
    style?: CSSProperties;
    tabIndex?: number;
    weight: number;
    tabletWeight: number;
    phoneWeight: number;
    verticalAlignment: VerticalAlignmentEnum;
}

export function LayoutGridColumn(props: PropsWithChildren<LayoutGridColumnProps>): ReactElement {
    const { tabIndex, style, className, weight, tabletWeight, phoneWeight, children } = props;

    return (
        <div
            tabIndex={tabIndex}
            style={style}
            className={classNames(
                className,
                "col col-sm col-md col-lg col-xl",
                {
                    [`col-md-${weight}`]: weight > 0 && weight <= 12
                },
                {
                    [`col-lg-${weight}`]: weight > 0 && weight <= 12
                },
                {
                    [`col-xl-${weight}`]: weight > 0 && weight <= 12
                },
                {
                    [`col-sm-${phoneWeight}`]: phoneWeight > 0 && phoneWeight <= 12
                },
                {
                    [`col-md-${tabletWeight}`]: tabletWeight > 0 && tabletWeight <= 12
                },
                {
                    [`col-lg-${tabletWeight}`]: tabletWeight > 0 && tabletWeight <= 12
                },
                {}
            )}
        >
            {children}
        </div>
    );
}
