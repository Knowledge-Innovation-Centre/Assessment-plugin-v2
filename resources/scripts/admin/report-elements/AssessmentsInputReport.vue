<template>
  <div>
    {{ getLabel }}
  </div>
</template>

<script>
import labelMixin from "./mixins/labelMixin";

export default {
  name: "AssessmentsInputReport",

  components: {},

  mixins: [labelMixin],

  props: {
    object: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      show: false
    };
  },

  methods: {}
};
</script>
<style scoped></style>
