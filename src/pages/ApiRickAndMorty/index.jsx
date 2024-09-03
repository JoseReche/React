import { useEffect,useState} from 'react';
import './styles.css';
import Card from '../../components/Card';



/*const mock = []*/

export default function ApiRickAndMorty(){
    const[conteudo, setConteudo]= useState(<>Carregando</>)

    async function carregarTodosOsPerssonagens(){
        //Vai carregar todos os perssonagens da apei do Rick and morty - com o fetch
        const requestOption = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch('https://rickandmortyapi.com/api/character',requestOption)

        if(!response.ok){
            throw new Error("Erro na requisição")
        }
    
        const data = await response.json()
    
        console.log(data);    

        return {...data}
    }

    


    async function listarPersonagens(){
        //const results = carregarTodosOsPerssonagens()
        //const api = api.results

        const {info, results} = await carregarTodosOsPerssonagens()

        return results.map(personagem => <Card key={personagem.id} data={personagem} />)
    }

    useEffect(() => {
        async function getConteudo(){
            setConteudo(await listarPersonagens())
        }
        getConteudo()
    },[] )
    return (
        <div className='lista-principal'>
            {conteudo}
        </div>
        
    )
}