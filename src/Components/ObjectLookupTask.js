import React, { Component } from 'react'

export default class ObjectLookupTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testObject: { property1: { property2: "Apple", property3: "Orange" } },
            testPath: 'property1.property2',
            result: '',
        };
        this.handlePathChange = this.handlePathChange.bind(this);
    }
    handlePathChange(event) {
        this.setState({ testPath: event.target.value });
    }


    lookup = (obj, path) => {
        //variable for separating the different property keys
        let pathArray;
        pathArray = path.split('.');

        if (pathArray.length < 2) {
            //if the path is only one layer deep, return the value immediately
            if (obj[path])
                return obj[path];
            else return 'Nothing was found at the specified path';
        }
        else {
            //if the path has multiple layers, itterate through them

            //regular expression matching a valid multi-layer lookup path
            const reg = /(?:\s|^)((?:[a-zA-Z_$]+[\w$]*)(?:\.[a-zA-Z_$]+[\w$]*)+)(?:\s|$)/;
            if (reg.test(path)) {
                //if lookup path is valid, split it into the array
                pathArray = path.split('.');
                console.log('path array: ' + pathArray);
            }
            else return 'Error: not a valid lookup path';

            let temp = obj[pathArray[0]];
            for (let i = 1; i < pathArray.length; i++) {
                temp = temp[pathArray[i]];
            }
            if (temp)
                return temp;
            else return 'Nothing was found at the specified path';
        }
    }

    render() {
        return (
            <div>
                <p>Test object: {JSON.stringify(this.state.testObject)}</p>
                <p>Test path: {this.state.testPath}</p>
                <input placeholder="Change test path" value={this.state.testPath} onChange={this.handlePathChange} />
                <button style={{ height: 24, width: 60 }}
                    onClick={() => {
                        console.log(JSON.stringify(this.lookup(this.state.testObject, this.state.testPath)));
                        this.setState({ result: JSON.stringify(this.lookup(this.state.testObject, this.state.testPath)) })
                    }}
                >
                    Try it
                </button>
                <p>Result: {this.state.result}</p>
            </div>
        )
    }
}