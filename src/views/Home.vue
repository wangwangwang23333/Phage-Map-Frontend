<template>
  <div class="home">
    <div style="margin-top: 5vh;">
      <el-container>
        <el-aside style="width: 30vw;margin-left: 10vw;text-align: left;">
          <div style="margin-top: 10vh;width: 80%;">
            <b>Phage Microbiome Assist Phagotherapy</b>
            <div style="margin-top: 10px;">
              <b style="color: #409EFF;
            font-size: xx-large;"> Phage-MAP</b>
            </div>
            <p style="font-size: medium;">With the help of Phage-MAP, doctors can quickly find the phage for patients infected with superbugs.</p>
          </div>
          <!--空白部分-->
          <div style="margin-top: 10%;">
            <el-button type="primary" style="border-radius: 10px;">Get Started!</el-button>
            <el-button style="border-radius: 10px;" @click="seeVideo()">See Illustrations</el-button>
          </div>
        </el-aside>
        <el-main style="text-align: left;">
          <!--图片-->
          <el-image :src="require('@/assets/logo.png')"></el-image>
        </el-main>
      </el-container>
    </div>

    <div>
      <b style="color: orange;font-size: x-large;">Get Started</b>
      <div style="width: 80%;margin-left: 10%;">
        <el-divider></el-divider>
      </div>
      <div style="margin-bottom: 10vh;">
        <b>
          Extensive use of antibiotics! Emergence of superbugs!
        </b>
        <br>
        <b>
          How can we treat it?
        </b>
        <br>
        <b>
          Phagotherapy with the help of Phage-MAP!
        </b>
      </div>
    </div>
    <!--三张卡片-->
    <el-card>
      <el-container style="margin-top: 10vh;width: 80%;">
        <el-main>
          <el-image :src="require('@/assets/1.png')"></el-image>
        </el-main>
        <el-aside style="width: 40%;text-align: left;">
          <div style="margin-top: 10vh;margin-left: 20%;">
            <h1>Bacteriophage Bay</h1>
          <p>We put data in a well-organized database.
            <br>
            By click graph or title, you can download it.</p>
          </div>
        </el-aside>
      </el-container>
    </el-card>

    <el-card>
      <el-container style="margin-top: 10vh;width: 80%;">    
        <el-aside style="width: 60%;text-align: left;">
          <div style="margin-top: 10vh;margin-left: 40%;">
            <h1>Phage Finder</h1>
          <p>By searching, people can find phages<br>
            that target specific bacteria</p>
          </div>
        </el-aside>
        <el-main>
          <el-image :src="require('@/assets/2.png')"></el-image>
        </el-main>
      </el-container>
    </el-card>

    <el-card>
      <el-container style="margin-top: 10vh;width: 80%;">
        <el-main>
          <el-image :src="require('@/assets/1.png')"></el-image>
        </el-main>
        <el-aside style="width: 40%;text-align: left;">
          <div style="margin-top: 10vh;margin-left: 20%;">
            <h1>Interactive MAP</h1>
          <p>A visual network diagram of the<br>
            Phage-Bacteria interactions </p>
          </div>
        </el-aside>
      </el-container>
    </el-card>

    <div>
      <el-container style="margin-top: 10vh;width: 80%;margin-left: 10%;">    
        <el-aside style="width: 60%;text-align: left;">
          <div style="margin-top: 10vh;margin-left: 10%;overflow: hidden;">
            <!--两行三列-->
            <el-row :gutter="20" >
              <el-col :span="8" v-for="(item,i) in introduction" :key="i">
                <div class="grid-content bg-purple" style="margin-bottom: 3vh;">
                  <i class="el-icon-bell">Highlight{{i+1}}</i>
                  <br>
                  <b>{{item.title}}</b>
                  <p>{{item.description}}</p>
                </div>
              </el-col>
            </el-row>

          </div>
        </el-aside>
        <el-main>
          <div>
            <el-image :src="require('@/assets/3.png')"></el-image>
          </div>
        </el-main>
      </el-container>
    </div>

    <!--联系-->
    <div style="background-color: #409EFF;width: 80%;margin-left: 10%;border-radius: 30px;">
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

    <!--留言区-->
    <div>
      <el-container>
        <el-main>

        </el-main>
        <el-aisde>
          <el-image :src="require('@/assets/biglogo.png')"></el-image>
        </el-aisde>
      </el-container>
    </div>

    <!--展现已经存在的留言-->
    <div>
      <el-card shadow="hover" style="width:95%;margin:0 auto;border-radius:15px" >
        <div slot="header">
          <h2>
              <i class="el-icon-s-comment
              " id="myIcon" ></i>
              <span>MESSAGE BOARD</span>
          </h2>
  
        </div>
  
        <div style="margin:0 auto" id="commentNumText">
          <strong>{{commentNum}}</strong>&nbsp;&nbsp; comments
        </div>
        
        <br><br>
        <div style="margin-top:3%" v-for="(comment, index) in comments" :key="index">
          <el-card    class="box-card" style="width: 800px;height: 100%;margin:0 auto">
            <span class="bigFontSize" style="font-size: 15px;float: left;color: #7b7b7b">
              <i class="el-icon-time"></i>
              Time：{{comment.time}}</span>
            <br><br>
           
            <span class="NameFontSize" style="font-size: 20px;float:left;padding-left: 2%">
                {{comment.firstname}}&nbsp;&nbsp;
                {{comment.lastname}}</span>
            <br><br>
            <el-divider></el-divider>
            <span class="commentSize" >
                  {{comment.content}}</span>
            <br>
  
          </el-card>
          <br>
        </div>
  
  
        
          <el-pagination
            v-if="commentNum<4?false:true"
            layout="prev, pager, next"
            :page-size="publishedPageSize"
            :page-count="5"
            :total="commentNum"
            @current-change="current_change"
            style="float: bottom ;padding-bottom: 1%"
            background
        >
        
  
        </el-pagination>
  
  
      </el-card >
    </div>

    <!--播放视频界面-->
    <div>
      <el-dialog
          title="Illustration Video" 
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
          class="dialogStyle"
          >
          <el-image src="https://z3.ax1x.com/2021/07/13/WEEqvn.png" fit="fill" style="position:absolute;
          left:0px; bottom:0px; border-radius:15px; opacity:20%"></el-image>
          <!--视频-->
          <video-player 
          class="video-player vjs-custom-skin" 
          ref="videoPlayer" 
          :playsinline="true" 
          :options="playerOptions">
          </video-player>
          <el-divider><i class="el-icon-warning-outline"></i></el-divider>
          
          <div class="nameStyle" 
          style="text-align: center;display: block"
          >See the video to understand how to use our website!</div>
          
      </el-dialog>
  </div>

  </div>

  
