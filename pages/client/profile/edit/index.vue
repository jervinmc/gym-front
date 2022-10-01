<template>
  <div>
    <edit-form />
  </div>
</template>

<script>
import EditForm from '../../../../components/client/profile/EditForm.vue'
export default {
  head () {
    return {
      title: 'Edit Profile',
    }
  },
  components: { EditForm },

}
</script>

<style>

</style>