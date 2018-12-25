import React from 'react';
import {shallow} from 'enzyme';
import NotFoundComponentTemplate from '../../components/NotFoundComponent.js';

test('should render NotFoundComponent',()=>{
       const wrapper=shallow(<NotFoundComponentTemplate/>);
       expect(wrapper).toMatchSnapshot();
});