</template>

<script>
// @ is an alias to /src
import {videoPlayer} from "vue-video-player";
import "video.js/dist/video-js.css";


export default {
  name: 'Home',
  components: {
    videoPlayer,
  },
  created(){
    
  },
  methods:{
    seeVideo(){
      this.dialogVisible=true;
    },
    handleClose(){
      this.dialogVisible=false;
    },
    //发送留言
    addComment(){

    }
  },
  data(){
    return{
      dialogVisible:false,
      playerOptions: {
        playbackRates: [0.5,1.0,  2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: require("../assets/illustration.mp4"), //视频url地址
          },
        ],
        //poster: require("../assets/videos/meetYou.jpg"), //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "The video cannot be wathed now. Please wait.", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
      introduction:[
        {
          //highlight:'强调',
          title:'题目1',
          description:'我是一段很有意思的描述符，你不要觉得我没有意思，呵呵呵呵呵'
        },
        {
          //highlight:'强调',
          title:'题目2',
          description:'我是一段很有意思的描述符，你不要觉得我没有意思，呵呵呵呵呵'
        },{
          //highlight:'强调',
          title:'题目3',
          description:'我是一段很有意思的描述符，你不要觉得我没有意思，呵呵呵呵呵'
        },{
          //highlight:'强调',
          title:'题目4',
          description:'我是一段很有意思的描述符，你不要觉得我没有意思，呵呵呵呵呵'
        },{
          //highlight:'强调',
          title:'题目5',
          description:'我是一段很有意思的描述符，你不要觉得我没有意思，呵呵呵呵呵'
        },{
          //highlight:'强调',
          title:'题目6',
          description:'我是一段很有意思的描述符，你不要觉得我没有意思，呵呵呵呵呵'
        },
      ],
      commentNum:1,
      comments:[
        {
          firstname:'Mingjie',
          lastname:"Wang",
          time:'2021/9/2 22:35',
          content:"It is really a great website, and I'm totoally obsseseed with it!"
        }
      ]
    }
  }
}
</script>

<style scoped>
  /*#ratings{*/
  /*  display: block;*/
  
  /*}*/
  .el-icon-star-on:before {
      font-size: 1.5em !important;
  }
  .bigFontSize{
      font-size: 10px;
      color: #999;
      padding:6px 6px;
      font-family:"FZHeiBJW","Lato-Bold";
      margin:1px;
      word-wrap: break-word;
      word-break: normal;
  }
  .NameFontSize{
      font-size:22px;
      padding: 1px 6px;
      font-weight: bold;
      text-align: left;
      display:block;
      margin-top:10px;
      margin-right:10px;
      font-family:"Lato-Bold","FZHeiBJW";
      flex: 1;  
  }
  .commentSize{
      font-size: 18px;
      color: rgb(2, 0, 0);
      padding:6px 6px;
      display: block;
      font-family:"PingFang SC";
      margin:1px;
      text-align: left;
      word-wrap: break-word;
      word-break: normal;
  }
  #ratings{
    
    vertical-align: middle;
    padding-left: 12px;
    text-align: center;
    font-family:"Lato-Bold";
    /*width: 20px;*/
    /*background-color: blue;*/
  }
  
  #commentNumText{
    display:inline-block;
    font-size: 1.2em;
    /*horiz-align: center;*/
  }
  
  #myIcon{
    display:inline-block;
    margin-right:10px;
    color:#0f68ba;
    font-size:1.2em;
  }
  
  .outer-box-card{
    border-radius: 15px;
    border-width: 3px;
    border-color: #7b7b7b;
    background-color: #ffffff;
    box-shadow: 7px 7px 10px #888888;
    animation: fadeInDown;
    animation-duration: 0.5s;
  }
  </style>