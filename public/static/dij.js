let blocks = document.getElementsByClassName("drawing-area")[0];
let addEdge = false;
let cnt = 0;
let dist;

let alerted = localStorage.getItem("alerted") || "";
if (alerted !== "yes") {
  alert(
    "Read instructions before proceeding by clicking i-icon in the top-right corner"
  );
  localStorage.setItem("alerted", "yes");
}

// It is called when user starts adding edges by clicking on button given
const addEdges = () => {
  if (cnt < 2) {
    alert("Create atleast two nodes to add an edge");
    return;
  }

  addEdge = true;
  document.getElementById("add-edge-enable").disabled = true;
  document.getElementsByClassName("run-btn")[0].disabled = false;
  // Initializing array for adjacency matrix representation
  dist = new Array(cnt + 1)
    .fill(Infinity)
    .map(() => new Array(cnt + 1).fill(Infinity));
};

// Temporary array to store clicked elements to make an edge between the(max size =2)
let arr = [];

const appendBlock = (x, y) => {
  document.querySelector(".reset-btn").disabled = false;
  document.querySelector(".click-instruction").style.display = "none";
  // Creating a node
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.top = `${y}px`;
  block.style.left = `${x}px`;
  block.style.transform = `translate(-50%,-50%)`;
  block.id = cnt;

  block.innerText = cnt++;

  // Click event for node
  block.addEventListener("click", (e) => {
    // Prevent node upon node
    e.stopPropagation() || (window.event.cancelBubble = "true");

    // If state variable addEdge is false, can't start adding edges
    if (!addEdge) return;

    block.style.backgroundColor = "coral";
    arr.push(block.id);

    // When two elements are push, draw a edge and empty the array
    if (arr.length === 2) {
      drawUsingId(arr);
      arr = [];
    }
  });
  blocks.appendChild(block);
};

// Allow creating nodes on screen by clicking
blocks.addEventListener("click", (e) => {
  if (addEdge) return;
  if (cnt > 12) {
    alert("cannot add more than 12 vertices");
    return;
  }
  console.log(e.x, e.y);
  appendBlock(e.x, e.y);
});

// Function to draw a line between nodes
const drawLine = (x1, y1, x2, y2, ar) => {
  // prevent multiple edges for same couple of nodes
  if (dist[Number(ar[0])][Number(ar[1])] !== Infinity) {
    document.getElementById(arr[0]).style.backgroundColor = "#333";
    document.getElementById(arr[1]).style.backgroundColor = "#333";
    return;
  }

  console.log(ar);
  // Length of line
  const len = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  const slope = x2 - x1 ? (y2 - y1) / (x2 - x1) : y2 > y1 ? 90 : -90;

  // Adding length to distance array
  dist[Number(ar[0])][Number(ar[1])] = Math.round(len / 10);
  dist[Number(ar[1])][Number(ar[0])] = Math.round(len / 10);

  // Drawing line
  const line = document.createElement("div");
  line.id =
    Number(ar[0]) < Number(ar[1])
      ? `line-${ar[0]}-${ar[1]}`
      : `line-${ar[1]}-${ar[0]}`;
  line.classList.add("line");
  line.style.width = `${len}px`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;

  // Edge weight
  let p = document.createElement("p");
  p.classList.add("edge-weight");
  p.innerText = Math.round(len / 10);
  p.contentEditable = "true";
  p.inputMode = "numeric";
  p.addEventListener("blur", (e) => {
    if (isNaN(Number(e.target.innerText))) {
      alert("Enter valid edge weight");
      return;
    }
    n1 = Number(p.closest(".line").id.split("-")[1]);
    n2 = Number(p.closest(".line").id.split("-")[2]);
    // console.log(p.closest('.line'), e.target.innerText, n1, n2);
    dist[n1][n2] = Number(e.target.innerText);
    dist[n2][n1] = Number(e.target.innerText);
  });
  line.style.transform = `rotate(${
    x1 > x2 ? Math.PI + Math.atan(slope) : Math.atan(slope)
  }rad)`;

  p.style.transform = `rotate(${
    x1 > x2 ? (Math.PI + Math.atan(slope)) * -1 : Math.atan(slope) * -1
  }rad)`;

  line.append(p);
  blocks.appendChild(line);
  document.getElementById(arr[0]).style.backgroundColor = "#333";
  document.getElementById(arr[1]).style.backgroundColor = "#333";
};

