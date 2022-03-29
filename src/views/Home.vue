<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <Navbar />
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-img src="../assets/home.png" container max-height="400"></v-img>
        </v-col>
        <v-col cols="6">
          <h4 class="red--text text-darken-4 top">Hello, Im Lucas 👋</h4>
          <h1 class="white--text">Developer web</h1>
          <p class="grey--text">
            Front end developer focused on user experience and modern interface
            building.
          </p>
          <v-btn tile color="#A7121D" dark>about me</v-btn>
        </v-col>
        <v-col cols="12" class="padd">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3">
                    mdi-palette-swatch
                  </v-icon>
                  <h3 class="white--text ml-3 mt-4">Front-end</h3>
                  <p class="grey--text ml-3 mt-6">
                    Scalable applications modern
                  </p>
                  <v-btn color="#A7121D" dark text>
                    Know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor2">
                  <v-icon x-large class="ml-3" dark> mdi-shopping </v-icon>
                  <h3 class="white--text ml-3 mt-4">Design</h3>
                  <p class="grey--text ml-3 mt-6">User experience UI/UX</p>
                  <v-btn dark text>
                    Know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="child bgColor1">
                  <v-icon color="#A7121D" x-large class="ml-3"
                    >mdi-book-open-page-variant</v-icon
                  >
                  <h3 class="white--text ml-3 mt-4">Tests</h3>
                  <p class="grey--text ml-3 mt-6">Tests unit and integration</p>
                  <v-btn color="#A7121D" dark text>
                    Know more
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" class="mt-8">
                <div class="child1">
                  <h1 class="red--text text-darken mt-4 number">...3</h1>
                  <h3 class="white--text mt-4">Years experience</h3>
                </div>
                <div class="child2 mRight">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">10+</h1>
                        <p class="grey--text">Developed projects</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">3+</h1>
                        <p class="grey--text">Freela projects</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="child2">
                  <v-row>
                    <v-col cols="12" class="childcol">
                      <div class="child2 mButton padding bgColor1">
                        <h1 class="red--text text--darken-4">3+</h1>
                        <p class="grey--text">Years of computer science</p>
                      </div>
                    </v-col>
                    <v-col cols="12" class="childcol">
                      <div class="child2 padding bgColor1">
                        <h1 class="red--text text--darken-4">4+</h1>
                        <p class="grey--text">Experience with algorithms</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col md="3" offset-md="3" id="about">
          <h2 class="white--text">Developed features</h2>
          <p class="grey--text"></p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile color="#A7121D" class="spacing" dark>View all</v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card class="pa py-12" outlined tile height="240px" color="#1E1E1E">
            <v-img
              src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?cs=srgb&dl=pexels-sydney-troxell-708587.jpg&fm=jpg"
              contain
              max-height=""
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="pa py-12" outlined tile height="240px" color="#1E1E1E">
            <v-img
              src="https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              contain
              max-height=""
            ></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn color="white" dark text class="ml-n4"> buypizza </v-btn><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn color="white" dark text class="ml-n4"> StockTrader </v-btn
          ><br />

          <v-btn color="#A7121D" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="padd topInverse">
          <div class="second">
            <div class="secondchild1" id="contact">
              <v-row>
                <v-col cols="7">
                  <h1 class="white--text">Meet projects</h1>
                  <p class="grey--text">
                    🚀 Projects developed with Javascript, Typescript, React,
                    Vue, Node
                  </p>
                </v-col>
                <v-col cols="5">
                  <v-btn tile color="#A7121D" dark class="mt-16">
                    Contact me
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-toolbar class="topTolbar" color="#111111" dark flat>
            <div class="content-bar">
              <v-btn text>Home</v-btn>
              <v-btn text>Project</v-btn>
              <v-btn text>About</v-btn>
              <v-btn text>Contact</v-btn>
            </div>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style scoped>
.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
  margin-top: 20px;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}

.content-bar {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>