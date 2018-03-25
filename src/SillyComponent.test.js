import SillyComponent from './SillyComponent';
import React from "react";
import Enzyme from "enzyme"
import { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("<SillyComponent />", () => {
    it("renders a ul", () => {
        const comp = shallow(<SillyComponent />);
        expect(comp.find('ul').length).toEqual(1);
    });
    it("should render a list of the users", () => {
        const comp = shallow(<SillyComponent />);
        comp.setState({ users: [{ username: "Peter", id: 'peter' }] });
        expect(comp.find('li').length).toEqual(1);
    });

    it("should not render a list of the users if none are given", () => {
        const comp = shallow(<SillyComponent />);
        expect(comp.find('li').length).toEqual(0);
    });

});
