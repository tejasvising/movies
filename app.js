const form=document.querySelector('#searchForm')
button=document.getElementById('Search')
final=document.getElementById('final')
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm=form.elements.query.value;
    const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c3574e9e8c59fa97b134032c358dab8a&query=${searchTerm}`)

makeImages(res.data.results)
form.elements.query.value='';
})

const makeImages=(shows)=>{
    final.innerHTML='';
    for(let show of shows){
        if(show){
         
         
        const img=document.createElement('IMG');
       
      
img.src='https://image.tmdb.org/t/p/w500/'+show.poster_path
img.height='500'
img.width='500'

final.append(img);

        }
    }
}
