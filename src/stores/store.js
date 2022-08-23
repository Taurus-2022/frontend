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
      } else if (this.pageIndex === 1) {
        if (this.streetInfo) {
          this.pageIndex = 3;
        } else {
          this.pageIndex = 2;
        }
      } else {
        this.pageIndex++;
      }
    },
    previousPageIndex() {
      if (this.pageIndex === 1) {
        this.pageIndex;
      } else if (this.pageIndex === 2) {
        this.pageIndex = 1;
      } else if (this.pageIndex === 3) {
        this.pageIndex = 1;
      } else if (this.pageIndex === 4) {
        this.pageIndex = 3;
      }
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
