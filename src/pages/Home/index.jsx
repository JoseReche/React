import './styles.css';

import Video from '../../components/Video'
import Forms from '../../components/Forms'
import List from '../../components/List';

export default function Home(){
    return(
        <main>
            <List titulo='Lista 01'/>
            <List />
            <Video />
            <Forms />
        </main>
    )
}