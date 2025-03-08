## Prop Drilling


const App(){
    const [data,setData] = useState();
    return (
        <div>
            <ChildElement data={data}/> 
            -- sending the data from parent to child and drilling it out to the component where we reuire it
        </div>
    )
}

-- Problem 
    -Difficult to pass data if we have many component
    -If data changes then it will render all the components as prop will change

    -solution for it Context API / redux






## Context API
const eatFitContext = createContext();

const App(){
    const [data,setData] = useState();
    return (
        <div>
            <eatFitContext.Provider value={{data,setData}}>
                <ChildElement data={data}/> 
            </eatFitContext.Provider>
        </div>
    )
}

 -- in ChildElement
 const ChildElement (){
    const {data,setData} = useContext(eatFitContext);
    return (
        <div>
        </div>
    )
}