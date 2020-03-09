const initialState = {
    groceries: [],
    groceryCount: 0,
    currentTask: 0,
    editWindow: {},
    tasks: [
        {
            name: "",
            shortName: "",
            color: "#0f0f19",
            description: "",
            example: "",
            solution: "",
            github: "",
        },
        {
            name: "Object Lookup",
            shortName: "OL",
            color: "#ffc03a",
            description: `Write a function that takes a object and a string, which represents an object lookup path, for example
            "property1.property2". The function should return the value on the specific path. Take care of error
            handling.`,
            example: `
const lookup = (obj, path) => {....}
const object = { property1: { property2: "Apple", property3: 'Orange' } };
const path = 'property1.property2'
console.log(lookup(object, path));

Result: 'Apple'
            `,
            solution: `
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
            `,
            github: "https://github.com/ZulianTiger/ant-tasks/blob/master/src/Components/ObjectLookupTask.js",
        },
        {
            name: "Grocery List",
            shortName: "GL",
            color: "#e36397",
            description: `Create a simple CRUD application, using react, redux, redux saga and other technologies that you see fit.
            The app needs to be simple, have a view where all the items are displayed (new, edit and delete button)
            and a view to create/edit the items. You don't have to create the API, mock it on the frontend, without
            using external libraries or services.`,
            example: `
You can create a grocery list
            `,
            solution: "",
            github: "https://github.com/ZulianTiger/ant-tasks/blob/master/src/Containers/GroceryListContainer.js",
        },
        {
            name: "New Struct",
            shortName: "NS",
            color: "#731dd8",
            description: `For a random array of structs of type { id, value }, return a new struct, with a unique id and a value
            such as the next positive integer, which isn't present in the existing structure list and with at least one
            smaller integer appearing at least twice in the same list.`,
            example: `
a = [{id:1, value:3}, {id:2, value:7}, {id:3, value:3}, {id:4, value:1}, {id:5, value:4}]
value: 1 - appears 1 time
value 3 - appears 2 times
value 4 - appear 1 time
value 7 - appears 1 time

Solution: {id: 6, value: 5}
            `,
            solution: `
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
            `,
            github: "",
        }
    ],
}

export default (state = initialState, action) => {
    if (action.type === 'SET_CURRENT_TASK') {
        return Object.assign({}, state, {
            currentTask: action.taskNumber,
        })
    }
    else if (action.type === "ADD_GROCERY") {
        let tempArray = state.groceries;
        tempArray.push({index: action.index, item: action.grocery});
        return Object.assign({}, state, {
            groceries: tempArray,
            groceryCount: state.groceryCount + 1,
        })
    }
    else if (action.type === "REMOVE_GROCERY") {
        let tempArray = state.groceries;
        let newArray = [];
        for (let i = 0; i < tempArray.length; i++){
            if (i < action.index)
                newArray.push({index: i, item: tempArray[i].item});
            else if (i > action.index)
                newArray.push({index: i-1, item: tempArray[i].item});
        }
        return Object.assign({}, state, {
            groceries: newArray,
            groceryCount: state.groceryCount - 1,
        })
    }
    else if (action.type === "EDIT_GROCERY") {
        let tempArray = state.groceries;
        let newArray = [];
        for (let i = 0; i < tempArray.length; i++){
            if (i < action.index)
                newArray.push({index: i, item: tempArray[i].item});
            else if (i > action.index)
                newArray.push({index: i, item: tempArray[i].item});
            else {
                newArray.push({index: i, item: action.newItem})
            }
        }
        return Object.assign({}, state, {
            groceries: newArray,
        })
    }
    else return state;
}