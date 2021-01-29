import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';

cytoscape.use(coseBilkent);

import './style.css';
// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다
const data = [ 
    {
        "data": {
            "id": "ART-X",
            "url": "http://www.naver.com",
            "label": "아트엑스"
            

                
                


        }
    },
    {
        "data": {
            "id": "ART-research",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "리서치"
        }
    },
    {
        "data": { "id": "ART-X->ART-research", "source": "ART-research", "target": "ART-X" }
    },

//프로젝트01
{
    "data": {
        "id": "ART-text_01",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "텍스트01"
    }
},
{
    "data": { "id": "ART-project->ART-text_01", "source": "ART-project", "target": "ART-text_01" }
},
{
    "data": {
        "id": "ART-changjakjibdan",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "공연장과 온라인을 잇는 연계 콘텐츠 개발을 위한 실험프로젝트"
    }
},
{
    "data": { "id": "ART-text_01->ART-changjakjibdan", "source": "ART-text_01", "target": "ART-changjakjibdan" }
},

//프로젝트02
{
    "data": {
        "id": "ART-text_02",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "텍스트02"
    }
},
{
    "data": { "id": "ART-project->ART-text_02", "source": "ART-project", "target": "ART-text_02" }
},
{
    "data": {
        "id": "ART-hongsunkwan",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "‘글씨와, 노래와, 연주와, 자연과 춤의 흐름에 대하여’ (부제: ‘느린 숨’에 대한 견해)"
    }
},
{
    "data": { "id": "ART-text_02->ART-hongsunkwan", "source": "ART-text_02", "target": "ART-hongsunkwan" }
},

//프로젝트03
{
    "data": {
        "id": "ART-text_03",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "텍스트03"
    }
},
{
    "data": { "id": "ART-project->ART-text_03", "source": "ART-project", "target": "ART-text_03" }
},
{
    "data": {
        "id": "ART-moonhwa",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "2020년 경기예술 융복합사업 아트 X  프로젝트형"
    }
},
{
    "data": { "id": "ART-text_03->ART-moonhwa", "source": "ART-text_03", "target": "ART-moonhwa" }
},

//프로젝트04
{
    "data": {
        "id": "ART-text_04",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "텍스트04"
    }
},
{
    "data": { "id": "ART-project->ART-text_04", "source": "ART-project", "target": "ART-text_04" }
},
{
    "data": {
        "id": "ART-baekdasom",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "DASOM x VIOLETA"
    }
},
{
    "data": { "id": "ART-text_04->ART-baekdasom", "source": "ART-text_04", "target": "ART-baekdasom" }
},

//프로젝트05
{
    "data": {
        "id": "ART-text_05",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "텍스트05"
    }
},
{
    "data": { "id": "ART-project->ART-text_05", "source": "ART-project", "target": "ART-text_05" }
},
{
    "data": {
        "id": "ART-leesujin",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "<영화같은 순간들 Cinematic Accidents>"
    }
},
{
    "data": { "id": "ART-text_05->ART-leesujin", "source": "ART-text_05", "target": "ART-leesujin" }
},
//프로젝트06
{
    "data": {
        "id": "ART-text_06",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "텍스트05"
    }
},
{
    "data": { "id": "ART-project->ART-text_06", "source": "ART-project", "target": "ART-text_06" }
},
{
    "data": {
        "id": "ART-kimjunghwan",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "대리된 풍경6"
    }
},
{
    "data": { "id": "ART-text_06->ART-kimjunghwan", "source": "ART-text_06", "target": "ART-kimjunghwan" }
},





//리서치!    
//비대면,비접촉

{
    "data": {
        "id": "ART-untact",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "비대면/비접촉"
    }
},
{
    "data": { "id": "ART-research->ART-untact", "source": "ART-research", "target": "ART-untact" }
},

    {
        "data": {
            "id": "ART-hudanbi",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "허단비"
        }
    },
    {
        "data": { "id": "ART-untact->ART-hudanbi", "source": "ART-untact", "target": "ART-hudanbi" }
    },
    {
        "data": {
            "id": "ART-kimjaeik",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "김재익"
        }
    },
    {
        "data": { "id": "ART-untact->ART-kimjaeik", "source": "ART-untact", "target": "ART-kimjaeik" }
    },
    {
        "data": {
            "id": "ART-leesanghee",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "이상희"
        }
    },
    {
        "data": { "id": "ART-untact->ART-leesanghee", "source": "ART-untact", "target": "ART-leesanghee" }
    },
    {
        "data": {
            "id": "ART-dandi",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "창작중심단디"
        }
    },
    {
        "data": { "id": "ART-untact->ART-dandi", "source": "ART-untact", "target": "ART-dandi" }
    },


//trans/form

{
    "data": {
        "id": "ART-trans",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "trans/form"
    }
},
{
    "data": { "id": "ART-research->ART-trans", "source": "ART-research", "target": "ART-trans" }
},

    {
        "data": {
            "id": "ART-joara",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "조아라"
        }
    },
    {
        "data": { "id": "ART-trans->ART-joara", "source": "ART-trans", "target": "ART-joara" }
    },
    {
        "data": {
            "id": "ART-kimdasom",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "김다솜"
        }
    },
    {
        "data": { "id": "ART-trans->ART-kimdasom", "source": "ART-trans", "target": "ART-kimdasom" }
    },
    {
        "data": {
            "id": "ART-moonjaesun",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "문재선"
        }
    },
    {
        "data": { "id": "ART-trans->ART-moonjaesun", "source": "ART-trans", "target": "ART-moonjaesun" }
    },
    {
        "data": {
            "id": "ART-leejiyeon",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "이지연"
        }
    },
    {
        "data": { "id": "ART-trans->ART-leejiyeon", "source": "ART-trans", "target": "ART-leejiyeon" }
    },



//공연연출
{
    "data": {
        "id": "ART-stage",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "공연연출+기술"
    }
},
{
    "data": { "id": "ART-research->ART-stage", "source": "ART-research", "target": "ART-stage" }
},
    {
        "data": {
            "id": "ART-hwangsunghwan",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "황성환"
        }
    },
    {
        "data": { "id": "ART-stage->ART-hwangsunghwan", "source": "ART-stage", "target": "ART-hwangsunghwan" }
    },

    {
        "data": {
            "id": "ART-shinsooyeon",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "신수연"
        }
    },
    {
        "data": { "id": "ART-stage->ART-shinsooyeon", "source": "ART-stage", "target": "ART-shinsooyeon" }
    },


    
//조각융봅합연구

{
    "data": {
        "id": "ART-sculpt",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "조각융복합연구"
    }
},
{
    "data": { "id": "ART-research->ART-sculpt", "source": "ART-research", "target": "ART-sculpt" }
},
{
    "data": {
        "id": "ART-parkhajin",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "박하진"
    }
},
{
    "data": { "id": "ART-sculpt->ART-parkhajin", "source": "ART-sculpt", "target": "ART-parkhajin" }
},
{
    "data": {
        "id": "ART-leewoongchul",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "이웅철"
    }
},
{
    "data": { "id": "ART-sculpt->ART-leewoongchul", "source": "ART-sculpt", "target": "ART-leewoongchul" }
},
{
    "data": {
        "id": "ART-hongkiwon",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "홍기원"
    }
},
{
    "data": { "id": "ART-sculpt->ART-hongkiwon", "source": "ART-sculpt", "target": "ART-hongkiwon" }
},



//미래/과제


{
    "data": {
        "id": "ART-future",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "조각융복합연구"
    }
},
{
    "data": { "id": "ART-research->ART-future", "source": "ART-research", "target": "ART-future" }
},
{
    "data": {
        "id": "ART-parkhyesoo",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "박혜수"
    }
},
{
    "data": { "id": "ART-future->ART-parkhyesoo", "source": "ART-future", "target": "ART-parkhyesoo" }
},
{
    "data": {
        "id": "ART-imojumo",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "이모저모도모소"
    }
},
{
    "data": { "id": "ART-future->ART-imojumo", "source": "ART-future", "target": "ART-imojumo" }
},
{
    "data": {
        "id": "ART-junghyeyoon",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "정혜윤"
    }
},
{
    "data": { "id": "ART-future->ART-junghyeyoon", "source": "ART-future", "target": "ART-junghyeyoon" }
},



//콘첸츠개발

{
    "data": {
        "id": "ART-contents",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "콘텐츠개발"
    }
},
{
    "data": { "id": "ART-research->ART-contents", "source": "ART-research", "target": "ART-contents" }
},
{
    "data": {
        "id": "ART-noneun",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "공동체놀이 집합소 노는언니"
    }
},
{
    "data": { "id": "ART-contents->ART-noneun", "source": "ART-contents", "target": "ART-noneun" }
},
{
    "data": {
        "id": "ART-sorisawi",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "사단법인 소리사위예술단"
    }
},
{
    "data": { "id": "ART-contents->ART-sorisawi", "source": "ART-contents", "target": "ART-sorisawi" }
},
{
    "data": {
        "id": "ART-kwonhaewon",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "권해원"
    }
},
{
    "data": { "id": "ART-contents->ART-kwonhaewon", "source": "ART-contents", "target": "ART-kwonhaewon" }
},



//VR시각상

{
    "data": {
        "id": "ART-VR",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "VR시각상"
    }
},
{
    "data": { "id": "ART-research->ART-VR", "source": "ART-research", "target": "ART-VR" }
},

{
    "data": {
        "id": "ART-ohjungeun",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "오정은"
    }
},
{
    "data": { "id": "ART-VR->ART-ohjungeun", "source": "ART-VR", "target": "ART-ohjungeun" }
},
{
    "data": {
        "id": "ART-choisungyoon",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "최성윤"
    }
},
{
    "data": { "id": "ART-VR->ART-choisungyoon", "source": "ART-VR", "target": "ART-choisungyoon" }
},
{
    "data": {
        "id": "ART-kimjaeyoo",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "김재유"
    }
},
{
    "data": { "id": "ART-VR->ART-kimjaeyoo", "source": "ART-VR", "target": "ART-kimjaeyoo" }
},

//예술,과학,복합

{
    "data": {
        "id": "ART-a_r_c",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "예술,과학,복합"
    }
},
{
    "data": { "id": "ART-research->ART-a_r_c", "source": "ART-research", "target": "ART-a_r_c" }
},
{
    "data": {
        "id": "ART-hongjoohee",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "홍주희"
    }
},
{
    "data": { "id": "ART-a_r_c->ART-hongjoohee", "source": "ART-a_r_c", "target": "ART-hongjoohee" }
},
{
    "data": {
        "id": "ART-songchangae",
        "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
        "label": "송창애"
    }
},
{
    "data": { "id": "ART-a_r_c->ART-songchangae", "source": "ART-a_r_c", "target": "ART-songchangae" }
},















    {
        "data": {
            "id": "ART-project",
            "url": "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            "label": "프로젝트"
        }
    },
    {
        "data": { "id": "ART-X->ART-project", "source": "ART-project", "target": "ART-X" }
    },
    
];




