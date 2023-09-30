import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () => {
  const isExpanded = ref(true);
  const isLoading = ref(false);
  const currentView = ref("Home");

  function setIsExpanded() {
    isExpanded.value = !isExpanded.value;
  }
  function setCurrenView(viewName: string) {
    if (viewName === currentView.value) return;

    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      currentView.value = viewName;
    }, 1500);
  }

  const getIsExpanded = computed(() => isExpanded.value);
  const getCurrentView = computed(() => currentView.value);
  const getIsLoading = computed(() => isLoading.value);

  return { setIsExpanded, setCurrenView, getIsExpanded, getCurrentView, getIsLoading };
});
