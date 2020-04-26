var w,h,colorscale,LegendOptions,d=[[{}]],mycfg,svg,text,legend,jsonData2,jsonData3,jsonData4;
var globlike={},globrel={};
var stdarr=[];
var margin = {top: 100, right: 100, bottom: 100, left: 100},
				w = Math.min(400, window.innerWidth - 300) - margin.left - margin.right;
				h = Math.min(w, window.innerHeight - margin.top - margin.bottom - 20);
var titlearr={},linkarr={};
var yeararr1={};
var toptitles=[[]];
var year_value_rd_1;
var year_value_rd_2;
function comparefourthColumn(a, b) {
    if (a[3] === b[3]) {
        return 0;
    }
    else {
        return (a[3] > b[3]) ? -1 : 1;
    }
}

function script(xx,yy,zz,ww,vv,tt,uu){
    if (uu == undefined)
	uu=0;
	d=[];
    if(window.innerWidth!= undefined){
        w = Math.min(700, window.innerWidth - 300) - margin.left - margin.right;
        h = Math.min(w, window.innerHeight - margin.top - margin.bottom - 20);
        var st=window.innerWidth;
 //       console.log('window working fine');

    }else if(document.documentElement.clientWidth!=undefined){
        window.innerWidth = document.documentElement.clientWidth;
        window.innerHeight = document.documentElement.clientHeight;
        w = Math.min(700, window.innerWidth - 300) - margin.left - margin.right;
        h = Math.min(w, window.innerHeight - margin.top - margin.bottom - 20);
        var st=window.innerWidth;
//        console.log('element fine');
    }else{
        window.innerWidth = document.body.clientWidth;
        window.innerHeight = document.body.clientHeight;
        w = Math.min(700, window.innerWidth - 300) - margin.left - margin.right;
        h = Math.min(w, window.innerHeight - margin.top - margin.bottom - 20);
        var st=window.innerWidth;
       // console.log('body working fine');
    }if(w<150)
	w=150;
if(h<150)
	h=150;
//console.log("script "+w+" "+h);
colorscale = d3.scale.category10();
//console.log("Json="+jsonData[1].intensity);
//Legend titles
LegendOptions=[];
var w1=0;
if(document.getElementById('rel1').checked)
	LegendOptions[w1++]='Relevance';
if(document.getElementById('like1').checked)
	LegendOptions[w1++]='Likelihood';
if(document.getElementById('int1').checked)
	LegendOptions[w1++]='Intensity';

var countsec=[],counttop=[],countreg=[],countpes=[],county=[],countriskopp=[];
var topt=document.getElementById('topiclist').value;
var sectt=document.getElementById('sectorlist').value;
var regt=document.getElementById('regionlist').value;
var pestt=document.getElementById('pestlelist').value;
var yeart=document.getElementById('Select1').value;
var riskoppt = document.getElementById('radar_riskopp').value;
//console.log(riskoppt);
var yearr=document.getElementById('range');
var maxyear=-1,minyear=3000;
var i=0,j=0;
var all=[[]],lengthr=[];
titlearr={};
linkarr={};
yeararr1={};
toptitles=[[]];


for(i = 0; i < jsonData.length; i++)
{
	if($("#toggle_radar").is(':checked'))
	{
		if((jsonData[i].intensity!=""&&jsonData[i].relevance!=""&&jsonData[i].likelihood!=""&&jsonData[i].region!=""&&jsonData[i].sector!=""&&jsonData[i].pestle!="" ) &&(jsonData[i].topic==topt||topt=="All")&&(jsonData[i].end_year==yeart||yeart=="All")&&(jsonData[i].sector==sectt||sectt=="All")&&(jsonData[i].region==regt||regt=="All")&&(jsonData[i].pestle==pestt||pestt=="All")&&(jsonData[i].swot==riskoppt||riskoppt=="All") && (jsonData[i].end_year>=year_value_rd_1 && jsonData[i].end_year<=year_value_rd_2) )
    {

    /*	if(maxyear<jsonData[i].end_year)
    			maxyear=jsonData[i].end_year;
    		if(minyear>jsonData[i].end_year)
    			minyear=jsonData[i].end_year;*/

		var flag=1;
		//console("I'm here");
		if(countreg.indexOf(jsonData[i].region)==-1)
			countreg[countreg.length]=jsonData[i].region;
		if(countsec.indexOf(jsonData[i].sector)==-1)
			countsec[countsec.length]=jsonData[i].sector;
		if(countpes.indexOf(jsonData[i].pestle)==-1)
			countpes[countpes.length]=jsonData[i].pestle;
		if(counttop.indexOf(jsonData[i].topic)==-1)
			counttop[counttop.length]=jsonData[i].topic;
		if(county.indexOf(jsonData[i].end_year)==-1)
			county[county.length]=jsonData[i].end_year;
    if(countriskopp.indexOf(jsonData[i].swot)==-1)
	    countriskopp[countriskopp.length]=jsonData[i].swot;

		if (document.getElementById('topic1').checked) {
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Topics</strong>";
			titlearr[jsonData[i].topic]=jsonData[i].title;
			linkarr[jsonData[i].topic]=jsonData[i].url;
			if(!(jsonData[i].topic in yeararr1))
				yeararr1[jsonData[i].topic]=jsonData[i].end_year;
			else if(jsonData[i].end_year>yeararr1[jsonData[i].topic])
				yeararr1[jsonData[i].topic]=jsonData[i].end_year;
		
		for(var co=0;co<all.length;co++){
			if(all[co][0]==jsonData[i].topic)
			{
			  	all[co][1]+=jsonData[i].relevance;
              	all[co][2]+=jsonData[i].likelihood;
              	all[co][3]+=jsonData[i].intensity;
              	lengthr[co]+=1;
              	flag=0;
              	break;
			}
		}
		if(flag==1){
			all[all.length]=[jsonData[i].topic, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
			lengthr[all.length-1]=1;
			//console.log("I'm in topic");
		}
		}


		else if (document.getElementById('sector1').checked) {
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Sector</strong>";
			titlearr[jsonData[i].sector]=jsonData[i].title;
			linkarr[jsonData[i].sector]=jsonData[i].url;
			if(!(jsonData[i].sector in yeararr1))
				yeararr1[jsonData[i].sector]=jsonData[i].end_year;
			else if(jsonData[i].end_year>yeararr1[jsonData[i].sector])
				yeararr1[jsonData[i].sector]=jsonData[i].end_year;
		for(var co=0;co<all.length;co++){
			if(all[co][0]==jsonData[i].sector)
			{
			  	all[co][1]+=jsonData[i].relevance;
              	all[co][2]+=jsonData[i].likelihood;
              	all[co][3]+=jsonData[i].intensity;
              	lengthr[co]+=1;
              	flag=0;
              	break;
			}
		}
		if(flag==1){
			all[all.length]=[jsonData[i].sector, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
			lengthr[all.length-1]=1;
			//console.log("Length="+all.length);
		}
	}


	else if (document.getElementById('region1').checked) {
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Region</strong>";
		titlearr[jsonData[i].region]=jsonData[i].title;
		linkarr[jsonData[i].region]=jsonData[i].url;
		if(!(jsonData[i].region in yeararr1))
				yeararr1[jsonData[i].region]=jsonData[i].end_year;
			else if(jsonData[i].end_year>yeararr1[jsonData[i].region])
				yeararr1[jsonData[i].region]=jsonData[i].end_year;
		for(var co=0;co<all.length;co++){
			if(all[co][0]==jsonData[i].region)
			{
			  	all[co][1]+=jsonData[i].relevance;
              	all[co][2]+=jsonData[i].likelihood;
              	all[co][3]+=jsonData[i].intensity;
              	lengthr[co]+=1;
              	flag=0;
              	break;
			}
		}
		if(flag==1){
			all[all.length]=[jsonData[i].region, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
			lengthr[all.length-1]=1;
			//console.log("Length="+all.length);
		}
	}


	else{
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Pestel</strong>";
		titlearr[jsonData[i].pestle]=jsonData[i].title;
		linkarr[jsonData[i].pestle]=jsonData[i].url;
		if(!(jsonData[i].pestle in yeararr1))
				yeararr1[jsonData[i].pestle]=jsonData[i].end_year;
			else if(jsonData[i].end_year>yeararr1[jsonData[i].pestle])
				yeararr1[jsonData[i].pestle]=jsonData[i].end_year;
		for(var co=0;co<all.length;co++){
			if(all[co][0]==jsonData[i].pestle)
			{
			  	all[co][1]+=jsonData[i].relevance;
              	all[co][2]+=jsonData[i].likelihood;
              	all[co][3]+=jsonData[i].intensity;
              	lengthr[co]+=1;
              	flag=0;
              	break;
			}
		}
		if(flag==1){
			all[all.length]=[jsonData[i].pestle, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
			lengthr[all.length-1]=1;
			//console.log("Length="+all.length);
		}
	}

}
}
else{

    if((jsonData[i].intensity!=""&&jsonData[i].relevance!=""&&jsonData[i].likelihood!=""&&jsonData[i].region!=""&&jsonData[i].sector!=""&&jsonData[i].pestle!="" ) &&(jsonData[i].topic==topt||topt=="All")&&(jsonData[i].end_year==yeart||yeart=="All")&&(jsonData[i].sector==sectt||sectt=="All")&&(jsonData[i].region==regt||regt=="All")&&(jsonData[i].pestle==pestt||pestt=="All")&&(jsonData[i].swot==riskoppt||riskoppt=="All") )
    {

    var flag=1;
    //console("I'm here");
    if(countreg.indexOf(jsonData[i].region)==-1)
      countreg[countreg.length]=jsonData[i].region;
    if(countsec.indexOf(jsonData[i].sector)==-1)
      countsec[countsec.length]=jsonData[i].sector;
    if(countpes.indexOf(jsonData[i].pestle)==-1)
      countpes[countpes.length]=jsonData[i].pestle;
    if(counttop.indexOf(jsonData[i].topic)==-1)
      counttop[counttop.length]=jsonData[i].topic;
    if(county.indexOf(jsonData[i].end_year)==-1)
      county[county.length]=jsonData[i].end_year;
    if(countriskopp.indexOf(jsonData[i].swot)==-1)
      countriskopp[countriskopp.length]=jsonData[i].swot;

    if (document.getElementById('topic1').checked) {
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Topics</strong>";
      titlearr[jsonData[i].topic]=jsonData[i].title;
      linkarr[jsonData[i].topic]=jsonData[i].url;
      if(!(jsonData[i].topic in yeararr1))
        yeararr1[jsonData[i].topic]=jsonData[i].end_year;
      else if(jsonData[i].end_year>yeararr1[jsonData[i].topic])
        yeararr1[jsonData[i].topic]=jsonData[i].end_year;
    
    for(var co=0;co<all.length;co++){
      if(all[co][0]==jsonData[i].topic)
      {
          all[co][1]+=jsonData[i].relevance;
                all[co][2]+=jsonData[i].likelihood;
                all[co][3]+=jsonData[i].intensity;
                lengthr[co]+=1;
                flag=0;
                break;
      }
    }
    if(flag==1){
      all[all.length]=[jsonData[i].topic, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
      lengthr[all.length-1]=1;
      //console.log("I'm in topic");
    }
    }


    else if (document.getElementById('sector1').checked) {
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Sector</strong>";
      titlearr[jsonData[i].sector]=jsonData[i].title;
      linkarr[jsonData[i].sector]=jsonData[i].url;
      if(!(jsonData[i].sector in yeararr1))
        yeararr1[jsonData[i].sector]=jsonData[i].end_year;
      else if(jsonData[i].end_year>yeararr1[jsonData[i].sector])
        yeararr1[jsonData[i].sector]=jsonData[i].end_year;
    for(var co=0;co<all.length;co++){
      if(all[co][0]==jsonData[i].sector)
      {
          all[co][1]+=jsonData[i].relevance;
                all[co][2]+=jsonData[i].likelihood;
                all[co][3]+=jsonData[i].intensity;
                lengthr[co]+=1;
                flag=0;
                break;
      }
    }
    if(flag==1){
      all[all.length]=[jsonData[i].sector, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
      lengthr[all.length-1]=1;
      //console.log("Length="+all.length);
    }
  }


  else if (document.getElementById('region1').checked) {
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Region</strong>";
    titlearr[jsonData[i].region]=jsonData[i].title;
    linkarr[jsonData[i].region]=jsonData[i].url;
    if(!(jsonData[i].region in yeararr1))
        yeararr1[jsonData[i].region]=jsonData[i].end_year;
      else if(jsonData[i].end_year>yeararr1[jsonData[i].region])
        yeararr1[jsonData[i].region]=jsonData[i].end_year;
    for(var co=0;co<all.length;co++){
      if(all[co][0]==jsonData[i].region)
      {
          all[co][1]+=jsonData[i].relevance;
                all[co][2]+=jsonData[i].likelihood;
                all[co][3]+=jsonData[i].intensity;
                lengthr[co]+=1;
                flag=0;
                break;
      }
    }
    if(flag==1){
      all[all.length]=[jsonData[i].region, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
      lengthr[all.length-1]=1;
      //console.log("Length="+all.length);
    }
  }


  else{
            document.getElementById('radar_topTenShow').innerHTML="<strong style='font-size: large'>Top Ten Pestel</strong>";
    titlearr[jsonData[i].pestle]=jsonData[i].title;
    linkarr[jsonData[i].pestle]=jsonData[i].url;
    if(!(jsonData[i].pestle in yeararr1))
        yeararr1[jsonData[i].pestle]=jsonData[i].end_year;
      else if(jsonData[i].end_year>yeararr1[jsonData[i].pestle])
        yeararr1[jsonData[i].pestle]=jsonData[i].end_year;
    for(var co=0;co<all.length;co++){
      if(all[co][0]==jsonData[i].pestle)
      {
          all[co][1]+=jsonData[i].relevance;
                all[co][2]+=jsonData[i].likelihood;
                all[co][3]+=jsonData[i].intensity;
                lengthr[co]+=1;
                flag=0;
                break;
      }
    }
    if(flag==1){
      all[all.length]=[jsonData[i].pestle, jsonData[i].relevance, jsonData[i].likelihood, jsonData[i].intensity];
      lengthr[all.length-1]=1;
      //console.log("Length="+all.length);
    }
  }

}
}
}


for(i=0;i<all.length;i++){
	toptitles[i]=[];
	toptitles[i][0]=all[i][0];
	toptitles[i][1]=Math.round(all[i][1]/lengthr[i]);
	toptitles[i][2]=Math.round(all[i][2]/lengthr[i]);
	toptitles[i][3]=(all[i][3]/lengthr[i]);
}
toptitles[0]=["",-500,-500,-500];
toptitles.sort(comparefourthColumn);
for(i=0;i<10;i++){
	var tem="text"+i;
	var tem1="num"+i;
	document.getElementById(tem).innerHTML="";
	document.getElementById(tem1).innerHTML="";
}
for(i=0;i<10&&toptitles.length-1>i;i++){
	var tem="text"+i;
	var tem1="num"+i;
	var tem2="link"+i;
	document.getElementById(tem).innerHTML=convert_case(toptitles[i][0]);
	document.getElementById(tem1).innerHTML= parseFloat(toptitles[i][3]).toFixed(1)+" | "+relmap[toptitles[i][1]]+" | "+likemap[toptitles[i][2]]+"  "+yeararr1[toptitles[i][0]];
	document.getElementById(tem2).href=linkarr[toptitles[i][0]];
}

for(i=0;i<w1;i++)
d[i]=[];
stdarr=[];
for(i=0;i<all.length-1;i++)
{	
	for(var u=0;u<w1;u++)
		d[u][i]={};

	var u=0;
		globrel[all[i+1][0]]=Math.round(all[i+1][1]/lengthr[i+1]);
		globlike[all[i+1][0]]=Math.round(all[i+1][2]/lengthr[i+1]);
	if(document.getElementById('rel1').checked){
	d[u][i]['axis']=all[i+1][0];
	if(all[i+1][1]/lengthr[i+1]%1==0)
	d[u++][i]['value']=all[i+1][1]/lengthr[i+1];
else
	d[u++][i]['value']=parseFloat(all[i+1][1]/lengthr[i+1]).toFixed(1);
	}
	if(document.getElementById('like1').checked){
	d[u][i]['axis']=all[i+1][0];
	if(all[i+1][2]/lengthr[i+1]%1==0)
	d[u++][i]['value']=all[i+1][2]/lengthr[i+1];
else
	d[u++][i]['value']=parseFloat(all[i+1][2]/lengthr[i+1]).toFixed(1);
	//console.log("Normal="+all[i+1][2]/lengthr[i+1]%1);
	//console.log("Parse="+(all[i+1][2]/lengthr[i+1]%1==0));
	}
	if(document.getElementById('int1').checked){
	d[u][i]['axis']=all[i+1][0];
	if(all[i+1][3]/lengthr[i+1]%1==0)
	d[u][i]['value']=all[i+1][3]/lengthr[i+1];
else
	d[u][i]['value']=parseFloat(all[i+1][3]/lengthr[i+1]).toFixed(1);
	}
	stdarr[i]=all[i+1][3]/lengthr[i+1];

}
if(document.getElementById('95conf').checked)
                var temp1=stdarr.stdDeviation(0.95);
            if(document.getElementById('90conf').checked)
                var temp1=stdarr.stdDeviation(0.9);
            if(document.getElementById('99conf').checked)
                var temp1=stdarr.stdDeviation(0.99);
            if(temp1!== undefined){
                document.getElementById('standard').innerHTML=" <p class='tooltip1'>CL<span class='tooltiptext'>The confidence level is the probability that the value of a parameter falls within a specified range of values</span></p> = "+temp1['confidence']*100+"% | "
                    +"<p class='tooltip1'> &mu;<span class='tooltiptext'>The mean is the average of the numbers: a calculated 'central' value of a set of numbers</span></p> = "+parseFloat(stdarr.mean()).toFixed(1)
                    +" | <p class='tooltip1'>&sigma;<span class='tooltiptext'>The standard deviation is a measure of how spread out numbers are</span></p> = "+parseFloat(stdarr.stdDeviation()).toFixed(1)
                    +" | <p class='tooltip1'>Lower<span class='tooltiptext'>Minimum estimated value of standard deviation</span></p> = "+parseFloat(temp1['lower']).toFixed(1)
                    +" | <p class='tooltip1'>Upper<span class='tooltiptext'>Maximum estimated value of standard deviation</span></p> = "+parseFloat(temp1['upper']).toFixed(1);

            }
            if(isNaN(temp1['lower'])){
        alert('There were very few records from that search. You need to adjust your search or filter or control parameters. You can do this from the original search or filter and controls interface.')
    }
if(xx==0||topt=='All'){
      //Sort the years array
      counttop.sort();
      document.getElementById('topic_div').innerHTML="";
      //Dynamically create a select option list
      var top1 = document.createElement('select');
      top1.name = 'topiclist';
      top1.id = 'topiclist';
      top1.setAttribute("onchange", 'drawTable();script(1,0,0,0,0,0);this.size=0;');
      top1.setAttribute("onmousedown", 'this.size=5;');
      top1.setAttribute("onblur",'this.size=0;')

      var options_str1 = '<option value="All">All</option>';
      //Add a new option for every unique year
      counttop.forEach( function(topic1) {
        options_str1 += '<option value="' + topic1 + '">' + topic1 + '</option>';
      });

      top1.innerHTML = options_str1;
      //Appending the list to the div tag
      document.getElementById('topic_div').appendChild(top1);
      document.getElementById('topiclist').value=topt;
      }
if(yy==0||sectt=='All'){
      //Sort the years array
      countsec.sort();
      document.getElementById('sector_div').innerHTML="";
      //Dynamically create a select option list
      var sec1 = document.createElement('select');
      sec1.name = 'sectorlist';
      sec1.id = 'sectorlist';
      sec1.setAttribute("onchange", 'drawTable();script(0,1,0,0,0,0);this.size=0;');
      sec1.setAttribute("onmousedown", 'this.size=5;');
      sec1.setAttribute("onblur",'this.size=0;')

      var options_str2 = '<option value="All">All</option>';
      //Add a new option for every unique year
      countsec.forEach( function(sec1) {
        options_str2 += '<option value="' + sec1 + '">' + sec1 + '</option>';
      });

      sec1.innerHTML = options_str2;
      //Appending the list to the div tag
      document.getElementById('sector_div').appendChild(sec1);
      document.getElementById('sectorlist').value=sectt;
      }
      if(zz==0||regt=='All'){
      //Sort the years array
      countreg.sort();
      document.getElementById('region_div').innerHTML="";
      //Dynamically create a select option list
      var sel2 = document.createElement('select');
      sel2.name = 'regionlist';
      sel2.id = 'regionlist';
      sel2.setAttribute("onchange", 'drawTable();script(0,0,1,0,0,0);this.size=0;');
      sel2.setAttribute("onmousedown", 'this.size=5;');
      sel2.setAttribute("onblur",'this.size=0;')

      var options_str3 = '<option value="All">All</option>';
      //Add a new option for every unique year
      countreg.forEach( function(region1) {
        options_str3 += '<option value="' + region1 + '">' + region1 + '</option>';
      });

      sel2.innerHTML = options_str3;
      //Appending the list to the div tag
      document.getElementById('region_div').appendChild(sel2);
      document.getElementById('regionlist').value=regt;
      }
if(ww==0||pestt=='All'){
      //Sort the years array
      countpes.sort();
      document.getElementById('pestle_div').innerHTML="";
      //Dynamically create a select option list
      var sel3 = document.createElement('select');
      sel3.name = 'pestlelist';
      sel3.id = 'pestlelist';
      sel3.setAttribute("onchange", 'drawTable();script(0,0,0,1,0,0);this.size=0;');
      sel3.setAttribute("onmousedown", 'this.size=5;');
      sel3.setAttribute("onblur",'this.size=0;')

      var options_str4 = '<option value="All">All</option>';
      //Add a new option for every unique year
      countpes.forEach( function(pestle1) {
        options_str4 += '<option value="' + pestle1 + '">' + pestle1 + '</option>';
      });

      sel3.innerHTML = options_str4;
      //Appending the list to the div tag
      document.getElementById('pestle_div').appendChild(sel3);
      document.getElementById('pestlelist').value=pestt;
      }
if(vv==0||yeart=='All'){
      //Sort the years array
      county.sort();
      //Dynamically create a select option list
      var sel = document.createElement('select');
      sel.name = 'dropyear';
      sel.id = 'Select1';
      sel.setAttribute("onchange", 'drawTable();script(0,0,0,0,0,1);this.size=0;');
      sel.setAttribute("onmousedown", 'this.size=5;');
      sel.setAttribute("onblur",'this.size=0;')

      var options_str5 = '<option value="All">All</option>';
      //Add a new option for every unique year
      county.forEach( function(year) {
        options_str5 += '<option value="' + year + '">' + year + '</option>';
      });

      sel.innerHTML = options_str5;
      document.getElementById('yearlist').innerHTML="";
      //Appending the list to the div tag
      document.getElementById('yearlist').appendChild(sel);
      document.getElementById('Select1').value=yeart;

      }


    mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 200
}
if(d.length==0)
{
	var tempp=0;
	if(document.getElementById('int1').checked){
		d[tempp]=[];

		d[tempp][0]={};
		d[tempp][0]['axis']="None";
		d[tempp][0]['value']=0;
		tempp++;
	}
	if(document.getElementById('like1').checked){
		d[tempp]=[];
		d[tempp][0]={};
		d[tempp][0]['axis']="None";
		d[tempp][0]['value']=0;
		tempp++;
	}
	if(document.getElementById('rel1').checked){
		d[tempp]=[];
		d[tempp][0]={};
		d[tempp][0]['axis']="None";
		d[tempp][0]['value']=0;
		tempp++;
	}

}

//Call function to draw the Radar chart
	RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////
svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+200)
	.attr("height", h)

//Create the title for the legend
text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 30)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Colours");
		
//Initiate Legend	
legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 25)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 10)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	

	}




	