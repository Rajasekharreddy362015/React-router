import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h3>Reactjs-OverView</h3>
                <p>ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition −
                   React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.</p>
            </div>
        );
    }
}

export default About;