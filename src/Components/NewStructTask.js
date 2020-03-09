import React, { Component } from 'react'

export default class NewStructTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testArray: [{ id: 1, value: 3 }, { id: 2, value: 7 }, { id: 3, value: 3 }, { id: 4, value: 1 }, { id: 5, value: 4 }],
            result: '',
        };
        this.handlePathChange = this.handlePathChange.bind(this);
    }
    handlePathChange(event) {
        this.setState({ testPath: event.target.value });
    }


    newStruct = (arr) => {
        let valuesArray = [];
        //Extracting the values of each struct and saving it in a separate array
        arr.map(struct => { valuesArray.push(struct.value) });
        //Sorting the extracted values
        valuesArray.sort();

        for (let i = 0; i < valuesArray.length - 1; i++) {
            //Finding a smaller integer that appears at least twice
            if (valuesArray[i] === valuesArray[i + 1]) {
                //When the smaller duplicate integer is found, check if its increment exists
                //by getting rid of duplicates and comparing it to the next values
                let temp = Array.from(new Set(valuesArray));
                for (let j = i; j < temp[temp.length - 1]; j++) {
                    if (temp[j] + 1 !== temp[j + 1])
                        return { id: this.uniqueID(), value: temp[j] + 1 };
                }
            }
        }
        return "There are no duplicate integeres in this array of structs.";
    }

    uniqueID = () => {
        return ('_' + Math.random().toString(36).substr(2, 9));
    }

    render() {
        return (
            <div>
                <p>Test array: {JSON.stringify(this.state.testArray)}</p>
                <button style={{ height: 24, width: 60 }}
                    onClick={() => {
                        console.log(JSON.stringify(this.newStruct(this.state.testArray)));
                        this.setState({ result: JSON.stringify(this.newStruct(this.state.testArray)) })
                    }}
                >
                    Try it
                </button>
                <p>Result: {this.state.result}</p>
            </div>
        )
    }
}