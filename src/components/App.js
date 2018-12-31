import React from 'react'
import Header from './Header'
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"


class App extends React.Component {

    constructor() {
        super()
        this.state = {
            isVisible: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
        
    }

    clickHandler = (event) => {
        const targetElement = event.target.getAttribute('data-view-visibility')
        // console.log(targetElement)
        this.setState(prevState => {
            return {
                isVisible: targetElement,
            }
        })
    }
    

    render() {
        // console.log(this.state.isVisible==="ABOUT")
        return (
            <div>
                <Header clickHandler={this.clickHandler} />
                
                <About visibility={this.state.isVisible==="ABOUT"}/>
                <Contact visibility={this.state.isVisible==="CONTACT"}/>
                <Portfolio visibility={this.state.isVisible==="PORTFOLIO"}/>
                
   
            </div>
        )
        
        
    }
    
}

export default App