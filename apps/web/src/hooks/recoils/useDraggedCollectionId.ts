import { atom, useRecoilState } from 'recoil';

const _atom = atom<null | string>({
  key: `draggedCollectionId/${new Date().toString()}`,
  default: null,
});

function useDraggedCollectionId() {
  return useRecoilState(_atom);
}

export default useDraggedCollectionId;
