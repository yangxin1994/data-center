//水环境
function indexWater() {
	/*echarts*/

	//水环境月度总体概况
	var option1 = {
		legend: {
			selectedMode: false,
			data: ['I类', 'II类', 'III类', 'IV类', 'V类', '劣V类'],
			show: false
		},
		color: ['#9ff3ff', '#1ebef9', '#5ec95e', '#ffcb16', '#fa7b14', '#ff483f'],
		series: [{
			name: '-',
			type: 'pie',
			radius: ['66%', '83%'],
			avoidLabelOverlap: false,
			hoverAnimation: false,
			label: {
				normal: {
					show: true,
					textStyle: {
						fontSize: '14',
						color: '#333333'
					},
					formatter: "{b} ({d}%)"
				}
			},
			data: [{
					value: 335,
					name: 'I类'
				},
				{
					value: 310,
					name: 'II类'
				},
				{
					value: 234,
					name: 'III类'
				},
				{
					value: 135,
					name: 'IV类'
				},
				{
					value: 148,
					name: 'V类'
				},
				{
					value: 135,
					name: '劣V类'
				}
			]
		}]
	};
	    //水环境月度总体概况‘各水质类别占比’饼图
	var echarts1 = echarts.init(document.getElementById('water-echarts1'));
	echarts1.setOption(option1);

	//‘水质达标情况最差的十条河流’
	var option2 = {
		title:{
			text:'水质达标情况最差的十条河流',
			left:20,
			top:10,
			textStyle:{
				fontWeight:'normal',
				fontSize:14,
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#ddd'
				}
			},
			confine: true,
			padding: [5, 10, 5, 10],
			backgroundColor: '#fff',
			borderColor: '#d1d1d1',
			borderWidth: 1,
			extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
			textStyle: {
				color: '#333333'
			},
			formatter: function(param){
				var standRadio=null;
				var notStantdHtml='';
				//如果不达标的数据为'-'
				if(param[1].value==='-'){
					standRadio=100;
				}else{
					standRadio=parseFloat(param[0].value/(param[0].value+param[1].value)*100).toFixed(1);
					notStantdHtml='<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#df3f37;margin:0 6px;"></span>'+param[1].axisValue+'超标断面数:<span style="color:#df3f37">'+param[1].value+'</span>个';
				} 
				return '达标率：<span style="color:#52b052">'+standRadio+'</span>%<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52b052;margin:0 6px;"></span>'+param[0].axisValue+'达标断面数:<span style="color:#52b052">'+param[0].value+'</span>个'+notStantdHtml;
              
			}
		},
		color: ['#52b052', '#df3f37'],
		legend: {
			selectedMode: false,
			data: ['达标', '超标'],
			right: 15,
			top: 6,
			itemGap: 20,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '1%',
			right: '6%',
			bottom: '15px',
			top: '40px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['废黄河', '大沙河', '废黄河', '复新河', '大沿沭马河', '废黄河', '新河', '柏临河', '下牢溪', '茅坪河'],
			axisLine: {
				lineStyle: {
					color: '#c5c5c5'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#666666',
				}
			}
		},
		yAxis: {
			show: false,
			type: 'value',
		},
		series: [{
			name: '达标',
			type: 'bar',
			data: [2, 4, 5, 15, 4, 3, 2,5, 6, 7],
			stack: 'sum',
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22,
					label: {
						show: true,
						position: 'inside',
					}
				}
			}
		}, {
			name: '超标',
			type: 'bar',
			data: [2, 3, 4, 5, 6,5, 10, 4, 3,  7],
			stack: 'sum',
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22,
					label: {
						show: true,
						position: 'inside',
					}
				}
			}
		}]
	};
	var echarts2 = echarts.init(document.getElementById('water-echarts2'));
	//渲染‘水质达标情况最差的十条河流’ 柱状图
	echarts2.setOption(option2);

	//‘水质达标情况最好的十条河流’
	var option3 = {
		title:{
			text:'水质达标情况最好的十条河流',
			left:20,
			top:10,
			textStyle:{
				fontWeight:'normal',
				fontSize:14,
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#ddd'
				}
			},
			confine: true,
			padding: [5, 10, 5, 10],
			backgroundColor: '#fff',
			borderColor: '#d1d1d1',
			borderWidth: 1,
			extraCssText: 'box-shadow: 1px 1px 3px rgba(45, 58, 50, 0.3);',
			textStyle: {
				color: '#333333'
			},
			formatter: function(param){
				var standRadio=null;
				var notStantdHtml='';
				//如果不达标的数据为'-'
				if(param[1].value==='-'){
					standRadio=100;
				}else{
					standRadio=parseFloat(param[0].value/(param[0].value+param[1].value)*100).toFixed(1);
					notStantdHtml='<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#df3f37;margin:0 6px;"></span>'+param[1].axisValue+'超标断面数:<span style="color:#df3f37">'+param[1].value+'</span>个';
				} 
				return '达标率：<span style="color:#52b052">'+standRadio+'</span>%<br/><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#52b052;margin:0 6px;"></span>'+param[0].axisValue+'达标断面数:<span style="color:#52b052">'+param[0].value+'</span>个'+notStantdHtml;
			}
		},
		color: ['#52b052', '#df3f37'],
		legend: {
			selectedMode: false,
			data: ['达标', '超标'],
			right: 15,
			top: 6,
			itemGap: 20,
			textStyle: {
				fontSize: 14,
				color: '#999',
			}
		},
		grid: {
			left: '1%',
			right: '6%',
			bottom: '15px',
			top: '40px',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['废黄河', '大沙河', '废黄河', '复新河', '大沿沭马河', '废黄河', '新河', '柏临河', '下牢溪', '茅坪河'],
			axisLine: {
				lineStyle: {
					color: '#c5c5c5'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					fontSize: 14,
					color: '#666666',
				}
			}
		},
		yAxis: {
			show: false,
			type: 'value',
		},
		series: [{
			name: '达标',
			type: 'bar',
			data: [15,14, 12, 11,11,10, 9, 9, 7,6],
			stack: 'sum',
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22,
					label: {
						show: true,
						position: 'inside',
					}
				}
			}
		},
		{
			name: '不达标',
			type: 'bar',
			data: ['-','-', '-','-','-','-', '-', 1, 1, 1],//不达标数据为0时，需要用'-'来表示
			stack: 'sum',
			barWidth: '22',
			itemStyle: {
				normal: {
					barBorderRadius: 22,
					label: {
						show: true,
						position: 'inside',
					}
				}
			}
		}
		]
	};
	var echarts3 = echarts.init(document.getElementById('water-echarts3'));
	//渲染‘水质达标情况最好的十条河流’ 柱状图
	echarts3.setOption(option3);

	//地表水达标率
	var waterData1=[ //!!!!!需要后台传入的数据
		{value:85, name:'地表水达标数量'},
		{value:15, name:'地表水非达标数量'}
	]  
	    //根据上面数据得到 option
	var option21=getOptionfun(['#158eff','#e3e3e3'],'{value|{d}}{text|%}',waterData1);
	var myChart21 = echarts.init(document.getElementById('CompRateCanvas21'));
	//渲染‘地表水达标率’ 饼图
	myChart21.setOption(option21);
	PieAutoHighLight(myChart21,waterData1);

	//饮用水达标率
	var waterData2=[ //!!!!!需要后台传入的数据
		{value:90, name:'饮用水达标数量'},
		{value:0, name:'饮用水非达标数量'}
	]
	var option2=getOptionfun(['#158eff','#e3e3e3'],'{value|{d}}{text|%}',waterData2);
	var myChart2 = echarts.init(document.getElementById('CompRateCanvas22'));
	//渲染‘饮用水达标率’ 饼图
	myChart2.setOption(option2);
	PieAutoHighLight(myChart2,waterData2);
	
}

