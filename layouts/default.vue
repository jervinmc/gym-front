<template>
  <v-app dark>
    <VueHtml2pdf :show-layout="false" :float-layout="true" :enable-download="true" :paginate-elements-by-height="1400"
      filename="myPDF" :pdf-quality="2" :manual-pagination="false" pdf-format="a4" pdf-orientation="portrait"
      pdf-content-width="800px" ref="html2Pdf">
      <v-section slot="pdf-content">
        <v-card class="pa-10" style="padding:70px">
          <v-row>
            <v-col>
              <div>
                Firstname
              </div>
              <v-text-field outlined v-model="register.firstname"></v-text-field>
            </v-col>
            <v-col>
              Middlename
              <v-text-field outlined v-model="register.middlename"></v-text-field>
            </v-col>
            <v-col>
              Lastname
              <v-text-field outlined v-model="register.lastname"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>
                Starting Weight
              </div>
              <v-text-field outlined v-model="register.height"></v-text-field>
            </v-col>
            <v-col>
              Weight
              <v-text-field outlined v-model="register.weight"></v-text-field>
            </v-col>
            <v-col>
              Goal
              <v-text-field outlined v-model="register.goal"></v-text-field>
            </v-col>
          </v-row>
          <div class="pt-10">

          </div>
          <v-divider></v-divider>
          <div class="pb-10">
            Health Conditions
          </div>
          <v-row>
            <v-col>
              <div>
                Heart Problems(Yes/No)
              </div>
              <v-text-field outlined v-model="register.hp"></v-text-field>
            </v-col>
            <v-col>
              Blood Pressure problems(Yes/No)
              <v-text-field outlined v-model="register.bp"></v-text-field>
            </v-col>
            <v-col>
              Chest pain(Yes/No)
              <v-text-field outlined v-model="register.cp"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>
                Asthma or Breathing difficulties(Yes/No)
              </div>
              <v-text-field outlined v-model="register.bd"></v-text-field>
            </v-col>
            <v-col>
              Pregnant/Just gave birth(Yes/No)
              <v-text-field outlined v-model="register.pregnant"></v-text-field>
            </v-col>
            <v-col>
              Do you smoke(Yes/No)
              <v-text-field outlined v-model="register.smoke"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>
                Do you drink alcohol?(Yes/No)
              </div>
              <v-text-field outlined v-model="register.alcohol"></v-text-field>
            </v-col>
            <v-col>
              Are you on any medication(Yes/No)
              <v-text-field outlined v-model="register.medication"></v-text-field>
            </v-col>
          </v-row>
          <div>
            <div class="text-h4">
              Liability Waiver
            </div>
            <div>
              I, the undersigned, being aware of my own health and physical condition, and having knowledge that my
              participation in any exercise program may be injurious to my health, I am voluntary participating in
              physical
              activity.
            </div>
            <div class="pt-10">
              Having knowledge, I hereby acknowledge this release, any representatives, agents, and successors from
              liability for accidental injury or illness which I may incur as a result of participating in the said
              physical
              activity. I hereby assume all risks connected therewith and consent to participate in said program.
            </div>
            <div>
              participating in the said physical activity. I hereby assume all risks connected therewith and consent to
              participate in said program.
              I agree to disclose any physical limitations, disabilities, ailments, or impairments which may affect my
              ability to participate in said fitness program. My membership is non-transferrable to another person or
              another branch and is non-refundable.
            </div>
            <div>
              <v-row>
                <v-col>
                  <div>
                    Emergency Contact Person:
                  </div>
                  <v-text-field outlined v-model="register.emergency_contact"></v-text-field>
                </v-col>
                <v-col>
                  Contact Number
                  <v-text-field outlined v-model="register.contact_number"></v-text-field>
                </v-col>
              </v-row>
            </div>
          </div>
          <div>
            <!-- <v-btn @click="generatePDF">download waiver</v-btn> -->
          </div>
          <div style="padding-top:80px">
            Signature Over Printed Name
          </div>
        </v-card>
      </v-section>
    </VueHtml2pdf>
    <v-dialog v-model="waiveformModel" width="1200">
      <div class="d-none">

      </div>
      <v-card class="pa-10">
        <v-row>
          <v-col>
            <div>
              Firstname
            </div>
            <v-text-field outlined v-model="register.firstname"></v-text-field>
          </v-col>
          <v-col>
            Middlename
            <v-text-field outlined v-model="register.middlename"></v-text-field>
          </v-col>
          <v-col>
            Lastname
            <v-text-field outlined v-model="register.lastname"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              Starting Weight
            </div>
            <v-text-field outlined v-model="register.height"></v-text-field>
          </v-col>
          <v-col>
            Weight
            <v-text-field outlined v-model="register.weight"></v-text-field>
          </v-col>
          <v-col>
            Goal
            <v-text-field outlined v-model="register.goal"></v-text-field>
          </v-col>
        </v-row>
        <div class="pt-10">

        </div>
        <v-divider></v-divider>
        <div class="pb-10">
          Health Conditions
        </div>
        <v-row>
          <v-col>
            <div>
              Heart Problems(Yes/No)
            </div>
            <v-text-field outlined v-model="register.hp"></v-text-field>
          </v-col>
          <v-col>
            Blood Pressure problems(Yes/No)
            <v-text-field outlined v-model="register.bp"></v-text-field>
          </v-col>
          <v-col>
            Chest pain(Yes/No)
            <v-text-field outlined v-model="register.cp"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              Asthma or Breathing difficulties(Yes/No)
            </div>
            <v-text-field outlined v-model="register.bd"></v-text-field>
          </v-col>
          <v-col>
            Pregnant/Just gave birth(Yes/No)
            <v-text-field outlined v-model="register.pregnant"></v-text-field>
          </v-col>
          <v-col>
            Do you smoke(Yes/No)
            <v-text-field outlined v-model="register.smoke"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div>
              Do you drink alcohol?(Yes/No)
            </div>
            <v-text-field outlined v-model="register.alcohol"></v-text-field>
          </v-col>
          <v-col>
            Are you on any medication(Yes/No)
            <v-text-field outlined v-model="register.medication"></v-text-field>
          </v-col>
        </v-row>
        <div>
          <div class="text-h4">
            Liability Waiver
          </div>
          <div>
            I, the undersigned, being aware of my own health and physical condition, and having knowledge that my
            participation in any exercise program may be injurious to my health, I am voluntary participating in physical
            activity.
          </div>
          <div class="pt-10">
            Having knowledge, I hereby acknowledge this release, any representatives, agents, and successors from
            liability for accidental injury or illness which I may incur as a result of participating in the said physical
            activity. I hereby assume all risks connected therewith and consent to participate in said program.
          </div>
          <div>
            participating in the said physical activity. I hereby assume all risks connected therewith and consent to
            participate in said program.
            I agree to disclose any physical limitations, disabilities, ailments, or impairments which may affect my
            ability to participate in said fitness program. My membership is non-transferrable to another person or
            another branch and is non-refundable.
          </div>
          <div>
            <v-row>
              <v-col>
                <div>
                  Emergency Contact Person:
                </div>
                <v-text-field outlined v-model="register.emergency_contact"></v-text-field>
              </v-col>
              <v-col>
                Contact Number
                <v-text-field outlined v-model="register.contact_number"></v-text-field>
              </v-col>
            </v-row>
          </div>
        </div>
        <div>
          <v-btn @click="generatePDF">download waiver</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-navigation-drawer v-if="$route.name != 'login' &&
      $route.name != 'index' &&
      $route.name != 'register' &&
      $route.name != 'redeem' &&
      $route.name != 'contact'
      " v-model="drawer" :mini-variant="miniVariant" color="secondary" :clipped="clipped" dark fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="false" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- is not logged in yet -->
    <v-app-bar color="white" v-if="$route.name == 'login' ||
      $route.name == 'index' ||
      $route.name == 'redeem' ||
      $route.name == 'register' ||
      $route.name == 'contact'
      " :clipped-left="clipped" fixed app>
      <div align="start">
        <v-img class="pointer" src="/images/PFP.jpeg" height="60" width="100" contain @click="goIndex" />
      </div>
      <v-spacer />
      <div :class="$route.name == 'contact'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer'
        " @click="pushRoute('contact')">
        Contact Us
      </div>
      <div :class="$route.name == 'login'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer'
        " @click="pushRoute('login')" v-if="!$auth.loggedIn">
        Login
      </div>
      <div :class="$route.name == 'login'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer'
        " @click="waiverForm()" v-if="!$auth.loggedIn">
        Waiver Form
      </div>
      <div :class="$route.name == 'client-profile'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer'
        " @click="pushRoute('client/profile')" v-else>
        My Profile
      </div>
      <div class="px-10 pointer" v-if="$auth.loggedIn">
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer padless>
      <v-card flat tile>
        <v-card-text>
          <v-btn
            v-for="icon in iconFooter"
            :key="icon"
            class="mx-4 secondary--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="black--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="secondary--text">
          <a href="https://www.freepik.com/vectors/claim"
            >Claim vector created by pch.vector - www.freepik.com</a
          >
          {{ new Date().getFullYear() }} — <strong>R2M</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
export default {
  components: { VueHtml2pdf },
  methods: {
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
    waiverForm() {
      this.waiveformModel = true
      // window.location="https://chatmind.s3.ap-northeast-1.amazonaws.com/F3-Membership-Form+(1).docx"
    },
    pushRoute(link) {
      window.location.href = `/${link}`;
    },
    goIndex() {
      window.location.href = "/";
    },
  },
  name: "DefaultLayout",
  data() {
    return {
      register: {},
      waiveformModel: false,
      clipped: false,
      drawer: true,
      fixed: false,
      iconFooter: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
      ],
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "User Management",
          to: "/admin/users",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Employee Management",
          to: "/admin/employee",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Exercise",
          to: "/admin/exercise",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Book",
          to: "/admin/book",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Product",
          to: "/admin/product",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Transaction",
          to: "/admin/transaction",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Reports",
          to: "/admin/reports",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
