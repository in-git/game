import { defineStore } from 'pinia';

type StoreStage = {
  historyList: Stage[];
};

const useStageStore = defineStore('stage', {
  state: (): StoreStage => ({
    historyList: [],
  }),
  persist: true,
});

export default useStageStore;
