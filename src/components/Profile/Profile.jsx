import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return <div className={css.profile}>
    <div className={css.thumb}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.usertext}>@{tag}</p>
        <p className={css.usertext}>{location}</p>
    </div>

    <ul className={css.stats}>
        <li className={css.stats__item}>
            <span className={css.stats__text}>Followers: </span>
            <span className={css.stats__numbers}>{stats.followers}</span>
        </li>
        <li className={css.stats__item}>
            <span className={css.stats__text}>Views: </span>
            <span className={css.stats__numbers}>{stats.views}</span>
        </li>
        <li className={css.stats__item}>
            <span className={css.stats__text}>Likes: </span>
            <span className={css.stats__numbers}>{stats.likes}</span>
        </li>
    </ul>
</div>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
};