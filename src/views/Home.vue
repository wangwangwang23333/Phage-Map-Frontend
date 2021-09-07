<template>
  <div class="home">
    <div style="margin-top: 5vh;">
      <el-container>
        <el-aside style="width: 30vw;margin-left: 10vw;text-align: left;">
          <div style="margin-top: 10vh;width: 80%;">
            <p style="font-size: large;">Phage Microbiome Assist Phagotherapy</p>
            <div style="margin-top: 10px;">
              <b style="color: #3b5a79;
            font-size: xx-large;font-family: 'FZHeiBJW'"> Phage-MAP</b>
            </div>
            <p style="font-size: medium;color: grey;">With the help of Phage-MAP, doctors can quickly find the phage for patients infected with superbugs.</p>
          </div>
          <!--空白部分-->
          <div style="margin-top: 10%;">
            <el-button type="primary" style="border-radius: 10px;" @click="gotoStart()">Get Started!</el-button>
            <el-button style="border-radius: 10px;" @click="seeVideo()">See Illustrations</el-button>
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
      <div style="margin-bottom: 5vh; font-family: 'goodFont';font-size: large;">
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
    <div style="background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>
    <!--三张卡片-->
    <el-card style="margin-top: 0%;">
      <el-container style="margin-top: 10vh;width: 80%;">
        <el-main>
          <el-image :src="require('@/assets/1.png')"
          @click="jumpTo(0)"
          style="cursor:pointer;"></el-image>
        </el-main>
        <el-aside style="width: 40%;
        text-align: left;
        background-image: url('https://z3.ax1x.com/2021/09/03/hyVGGV.png');
        background-repeat: no-repeat;
        background-position: 20% 0%;
        "
        >
          <div style="margin-top: 10vh;margin-left: 20%;cursor:pointer;"
          @click="jumpTo(0)"
          >
            <h1 style="font-size: x-large;">Bacteriophage Bay</h1>
          <p style="color:darkgray;">We put data in a well-organized database.
            <br>
            By click graph or title, you can download it.</p>
          </div>
        </el-aside>
      </el-container>
    </el-card>

    <div style="background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>

    <el-card style="margin-top: 0%;">
      <el-container style="margin-top: 10vh;width: 80%;">    
        <el-aside style="width: 60%;text-align: left;
        background-image: url('https://z3.ax1x.com/2021/09/03/hyV8P0.png');
        background-repeat: no-repeat;
        background-position: 40% 0%;">
          <div style="margin-top: 10vh;margin-left: 40%;cursor: pointer;"
          @click="jumpTo(1)">
            <h1 style="font-size: x-large;">Phage Finder</h1>
          <p style="color:darkgray;">By searching, people can find phages<br>
            that target specific bacteria</p>
          </div>
        </el-aside>
        <el-main>
          <el-image :src="require('@/assets/2.png')"
          @click="jumpTo(1)"
          style="cursor:pointer;"></el-image>
        </el-main>
      </el-container>
    </el-card>

    <div style="background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>

    <el-card style="margin-top: 0%;">
      <el-container style="margin-top: 10vh;width: 80%;">
        <el-main>
          <el-image :src="require('@/assets/1.png')"
          @click="jumpTo(2)"
          style="cursor:pointer;"></el-image>
        </el-main>
        <el-aside style="width: 40%;text-align: left;
        background-image: url('https://z3.ax1x.com/2021/09/03/hyVJ2T.png');
        background-repeat: no-repeat;
        background-position: 20% 0%;">
          <div style="margin-top: 10vh;margin-left: 20%;cursor: pointer;"
          @click="jumpTo(2)">
            <h1 style="font-size: x-large;">Interactive MAP</h1>
          <p style="color:darkgray;">A visual network diagram of the<br>
            Phage-Bacteria interactions </p>
          </div>
        </el-aside>
      </el-container>
    </el-card>

    <div style="margin-top:5%;background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>

    <div>
      <el-container style="margin-top: 5vh;width: 90%;margin-left: 5%;">    
        <el-aside style="width: 60%;text-align: left;">
          <div style="margin-top: 10vh;overflow: hidden;">
            <!--两行三列-->
            <el-row :gutter="24" >
              <el-col :span="8" v-for="(item,i) in introduction" :key="i">
                <div class="grid-content bg-purple" 
                style="margin-bottom: 3vh;
                background-image: url('https://z3.ax1x.com/2021/09/05/hWAd7F.png');
                background-repeat: no-repeat;
                background-position: 25% 0%;
                background-size: 50% 20%;
                ">
                  <i class="el-icon-bell" 
                  >Highlight{{i+1}}</i>
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


    <div style="background-color: #f9faff;height: 5%;">&nbsp;&nbsp;</div>
    
    <!--展现已经存在的留言-->
    <div ref="commentBoard">
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


        <div style="margin-top:3%"  
        v-for="(comment, index) in
        (publishedCurrentPage!=commentNum/5?
        comments.slice(5*publishedCurrentPage-5,5*publishedCurrentPage):
        comments.slice(5*publishedCurrentPage-5,commentNum)
        )" :key="index">
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
            <span class="commentSize" style="font-family: 'goodFont';">
                  {{comment.content}}</span>
            <br>
  
          </el-card>
          <br>
        </div>
       
        <el-pagination
          v-if="commentNum>=4"
          layout="prev, pager, next"
          :page-size="5"
          :total="commentNum"
          @current-change="current_change"
          style="float: bottom ;padding-bottom: 1%"
          background
        >
        
  
        </el-pagination>
  
        <!--分割线-->
        <el-divider></el-divider>
        <!--评论区-->
        <div style="margin:0 auto" id="commentNumText">
          <strong style="font-family: 'FZHeiBJW';font-size: x-large;">Please leave your comment here</strong>
        </div>
        
        <div style="margin-top: 5vh;margin-bottom: 5vh;">
          <el-container>
            <el-main>
              <el-row style="width: 80%;margin-left: 10%;">
                <el-col :span="11">
                  <div class="sub-title" style="margin-left: -65%;">First Name</div>
                  <el-input
                  placeholder="Your First Name"
                  prefix-icon="el-icon-user-solid"
                  v-model="firstname">
                  </el-input>
                </el-col>
                <el-col :span="2">
                  &nbsp;
                </el-col>
                <el-col :span="11">
                  <div class="sub-title" style="margin-left: -65%;">Last Name</div>
                  <el-input
                  placeholder="Your Last Name"
                  prefix-icon="el-icon-user-solid"
                  v-model="lastname">
                  </el-input>
                </el-col>
              </el-row>
              <el-row style="width: 80%;margin-left: 10%;margin-top: 5%;">
                <el-col :span="24">
                  <div class="sub-title" style="margin-left: -85%;">Message</div>
                  <el-input
                  type="textarea"
                  rows=5
                  placeholder="Input the content here"
                  prefix-icon="el-icon-user-solid"
                  maxlength="256"
                  show-word-limit
                  v-model="content">
                  </el-input>
                </el-col>
              </el-row>
              <el-button style="margin-top: 5%;" type="primary" plain @click="addComment()">Submit</el-button>
            </el-main>
            <el-aside style="width: 40%;">
              <el-image :src="require('@/assets/biglogo.png')"></el-image>
            </el-aside>
          </el-container>
        </div>

      </el-card >
    </div>

    <!--留言区-->
    


    <!--联系-->
    <div style="font-family: 'goodFont';background-color: #40a0ff86;width: 80%;margin-left: 10%;border-radius: 30px;">
      <div style="margin-top: 5vh;">
        <br><br>
        <b style="font-size: xx-large;;">CONTACTS</b>
        <p style="color: white;">If you have any feedback, please contact us</p>
        <b>EMAIL</b>
        <p style="color: white;">tj_software2021@163.com</p>
        <b>ADDRESS</b>
        <p style="color: white;">Tongji University, No.1239 siping Road, Yangpu District, Shanghai</p>
        <br>
      </div>
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
          class="video-player vjs-custom-skin vjs-big-play-centered" 
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
import { getComment,sendComment } from '@/api/board';