const cy_for_rank = cytoscape({
    elements: data
});
// rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다

const pageRank = cy_for_rank.elements().pageRank();
// elements들의 rank들입니다.

const nodeMaxSize = 20;
const nodeMinSize = 8;
const nodeActiveSize = 10;
const fontMaxSize = 6;
const fontMinSize = 6;
const fontActiveSize = 13;
// node & font 크기 값

const edgeWidth = '0.5px';
var edgeActiveWidth = '1.5px';
const arrowScale = 0.8;
const arrowActiveScale = 1.2;
// edge & arrow 크기값

const dimColor = '#6e6e6e';
const edgeColor = '#6e6e6e';
const nodeColor = '#515151';
const nodeActiveColor = '#557f8d';

const successorColor = '#84a5b0';
// 상위 node & edge color
const predecessorsColor = '#2d677a';
// 하위 node & edge color

// 변경된 부분










// 아래는 공식 사이트에 올라와 있는 예제 코드입니다
const cy = cytoscape({

    
    container: document.getElementById('cy'), // container to render in

    elements: data,

    style: [ // the stylesheet for the graph
        {
            selector: 'node',
            style: {
                'background-color': nodeColor,
                'label': 'data(label)',
                'width': function (ele) {
                    return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
                },
                'height': function (ele) {
                    return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
                },
                'font-size': function (ele) {
                    return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
                },
                'color': nodeColor
            }
        },

        {
            selector: 'edge',
            style: {
                'width': edgeWidth,
                'curve-style': 'bezier',
                'line-color': edgeColor,
                'source-arrow-color': edgeColor,
                
                'arrow-scale': arrowScale
            }
        }
    ],
	// 변경된 부분
    layout: {
        name: 'cose-bilkent',
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true
    }
	//
});



