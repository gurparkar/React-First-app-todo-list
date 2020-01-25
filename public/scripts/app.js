console.log("App.js is running here in this!");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [1, 2]
};

const onFormSubmit = e => {
    e.preventDefault();

    const option = e.target.elements.options.value;
    console.log(e.target);

    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
    const template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should i do ?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement('br', null),
        React.createElement(
            'ol',
            null,
            app.options.map(option => {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'options' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
