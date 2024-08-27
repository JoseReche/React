import './styles.css';

export default function List({titulo = "Sem Titulo"}){
    return (
        <section>
            <h2 >{titulo}</h2>
            <h3>Lista não ordenada</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <h3>Lista Ordenada</h3>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </section>
    )
}