// Function to get (x, y) coordinates of clicked node
const drawUsingId = (ar) => {
  if (ar[0] === ar[1]) {
    document.getElementById(arr[0]).style.backgroundColor = "#333";
    arr = [];
    return;
  }
  x1 = Number(document.getElementById(ar[0]).style.left.slice(0, -2));
  y1 = Number(document.getElementById(ar[0]).style.top.slice(0, -2));
  x2 = Number(document.getElementById(ar[1]).style.left.slice(0, -2));
  y2 = Number(document.getElementById(ar[1]).style.top.slice(0, -2));
  drawLine(x1, y1, x2, y2, ar);
};


let cnt_round = 0;
let parent_load = [];
let cost_load = [];
let mini_load = [];
let unv_load = [];
let minc_load = [];
// Function to find shortest path from given source to all other nodes
const findShortestPath = async (el) => {
  let visited = [];
  let unvisited = [];
  clearScreen();
  document.getElementsByClassName("stop-btn")[0].disabled = false;
  //let source = Number(el.previousElementSibling.value);
  let source = Number(document.getElementById("source-node").value);
  if (source >= cnt || isNaN(source)) {
    alert("Invalid source");
    return;
  }
  document.getElementById(source).style.backgroundColor = "grey";
  // console.log(source);
  let parent = [];
  parent[source] = -1;
  visited = [];
  for (i = 0; i < cnt; i++) unvisited.push(i);

  // Array containing cost of reaching i(th) node from source
  let cost = [];
  for (i = 0; i < cnt; i++) {
    i === source
      ? null
      : dist[source][i]
      ? (cost[i] = dist[source][i])
      : (cost[i] = Infinity);
  }
  cost[source] = 0;

  // Array which will contain final minimum cost
  let minCost = [];
  for (i = 0; i < cnt; i++){
      minCost[i] = Infinity;
  }
  minCost[source] = 0;
  for (i = 0; i < cnt; i++)
    parent[i] === undefined ? (parent[i] = source) : null;
  // Repeating until all edges are visited
  while (unvisited.length) {
    let mini = cost.indexOf(Math.min(...cost));
    // console.log("draw", visited[visited.length-1],mini);
    visited.push(mini);
    unvisited.splice(unvisited.indexOf(mini), 1);
    
    
    // Relaxation of unvisited edges
    
    for (j of unvisited) {
      if (j === mini) continue;
      cnt_round++;
      
      console.log(cnt_round-1,mini, j);
      unv_load.push(j);
      mini_load.push(mini);
      parent_load.push(parent.slice());
      cost_load.push(cost.slice());
      minc_load.push(minCost.slice());
      if (cost[j] > dist[mini][j] + cost[mini]) {
        minCost[j] = dist[mini][j] + cost[mini];
        cost[j] = dist[mini][j] + cost[mini];
        parent[j] = mini;
        
      } else {
        minCost[j] = cost[j];
        // parent[j] = source;
      }
      
      //await wait(5000)
    }
    cost[mini] = Infinity;
  }
  console.log("Minimum Cost", minCost);
  //for (i = 0; i < cnt; i++)
    //parent[i] === undefined ? (parent[i] = source) : null;
  // console.log(parent);
  parent_load.push(parent.slice());
  cost_load.push(cost.slice());
  minc_load.push(minCost.slice());
  run();
};
let now = 0;
let isPaused = false;
const run = async () => {

  let source = Number(document.getElementById("source-node").value);
    while(now<cnt_round){
        updateDisplay();
            document.getElementsByClassName("path")[0].innerHTML = "";  
            if (unv_load[now] === mini_load[now]) continue;
            if (cost_load[now][unv_load[now]] >= dist[mini_load[now]][unv_load[now]] + cost_load[now][mini_load[now]] && dist[mini_load[now]][unv_load[now]] > 0 && dist[mini_load[now]][unv_load[now]] !== Infinity) {    
                if (mini_load[now] < unv_load[now]) {
                    let tmp = document.getElementById(`line-${mini_load[now]}-${unv_load[now]}`);
                    await colorEdgeRed(tmp);
                  } else {
                    let tmp = document.getElementById(`line-${unv_load[now]}-${mini_load[now]}`);
                    await colorEdgeRed(tmp);
                  }
                if(cost_load[now][unv_load[now]] > 0 && cost_load[now][unv_load[now]] !== Infinity){
                  await deletePath(parent_load[now],unv_load[now]);
                }
                await indicatePathSingle(parent_load[now+1], source, unv_load[now],minc_load[now+1] );
                let el_p = "cost[" + unv_load[now] + "]" + " > " + "This Edge + cost[" + mini_load[now] + "] uptate!" ;
                document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;        
            } else{
              if(dist[mini_load[now]][unv_load[now]] > 0 && dist[mini_load[now]][unv_load[now]] !== Infinity){
                if (mini_load[now] < unv_load[now]) {
                  let tmp = document.getElementById(`line-${mini_load[now]}-${unv_load[now]}`);
                  await colorEdgeRed(tmp);
                } else {
                  let tmp = document.getElementById(`line-${unv_load[now]}-${mini_load[now]}`);
                  await colorEdgeRed(tmp);
                }
                let el_p = "cost[" + unv_load[now] + "]" + " <= " + "This Edge + cost[" + mini_load[now] + "] not change!" ;
                document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;       
              }
              else{
                let el_p = unv_load[now] + "->" + mini_load[now] + "No Way!" ;
                document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;    
              }
            }
            await wait(1000)
            now++;
            if (isPaused) {
              return; // stop
            }
    }
    indicatePath(parent_load[cnt_round], source,minc_load[cnt_round]);
    updateDisplay();
}

