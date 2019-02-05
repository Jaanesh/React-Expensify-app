import React from 'react';
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header}from '../../components/HeaderComponent.js';


test('should render header correctly',()=>{
        const wrapper=shallow(<Header startLogout={()=>{}} />);
        expect(wrapper).toMatchSnapshot();
        //expect(toJSON(wrapper)).toMatchSnapshot();

       // expect(wrapper.find('h2').text()).toBe('Expensify');
       /*const reactShallowRendererObject=new ReactShallowRenderer();
         reactShallowRendererObject.render(<Header/>);
         expect(reactShallowRendererObject.getRenderOutput()).toMatchSnapshot();
         console.log(reactShallowRendererObject.getRenderOutput());*/
});

test('should call start logout on button click',()=>{
      let startLogout=jest.fn();
      const wrapper=shallow(<Header startLogout={startLogout} />);
      wrapper.find('button').simulate('click');
      expect(startLogout).toHaveBeenCalled();
});