//position














   

function setDimStyle(target_cy, style) {
    target_cy.nodes().forEach(function (target) {
        target.style(style);
    });
    target_cy.edges().forEach(function (target) {
        target.style(style);
    });
}

function setFocus(target_element, successorColor, predecessorsColor, edgeWidth, arrowScale) {
    target_element.style('background-color', nodeActiveColor);
    target_element.style('color', nodeColor);
    target_element.successors().each(function (e) {
        // 상위  엣지와 노드
        if (e.isEdge()) {
            e.style('width', edgeWidth);
            e.style('arrow-scale', arrowScale);
        }
        e.style('color', nodeColor);
        e.style('background-color', successorColor);
        e.style('line-color', successorColor);
        e.style('source-arrow-color', successorColor);
        setOpacityElement(e, 0.5);
    }
    );
    target_element.predecessors().each(function (e) {
        // 하위 엣지와 노드
        if (e.isEdge()) {
            e.style('width', edgeWidth);
            e.style('arrow-scale', arrowScale);
        }
        e.style('color', nodeColor);
        e.style('background-color', predecessorsColor);
        e.style('line-color', predecessorsColor);
        e.style('source-arrow-color', predecessorsColor);
        setOpacityElement(e, 0.5);
    });
    target_element.neighborhood().each(function (e) {
        // 이웃한 엣지와 노드
        setOpacityElement(e, 1);
    }
    );
    target_element.style('width', Math.max(parseFloat(target_element.style('width')), nodeActiveSize));
    target_element.style('height', Math.max(parseFloat(target_element.style('height')), nodeActiveSize));
    target_element.style('font-size', Math.max(parseFloat(target_element.style('font-size')), fontActiveSize));
}

