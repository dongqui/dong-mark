import { atom, useRecoilState } from 'recoil';

const _atom = atom<string>({
  key: `selectedCollectionId/${new Date().toString()}`,
  default: '',
});

function useSelectedCollectionId() {
  return useRecoilState(_atom);
}

export default useSelectedCollectionId;
