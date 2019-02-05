import authReducer from '../../reducers/authReducer';

test('should login app',()=>{
    const action={type:'LOGIN', uid:'123'};
    const newState=authReducer({},action);
    expect(newState).toEqual({uid:'123'});
});

test('should loginOut app',()=>{
    const action={type:'LOGOUT'};
    const newState=authReducer({uid:'123'},action);
    expect(newState).toEqual({});
});