// 指定饼状图的配置项和数据
function getOptionfun(colors, format, data){
   //达标的数据和不达标的数据组成的数组     //!!!!!!!需要后台引入的数据
   var option = {
		grid: {
			top: 0,
		},
		color: colors,
		series: [{
				name: '访问来源',
				type: 'pie',
				startAngle: 0,
				center: ['50%', '50%'],
				radius: ['75%', '90%'],
				avoidLabelOverlap: false,
				hoverAnimation:false,
				startAngle:90,
				clockwise:false,
				label: {
					normal: {
						show: false,
						position: 'center',
						align: 'center',
						verticalAlign: 'middle',
						formatter:format ,
						rich: {
							value: {
								color: "#333333",
								fontSize: 24,
								fontWeight:'bolder',
								padding: 3
							},
							text:{
								color: "#333333",
								fontSize: 18,
								padding: [5,0, 5,0]
							}
						},
					},
					emphasis: {
						show: true,
						
					}
				},
				labelLine: {
					normal: {
						show: false,
					}
				},
				data: data
			}

		]
	};
return option;
}

//至少高亮显示一个饼图中的一个item
function PieAutoHighLight(chartNum,data){
    setTimeout(function() {
        chartNum.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
    
        chartNum.on('mouseover', function(params) {
            if (params.name == data[0].name) {
                chartNum.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            } else {
                chartNum.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            }
        });
    
        chartNum.on('mouseout', function(params) {
            chartNum.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        });
    }, 1000);
}