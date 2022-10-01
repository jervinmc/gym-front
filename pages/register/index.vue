<template>
  <div>
    <registration-form />
  </div>
</template>

<script>
import RegistrationForm from '../../components/signup/RegistrationForm.vue'
export default {
  head () {
    return {
      title: 'Register',
    }
  },
    components:{RegistrationForm}
}
</script>

<style>

</style>
