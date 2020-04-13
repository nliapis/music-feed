import Link from 'next/link';
import { Entry } from '../interfaces';

export default function AlbumItem(album: Entry) {
  return (
    <Link href="/albums/[id]" as={`/albums/${album.id.attributes['im:id']}`}>
      <a onClick={() => localStorage.setItem('album', JSON.stringify(album))}>
        <img
          src={album['im:image'][2].label}
          {...album['im:image'][2].attributes}
          alt=""
        />
      </a>
    </Link>
  );
}
