import Link from 'next/link';
import { Entry } from '../../interfaces';
import { AlbumImage } from '../index';

export default function AlbumItem(album: Entry) {
  return (
    <Link href="/albums/[id]" as={`/albums/${album.id.attributes['im:id']}`}>
      <a onClick={() => localStorage.setItem('album', JSON.stringify(album))}>
        <AlbumImage
          label={album['im:image'][2].label}
          attributes={album['im:image'][2].attributes}
        />
      </a>
    </Link>
  );
}
