import React from 'react';
import {shallow} from 'enzyme';
import DashboardComponentTemplate from '../../components/DashBoardComponent.js';

test('should render DashBoardComponent',()=>{
    const wrapper=shallow(<DashboardComponentTemplate/>);
    expect(wrapper).toMatchSnapshot();
});