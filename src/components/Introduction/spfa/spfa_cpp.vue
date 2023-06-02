<template>
    <div>
        <pre v-highlightA>
            <code class="cpp">
                {{code}}
            </code>
        </pre>
    </div>
</template>

<script>

export default {
    data(){
        return {
code:`
struct Edge
{
    int to,len;
};
bool spfa(const int &beg,
          const vector<list<Edge> > &adjlist,
          vector<int> &dist,
          vector<int> &path)
{
    const int INF=0x7FFFFFFF,NODE=adjlist.size();
    dist.assign(NODE,INF);
    path.assign(NODE,-1);
    list<int> que(1,beg);
vector<int> cnt(NODE,0);
 vector<bool> flag(NODE,0);
    dist[beg]=0;
    cnt[beg]=flag[beg]=1;
    while(!que.empty())
    {
        const int now=que.front();
        que.pop_front();
        flag[now]=0;
        for(list<Edge>::const_iterator
                i=adjlist[now].begin(); i!=adjlist[now].end(); ++i)
            if(dist[i->to]>dist[now]+i->len)
            {
                dist[i->to]=dist[now]+i->len;
                path[i->to]=now;
                if(!flag[i->to])
                {
                    if(NODE==++cnt[i->to])return 1;
                    if(!que.empty()&&dist[i->to]<dist[que.front()])
                    que.push_front(i->to);
                    else que.push_back(i->to);
                    flag[i->to]=1;
                }
            }
    }
    return 0;
}
            `
        }
    }
}
</script>

<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 14px;
}

code {
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 14px;
}

</style>