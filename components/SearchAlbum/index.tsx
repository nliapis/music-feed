import { Container } from '../index';
import styles from './index.module.scss';

type Props = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export default function SearchAlbum({ searchValue, setSearchValue }: Props) {
  return (
    <Container>
      <input
        type="text"
        placeholder="Search for your favorite album (title or artist)"
        className={styles['searchAlbum__input']}
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </Container>
  );
}
