/* 左边第一个柱状图 */
(function () {
    // 初始化实例对象，echarts.init(容器)
    const myChart = echarts.init(document.querySelector(".bar-left .chart"));
    // 指定图表的配置项和数据
    option = {
        color:["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: "0",
            right: "0",
            top:"10px",
            bottom: "4%",
            containLabel: true,
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        xAxis: [
            {
                type: "category",
                data: ["旅游","教育","游戏","医疗","电商","社交","金融"],
                axisTick: {
                    alignWithLabel: true,
                },
                axisLabel:{
                    color:'rgba(255,255,255,0.6)',
                    fontSize:"14"
                },
                //不显示x坐标轴的样式
                axisLine:{
                    show:false
                }
            },
            
        ],
        yAxis: [
            {
                type: "value",
                axisLabel:{
                    color:'rgba(255,255,255,0.6)',
                    fontSize:14
                },
                //y轴线条样式
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.1)",
                        width:2,
                        type:"solid"
                    }
                },
                //修改y轴分割线样式
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0.1)'
                    }
                }
            },
        ],
        series: [
            {
                name: "Direct",
                type: "bar",
                barWidth: "35%",
                data: [30, 52, 100, 234, 290, 70, 220],
                itemStyle:{
                    //修改柱子为圆角
                    barBorderRadius:5
                },
            },
        ],
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    //图标跟随屏幕自适应
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();

/* 右边第一个柱状图 */
(function(){
    // 初始化实例对象，echarts.init(容器)
    const myChart = echarts.init(document.querySelector(".bar-right .chart"));
    const myColor = ['red','blue','orange','green','pink'];
    // 指定图表的配置项和数据
    option = {
        // legend: {},
        grid: {
            left: "22%",
            top:"10%",
            bottom: "10%",
            // containLabel: true,
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        //不显示x轴相关信息
        xAxis: {
            show:false
        },
        yAxis: [
        {
            type: 'category',
            inverse:true,
            data: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Node'],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'white',
                fontSize:"14"
            },
        },
        {
            show:true,
            inverse:true,
            data:[702,350,610,793,664],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    fontSize:14,
                    color:"white"
                }
            }
        }
        ],
        series: [
            {
            name: '条',
            type: 'bar',
            data: [70,34,60,78,69],
            yAxisIndex:0,
            itemStyle:{
                //修改柱子为圆角
                barBorderRadius:20,
                color:function(parmsm){ //parmsm为柱子对象
                    return myColor[parmsm.dataIndex];
                }
            },
            //柱子之间距离
            barCategoryCap:50,
            //柱子宽度
            barWidth:10,
            //显示柱子内的文字
            label:{
                show:true,
                position:"inside",
                //{c}会自动解析data里面数据到lebel里面显示
                formatter:"{c}%"
            }
            }, 
            {
                name: '框',
                type: 'bar',
                yAxisIndex:1,
                barCategoryCap:50,
                barWidth:15,
                itemStyle:{
                    color:"none",
                    borderColor:"#00c1de",
                    borderWidth:3,
                    barBorderRadius:15
                },
                data: [100,100,100,100,100]
            },
        ]
        };
        // 使用刚指定的配置项和数据显示图表
        myChart.setOption(option);
        //图标跟随屏幕自适应
        window.addEventListener('resize',function(){
            myChart.resize()
        })
})();

