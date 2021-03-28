import axios from 'axios';

export async function getAllPokemons(url){
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res  => res .json())
        .then(data => {
            resolve(data);
        })
    })
}