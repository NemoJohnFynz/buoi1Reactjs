

function Hello() {
    const person = {
        name: 'Peter', 
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    };

    return (
        <>
            <div style={person.theme}>
                <h1>Xin chào: {person.name}</h1>
            </div>
            <div>Chúc bạn thành công với ReactJS</div>
        </>
    );
}
// function Hello(){
//     const person = {
//         name: 'Peter',
//         theme: {
//             backgroundColor: 'green',
//             color: 'while'
//         }
//     };
//     return (
//         <>
//     <div style = {person.name} >
//         <h1>xinchao: {person.name} </h1>
//     </div>

//     <div> chuc ban thanh cong voi rectjs</div>
//     </>
// );

function HelloPerson({name}){
 return(
    <div>
        <h1>xin chào bạn: {name} </h1>
    </div>
 )
}

function HelloNEMO(){

    
        const hiAll = () =>{
            alert("hello everyone")
        }
    
    
        const hiYou = (name) => {
            alert("hello" + name)
        }
    

    return(
        <span>
            <button onClick={hiAll}>hi all</button>
            <button onClick={()=>hiYou("NEMO")}>hi you</button>
        </span>
    )
}
    


export {Hello, HelloPerson,HelloNEMO}