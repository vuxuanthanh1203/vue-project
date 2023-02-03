<template>
  <div
    class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable"
  >
    <div class="d-flex flex-column flex-root">
      <div
        class="login login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      >
        <!-- Start Login Image -->
        <div class="login-aside d-flex flex-column flex-row-auto">
          <div
            class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          ></div>
        </div>
        <!-- End Login Images -->
        <!-- ------------------------- -->
        <!-- Start Login Form -->
        <div
          class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
        >
          <div class="d-flex flex-column-fluid flex-center">
            <div class="login-form login-signin">
              <form
                class="form fv-plugins-bootstrap fv-plugins-framework"
                @submit.prevent="onSubmit"
              >
                <div class="pb-13 pt-lg-0 pt-5">
                  <h3
                    class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                  >
                    Welcome to Admin Panel
                  </h3>
                </div>
                <div class="form-group fv-plugins-icon-container">
                  <label
                    class="font-size-h6 font-weight-bolder text-dark"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="form-control form-control-solid h-auto py-6 px-6 rounded-lg"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="someone@example.com"
                    autocomplete="off"
                    v-model="email"
                  />
                  <div class="fv-plugins-message-container"></div>
                </div>
                <div class="form-group fv-plugins-icon-container">
                  <div class="justify-content-between mt-n5">
                    <label
                      class="font-size-h6 font-weight-bolder text-dark pt-5"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="form-control form-control-solid h-auto py-6 px-6 rounded-lg"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password ..."
                      autocomplete="off"
                      v-model="password"
                    />
                    <div class="fv-plugins-message-container"></div>
                  </div>
                </div>
                <div class="pb-lg-0 pb-5">
                  <button
                    type="submit"
                    id="kt_login_signin_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- End Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    function onSubmit() {
      console.log({ email, password });
    }
    return { email, password, onSubmit };
  },
};
</script>

<style scoped>
.login.login-signin-on .login-signin {
  display: block;
}

.login .login-content .login-form {
  width: 100%;
  max-width: 450px;
}

.login.login-content {
  width: 100%;
  max-width: 500px;
}

.aside-img {
  min-height: 450px;
  background-image: url("../assets/images/login-visual-1.svg");
}

.login-aside {
  width: 100%;
  max-width: 450px;
  background-color: #f2c98a;
}

.login {
  height: 100vh;
}
</style>
