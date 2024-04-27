export default function About({image,about}){
    return(
        <aside>
            <img
             src={image||"https://via.placeholder.com/215q"}
             alt="blog logo">
            </img>
            <p>{about}</p>
        </aside>
    )
}