<template>
  <input
    type="text"
    :disabled="disabled"
    :class="{ error: error }"
    :placeholder="placeholder"
    :value="value"
    @input="handleChange"
    @compositionstart="handleComposition"
    @compositionupdate="handleComposition"
    @compositionend="handleComposition"
  />
</template>
<script setup>
import { defineComponent } from '@vue/composition-api'
import { ddefineProps, reactive, useContext } from 'vue'
const emit = defineEmits(['update', 'delete'])
const { slot, attrs } = useContext();

defineProps({

})

handleComposition(event) {
  if (event.type === 'compositionend') {
    this.isOnComposition = false;
    this.handleChange(event);
  } else {
    this.isOnComposition = true;
  }
}

handleChange(event) {
  let value = event.target.value;
  if (!this.isOnComposition) {
    this.getData(value);
  }
},

this.getData = debounce(this.debounce, (value) => {
  this.returnValue(value);
});

createLayerList(value){
  value = value.trim().toLowerCase();
  let tempArray = [];
  tempArray = this.layerListBackUp.filter(item => {
    item = item.showName.trim().toLowerCase();
    if (item.indexOf(value) > -1) {
      return true;
    }
  });
  this.layerList = JSON.parse(JSON.stringify(tempArray));
}
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
