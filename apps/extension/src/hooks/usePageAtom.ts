import { atom, useRecoilState } from 'recoil';

type Page = 'form' | 'collections';

const _atom = atom<Page>({
  key: 'page',
  default: 'form',
});

export default function usePageAtom() {
  return useRecoilState(_atom);
}
