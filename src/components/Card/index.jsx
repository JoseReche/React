import './styles.css';

export default function Card({data: personagem}){
    return(
        <div className="card char" key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <h2>{personagem.name}</h2>

            <div className='char-info'>
                <span><b>Espécie:</b>{personagem.species}</span>
                <span><b>Genero:</b>{personagem.gender}</span>
            </div>

            <div>
                <span><b>Status:</b>{personagem.status}</span>
            </div>
        </div>
    )
}