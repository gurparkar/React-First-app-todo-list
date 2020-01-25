console.log("App.js is running here in this!")

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}
const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1> Count: {count}</h1>
        <button onClick = {addOne} id = "my-id" className = "button">+1</button>
        <button onClick = {minusOne} id = "my-id1" className = "button">-1</button>
        <button onClick = {reset} id = "my-id2" className = "button">reset</button>
        </div>
    )
    var appRoot = document.getElementById('app')
     ReactDOM.render(templateTwo, appRoot) 

}

var template = 
(<div>
<h1>This is JSX from App.jS</h1>
<p>Hello</p>
</div>)

renderCounterApp();

const yeser = (method) => {
    console.log("djaklfjdjl")
    console.log(method)
}

yeser(5)
