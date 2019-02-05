import {login,logOut} from '../../actions/auth';

test('should login action',()=>{
    const actionObject=login('123');
    expect(actionObject).toEqual({
        type:'LOGIN',
        uid:'123'
    });
});

test('should logOut action',()=>{
    const actionObject=logOut();
    expect(actionObject).toEqual({
        type:'LOGOUT'        
    });
});