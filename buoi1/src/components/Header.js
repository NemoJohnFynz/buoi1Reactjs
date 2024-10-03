
// function Item({link, content}){

//     return(
//         <>
//         <li> <a href={link}>{content}</a> </li>
//         </>
        
//     )
// }

// function Menu({list}){

//     return(
        
//         <ul>
//         {list.map((item, index) => (
//             <Item key={index} link={item.url} content={item.text} />  // Truyền 'url' và 'text' cho Item
//         ))}
//     </ul>
//     )
// }

// function Header(){

    
//         const list = [
//             {url:'nemo',content:'trang chủ'},
//             {url:'nemo1',content:'trang không chủ'}
//         ];
//         return(
//             <div>
//             <h1>Menu</h1>
//             <Menu list={list} /> 
//         </div>
//         )
//     }


// export {Item, Menu, Header}

function Item({ link, content }) {
    return (
        <li>
            <a href={link}>{content}</a>
        </li>
    );
}

function Menu({ list }) {
    return (
        <ul>
            {list.map((item, index) => (
                <Item key={index} link={item.url} content={item.text} />
            ))}
        </ul>
    );
}

function Header() {
    const list = [
        { url: 'nemo', text: 'Trang chủ' },  // Sửa từ 'content' thành 'text'
        { url: 'nemo1', text: 'Trang không chủ' }  // Sửa từ 'content' thành 'text'
    ];

    return (
        <div>
            <h1>Menu</h1>
            <Menu list={list} /> 
        </div>
    );
}

export { Item, Menu, Header };
