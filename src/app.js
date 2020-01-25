console.log("App.js is running here in this!")

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [1,2]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.options.value;
    console.log(e.target)


    if (option){
        app.options.push(option)
        e.target.elements.options.value = ''
        render()
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const numbers = [55, 101, 1000]

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    const template = 
        <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? 'Here are your options': 'No options'}</p>
        <button disabled={app.options.length ==0} onClick = {onMakeDecision}>What should i do ?</button>
        
        <button onClick = {onRemoveAll}>Remove All</button>
        {
           // [99,98,97,"mike smith", null, undefined, true]
        }
        <br></br>
        {
            //[<p key = "1">q</p>,<p key = "2">r</p>,<p key = "3">s</p>]
         }
        {
            //    numbers.map((number) =>{
            //     return <p key = {number}>Number: {number}</p>
            // })
        }
        <ol>
        {
            app.options.map((option) =>{
                return <li key = {option}>{option}</li>
            })
        }
        </ol>
        <form onSubmit = {onFormSubmit}>
              <input type = "text" name ="options"/>
              <button >Add Option</button>
        </form>
    
        </div>
    
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot) 

}

render()
