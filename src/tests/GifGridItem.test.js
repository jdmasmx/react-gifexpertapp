import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../components/GifGridItem';



describe('Pruebas GifGridItem', () => { 

    const title = 'Un titulo';
    const url = 'https://algo.com/hola.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url} /> );

    test('Debe mostrar el componente correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe contener un parrafo con el title', () => { 

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

     })

     test('debe contener una imagen igual  a la url y alt de los props', () => { 

        const img = wrapper.find('img');
       //console.log( img.props() );//obtener todas las props
       //console.log( img.props().src );//obtener una en especifico de todas las props
       //obtener solo una prop
       //console.log( img.prop('src') );
       expect( img.prop('src') ).toBe( url );
       expect( img.prop('alt') ).toBe( title );

     })
     
     test('debe tener el animate__fadeIn', () => { 
        
        const div = wrapper.find('div');
        const className =  div.prop('className');
        //console.log(div.html());
        //console.log( div.props() );

        expect( className.includes('animate__fadeIn') ).toBe( true );


      })


 })