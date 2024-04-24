function Button(props) {
    const title = props.title; 
    const clickHandler = (msg) => {
        console.log(msg);
    }

    return (
            <button className="button" onClick={() => clickHandler("Hey hey its ok..")}>{title}</button>
        
    );
}

export default Button;