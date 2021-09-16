<template>
    <div ref="home">
        <div style="margin-top: 5vh;">
            <el-container>
              <el-aside style="width: 30vw;margin-left: 10vw;text-align: left;">
                <div style="margin-top: 10vh;width: 80%;">
                  <p style="font-size: large;">More intuitive representation</p>
                  <div style="margin-top: 10px;">
                    <b style="color: #409EFF;
                  font-size: xx-large;font-family: 'FZHeiBJW'">Interactive MAP</b>
                  </div>
                  <p style="font-size: medium;color: grey;">A visual network diagram of the Phage-Bacteria
                    interactions 
                    </p>
                </div>
                <!--空白部分-->
                <div style="margin-top: 10%;" >
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
            
          </div>

          <!--分割线-->
          <div style="background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>

          <!--待完成的地图模块-->
          <div>
              <!--搜索框-->
              <ResultMap :showTable="true" :MapData="getTableData()"/>
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
export default{
    name:'Map',
    components:{
        ResultMap
    },
    mounted(){
        this.$refs["home"].scrollIntoView(true);
    },
    methods:{
      gotoStart(){
        this.$refs["start"].scrollIntoView(true);
      },
      getTableData()
      {
          return {
                findCondition: "1",
                searchText: '',
                scoreCompare: "4",
                dialogVisible: false,
                searchScore: '0',
                showNodeNumber: 10,
                nodes: [],
                edges: [],
                // network:null,
                container: null,
                //   节点数组
                nodesArray: [
                    {
                        id: 0,
                        label: "大前端",
                        color: { background: "yellow" }
                    },
                    {
                        id: 1,
                        label: "HTML",
                        color: { background: "pink" }
                    },
                    {
                        id: 2,
                        label: "JavaScript",
                        color: { background: "pink" }
                    },
                    {
                        id: 3,
                        label: "CSS",
                        color: { background: "pink" }
                    },
                    {
                        id: 4,
                        label: "三大主流框架",
                        color: { background: "pink" }
                    },
                    {
                        id: 5,
                        label: "vue.js",
                        color: { background: "pink" }
                    },
                    {
                        id: 6,
                        label: "react.js",
                        color: { background: "pink" }
                    },
                    {
                        id: 7,
                        label: "angular.js",
                        color: { background: "pink" }
                    }
                ],
                //   关系线数组
                edgesArray: [
                    { from: 0, to: 1, label: "ddd" },
                    { from: 1, to: 0, label: "aaa" },
                    { from: 0, to: 2, label: "step1" },
                    { from: 0, to: 3, label: "step1" },
                    { from: 0, to: 4, label: "step1" },
                    { from: 4, to: 5, label: "step2" },
                    { from: 4, to: 6, label: "step2" },
                    { from: 4, to: 7, label: "step2" }
                ],
                options: {},

                data:{},
                //表格数据
                tableData: []
            };
      }

    }
}
</script>