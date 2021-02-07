<template>
  <div class="padding_auto">
    <form @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model"/>
      </div>
      <div class="error" v-if="!$v.name.required">Name is required</div>
      <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
      <div class="error" v-if="!$v.name.maxLength">Name must have at mast {{$v.name.$params.maxLength.max}} letters.</div>
      <div class="error" v-if="!$v.name.between">Must be between {{$v.name.$params.between.min}} and {{$v.name.$params.between.max}}</div>
      <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Submit!</button>
      <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="typo__p" v-if="submitStatus === 'OK'">输出的值：{{name}}</p>
      <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
      <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
    </form>
  </div>
</template>

<script>
import { required, minLength, between, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'VuelidateTest',
  data () {
    return {
      name: '',
      age: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(5),
      between: between(0.0, 100.99)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style scoped>

</style>
