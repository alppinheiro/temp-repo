import './styles.css';

export const PostCard = ({ title, cover, body, id }) =>  (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2 key={id}>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );