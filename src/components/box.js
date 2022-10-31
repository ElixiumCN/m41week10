// all components in js have to be Capitalized.
// name of parameter in react? PROPS
// argument is the data passed through

const Box = ({name, age}) => {
    return (
        <div>
            <h1>{name} {age}</h1>
        </div>
    )
};

// const Box = (props) => {
//     return (
//         <div>
//             <h1>{props.name} {props.age}</h1>
//         </div>
//     )
// };


export default Box;