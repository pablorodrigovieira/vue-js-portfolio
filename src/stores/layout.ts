import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layout", () => {
  const isExpanded = ref(window.innerWidth > 1024);
  const isLoading = ref(false);
  const currentView = ref("Home");

  function setIsExpanded() {
    isExpanded.value = !isExpanded.value;
  }
  function setCurrenView(viewName: string) {
    if (viewName === currentView.value) return;

    isLoading.value = true;
    currentView.value = viewName;

    setTimeout(() => {
      isLoading.value = false;
    }, 1500);
  }

  const getIsExpanded = computed(() => isExpanded.value);
  const getCurrentView = computed(() => currentView.value);
  const getIsLoading = computed(() => isLoading.value);

  return { setIsExpanded, setCurrenView, getIsExpanded, getCurrentView, getIsLoading };
});
