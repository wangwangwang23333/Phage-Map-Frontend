<template>
  <div ref="home">
    <div style="margin-top: 5vh;">
      <el-container>
        <el-aside style="width: 30vw;margin-left: 10vw;text-align: left;">
          <div style="margin-top: 10vh;width: 80%;">
            <p style="font-size: large;">We provide a tool to</p>
            <div style="margin-top: 10px;">
              <b style="color: #409EFF;
                  font-size: xx-large;font-family: 'FZHeiBJW'">Phage Finder</b>
            </div>
            <p style="font-size: medium;color: grey;">Anyone can use it to find the phage associated with target
              bacterium</p>
          </div>
          <!--空白部分-->
          <div style="margin-top: 10%;">
            <el-button type="primary" style="border-radius: 10px;" @click="gotoStart()">Get Started!</el-button>

          </div>
        </el-aside>
        <el-main style="text-align: left;">
          <!--图片-->
          <el-image :src="require('@/assets/logo.png')"></el-image>
        </el-main>
      </el-container>
    </div>

    <div style="margin-top: 5%;" ref="start">
      <div style="background-color: #f9faff;line-height: 10vh;">
        <b style="color: orange;font-size: x-large;">Get Started</b>
      </div>
      <div style="width: 80%;margin-left: 10%;">
        <el-divider></el-divider>
      </div>
      <div style="margin-bottom: 10vh;font-family: 'goodFont';font-size: large;">
        <p style="font-size: x-large;">
          Bacteria associated with phages
        </p>
        <p>
          10819 species of bacteria, 26773 bacterial sequences; In 14,571 sequences of 12,041 phage species
        </p>
      </div>
    </div>

    <!--分割线-->
    <div style="background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>

    <!--待完成的地图模块-->
    <div>
      <!--搜索框-->
      <ResultMap :showTable="false"/>
    </div>

    <!--联系-->
    <div style="font-family: 'goodFont';background-color: #40a0ff86;width: 80%;margin-left: 10%;border-radius: 30px;">
      <div style="margin-top: 5vh;">
        <br><br>
        <b style="font-size: xx-large;">CONTACTS</b>
        <p style="color: white;">If you have any feedback, please contact us</p>
        <b>EMAIL</b>
        <p style="color: white;">tj_software2021@163.com</p>
        <b>ADDRESS</b>
        <p style="color: white;">Tongji University, No.1239 siping Road, Yangpu District, Shanghai</p>
        <br>
      </div>
    </div>

  </div>
</template>

<script>
import ResultMap from '@/components/ResultMap.vue'

export default {
  name: 'Finder',
  components: {
    ResultMap
  },
  mounted() {
    this.$refs["home"].scrollIntoView(true);
  },
  methods: {
    gotoStart() {
      this.$refs["start"].scrollIntoView(true);
    },

  },

}

</script>