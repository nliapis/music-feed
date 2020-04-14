import Link from 'next/link';
import { Entry } from '../../interfaces';
import { AlbumImage, AlbumItemContentDetails } from '../index';
import styles from './index.module.scss';

export default function AlbumItem(album: Entry) {
  return (
    <Link href="/albums/[id]" as={`/albums/${album.id.attributes['im:id']}`}>
      <a
        className={styles.albumItem__link}
        onClick={() => localStorage.setItem('album', JSON.stringify(album))}
      >
        <AlbumImage
          label={album['im:image'][2].label}
          attributes={album['im:image'][2].attributes}
        />
        <div className={styles['albumItem__content-overlay']}></div>
        <AlbumItemContentDetails
          className={styles['albumItem__content-details']}
          nameLabel={album['im:name'].label}
          artistLabel={album['im:artist'].label}
        />
      </a>
    </Link>
  );
}
