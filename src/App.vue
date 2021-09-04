<template>
  <div id="app">
    <!--导航栏-->
    <div style="text-align: left;margin-top: 3%;"> 
      <el-button type="text" style="margin-left: 10%;font-family: 'goodFont';font-size: large;" @click="jumpToHomePage()">HomePage</el-button>
      <span style="float: right;margin-right: 10%;">
        <el-button @click="downloadFile()" style="font-family: 'goodFont';font-size: large;">Docs</el-button>
        <el-button style="margin-left: 0;font-family: 'goodFont';font-size: large;" type="primary" plain @click="openGitHub()" >Git Hub</el-button>
      </span>
    </div>
    <router-view style="width: 80vw;margin-left: 10vw;"/>
  </div>
</template>

<script>
export default{
  methods:{
    jumpToHomePage(){
      this.$router.push({path:"/"});
    },
    openGitHub(){
      window.open("https://github.com/wangwangwang23333/igem-web")
    },
    downloadFile(){
      alert('下载文件尚未完成');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style scoped>
@import "assets/css/font.css";
</style>
