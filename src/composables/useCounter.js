import { ref } from "vue";
const useCounter = (initiallValue = 3) => {
  const counter = ref(initiallValue);

  return {
    counter,
    increase: () => counter.value++,
    decrease: () => counter.value--,
  };
};

export default useCounter;
