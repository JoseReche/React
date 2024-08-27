import './styles.css';

export default function Video(){
    return (
        <section>
            <h2>Imagem e Vídeo</h2>
            <img src="http://github.com/JoseReche.png" alt="Minha foto" />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1ROfSD0eU5E?si=1DDQL2hhILt7i2Bh"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    )
}