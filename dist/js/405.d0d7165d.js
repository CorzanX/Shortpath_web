"use strict";(self["webpackChunkcorzanx"]=self["webpackChunkcorzanx"]||[]).push([[405],{3405:function(t,e,n){n.r(e),n.d(e,{default:function(){return vt}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("SPFA")]),t._v(" spfa algorithm is the shortest path fastest algorithm. In general, it is a more efficient algorithm to solve the shortest circuit. The essence of an spfa is BFS, which traverses all the edges of a graph. "),e("h2",[t._v("The realization of SPFA")]),t._v(" We use array d to record the shortest path estimate of each node and adjacency list to store graph G. The method we take is the dynamic approximation method: A fifO queue is set up to store the nodes to be optimized. During optimization, the first node u is taken out each time, and the current estimate of the shortest path of point u is used to relax the node v that leaves point u. If the estimated value of the shortest path of point v is adjusted and point v is not in the current queue, point v will be put into the end of the queue. In this way, nodes are constantly removed from the queue for relaxation until the queue is empty."),e("br"),e("img",{attrs:{src:n(335),width:"600",height:"auto"}}),e("br"),e("step1"),e("step2"),e("step3"),e("step4"),e("step5"),e("step6"),e("step7"),e("step8"),e("h2",[t._v("NOTE")]),t._v(" 1.The SPFA Algorithm, whose full name is Shortest Path Faster Algorithm, was the name of a paper published in 1994 by Duan Fanding of Southwest Jiaotong University. However, Duan Fandin's proof was wrong, and queue optimization content was available shortly after Bellman-Ford algorithm was proposed (1957), so SPFA algorithm was not recognized as Duan Fandin in the international community."),e("br"),t._v(" 2.In order to avoid the worst case, the more efficient Dijkstra algorithm should be used on the positive weight graph."),e("br"),e("h2",[t._v("Core Code")]),e("h3",[t._v("cpp")]),e("spfa_cpp"),e("h3",[t._v("java")]),e("spfa_java"),e("h3",[t._v("python")]),e("spfa_python")],1)},s=[],a=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step1")]),t._v(" First, source point a joins the queue. When the queue is not empty, the first element of the queue (a) exits the queue, and relaxation operations are carried out on the end points of all edges starting from point a successively (there are three points b,c and d here). At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",{staticStyle:{color:"red"}},[t._v("24")]),e("td",{staticStyle:{color:"red"}},[t._v("8")]),e("td",{staticStyle:{color:"red"}},[t._v("15")]),e("td",[t._v("∞")]),e("td",[t._v("∞")]),e("td",[t._v("∞")])])]),e("br"),t._v(" In relaxation, the shortest path estimation of the three points becomes smaller, and none of these points appear in the queue, so these points need to be queued, and at this point, three new nodes b,c, and d are queued. "),e("br")])}],r=n(1001),d={},h=(0,r.Z)(d,a,o,!1,null,"19fdf0ae",null),l=h.exports,u=function(){var t=this;t._self._c;return t._m(0)},c=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step2")]),t._v(" The first element b points out of the queue, and relaxes the ending points of all edges with b as the starting point (only point e here) in turn. At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",[t._v("24")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",{staticStyle:{color:"red"}},[t._v("30")]),e("td",[t._v("∞")]),e("td",[t._v("∞")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimate of e also becomes smaller. e does not exist in the queue, so e also has to join the queue. At this time, the elements in the queue are c, d and e. "),e("br")])}],v={},_=(0,r.Z)(v,u,c,!1,null,"1dbd7105",null),p=_.exports,f=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step3")]),t._v(" The first element c points out of the queue, and relaxation operations are carried out on the end points of all edges with c as the starting point (there are two points e and f here). At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",[t._v("24")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",{staticStyle:{color:"red"}},[t._v("15")]),e("td",{staticStyle:{color:"red"}},[t._v("11")]),e("td",[t._v("∞")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimate of e and f becomes smaller, e exists in the queue, f does not exist. So e doesn't have to join the queue, f has to join the queue, so the elements in the queue are d, e, f "),e("br")])}],m={},b=(0,r.Z)(m,f,g,!1,null,"e2eec320",null),w=b.exports,q=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step4")]),t._v(" The first element d of the queue exits the queue, and relaxation operations are performed on the end points of all edges starting from d (only g here) in turn. At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",[t._v("24")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",[t._v("15")]),e("td",[t._v("11")]),e("td",{staticStyle:{color:"red"}},[t._v("19")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimate of g does not become smaller (relaxation fails), no new node joins the queue, and the elements in the queue are f and g. "),e("br")])}],x={},A=(0,r.Z)(x,q,y,!1,null,"95c2fa9c",null),F=A.exports,S=function(){var t=this;t._self._c;return t._m(0)},j=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step5")]),t._v(" The first element of the line f points out of the line, and relaxation operations are carried out on the end points of all edges with f as the starting point (there are three points d, e and g here). At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",[t._v("24")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",{staticStyle:{color:"red"}},[t._v("13")]),e("td",[t._v("11")]),e("td",{staticStyle:{color:"red"}},[t._v("14")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimation of e and g becomes smaller again, there is no point e in the queue,e joins the queue, there is point g in the queue, g does not need to join the queue, then the elements in the queue are g and e. "),e("br")])}],C={},E=(0,r.Z)(C,S,j,!1,null,"d062e59e",null),I=E.exports,N=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step6")]),t._v(" The first element g points out of the queue, and relaxes the ending points of all edges with g as the starting point (there is only point b here) in turn. At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",{staticStyle:{color:"red"}},[t._v("17")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",[t._v("13")]),e("td",[t._v("11")]),e("td",[t._v("14")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimate of b becomes smaller again. There is no point b in the queue, and b joins the queue. At this time, the elements in the queue are e and b. "),e("br")])}],D={},L=(0,r.Z)(D,N,T,!1,null,"48bcd2e6",null),Z=L.exports,P=function(){var t=this;t._self._c;return t._m(0)},V=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step7")]),t._v(" The first element of the line e points out of the line, and relaxes the ending points of all edges starting from e in turn (here only g is the point). At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",[t._v("17")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",[t._v("13")]),e("td",[t._v("11")]),e("td",[t._v("14")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimate of g does not change (relaxation is unsuccessful), and the queue element is b. "),e("br")])}],k={},z=(0,r.Z)(k,P,V,!1,null,"fc899fd6",null),O=z.exports,Q=function(){var t=this;t._self._c;return t._m(0)},B=[function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Step8")]),t._v(" The first element b points out of the queue, and relaxes the ending points of all edges with b as the starting point (only e here) in turn. At this time, the state of the path table is: "),e("table",[e("tr",{staticClass:"blue-row"},[e("td"),e("td",[t._v("a")]),e("td",[t._v("b")]),e("td",[t._v("c")]),e("td",[t._v("d")]),e("td",[t._v("e")]),e("td",[t._v("f")]),e("td",[t._v("g")])]),e("tr",{staticClass:"lightblue-row"},[e("td",[t._v("d[i]")]),e("td",[t._v("0")]),e("td",[t._v("17")]),e("td",[t._v("8")]),e("td",[t._v("15")]),e("td",[t._v("13")]),e("td",[t._v("11")]),e("td",[t._v("14")])])]),e("br"),t._v(" In the shortest path table, the shortest path estimate of e does not change (relaxation is unsuccessful), and the queue is empty "),e("br"),t._v(" Finally, the shortest path from a to g is 14. "),e("br")])}],U={},W=(0,r.Z)(U,Q,B,!1,null,"fe9ca260",null),G=W.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("pre",{directives:[{name:"highlightA",rawName:"v-highlightA"}]},[t._v("        "),e("code",{staticClass:"cpp"},[t._v("\n            "+t._s(t.code)+"\n        ")]),t._v("\n    ")])])},J=[],M={data(){return{code:"\nstruct Edge\n{\n    int to,len;\n};\nbool spfa(const int &beg,\n          const vector<list<Edge> > &adjlist,\n          vector<int> &dist,\n          vector<int> &path)\n{\n    const int INF=0x7FFFFFFF,NODE=adjlist.size();\n    dist.assign(NODE,INF);\n    path.assign(NODE,-1);\n    list<int> que(1,beg);\nvector<int> cnt(NODE,0);\n vector<bool> flag(NODE,0);\n    dist[beg]=0;\n    cnt[beg]=flag[beg]=1;\n    while(!que.empty())\n    {\n        const int now=que.front();\n        que.pop_front();\n        flag[now]=0;\n        for(list<Edge>::const_iterator\n                i=adjlist[now].begin(); i!=adjlist[now].end(); ++i)\n            if(dist[i->to]>dist[now]+i->len)\n            {\n                dist[i->to]=dist[now]+i->len;\n                path[i->to]=now;\n                if(!flag[i->to])\n                {\n                    if(NODE==++cnt[i->to])return 1;\n                    if(!que.empty()&&dist[i->to]<dist[que.front()])\n                    que.push_front(i->to);\n                    else que.push_back(i->to);\n                    flag[i->to]=1;\n                }\n            }\n    }\n    return 0;\n}\n            "}}},X=M,K=(0,r.Z)(X,H,J,!1,null,"57c43e5b",null),R=K.exports,Y=function(){var t=this,e=t._self._c;return e("div",[e("pre",{directives:[{name:"highlightA",rawName:"v-highlightA"}]},[t._v("        "),e("code",{staticClass:"java"},[t._v("\n            "+t._s(t.code)+"\n        ")]),t._v("\n    ")])])},$=[],tt={data(){return{code:"\n\nclass SPFA {\n    static class Edge {\n        int source;\n        int destination;\n        int weight;\n\n        public Edge(int source, int destination, int weight) {\n            this.source = source;\n            this.destination = destination;\n            this.weight = weight;\n        }\n    }\n\n    private int numVertices;\n    private List<List<Edge>> adjacencyList;\n\n    public SPFA(int numVertices) {\n        this.numVertices = numVertices;\n        adjacencyList = new ArrayList<>(numVertices);\n        for (int i = 0; i < numVertices; i++) {\n            adjacencyList.add(new ArrayList<>());\n        }\n    }\n\n    public void addEdge(int source, int destination, int weight) {\n        Edge edge = new Edge(source, destination, weight);\n        adjacencyList.get(source).add(edge);\n    }\n\n    public int[] shortestPath(int source) {\n        int[] distance = new int[numVertices];\n        Arrays.fill(distance, Integer.MAX_VALUE);\n        distance[source] = 0;\n\n        Queue<Integer> queue = new LinkedList<>();\n        queue.add(source);\n\n        while (!queue.isEmpty()) {\n            int currentVertex = queue.poll();\n            List<Edge> edges = adjacencyList.get(currentVertex);\n\n            for (Edge edge : edges) {\n                int destination = edge.destination;\n                int newDistance = distance[currentVertex] + edge.weight;\n\n                if (newDistance < distance[destination]) {\n                    distance[destination] = newDistance;\n                    queue.add(destination);\n                }\n            }\n        }\n\n        return distance;\n    }\n}\n            "}}},et=tt,nt=(0,r.Z)(et,Y,$,!1,null,"24433cce",null),it=nt.exports,st=function(){var t=this,e=t._self._c;return e("div",[e("pre",{directives:[{name:"highlightA",rawName:"v-highlightA"}]},[t._v("        "),e("code",{staticClass:"python"},[t._v("\n            "+t._s(t.code)+"\n        ")]),t._v("\n    ")])])},at=[],ot={data(){return{code:"\nfrom collections import deque\nINF = 0x3f3f3f3f\ngraph = [[] for _ in range(10001)]  \ndist = [INF] * 10001    \ninQueue = [False] * 10001    \nq = deque()   \ndef SPFA(start, end):\ndist[start] = 0    \ninQueue[start] = True  \n    q.append(start)  \n    while q:\n        cur = q.popleft()    \n        inQueue[cur] = False   \n        for edge in graph[cur]:   \n            to, weight = edge\n            if dist[cur] + weight < dist[to]: \n                dist[to] = dist[cur] + weight  \n                if not inQueue[to]:  \n                    q.append(to)  \n                    inQueue[to] = True   \n    if dist[end] == INF:  \n        return -1\n    else:\n        return dist[end]   \nn, m = map(int, input().split())\nfor i in range(m):\n    from_, to, weight = map(int, input().split())\n    graph[from_].append((to, weight))   \nstart, end = map(int, input().split())\nprint(SPFA(start, end))  \n            "}}},rt=ot,dt=(0,r.Z)(rt,st,at,!1,null,"7bd3f0ce",null),ht=dt.exports,lt={components:{step1:l,step2:p,step3:w,step4:F,step5:I,step6:Z,step7:O,step8:G,spfa_cpp:R,spfa_java:it,spfa_python:ht}},ut=lt,ct=(0,r.Z)(ut,i,s,!1,null,"37bb2357",null),vt=ct.exports},335:function(t,e,n){t.exports=n.p+"img/SPFA.c896ea44.png"}}]);
//# sourceMappingURL=405.d0d7165d.js.map