/* 左边第二个折线图 */
(function(){
    // 初始化实例对象，echarts.init(容器)
    const myChart = echarts.init(document.querySelector(".line-left .chart"));
    const yearData = [
        {
            year:"2020",
            data:[
                [24,40,101,134,90,230,210,230,120,230,210,120],
                [40,64,191,324,290,330,310,213,180,200,180,179]
            ]
        },
        {
            year:"2021",
            data:[
                [124,140,101,134,190,130,110,220,120,150,170,300],
                [140,164,191,324,290,310,300,213,180,180,99,79]
            ]
        }
    ],
    option = {
        color:['#00f2f1',"#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend:{
            textStyle:{
                color:'#4c9bfd'
            },
            right:"10%"
        },
        grid: {
            left: "0",
            right: "0",
            top:"10px",
            bottom: "4%",
            show:true,
            borderColor:"#012f4a",
            containLabel: true
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'#4c9bfd'
            },
            axisLine:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'#4c9bfd'
            },
            splitLine:{
                lineStyle:{
                    color:'#012f4a'
                }
            }
        },
        series: [
            {
            name: '新增粉丝',
            type: 'line',
            smooth:true,
            data: yearData[0].data[0]
            },
            {
            name: '新增游客',
            type: 'line',
            smooth:true,
            data: yearData[0].data[1]
            },
        ]
        };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    //图标跟随屏幕自适应
    window.addEventListener('resize',function(){
        myChart.resize()
    });
    //点击切换效果2020/2021
    $('.line-left h2').on('click','a',function(){
        // console.log($(this).index())
        const obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option)
    })
})();

/* 右边第二个折线图 */
(function(){
    // 初始化实例对象，echarts.init(容器)
    const myChart = echarts.init(document.querySelector(".line-right .chart"));
    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top:"0%",
            textStyle:{
                color:"rgba(255,255,255,.5)",
                fontSize:14
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: "0",
            right: "0",
            top:"10px",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data:["01","02","03","04", "05", "06","07","08","09","10","11","12", "13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
                axisLabel:{
                    color:"rgba(255,255,255,0.6)",
                    fontSize:14,
                },
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,0.2)",
                    }
                },
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14
                    }
                },
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                smooth:true,
                lineStyle:{
                    color:"#0184d5",
                    width:2
                },
                //填充颜色设置
                areaStyle:{
                    //渐变色
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                        offset:0,
                        color:'rgba(1,132,213,0.4)' //渐变线的结束颜色
                    },
                    {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"
                    }
                ],
                    false
                ),
                    ShadowColor:'rgba(0,0,0,0.1)'
                },
                //设置拐点
                symbol:'circle',
                //拐点大小
                symbolSize:8,
                //设置拐点颜色及边框
                itemStyle:{
                    color:"#0184d5",
                    borderColor:"rgba(221,220,107,0.1)",
                    borderWidth:12
                },
                //开始拐点不显示，鼠标经过显示
                showSymbol:false,
                data:[30,20,70,90,110,100,90,60,20,40,30,40,30,40,0,40,30,60,20,40,30,40,30,40,30,40,20,60,50,40],
            },
            {
                name: '转发量',
                type: 'line',
                smooth:true,
                lineStyle: {
                    normal: {
                    color: "#0184d5",
                    width: 2
                    },
                },
                //填充颜色设置
                areaStyle:{
                    //渐变色
                    color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                        offset:0,
                        color:'rgba(1,132,213,0.4)' //渐变线的结束颜色
                    },
                    {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"
                    }
                ],
                    false
                ),
                    ShadowColor:'rgba(0,0,0,0.1)'
                },
                //设置拐点
                symbol:'circle',
                //拐点大小
                symbolSize:8,
                //设置拐点颜色及边框
                itemStyle:{
                    color:"#0184d5",
                    borderColor:"rgba(221,220,107,0.1)",
                    borderWidth:12
                },
                //开始拐点不显示，鼠标经过显示
                showSymbol:false,
                data: [130,100,120,140,130,140,180,160,120,140,190,140,120,140,30,140,130,120,120,140,180,170,130,140,130,120,120,199,150,120]
            },
        ],
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    //图标跟随屏幕自适应
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();

