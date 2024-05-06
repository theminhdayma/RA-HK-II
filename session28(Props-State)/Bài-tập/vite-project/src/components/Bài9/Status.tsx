import React, { Component } from 'react';

interface StatusList {
    theme: string,
    language: string,
}

export default class Status extends Component<any, StatusList> {
    constructor(props: any) {
        super(props);
        this.state = {
            theme: "light",
            language: "english"
        };
    }

    nextClick = () => {
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        const newLanguage = this.state.language === "english" ? "VietNamese" : "english";

        this.setState({
            theme: newTheme,
            language: newLanguage
        });
    };

    render() {
        return (
            <div>
                <div>
                    <p>Nền: {this.state.theme}</p>
                    <p>Ngôn ngữ: {this.state.language}</p>
                </div>
                <button onClick={this.nextClick}>Next</button>
            </div>
        );
    }
}
