import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    pageIndex: 1,
    isSingedToday: false,
    phoneNumber: undefined,
    streetInfo: undefined,
  }),
  getters: {
    currentPageIndex: (state) => state.pageIndex,
    currentUserIsSignedToday: (state) => state.isSingedToday,
    currentUserPhoneNumber: (state) => state.phoneNumber,
    currentUserStreetInfo: (state) => state.streetInfo,
  },
  actions: {
    nextPageIndex() {
      if (this.pageIndex === 4) {
        this.pageIndex;
      }
      this.pageIndex++;
    },
    previousPageIndex() {
      if (this.pageIndex === 1) {
        this.pageIndex;
      }
      this.pageIndex--;
    },
    firstPageIndex() {
      this.pageIndex = 1;
    },
    setCurrentUserIsSignedToday(isSigned) {
      this.isSingedToday = isSigned;
    },
    setCurrentUserPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    },
    setCurrentUserStreetInfo(streetInfo) {
      this.streetInfo = streetInfo;
    },
  },
});