export default {
  name: 'Home',
  components: {
    videoPlayer,
  },
  created(){
    
    getComment().then(response=>{
      this.comments=eval(response.data).reverse();
      //按时间倒序排列
      this.commentNum=this.comments.length
      this.couponList=response.data.couponList; 
    }).catch(()=>{
        this.$message.error("There's something wrong with your network.");
    })

    this.commentNum=this.comments.length;
  },
  methods:{
    current_change(publishedCurrentPage){
      this.publishedCurrentPage=publishedCurrentPage
      console.log(this.publishedCurrentPage)
    },
    seeVideo(){
      this.dialogVisible=true;
    },
    handleClose(){
      this.dialogVisible=false;
    },
    jumpTo(index){
      if(index==0){
        this.$router.push({path:"/bay"});
      }
      else if (index==1){
        this.$router.push({path:"/finder"});
      }
      else{
        this.$router.push({path:"/map"});
      }
    },
    //发送留言
    addComment(){
      //判断是否输入了FirstName
      if(this.firstname.length==0){
        this.$message({
          message: 'Please input your first name!',
          type: 'warning'
        });
        return;
      }
      if(this.firstname.length>10){
        this.$message({
          message: 'Your first name should not be longer than 10 words!',
          type: 'warning'
        });
        return;
      }
      if(this.lastname.length==0){
        this.$message({
          message: 'Please input your last name!',
          type: 'warning'
        });
        return;
      }
      if(this.lastname.length>10){
        this.$message({
          message: 'Your last name should not be longer than 10 words!',
          type: 'warning'
        });
        return;
      }
      if(this.content==0){
        this.$message({
          message: 'The content should not be empty!',
          type: 'warning'
        });
        return;
      }
      //发送api请求
      Date.prototype.Format = function (fmt) { // author: meizz
      var o = {
          "M+": this.getMonth() + 1, // 月份
          "d+": this.getDate(), // 日
          "h+": this.getHours(), // 小时
          "m+": this.getMinutes(), // 分
          "s+": this.getSeconds(), // 秒
          "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
          "S": this.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
      }
      let datetime=new Date().Format("yyyy-MM-dd hh:mm")
      
      let param={
        firstname:this.firstname,
        lastname:this.lastname,
        time:datetime,
        content:this.content
      }
      
      //发送api请求
      sendComment(param).then(response=>{
        response;

        //自己的数据添加
        this.comments.splice(0,0,param)
        this.commentNum+=1

        //提醒添加成功
        this.$message({
          message: 'You have successfully commented!!',
          type: 'success'
        });

        //清空内容
        this.firstname=''
        this.lastname=''
        this.content=''

        //跳转到评论区
        this.$refs["commentBoard"].scrollIntoView(true);

      }).catch(()=>{
          this.$message.error("There's something wrong with your network.");
      })
    },
    gotoStart(){
      this.$refs["start"].scrollIntoView(true);
    }

  },
  data(){
    return{
      dialogVisible:false,
      firstname:'',
      lastname:'',
      content:'',
      publishedCurrentPage:1,
      playerOptions: {
        playbackRates: [0.5,1.0,  2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
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
          time:'2021-09-02 22:35',
          content:"It is really a great website, and I'm totoally obsseseed with it!"
        },
        {
          firstname:'Jacky',
          lastname:"Li",
          time:'2021-09-03 10:20',
          content:"Your website definitely helps me a lot since I've been finding such a web for a long time."
        },
        {
          firstname:'Ziniu',
          lastname:'Niu',
          time:'2021-09-04 01:44',
          content:'IGEM HP GAME IS SO FUCKKKKKKKKKKING FUNNY!!'
        },
        {
          firstname:'Liyou',
          lastname:'Wang',
          time:'2021-09-04 11:20',
          content:'A great website but will be better with some more beautiful picture.'
        },
        {
          firstname:'正一',
          lastname:'卓',
          time:'2021-09-04 19:21',
          content:'这个网站真的很赞，我真的哭死'
        },
        {
          firstname:'Zihan',
          lastname:'Zhang',
          time:'2021-09-05 10:37',
          content:'Good website which helps me in an exam'
        },
      ]
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/font.css";
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