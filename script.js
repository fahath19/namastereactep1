// let heading=React.createElement('h1',{id:'heading' },'HELLO WORLD FROM REACT..');
// let root=ReactDOM.createRoot(document.getElementById('root'));
// console.log(heading)
// root.render(heading);


//heading variable --- in {} inside id:'heading' is a attribute


//NESTED HTML IN REACT JS

/*EXAMPLE HTML CODE 

<div id="parent">
    <div id="child">
        <h1>hello</h1>

        //if i want to use a h2 tag 
        <h2>hello</h2>
    </div>
</div>

the code is convert to react code using a html 

*/
//we use a multiple h1 tag in react we use []( array or square bracket)

let nesteddiv=React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{},'H1 TAG FROM CHILD ID'),
React.createElement('h2',{},'H2 TAG FROM CHILD ID')
]))
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(nesteddiv);
console.log(nesteddiv)