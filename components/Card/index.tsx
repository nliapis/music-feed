import styles from './index.module.scss';
import { Entry } from '../../interfaces';

export default function Card({ album }: { album: Entry }) {
  return (
    <div className={styles['card']}>
      <div className={styles['card__img-container']}>
        <img
          className={styles['card__img']}
          src={album['im:image'][2].label}
          alt=""
        />
      </div>
      <div className={styles['card__content']}>
        <h3 className={styles['card__album-name']}>
          {album['im:name'].label} - {album['im:artist'].label}
        </h3>
        <div>
          <span>
            {album['im:releaseDate'].attributes.label} -{' '}
            {album.category.attributes.label} - {album['im:price'].label}
          </span>
        </div>
      </div>
    </div>
  );
}
