import React, { useState, useEffect } from 'react'
import StrengthLevel from '../../components/Home/StrengthLevel'
import StrengthMessage from '../../components/Home/StrengthMessage';
import TimeMessage from '../../components/Home/TimeMessage';
import SuggestMessage from '../../components/Home/SuggestMessage';

// STYLING
import './Index.scss';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            inputText: '',
            isLoaded: false,
            showPass: false,
            items: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.visiblePass = this.visiblePass.bind(this);
    }

    // Trigger function for key in changes.
    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }

    // Trigger function for hide/show the text.
    visiblePass() {
        if(this.state.showPass == true) {
            this.setState({ showPass: false})
        }
        else {
            this.setState({ showPass: true})
        }
    }

    // React Lifecycle, executes when state/objects is updated.
    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputText !== this.state.inputText) {
            fetch("https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength", {
                method: 'POST',
                body: JSON.stringify({
                    password: this.state.inputText,
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true, error
                    })
                },
            )
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;

        // When error occurs
        if(error) {
            return (
                <div className="main">
                    <div className="main__inner">
                        <h1 className="main__innerTitleText">Is your password<br /> strong enough?</h1>
                        <div className="main__innerInputCont">
                            <input className="main__innerInput" type={(this.state.showPass) ? 'text' : 'password'} placeholder="Type a password" onChange={this.handleChange}  />
                            <div className="main__innerInputHidden" onClick={this.showPass}>HIDE</div>
                        </div>
                        <div className="main__innerBottom">
                            <p>Password is required</p>
                        </div>
                    </div>
                </div>
            )
        }
        // On load
        else if(!isLoaded) {
            return (
                <div className="main">
                    <div className="main__inner">
                        <h1 className="main__innerTitleText">Is your password<br /> strong enough?</h1>
                        <div className="main__innerInputCont">
                            <input className="main__innerInput" type={(this.state.showPass) ? 'text' : 'password'} placeholder="Type a password" onChange={this.handleChange}  />
                            <div className="main__innerInputHidden" onClick={this.showPass}>HIDE</div>
                        </div>
                    </div>
                </div>
            )
        }

        // Once the data is retrieved, load the results
        else {
            return (
                <div className="main">
                    <div className="main__inner">
                        <h1 className="main__innerTitleText">Is your password<br /> strong enough?</h1>
                        <div className="main__innerInputCont">
                            <input className="main__innerInput" type={(this.state.showPass) ? 'text' : 'password'} placeholder="Type a password" onChange={this.handleChange}  />
                            <div className="main__innerInputHidden" onClick={this.visiblePass}>HIDE</div>
                        </div>
                        <div className="main__innerBottom">
                            <StrengthLevel level={this.state.items.score} />
                            <StrengthMessage level={this.state.items.score} />
                            <TimeMessage message={this.state.items.guessTimeString} warningText={this.state.items.warning} />
                            <SuggestMessage message={this.state.items.suggestions} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Home