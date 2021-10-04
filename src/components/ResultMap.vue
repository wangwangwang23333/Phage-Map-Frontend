<template>
    <div>
        <!--width,height 画布的宽度，高度。 可以是百分比或像素，一般在dom元素上设置 -->
        <div v-if="showTable">
            <div id="network_id" class="network" style="height:80vh" :span="15"></div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                empty-text="No result now"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="bugSeqId"
                label="Super Bug Id"
                width="200">
                </el-table-column>
                <el-table-column
                prop="superBugName"
                label="Super Bug Name"
                width="200">
                </el-table-column>
                <el-table-column
                prop="phageId"
                label="Phage Id"
                width="200">
                </el-table-column>
                <el-table-column
                prop="phageName"
                label="Phage Name"
                width="200">
                </el-table-column>
                <el-table-column
                prop="phageClusterId"
                label="Phage Cluster Id"
                width="200">
                </el-table-column>
                <el-table-column
                prop="score"
                label="Score"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
        
        <el-row v-else>
            <el-col id="network_id_2" class="network" style="height:80vh" :span="15"></el-col>
            <el-col :span="9" >
                <!--控制栏-->
                <div style="text-align: left;background-color: #f4fcfc;height: 80vh;">
                    <div class="sub-title" style="line-height: 5vh;font-weight: bold;margin-left: 5%;margin-top: 3vh;">Searching Condition</div>
                    <el-input placeholder="Please input here" v-model="searchText"
                     class="input-with-select"
                     style="width: 80%;margin-left: 5%;"
                     >
                        <el-select v-model="findCondition" slot="prepend" placeholder="Please choose">
                          <el-option label="All Species" value="1"></el-option>
                          <el-option label="Bacteria" value="2"></el-option>
                          <el-option label="Phage" value="3"></el-option>
                        </el-select>
                        
                    </el-input>
                    
                    <!--得分筛选-->
                    <div class="sub-title" style="line-height: 5vh;font-weight: bold;margin-left: 5%;margin-top: 5vh;">Score</div>
                    <el-input placeholder="Please input here" v-model="searchScore"
                     class="input-with-select"
                     style="width: 80%;margin-left: 5%;"
                     >
                        <el-select v-model="scoreCompare" slot="prepend" placeholder="Please choose">
                            <el-option label="=" value="1"></el-option>
                            <el-option label=">" value="2"></el-option>
                            <el-option label="<" value="3"></el-option>
                            <el-option label=">=" value="4"></el-option>
                            <el-option label="<=" value="5"></el-option>
                        </el-select>
                        
                    </el-input>
                    
                    <!--展示的结点数目-->
                    <div class="sub-title" style="line-height: 5vh;font-weight: bold;margin-left: 5%;margin-top: 5vh;">Set number of display records</div>
                    <el-input-number 
                    v-model="showNodeNumber" 
                    @change="handleChange" 
                    :min="1" 
                    :max="50" 
                    label="Node Number"
                    style="margin-left: 5%;"
                    ></el-input-number>
                    
                    <div style="margin-top: 5vh;margin-left: 5%;">
                        
                        <el-button 
                        type="primary" 
                        @click="clickSearch()"
                        plain icon="el-icon-search" round>Search</el-button>
                        <el-button type="info" plain icon="el-icon-download" round>Download</el-button>
                    </div>

                    <!--下面是介绍-->
                    <div style="margin-top: 5vh;margin-left: 5%;">
                        这里直接做一张图介绍
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-dialog title="测试框" :visible.sync="dialogVisible" width="width">
            <div>xxxxxx</div>
            <div slot="footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import Vis from "vis";
    import { findBacteriaByKey,findPhageByKey,findAllSpeciesByKey} from '@/api/finder';
    import { findAllMap } from '@/api/map';
