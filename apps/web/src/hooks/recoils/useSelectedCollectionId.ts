import { atom, useRecoilState } from 'recoil';

const _atom = atom<null | string>({
  key: `selectedCollectionId/${new Date().toString()}`,
  default: null,
});

function useSelectedCollectionId() {
  return useRecoilState(_atom);
}

export default useSelectedCollectionId;
