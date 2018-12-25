const add=(a,b)=>a+b;
const generateGreeting=(name)=>`hi ${name}`;

test('add 2 numbers',()=>{
     const result=add(4,4);     
   //  if(result!==7){  throw new Error("result is wrong");   }
     expect(result).toBe(8);
});

test('greetings test',()=>{
   const result=generateGreeting('janaa');
   expect(result).toBe('hi janaa');
});