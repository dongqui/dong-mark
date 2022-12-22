import { atom, useRecoilState } from 'recoil';

const _atom = atom<string | null>({
  key: `selectedCollectionId/${new Date().toString()}`,
  default: null,
});

function useSelectedCollectionId() {
  return useRecoilState(_atom);
}

export default useSelectedCollectionId;
