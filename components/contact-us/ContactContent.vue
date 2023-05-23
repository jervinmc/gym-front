<template>
  <div>
    <v-row class="px-16 py-10">
        <v-col>
            <div class="text-h4 secondary--text" align="center">
                HEAD OFFICE
            </div>
            <div class="pt-10">
                EF Square, 4/F Manila N Rd,
            </div>
            <div class="pt-2">
                Urdaneta,2428 Pangasinan
            </div>
            <div class="pt-2">
                BCO Urdaneta-Alliance in Motion Global
            </div>
        </v-col>
        <v-col>
            <div class="pt-16">
                Name
                <v-text-field v-model="register.fullname" outlined ></v-text-field>
            </div>
            <div class="pt-2">
                Address
                <v-text-field v-model="register.address" outlined ></v-text-field>
            </div>
            <div class="pt-2">
                Contact Number
                <v-text-field v-model="register.contact_number" outlined ></v-text-field>
            </div>
            <div class="pt-2">
                Email
                <v-text-field v-model="register.email" outlined ></v-text-field>
            </div>
            <div class="pt-2">
                Message
                <v-textarea v-model="register.message" outlined ></v-textarea>
            </div>
            <div>
                <v-btn @click="submitHandler">
                    Submit
                </v-btn>
            </div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            register:{}
        }
    },
 methods:{
    async submitHandler(){
        this.$store.dispatch("users/inquire",this.register).then(()=>{
            alert("Successfully Submitted!")
            window.location.reload()
        })
    }
 }
}
</script>

<style>

</style>