const indicatePathSingle = async (parentArr, src, tar,minc) => {
    document.getElementsByClassName("path")[0].innerHTML = "";
    let p = document.createElement("p");
    p.innerText = "Node " + tar + " --> " + src + " weight: " + minc[tar] + " path:" + src +" ";

    await printPath(parentArr, tar, p);
}

const indicatePath = async (parentArr, src,minc) => {
  document.getElementsByClassName("path")[0].innerHTML = "";
  for (i = 0; i < cnt; i++) {
    let p = document.createElement("p");
    p.innerText = "Node " + src + " --> " + i + " weight: " + minc[i] + " path:" + src +" ";
    await printPath(parentArr, i, p);
  }
};

const deletePath = async(parent,j) => {
  if (parent[j] === -1) return;
  await deletePath(parent,parent[j]);
  if (j < parent[j]) {
    let tmp = document.getElementById(`line-${j}-${parent[j]}`);
    await colorEdgeWhite(tmp);
  } else {
    let tmp = document.getElementById(`line-${parent[j]}-${j}`);
    await colorEdgeWhite(tmp);
  }
}

const printPath = async (parent, j, el_p) => {
  if (parent[j] === -1) return;
  await printPath(parent, parent[j], el_p);
  el_p.innerText = el_p.innerText + " -> " + j;
  document.getElementsByClassName("path")[0].style.padding = "1rem";
  document.getElementsByClassName("path")[0].appendChild(el_p);
  if (j < parent[j]) {
    let tmp = document.getElementById(`line-${j}-${parent[j]}`);
    await colorEdge(tmp);
  } else {
    let tmp = document.getElementById(`line-${parent[j]}-${j}`);
    await colorEdge(tmp);
  }
};

const drawPath = async (parent, j) => {
  if (parent[j] === -1) return;
  await drawPath(parent,parent[j]);
  if (j < parent[j]) {
    let tmp = document.getElementById(`line-${j}-${parent[j]}`);
    await colorEdge(tmp);
  } else {
    let tmp = document.getElementById(`line-${parent[j]}-${j}`);
    await colorEdge(tmp);
  }
}

const colorEdge = async (el) => {
  if (el.style.backgroundColor !== "aqua") {
    
    el.style.backgroundColor = "aqua";
    el.style.height = "8px";
    await wait(1000);
  }
};

