<template>
  <div class="container">
    <div class="header">
      <div>
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="logout-text" @click="logout">Logout</div>
    </div>
    <div class="url-short-wrapper">
      <div class="url-short-text">Shorten URL Is Just Simple</div>
      <div class="input-wrapper">
        <input v-model="url" placeholder="Enter long url here" type="text" class="url-short-input" />
        <button class="url-short-button" @click="getShortUrl">submit</button>
      </div>
      <div v-if="shortUrl" class="short-url">
        Your Short urL:-<a
          :href="shortUrl"
          target="_blank"
          rel="noopener noreferrer"
          >{{ shortUrl }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "@/services/api.services";
export default {
  data() {
    return {
      url: "",
      shortUrl: "",
    };
  },
  methods: {
    logout() {
      //logout the user
      apiService
        .logout()
        .then(() => {
          this.$router.push("/auth/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getShortUrl() {
      let data = {
        url: this.url,
      };
      apiService
        .shorturl(data)
        .then(({ data }) => {
          if (data.id) {
            this.shortUrl = `http://localhost:8080/${data.id}`;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.url-short-wrapper {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 9px 20px 0px rgb(22 26 57 / 36%);
  padding: 90px 60px 85px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.url-short-text {
  font-weight: 600;
  margin-bottom: 34px;
  font-size: 36px;
  line-height: 46px;
  margin-top: -16px;
}
.url-short-input {
  height: 60px;
  border-radius: 30px;
  padding-left: 30px;
  background: #ffffff;
  box-shadow: inset 0 0 6px #00a2ff, inset 0 0 6px #00a2ff,
    inset 0 0 6px #00a2ff;
  border: none;
  font-size: 16px;
  padding-top: 3px;
  width: 540px;
  margin-bottom: 25px;
}
.input-wrapper {
  display: flex;
}
.url-short-button {
  background: -webkit-linear-gradient(-100deg, #2d38e1 0%, #03c6fc 84%);
  box-shadow: -1.045px 9.945px 16px 0px rgb(29 47 112 / 30%);
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: #ffffff;
  padding-top: 3px;
  border: none;
  border-radius: 30px;
  width: auto;
  height: 60px;
  width: 180px;
  margin-left: 20px;
  cursor: pointer;
}
.short-url {
  text-align: left;
  margin-left: 30px;
}

.header {
  background: #414785;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
}
img {
  height: 50px;
}
.logout-text {
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
</style>
