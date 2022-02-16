import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

//ahora usamos el custom hook para hacer la peticion fetch
//y de aqui se manda la data, se usa la state del otro componente
//no de este como era en un inicio

const { data, loading } = useFetchGifs( category );

//const [images, setImages] = useState([])
//fue la 2da manera de consumirlo antes del custom hook, usando el helper aqui
//aun usabamos images,Setimages
//como tipo componentdidmount, y solo se ejecuta cuando es renderixado por primer avez el componente    
// useEffect(() => {
//     getGifs(category)//por que el helper es una promesa por el async
//         //.then( imgsrt => setImages ( imgsrt ))
//         .then( setImages )//es una funcion que el primer parametro viene implicito
// }, [ category ]);
//esta logica s eva al custom hook


//fue la 1ra manera antes del helper, se consumia directo aqui
// const getGifs = async() => {
//     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=Vq8x04XtNrjIrcGNswBc3gQg7g3g6kQV`;
//     const resp = await fetch( url );
//     const { data } =  await resp.json();

//     const gifs = data.map(img => {
//         return {
//             id: img.id,
//             title: img.title,
//             url: img.images?.downsized_medium.url
//         }

//     })   
//     setImages( gifs );
   
// } 

    

  
    return (
        <>
        <h3 className='animate__animated animate__flash'>{category}</h3>
        { loading && <p className='flash'>Loading</p> }
         <div className='card-grid'>
                  {
                      data.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } />
                      ))
              }  
        </div>
        {/* <div className='card-grid'>
                  {//images, por que es el state
                      images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                            img2={img}/>
                      ))
              }  
        </div> */}
        </>
    )
}
