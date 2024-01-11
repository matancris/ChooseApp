import { Link } from 'react-router-dom';
import AppAvatar from './app-cmps/AppAvatar';

export default function PersonPreview({ person }) {
    return (
        <Link to={`${person.id}`}>
            <section className='person-preview app-card flex column'>
                {person.name}
                <AppAvatar />
            </section>
        </Link>
    )
}
