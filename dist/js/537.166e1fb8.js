"use strict";(self["webpackChunkcorzanx"]=self["webpackChunkcorzanx"]||[]).push([[537],{17537:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var i=function(){var n=this,t=n._self._c;return t("div",[t("h1",[n._v("Floyd")]),t("p",[n._v("Floyd algorithm, also known as interpolation method, is an algorithm that uses the idea of dynamic programming to find the shortest path between multiple source points in a given weighted graph, similar to Dijkstra algorithm. The algorithm is named after one of its founders, 1978 Turing Award winner and Stanford University computer science professor Robert Floyd.")]),t("h2",[n._v("The realization of Floyd algorithm")]),n._v(" The specific idea of the algorithm is:"),t("br"),n._v(" 1. The adjacency matrix (two-dimensional array)"),t("span",{staticClass:"red-word"},[n._v("dist")]),n._v(" stores the path. The value in the array begins to represent the initial direct path between the dots, and eventually is the minimum path between the dots. There are two points to be noted."),t("br"),n._v(" 2. Add relaxation calculation from the first to the NTH point in turn, and test enumerate whether any path length has been changed (can I update the path) by adding each point. When adding (k enumeration) relaxed points sequentially, it is necessary to "),t("span",{staticClass:"bold-word"},[n._v("traverse each pair of points in the graph (i,j double cycle) to determine whether the distance between each pair of points has a minimum distance change because of the added points")]),n._v(". If it changes (becomes smaller), then the distance between two points (i,j) changes."),t("br"),n._v(" 3.Repeat until the final insertion is complete. "),t("p",{staticStyle:{color:"blue"}},[n._v("The state transition equation of step 2 is:")]),n._m(0),t("h2",[n._v("Example")]),t("h3",[n._v("Step1")]),n._v(" Adding the first node "),t("span",{staticClass:"red-word"},[n._v("A")]),n._v(" for updating calculation, we can find that, due to the addition of A, the originally disconnected point pairs "),t("span",{staticClass:"red-word"},[n._v("B,C")]),n._v(" and "),t("span",{staticClass:"red-word"},[n._v("B,D")]),n._v(" become connected, and "),t("span",{staticClass:"bold-word"},[n._v("the distance after adding A is the current minimum")]),n._v(". At the same time, you can find that adding "),t("span",{staticClass:"red-word"},[n._v("A")]),n._v(" also makes "),t("span",{staticClass:"red-word"},[n._v("C-D")]),n._v(" have one more connecting path (6+3). But the "),t("span",{staticClass:"red-word"},[n._v("C-D")]),n._v(" connection distance of 9 is much greater than the original "),t("span",{staticClass:"red-word"},[n._v("(C,D)")]),n._v(" connection path 2, so this one is not updated."),t("br"),t("img",{attrs:{src:e(44672),width:"600",height:"auto"}}),t("br"),t("h3",[n._v("Step2")]),n._v(" Let's go ahead and add a second node "),t("span",{staticClass:"red-word"},[n._v("B")]),n._v(", which does the same thing as "),t("span",{staticClass:"red-word"},[n._v("A")]),n._v(". Update some points. Because there are a lot of points that are connected to B, there are a lot of new paths, and I'm just going to give you a list of them, just to illustrate, but I'm going to use 1 for the new path, and 0 for the original length."),t("br"),t("img",{attrs:{src:e(33111),width:"600",height:"auto"}}),t("br"),n._m(1),n._m(2),n._m(3),n._m(4),n._m(5),t("p",[n._v("Of course, some new paths are larger than the existing paths and do not update, for example:")]),n._m(6),n._m(7),t("h3",[n._v("Step3")]),n._v(" After adding C, D, E and F in the sequence, the same operation is carried out. Finally, all adding is finished and there is no path to update. And actually at this point we have a lot more lines. These lines represent "),t("span",{staticClass:"bold-word"},[n._v(" current shortest path")]),n._v(". This also fits in with our requirement that ultimately we want the shortest path for all nodes. "),t("span",{staticClass:"bold-word"},[n._v(" Each node should end up with 5 edges pointing to different nodes!")]),n._v(" The corresponding boundary value of the matrix is the shortest path between the dots."),t("br"),t("img",{attrs:{src:e(69052),width:"600",height:"auto"}}),t("br"),t("h2",[n._v("Note")]),n._v(" 1.It is necessary to ensure that there is no negative weight cycle in the graph, otherwise the Floyd algorithm will not be able to correctly solve the shortest path. If there is a negative weight cycle in the graph, it can be judged by checking if d[i][i] < 0."),t("br"),t("br"),n._v("2.The Floyd algorithm is suitable for dense graphs, where the number of edges is close to the square of the number of nodes. If the number of edges in the graph is small, other algorithms such as Dijkstra algorithm can be considered."),t("br"),t("br"),n._v("3.In the implementation process, it is necessary to pay attention to the range of the array index. Since the list in Python can be dynamically extended, a large two-dimensional list can be initialized first, but the range of the array index should be noted during use to avoid out-of-range errors."),t("br"),t("br"),n._v("4.The space complexity of the Floyd algorithm is relatively high, which is O(n^2). Therefore, when the number of nodes is large, there may be a problem of insufficient memory. At this time, an adjacency list can be used to optimize the space complexity."),t("br"),t("h2",[n._v("Core Code")]),t("h3",[n._v("cpp")]),t("fly_cpp"),t("h3",[n._v("java")]),t("fly_java"),t("h3",[n._v("python")]),t("fly_python")],1)},a=[function(){var n=this,t=n._self._c;return t("pre",[t("code",[n._v("dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("AF1=AB+BF=6+2=8 < AF0(∞) "),t("span",{staticClass:"red-word"},[n._v("update")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("AE1=AB+BE=2+4=6 < AE0(∞) "),t("span",{staticClass:"red-word"},[n._v("update")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("CE1=CB+BE=5+5=9 < CE0(∞) "),t("span",{staticClass:"red-word"},[n._v("update")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("CF1=CB+BF=5+6=11 < CF0(∞) "),t("span",{staticClass:"red-word"},[n._v("update")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("EF1=EB+BF=4+6=10 < EF0(∞) "),t("span",{staticClass:"red-word"},[n._v("update")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("AC1=AB+BC=2+5=7 > AC0(3) "),t("span",{staticClass:"red-word"},[n._v("don't update")])])},function(){var n=this,t=n._self._c;return t("p",[n._v("AD1=AB+BD=2+8=10 > AD0(6) "),t("span",{staticClass:"red-word"},[n._v("don't update")])])}],r=function(){var n=this,t=n._self._c;return t("div",[t("pre",{directives:[{name:"highlightA",rawName:"v-highlightA"}]},[n._v("        "),t("code",{staticClass:"cpp"},[n._v("\n            "+n._s(n.code)+"\n        ")]),n._v("\n    ")])])},s=[],o={data(){return{code:'\nconst int INF = 0x3f3f3f3f; \nint main() {\n    int n;\n    cin >> n;\n    int graph[n][n];\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) {\n            cin >> graph[i][j];\n            if(graph[i][j] == -1) { \n                graph[i][j] = INF;\n            }\n        }\n}\n    for(int k = 0; k < n; k++) {\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) {\n                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j]);\n            }\n        }\n    }\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < n; j++) {\n            if(graph[i][j] == INF) {   \n                cout << -1 << " ";\n            } else {\n                cout << graph[i][j] << " ";\n            }\n        }\n        cout << endl;\n    }\n    return 0;\n}\n            '}}},h=o,d=e(1001),l=(0,d.Z)(h,r,s,!1,null,"405c9b32",null),p=l.exports,c=function(){var n=this,t=n._self._c;return t("div",[t("pre",{directives:[{name:"highlightA",rawName:"v-highlightA"}]},[n._v("        "),t("code",{staticClass:"java"},[n._v("\n            "+n._s(n.code)+"\n        ")]),n._v("\n    ")])])},f=[],g={data(){return{code:'\npublic class FloydAlgorithm {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] graph = new int[n][n];\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) {\n                graph[i][j] = sc.nextInt();\n                if(graph[i][j] == -1) {   \n                    graph[i][j] = Integer.MAX_VALUE;\n                }\n            }\n        }\n        for(int k = 0; k < n; k++) {\n            for(int i = 0; i < n; i++) {\n                for(int j = 0; j < n; j++) {\n                    graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);\n                }\n            }\n        }\n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < n; j++) {\n                if(graph[i][j] == Integer.MAX_VALUE) {  \n                    System.out.print("-1 ");\n                } else {\n                    System.out.print(graph[i][j] + " ");\n                }\n            }\n            System.out.println();\n        }\n    }\n}\n            '}}},u=g,_=(0,d.Z)(u,c,f,!1,null,"77a622b6",null),v=_.exports,m=function(){var n=this,t=n._self._c;return t("div",[t("pre",{directives:[{name:"highlightA",rawName:"v-highlightA"}]},[n._v("        "),t("code",{staticClass:"python"},[n._v("\n            "+n._s(n.code)+"\n        ")]),n._v("\n    ")])])},w=[],b={data(){return{code:'\nINF = float("inf")  \nn = int(input())    \ngraph = [[0] * n for _ in range(n)]\nfor i in range(n):\n    line = input().split()\n    for j in range(n):\n        graph[i][j] = int(line[j])\n        if graph[i][j] == -1:   \n            graph[i][j] = INF\nfor k in range(n):\n    for i in range(n):\n        for j in range(n):\n            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])\nfor i in range(n):\n    for j in range(n):\n        if graph[i][j] == INF:  \n            print("-1", end=" ")\n        else:\n            print(graph[i][j], end=" ")\n    print()\n\n            '}}},j=b,y=(0,d.Z)(j,m,w,!1,null,"6a28b5f1",null),C=y.exports,A={components:{fly_cpp:p,fly_java:v,fly_python:C}},k=A,F=(0,d.Z)(k,i,a,!1,null,"48de519f",null),x=F.exports},44672:function(n,t,e){n.exports=e.p+"img/fly_1.ca2ea425.png"},33111:function(n,t,e){n.exports=e.p+"img/fly_2.cc94f312.png"},69052:function(n,t,e){n.exports=e.p+"img/fly_3.f440818d.png"}}]);
//# sourceMappingURL=537.166e1fb8.js.map