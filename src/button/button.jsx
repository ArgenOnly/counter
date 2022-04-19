import './button.css'
export const Button =(props)=>{
    let title =props.title

    return(
        <button className='btn'>{title}</button>
    )
}