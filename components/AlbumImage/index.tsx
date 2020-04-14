import { IMImage } from '../../interfaces';
import styles from './index.module.scss';

export default function AlbumImage({ label, attributes }: IMImage) {
  return <img src={label} {...attributes} alt="" className={styles.image} />;
}
