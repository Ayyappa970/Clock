function dateAndTime()
            {
                var date=new Date();
                var hh=date.getHours();
                var min=date.getMinutes();
                var ss=date.getSeconds();
                var dt=date.getDate();
                var mo=date.getMonth();
                var yr=date.getFullYear();
                var d=date.getDay();
                var am_pm="AM";
                let month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                for(let i=0;i<12;i++){
                    if(i==mo){
                        mo=month[i]
                    }
                }
                let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
                for(let i=0;i<7;i++){
                    if(i==d){
                        d=days[i]
                    }
                }
                if(min<10)
                {
                    min="0"+min;

                }
                if(ss<10)
                {
                    ss="0"+ss;

                }
               
                if(dt<10)
                {
                    dt="0"+dt;
                }
                if(hh>=12){
                    hh-=12;
                    am_pm="PM";
                }
                if(hh==0){
                    hh=12;
                }
                if(hh<10){
                    hh="0"+hh;
                }
                var totalTime=hh+":"+min+":"+ss+" "+am_pm;
                document.getElementById("Time").innerHTML=totalTime;
                var totalDate=dt+" - "+mo+" - "+yr;
                if(yr%4==0){
                    document.getElementById("Date").innerHTML=totalDate;
                }else{}
                document.getElementById("Day").innerHTML=d;
                var update=setTimeout(function(){dateAndTime()},1000);
            }
            dateAndTime();