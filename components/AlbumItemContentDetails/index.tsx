import styles from './index.module.scss';
import Headphones from './headphones';

type Props = {
  className: any;
  nameLabel: string;
  artistLabel: string;
};

export default function AlbumItemContentDetails({
  className,
  nameLabel,
  artistLabel,
}: Props) {
  return (
    <div className={className}>
      <Headphones />
      <div className={styles['albumItemContentDetails__nameLabel']}>
        {nameLabel}
      </div>
      <div className={styles['albumItemContentDetails__artistLabel']}>
        {artistLabel}
      </div>
    </div>
  );
}
