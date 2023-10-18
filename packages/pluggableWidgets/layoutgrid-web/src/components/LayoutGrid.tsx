import { createElement, CSSProperties, PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";

export interface LayoutGridProps {
    name?: string;
    className: string;
    style?: CSSProperties;
    tabIndex?: number;
}

export function LayoutGrid(props: PropsWithChildren<LayoutGridProps>): ReactElement {
    const { tabIndex, style, className, children } = props;

    return (
        <div tabIndex={tabIndex} style={style} className={classNames(className, "mx-layoutgrid")}>
            {children}
        </div>
    );
}
