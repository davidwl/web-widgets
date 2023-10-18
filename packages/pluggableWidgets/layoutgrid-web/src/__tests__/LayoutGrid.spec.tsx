import { shallow } from "enzyme";
import { createElement, ReactNode } from "react";

import { LayoutGrid, LayoutGridProps } from "../components/LayoutGrid";

describe("LayoutGrid", () => {
    const defaultLayoutGridProps: LayoutGridProps = {
        className: "className",
        style: {},
        tabIndex: 0
    };

    const defaultChildren: ReactNode = <div></div>;

    it("renders children", () => {
        const layoutgrid = shallow(<LayoutGrid {...defaultLayoutGridProps}>{defaultChildren}</LayoutGrid>);

        expect(layoutgrid).toMatchSnapshot();
    });
});
