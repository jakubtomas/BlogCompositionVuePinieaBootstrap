<template>
  <label class="form-label fs-5 fw-semibold mb-2" v-if="label">
    <!-- {{ $t(label) }} -->
    Label text
    <span class="form-label__note" v-if="labelNote">({{ $t(labelNote) }})</span>
    <slot name="after-label"></slot>
  </label>
  <Field
    class="form-control form-control-solid"
    :class="{ 'opacity-85 cursor-not-allowed': disabled }"
    :type="type || 'text'"
    :placeholder="getPlaceholder"
    :name="name"
    @input="updateValueFunction"
    :modelValue="modelValue"
    v-bind="$attrs"
    :readonly="readonly"
    :disabled="disabled"></Field>
  <!--  -->
  <div class="fv-plugins-message-container">
    <div class="fv-help-block">
      <ErrorMessage :name="name" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script setup lang="ts">
import { ErrorMessage, Field } from "vee-validate";
import { computed, defineProps, defineEmits, type PropType } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  type: { type: String },
  label: { type: String },
  labelNote: { type: String },
  name: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  modelValue: { type: [String, Number] as PropType<string | number | null> },
  placeholder: { type: String, required: false }
});

console.log(props);

const emit = defineEmits(["update:modelValue"]);

const updateValueFunction = (event: { target: { value: any } }) => {
  emit("update:modelValue", event.target.value);
};

const getPlaceholder = computed(() => {
  return "";
  //  return props.placeholder ? t(props.placeholder) : props.label ? t(props.label) : '';
});
</script>
<style scoped>
.form-label {
  align-items: center;
  display: flex;
}
.form-label__note {
  color: #444651;
  font-size: 13px;
  margin-left: auto;
  font-weight: normal;
}
</style>