function setOpacityElement(target_element, degree) {
    target_element.style('opacity', degree);
}

function setResetFocus(target_cy) {
    target_cy.nodes().forEach(function (target) {
        target.style('background-color', nodeColor);
        var rank = pageRank.rank(target);
        target.style('width', nodeMaxSize * rank + nodeMinSize);
        target.style('height', nodeMaxSize * rank + nodeMinSize);
        target.style('font-size', fontMaxSize * rank + fontMinSize);
        target.style('color', nodeColor);
        target.style('opacity', 1);
    });
    target_cy.edges().forEach(function (target) {
        target.style('line-color', edgeColor);
        target.style('source-arrow-color', edgeColor);
        target.style('width', edgeWidth);
        target.style('arrow-scale', arrowScale);
        target.style('opacity', 1);
    });
}








cy.on('tap', function (e) {
    const url = e.target.data('url')
    if (url && url !== '') {
        window.open(url);
    }
}
);


cy.on('tapstart mouseover', 'node', function (e) {
    setDimStyle(cy, {
        'background-color': dimColor,
        'line-color': dimColor,
        'source-arrow-color': dimColor,
        'color': dimColor
    });

    setFocus(e.target, successorColor, predecessorsColor, edgeActiveWidth, arrowActiveScale);
});

cy.on('tapend mouseout', 'node', function (e) {
    setResetFocus(e.cy);
});


let resizeTimer;

window.addEventListener('resize', function () {
    this.clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function(){
        cy.fit();
    },-200);
});





