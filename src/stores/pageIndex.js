import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'pageIndex',
  state: () => ({
    pageIndex: 1,
  }),
  getters: {
    currentPageIndex: (state) => state.pageIndex,
  },
  actions: {
    nextPageIndex() {
      if (this.pageIndex == 4) {
        this.pageIndex;
      }
      this.pageIndex++;
    },
    previousPageIndex() {
      if (this.pageIndex == 1) {
        this.pageIndex;
      }
      this.pageIndex--;
    },
    firstPageIndex() {
      this.pageIndex = 1;
    },
  },
});
