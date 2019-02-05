import React from 'react';
import {shallow} from 'enzyme';
import {loginPageComponent} from '../../components/LoginpageComponent.js';

test('should render loginpage component',()=>{
      
       const wrapper=shallow(<loginPageComponent  startLogin={()=>{}} />);
       expect(wrapper).toMatchSnapshot();
});

/*  test('should call start login on button click',()=>{
     let startLogin=jest.fn();
     const wrapper=shallow(<loginPageComponent startLogin={startLogin} />);
     wrapper.find('button').simulate('click');
     expect(startLogin).toHaveBeenCalled();
}); */  