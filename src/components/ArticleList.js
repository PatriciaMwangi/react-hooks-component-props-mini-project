import Article from './Article'
export default function ArticleList({posts}){
    let articleElements= posts.map((post)=>{
     return(   <Article 
        key={posts.id}
        id = {posts.id}
        title={posts.title}
        date={posts.date}                  
        preview={posts.preview}
        minutes={posts.minutes}/>
    )})
    
       return(
        <main>
            {articleElements}
        </main>
       )         
            
}