/* 左边第一个饼图 */
(function(){
    const myChart = echarts.init(document.querySelector(".pie-left .chart"));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: "90%",
            itemWidth: 8, //小图标宽度
            itemHeight: 8,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "14"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: [
            "#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8","#32c5e9","#1d9dff"],
        series: 
        [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '75%'],
                center:["50%","50%"], //位置
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: true,
                },
                data: 
                [
                { value: 19, name: "20岁以下" },
                { value: 40, name: "20-29岁" },
                { value: 21, name: "30-39岁" },
                { value: 32, name: "40-49岁" },
                { value: 11, name: "50岁以上" }
                ],

            }
        ]
        };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    //图标跟随屏幕自适应
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();

/* 右边第二个饼图 */
(function(){
    const myChart = echarts.init(document.querySelector(".pie-right .chart"));
    option = {
        color: [
            "#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8","#32c5e9","#1d9dff"],
            legend: {
                bottom: "0%",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: 14
                }
            },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
        {
            name: '地区分布',
            type: 'pie',
            radius: ["10%", "70%"],
            center: ["50%", "50%"],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                fontSize: 14,
                color:"gold"
            },
              // 链接图形和文字的线条
            labelLine: {
                // length 链接图形的线条
                length: 3,
                // length2 链接文字的线条
                length2: 10
            },
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
            ]
        }
        ]
    };
    // 使用刚指定的配置项和数据显示图表
    myChart.setOption(option);
    //图标跟随屏幕自适应
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();

/* 中间部分，中国地图 */
(function(){
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector(".map .chart"));
    // 2. 指定配置和数据
    let geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
    };

    let XAData = [
        [{ name: "西安" }, { name: "北京", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "西安" }, { name: "广州", value: 100 }],
        [{ name: "西安" }, { name: "西宁", value: 100 }],
        [{ name: "西安" }, { name: "拉萨", value: 100 }]
    ];

    let XNData = [
        [{ name: "西宁" }, { name: "北京", value: 100 }],
        [{ name: "西宁" }, { name: "上海", value: 100 }],
        [{ name: "西宁" }, { name: "广州", value: 100 }],
        [{ name: "西宁" }, { name: "西安", value: 100 }],
        [{ name: "西宁" }, { name: "银川", value: 100 }]
    ];

    let YCData = [
        [{ name: "拉萨" }, { name: "北京", value: 100 }],
        [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
        [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }]
    ];

    let planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //let planePath = 'arrow';
    let convertData = function(data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];

        let fromCoord = geoCoordMap[dataItem[0].name];
        let toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
            });
        }
        }
        return res;
    };

    var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    let series = [];
    [
        ["西安", XAData],
        ["西宁", XNData],
        ["银川", YCData]
    ].forEach(function(item, i) {
        series.push(
        {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 1,
            effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
            symbolSize: 3
            },
            lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2
            }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + " Top3",
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
            },
            lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.6,
                curveness: 0.2
            }
            },
            data: convertData(item[1])
        },
        {
            name: item[0] + " Top3",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
            brushType: "stroke"
            },
            label: {
            normal: {
                show: true,
                position: "right",
                formatter: "{b}"
            }
            },
            symbolSize: function(val) {
            return val[2] / 8;
            },
            itemStyle: {
            normal: {
                color: color[i]
            },
            emphasis: {
                areaColor: "#2B91B7"
            }
            },
            data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
            })
        }
        );
    });
    const option = {
        tooltip: {
        trigger: "item",
        formatter: function(params, ticket, callback) {
            if (params.seriesType == "effectScatter") {
            return "线路：" + params.data.name + "" + params.data.value[2];
            } else if (params.seriesType == "lines") {
            return (
                params.data.fromName +
                ">" +
                params.data.toName +
                "<br />" +
                params.data.value
            );
            } else {
            return params.name;
            }
        }
        },

        geo: {
        map: "china",
        label: {
            emphasis: {
            show: true,
            color: "#fff"
            }
        },
        roam: false,
        zoom: 1.2,
        itemStyle: {
            normal: {
            areaColor: "rgba(20,41,87,0.5)",
            borderColor: "#195bb9",
            borderWidth: 1
            },
            emphasis: {
            areaColor: "#2B91B7"
            }
        }
        },
        series: series
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})()