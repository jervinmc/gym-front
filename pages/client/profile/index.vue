<template>
  <div>
    <div>
        <profile-form />
    </div>
  </div>
</template>

<script>
import ProfileForm from '../../../components/client/profile/ProfileForm.vue'
export default {
  head () {
    return {
      title: 'My Profile',
    }
  },
  components: { ProfileForm },

}
</script>

<style>

</style>