const colorEdgeWhite = async (el) => {
  if (el.style.backgroundColor !== "white") {
    
    el.style.backgroundColor = "white";
    el.style.height = "8px";

  }
};

const colorEdgeRed = async (el) => {
  if (el.style.backgroundColor === "aqua") {
    el.style.backgroundColor = "red";
    await wait(1000);
    el.style.backgroundColor = "aqua";
    el.style.height = "8px";
  } else if(el.style.backgroundColor === "white"){
    el.style.backgroundColor = "red";
    await wait(1000);
    el.style.backgroundColor = "white";
    el.style.height = "8px";
  }
};

const clearScreenAll = () => {
  document.getElementsByClassName("path")[0].innerHTML = "";
  now = 0
  cnt_round = 0;
  parent_load = [];
  cost_load = [];
  mini_load = [];
  unv_load = [];
  minc_load = [];
  isPaused = false;
  document.getElementsByClassName("left-btn")[0].disabled = true;
  document.getElementsByClassName("right-btn")[0].disabled = true;
  document.getElementsByClassName("result-btn")[0].disabled = true;
  document.getElementsByClassName("stop-btn")[0].disabled = true;
  document.getElementsByClassName("stop-btn")[0].innerHTML = "stop";
  var displayElement = document.getElementById("progress");
  displayElement.textContent = " ";
};
const clearScreen = () => {
  document.getElementsByClassName("path")[0].innerHTML = "";
  let lines = document.getElementsByClassName("line");
  for (line of lines) {
    line.style.backgroundColor = "white";
    line.style.height = "5px";
  }
};

const resetDrawingArea = () => {
  blocks.innerHTML = "";

  const p = document.createElement("p");
  p.classList.add("click-instruction");
  p.innerHTML = "Click to create node";

  blocks.appendChild(p);
  document.getElementById("add-edge-enable").disabled = false;
  document.querySelector(".reset-btn").disabled = true;
  document.getElementsByClassName("path")[0].innerHTML = "";

  cnt = 0;
  dist = [];
  addEdge = false;
};

const wait = async (t) => {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, t);
  });
  res = await pr;
};

const astatus = () =>{
  isPaused = !isPaused;
  if(isPaused === false){
      document.getElementsByClassName("left-btn")[0].disabled = true;
      document.getElementsByClassName("right-btn")[0].disabled = true;
      document.getElementsByClassName("result-btn")[0].disabled = true;
      document.getElementsByClassName("stop-btn")[0].innerHTML = "stop";
      run();
  } else{
    document.getElementsByClassName("left-btn")[0].disabled = false;
    document.getElementsByClassName("right-btn")[0].disabled = false;
    document.getElementsByClassName("result-btn")[0].disabled = false;
    document.getElementsByClassName("stop-btn")[0].innerHTML = "continue";
  }
}

const updateDisplay =  () => {
  var displayElement = document.getElementById("progress");
  if(cnt_round === 0){
    return;
  }
  if(now < cnt_round){
    displayElement.textContent = (now+1) + "/" + cnt_round;
  } else{
    displayElement.textContent = now + "/" + cnt_round;
  }

  if(now === 0){
    document.getElementsByClassName("left-btn")[0].disabled = true;
  }
  if(now === cnt_round-1 || now === cnt_round){
    document.getElementsByClassName("result-btn")[0].disabled = true;
    document.getElementsByClassName("stop-btn")[0].disabled = true;
    document.getElementsByClassName("right-btn")[0].disabled = true;
    document.getElementsByClassName("left-btn")[0].disabled = false;
  }
}