'@/api/finder';

    export default {
        name: 'ResultMap',
        props: {
            showTable: Boolean
        },
        data() {

            return {
                //检索条件
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
                data: {},
                //表格数据
                tableData: []
            };
        },
        methods: {


            selectScore(score,score_limit=Number.NEGATIVE_INFINITY)
            {
                /*
                <el-option label="=" value="1"></el-option>
                <el-option label=">" value="2"></el-option>
                <el-option label="<" value="3"></el-option>
                <el-option label=">=" value="4"></el-option>
                <el-option label="<=" value="5"></el-option>
                */

                switch(Number(this.scoreCompare))
                {
                    case 1:
                        return score==score_limit;
                    case 2:
                        return score>score_limit;
                    case 3:
                        return score<score_limit;
                    case 4:
                        return score>=score_limit;
                    case 5:
                        return score<=score_limit;
                    default:
                        return score>score_limit;
                }
            },

            selectCondition()
            {
                /*
                <el-option label="All Species" value="1"></el-option>
                <el-option label="Bacteria" value="2"></el-option>
                <el-option label="Phage" value="3"></el-option>
                */
                switch(this.findCondition)
                {
                    case 1:
                        return findAllSpeciesByKey;
                    case 2:
                        return findBacteriaByKey;
                    case 3:
                        return findPhageByKey;
                    default:
                        return findAllSpeciesByKey
                }

            },

            initializeOptions()
            {
                let _this = this;
                //1.创建一个nodes数组
                _this.nodes = new Vis.DataSet(_this.nodesArray);
                //2.创建一个edges数组
                _this.edges = new Vis.DataSet(_this.edgesArray);
                
                if(this.showTable==true)
                {
                    _this.container = document.getElementById("network_id");
                }
                else
                {
                    _this.container=document.getElementById("network_id_2");
                }
                
                _this.data = {
                    nodes: _this.nodes,
                    edges: _this.edges
                };
                _this.options = {
                    autoResize: true, //网络将自动检测其容器的大小调整，并相应地重绘自身
                    locale: "cn", //语言设置：工具栏显示中文
                    //设置语言
                    locales: {
                        cn: {
                            //工具栏中文翻译
                            edit: "编辑",
                            del: "删除当前节点或关系",
                            back: "返回",
                            addNode: "添加节点",
                            addEdge: "添加连线",
                            editNode: "编辑节点",
                            editEdge: "编辑连线",
                            addDescription: "点击空白处可添加节点",
                            edgeDescription: "点击某个节点拖拽连线可连接另一个节点",
                            editEdgeDescription: "可拖拽连线改变关系",
                            createEdgeError: "无法将边连接到集群",
                            deleteClusterError: "无法删除集群.",
                            editClusterError: "无法编辑群集'"
                        }
                    },

                    // 设置节点样式
                    nodes: {
                        shape: "circle",
                        size: 15,
                        font: {
                            //字体配置
                            size: 15
                        },
                        color: {
                            // border: "#2B7CE9", //节点边框颜色
                            background: "#97C2FC", //节点背景颜色
                            highlight: {
                                //节点选中时状态颜色
                                border: "#2B7CE9",
                                background: "#D2E5FF"
                            },
                            hover: {
                                //节点鼠标滑过时状态颜色
                                border: "#2B7CE9",
                                background: "#D2E5FF"
                            }
                        },
                        borderWidth: 0, //节点边框宽度，单位为px
                        borderWidthSelected: 2 //节点被选中时边框的宽度，单位为px
                    },
                    // 边线配置
                    edges: {
                        width: 3,
                        length: 300,
                        color: {
                            color: "#848484",
                            highlight: "#848484",
                            hover: "#848484",
                            inherit: "from",
                            opacity: 1.0
                        },
                        shadow: true,
                        smooth: {
                            //设置两个节点之前的连线的状态
                            enabled: true //默认是true，设置为false之后，两个节点之前的连线始终为直线，不会出现贝塞尔曲线
                        },
                        arrows: { to: true } //箭头指向to
                    },
                    //计算节点之前斥力，进行自动排列的属性
                    physics: {
                        enabled: true, //默认是true，设置为false后，节点将不会自动改变，拖动谁谁动。不影响其他的节点
                        barnesHut: {
                            gravitationalConstant: -4000,
                            centralGravity: 0.3,
                            springLength: 120,
                            springConstant: 0.04,
                            damping: 0.09,
                            avoidOverlap: 0
                        }
                    },
                    //用于所有用户与网络的交互。处理鼠标和触摸事件以及导航按钮和弹出窗口
                    interaction: {
                        dragNodes: true, //是否能拖动节点
                        dragView: true, //是否能拖动画布
                        hover: true, //鼠标移过后加粗该节点和连接线
                        multiselect: true, //按 ctrl 多选
                        selectable: true, //是否可以点击选择
                        selectConnectedEdges: true, //选择节点后是否显示连接线
                        hoverConnectedEdges: true, //鼠标滑动节点后是否显示连接线
                        zoomView: true //是否能缩放画布
                    },
                    //操作模块:包括 添加、删除、获取选中点、设置选中点、拖拽系列、点击等等
                    manipulation: {
                        enabled: false, //该属性表示可以编辑，出现编辑操作按钮
                        addNode: true,
                        addEdge: true,
                        editEdge: true,
                        deleteNode: true,
                        deleteEdge: true
                    }
                };

                //console.log("container:",_this.container);
                //console.log("data:",_this.data);
                //console.log("options:",_this.options);

                _this.network = new Vis.Network( _this.container, _this.data, _this.options );
            },

            init() {
                if(this.showTable==true){
                    this.requestMapDate("All Map",findAllMap,this.initializeOptions);
                }
                else{
                    console.log("limit of search result:",this.showNodeNumber,this.searchScore,this.scoreCompare);
                    this.requestMapDate(this.searchText,this.selectCondition(),this.initializeOptions,this.showNodeNumber,this.searchScore);
                }
                
            },

            resetAllNodes() {
                let _this = this;
                _this.nodes.clear();
                _this.edges.clear();
                _this.nodes.add(_this.nodesArray);
                _this.edges.add(_this.edgesArray);
                _this.data = {
                    nodes: _this.nodes,
                    edges: _this.edges
                };
                //   network是一种用于将包含点和线的网络和网络之间的可视化展示
                _this.network = new Vis.Network(
                    _this.container,
                    _this.data,
                    _this.options
                );
            },
            resetAllNodesStabilize() {
                let _this = this;
                _this.resetAllNodes();
                _this.network.stabilize();
            },

            handleSelectionChange() {

            },

            handleChange(){

            },

            requestMapDate(str,find,func=()=>{},data_limit=50,score_limit=Number.NEGATIVE_INFINITY)
            {
                if(this.showTable==true)
                {
                    this.tableData=[];
                    find().then(response=>{
                        let mapdata={
                        nodes: [],
                        edges: [],
                        nodesArray: [],
                        edgesArray: [],
                        }
                        let genbank_set= new Set();
                        let phage_set= new Set();
                        
                        data_limit=Number(data_limit);

                        
                        let data_num=0;
                        for(let i in response.data){

                            let item=response.data[i];

                            data_num=data_num+1;
                            genbank_set.add(item.bugSeqId);
                            phage_set.add(item.phageId);

                            this.tableData.push(response.data[i]);
                            if(data_num>=data_limit)
                            {
                                break;
                            }
                        }
                        
                        let genbank_map=new Map()
                        let phage_map=new Map()
                        let cnt=0;
                        for(let i of genbank_set){
                            genbank_map.set(i,cnt);
                            cnt=cnt+1
                        }
                        for(let i of phage_set){
                            phage_map.set(i,cnt); 
                            cnt=cnt+1

                        }


                        for(let [k,v] of genbank_map){
                            mapdata.nodesArray.push({id:v,label:k,color:{background: "yellow"}})
                        }

                        for(let [k,v] of phage_map){
                            mapdata.nodesArray.push({id:v,label:k,color:{background: "pink"}}) 
                        }

                        data_num=0;

                        for(let i in response.data){ 
                            let item=response.data[i];


                            data_num=data_num+1;

                            let g_id=genbank_map.get(item.bugSeqId);
                            let p_id=phage_map.get(item.phageId);
                            let len=item.score;
                            mapdata.edgesArray.push({ from: g_id, to: p_id, label: len.toString() })

                            if(data_num>=data_limit) { break; }

                        }
                        this.edgesArray=mapdata.edgesArray;
                        this.nodesArray=mapdata.nodesArray;
                        this.nodes=[];
                        this.edges=[];

                        console.log(this.edgesArray)
                        console.log(this.nodesArray)

                        func();
                        
                    }).catch((error)=>{
                        //this.$message.error("There's something wrong with your network.");
                        console.log("请求错误:"+error.toString());
                    });
                }
                else
                {
                    find(str).then(response=>{
                    let mapdata={
                    nodes: [],
                    edges: [],
                    nodesArray: [],
                    edgesArray: [],
                    }
                    let genbank_set= new Set();
                    let phage_set= new Set();
                    
                    data_limit=Number(data_limit);
                    score_limit=Number(score_limit);

                    
                    let data_num=0;
                    for(let i in response.data){

                        let item=response.data[i];

                        if(this.selectScore(item.score,score_limit)==false)
                        {
                            continue;
                        }

                        console.log("score:",item.score,"score_limit:",score_limit,this.scoreCompare);


                        data_num=data_num+1;
                        genbank_set.add(item.genebankId);
                        phage_set.add(item.phageId);

                        if(data_num>=data_limit)
                        {
                            break;
                        }
                    }
                    
                    let genbank_map=new Map()
                    let phage_map=new Map()
                    let cnt=0;
                    for(let i of genbank_set){
                        genbank_map.set(i,cnt);
                        cnt=cnt+1
                    }
                    for(let i of phage_set){
                        phage_map.set(i,cnt); 
                        cnt=cnt+1

                    }


                    for(let [k,v] of genbank_map){
                        mapdata.nodesArray.push({id:v,label:k,color:{background: "yellow"}})
                    }

                    for(let [k,v] of phage_map){
                        mapdata.nodesArray.push({id:v,label:k,color:{background: "pink"}}) 
                    }

                    data_num=0;

                    for(let i in response.data){ 
                        let item=response.data[i];

                        if(this.selectScore(item.score,score_limit)==false) 
                        { 
                            continue;
                        }


                        data_num=data_num+1;

                        let g_id=genbank_map.get(item.genebankId);
                        let p_id=phage_map.get(item.phageId);
                        let len=item.score;
                        mapdata.edgesArray.push({ from: g_id, to: p_id, label: len.toString() })

                        if(data_num>=data_limit) { break; }

                    }
                    this.edgesArray=mapdata.edgesArray;
                    this.nodesArray=mapdata.nodesArray;
                    this.nodes=[];
                    this.edges=[];

                    console.log(this.edgesArray)
                    console.log(this.nodesArray)

                    func();
                    
                }).catch((error)=>{
                        //this.$message.error("There's something wrong with your network.");
                        console.log("请求错误:"+error.toString());
                    });
                }
                
            },
            //处理搜索内容
            clickSearch() {
                console.log("searching:",this.searchText);
                console.log("limit of search result:",this.showNodeNumber,this.searchScore,this.scoreCompare);
                this.requestMapDate(this.searchText,this.selectCondition(),this.initializeOptions,this.showNodeNumber,this.searchScore);

            }
        },

        mounted() {
            this.init();
            //点击事件
            /*this.network.on("click", params => {
                console.log("点击", params.nodes);
                this.network.addEdgeMode();
            });
            //点击鼠标右键事件
            this.network.on("oncontext", params => {
                console.log("右击", params);
                this.dialogVisible = true;
            });*/
        }
    };
</script>
<style lang="less">

</style>

<style>
    .el-select .el-input {
    width: 130px;
  }
</style>