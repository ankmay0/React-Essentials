export default function tabButton({children}){
    function handleClick(){
        console.log('hello world!');
    }

    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}