const backward = async () => {
  document.getElementsByClassName("stop-btn")[0].innerHTML = "continue";
  if(now === cnt_round){
    now--;
  }
  if(cost_load[now][unv_load[now]] >= dist[mini_load[now]][unv_load[now]] + cost_load[now][mini_load[now]] && dist[mini_load[now]][unv_load[now]] > 0 && dist[mini_load[now]][unv_load[now]] !== Infinity){
    await deletePath(parent_load[now+1],unv_load[now]);
  }
  if(cost_load[now][mini_load[now]] > 0 && cost_load[now][mini_load[now]] !== Infinity ){
    await drawPath(parent_load[now],mini_load[now]);
  }
  now--;
  updateDisplay();
  document.getElementsByClassName("stop-btn")[0].disabled = true;
  document.getElementsByClassName("left-btn")[0].disabled = true;
  document.getElementsByClassName("right-btn")[0].disabled = true;
  document.getElementsByClassName("result-btn")[0].disabled = true;
  await showSingle();
  document.getElementsByClassName("stop-btn")[0].disabled = false;
  document.getElementsByClassName("left-btn")[0].disabled = false;
  document.getElementsByClassName("right-btn")[0].disabled = false;
  document.getElementsByClassName("result-btn")[0].disabled = false;
  updateDisplay();
}

const forward = async () => {
  document.getElementsByClassName("stop-btn")[0].innerHTML = "continue";
  now++;
  updateDisplay();
  document.getElementsByClassName("stop-btn")[0].disabled = true;
  document.getElementsByClassName("left-btn")[0].disabled = true;
  document.getElementsByClassName("right-btn")[0].disabled = true;
  document.getElementsByClassName("result-btn")[0].disabled = true;
  await showSingle();
  document.getElementsByClassName("stop-btn")[0].disabled = false;
  document.getElementsByClassName("left-btn")[0].disabled = false;
  document.getElementsByClassName("right-btn")[0].disabled = false;
  document.getElementsByClassName("result-btn")[0].disabled = false;
  updateDisplay();
}

const showSingle = async () => {
  document.getElementsByClassName("path")[0].innerHTML = "";  
  updateDisplay();
  let source = Number(document.getElementById("source-node").value);
  
            if (cost_load[now][unv_load[now]] >= dist[mini_load[now]][unv_load[now]] + cost_load[now][mini_load[now]] && dist[mini_load[now]][unv_load[now]] > 0 && dist[mini_load[now]][unv_load[now]] !== Infinity) {    
                if (mini_load[now] < unv_load[now]) {
                    let tmp = document.getElementById(`line-${mini_load[now]}-${unv_load[now]}`);
                    await colorEdgeRed(tmp);
                } else {
                    let tmp = document.getElementById(`line-${unv_load[now]}-${mini_load[now]}`);
                    await colorEdgeRed(tmp);
                }
                if(cost_load[now][unv_load[now]] > 0 && cost_load[now][unv_load[now]] !== Infinity){
                  await deletePath(parent_load[now],unv_load[now]);
                }
                await indicatePathSingle(parent_load[now+1], source, unv_load[now],minc_load[now+1] );
                let el_p = "cost[" + unv_load[now] + "]" + " >= " + "This Edge + cost[" + mini_load[now] + "] uptate!" ;
                document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;        
            } else{
              if(dist[mini_load[now]][unv_load[now]] > 0 && dist[mini_load[now]][unv_load[now]] !== Infinity){
                if (mini_load[now] < unv_load[now]) {
                  let tmp = document.getElementById(`line-${mini_load[now]}-${unv_load[now]}`);
                  await colorEdgeRed(tmp);
                } else {
                  let tmp = document.getElementById(`line-${unv_load[now]}-${mini_load[now]}`);
                  await colorEdgeRed(tmp);
                }
                let el_p = "cost[" + unv_load[now] + "]" + " < " + "This Edge + cost[" + mini_load[now] + "] not change!" ;
                document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;       
              }
              
              else{
                let el_p = unv_load[now] + "->" + mini_load[now] + "No Way!" ;
                document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;    
              }
              
            }
            await wait(1000)
            
}

const showResult = () =>{
  clearScreen();
  now = cnt_round-1;
  updateDisplay();
  let source = Number(document.getElementById("source-node").value);
  indicatePath(parent_load[cnt_round], source,minc_load[cnt_round]);
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    event.preventDefault(); // 防止空格键触发其他默认行为（如滚动页面）
    astatus();
  }
  else if (event.code === "ArrowLeft") {
    event.preventDefault();
    backward();
  } else if (event.code === "ArrowRight") {
    event.preventDefault();
    forward();
  }
});