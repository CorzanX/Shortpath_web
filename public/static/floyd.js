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


let p_load = []
let cost_load =[]
let cnt_round = 0
let atb =[]

// Function to find shortest path from given source to all other nodes
const findShortestPath = async (el) => {
  
  clearScreen();
  document.getElementsByClassName("stop-btn")[0].disabled = false;
  
  //let source = Number(el.previousElementSibling.value);
  let source = Number(document.getElementById("source-node").value);
  let target = Number(document.getElementById("target-node").value);
  if (source >= cnt || isNaN(source)) {
    alert("Invalid source");
    return;
  }
  if (target >= cnt || isNaN(target)) {
    alert("Invalid target");
    return;
  }
  document.getElementById(source).style.backgroundColor = "grey";
  document.getElementById(target).style.backgroundColor = "grey";
  // console.log(source);
  let p = [];

  // Array containing cost of reaching i(th) node from source
  let cost = [];
  for (let i = 0; i < cnt; i++) {
    cost[i] = [];
    p[i] = [];
    for (let j = 0; j < cnt; j++) {
      if (i === j) {
        cost[i][j] = 0;
      } else if (dist[i][j]) {
        cost[i][j] = dist[i][j];
      } else {
        cost[i][j] = Infinity;
      }
      p[i][j] = j;
    }
  }

  // Array which will contain final minimum cost
  let minCost = [];
  minCost[source] = 0;

  // Repeating until all edges are visited
  for(let i = 0; i < cnt ;i++){
    for(let j = 0;j < cnt ;j++){
      for (let w = 0; w < cnt ;w++){
        cnt_round++;
        
        cost_load.push(cost.slice());
        p_load.push(p.slice());
        atb.push([i,j,w]);
        if(cost[j][w] > cost[j][i] + cost[i][w] )
        {
          cost[j][w] = cost[j][i] + cost[i][w];
          p[j][w] = p[j][i];
        }

      }
    }
  }
  cost_load.push(cost.slice());
  p_load.push(p.slice());
  //indicatePath(p,cost, source,target,1);
  updateDisplay();
  run();
};

const indicatePath = async (parentArr,cost, src,tar,flag) => {
  //document.getElementsByClassName("path")[0].innerHTML = "";
  
    let p = document.createElement("p");
    
    await printPath(parentArr, src,tar, p,flag);
    p.innerText = "Node " + src + " --> " + tar + " weight:" + cost[src][tar] + " path: " + p.innerText + "\n";
    await wait(500)
};

const printPath = async (parent, i,j, el_p,flag) => {
  let k = parent[i][j];
  if(k===j){
    document.getElementsByClassName("path")[0].style.padding = "1rem";
    document.getElementsByClassName("path")[0].appendChild(el_p);
    el_p.innerText =i + " -> " + k + el_p.innerText;
    if (i < k) {
      let tmp = document.getElementById(`line-${i}-${k}`);
      if(flag === 1){
        await colorEdge(tmp);
      }else {
        await colorEdge_red(tmp);
      }
    } else {
      let tmp = document.getElementById(`line-${k}-${i}`);
      if(flag === 1){
        await colorEdge(tmp);
      }else {
        await colorEdge_red(tmp);
      }
    }
    return;
  }

  await printPath(parent,k,j,el_p,flag);
  el_p.innerText = i + " -> " + el_p.innerText;
  document.getElementsByClassName("path")[0].style.padding = "1rem";
  document.getElementsByClassName("path")[0].appendChild(el_p);
  if (i < k) {
    let tmp = document.getElementById(`line-${i}-${k}`);
    if(flag === 1){
        await colorEdge(tmp);
      }else {
        await colorEdge_red(tmp);
      }
  } else {
    let tmp = document.getElementById(`line-${k}-${i}`);
    if(flag === 1){
        await colorEdge(tmp);
      }else {
        await colorEdge_red(tmp);
      }
  }
  // console.log(j,parent[j]);
};

const colorEdge = async (el) => {
  if (el.style.backgroundColor !== "aqua") {
    //await wait(1000);
    el.style.backgroundColor = "aqua";
    el.style.height = "8px";
  }
};

const colorEdge_red = async (el) => {
  if (el.style.backgroundColor !== "red") {
    el.style.backgroundColor = "red";
    //await wait(1000);
    el.style.height = "8px";
  }
}

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

let isPaused = false;
let now = 0;
const show_single = async () => {
  document.getElementsByClassName("left-btn")[0].disabled = true;
  document.getElementsByClassName("right-btn")[0].disabled = true;
  updateDisplay();
  document.getElementsByClassName("result-btn")[0].disabled = true;
  clearScreen();
  if(cost_load[now][atb[now][1]][atb[now][0]] !== Infinity && cost_load[now][atb[now][1]][atb[now][0]] > 0){
      await indicatePath(p_load[now],cost_load[now], atb[now][1],atb[now][0],1);
  }
  if(cost_load[now][atb[now][0]][atb[now][2]] !== Infinity && cost_load[now][atb[now][0]][atb[now][2]] > 0){
    await indicatePath(p_load[now],cost_load[now], atb[now][0],atb[now][2],1);
  }
  if(cost_load[now][atb[now][1]][atb[now][2]] !== Infinity && cost_load[now][atb[now][1]][atb[now][2]] > 0){
    await indicatePath(p_load[now],cost_load[now], atb[now][1],atb[now][2],0);
  }
  let el_p = "";
  if(cost_load[now][atb[now][1]][atb[now][2]] > cost_load[now][atb[now][1]][atb[now][0]] + cost_load[now][atb[now][0]][atb[now][2]] )
  {
    el_p = el_p + atb[now][1] + "-->" + atb[now][0] + " + " + atb[now][0] + "-->" + atb[now][2] + " < " + atb[now][1] + "-->" + atb[now][2] ;
    el_p = el_p + "\n" + "update!";
  }
  else{
    el_p = el_p + atb[now][1] + "-->" + atb[now][0] + " + " + atb[now][0] + "-->" + atb[now][2] + " < " + atb[now][1] + "-->" + atb[now][2] ;
    el_p = el_p + "\n" + "not change!";
  }
  document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;
  document.getElementsByClassName("left-btn")[0].disabled = false;
  document.getElementsByClassName("right-btn")[0].disabled = false;
  document.getElementsByClassName("result-btn")[0].disabled = false;
};

const run = async () => {
  clearScreen();
    for(; now < cnt_round ;now++){
        updateDisplay();
        if(cost_load[now][atb[now][1]][atb[now][0]] !== Infinity && cost_load[now][atb[now][1]][atb[now][0]] > 0){
            await indicatePath(p_load[now],cost_load[now], atb[now][1],atb[now][0],1);
        }
        if(cost_load[now][atb[now][0]][atb[now][2]] !== Infinity && cost_load[now][atb[now][0]][atb[now][2]] > 0){
            await indicatePath(p_load[now],cost_load[now], atb[now][0],atb[now][2],1);
        }
        if(cost_load[now][atb[now][1]][atb[now][2]] !== Infinity && cost_load[now][atb[now][1]][atb[now][2]] > 0){
            await indicatePath(p_load[now],cost_load[now], atb[now][1],atb[now][2],0);
        }
        let el_p = "";
        if(cost_load[now][atb[now][1]][atb[now][2]] > cost_load[now][atb[now][1]][atb[now][0]] + cost_load[now][atb[now][0]][atb[now][2]] )
        {
          el_p = el_p + atb[now][1] + "-->" + atb[now][0] + " + " + atb[now][0] + "-->" + atb[now][2] + " < " + atb[now][1] + "-->" + atb[now][2] ;
          el_p = el_p + "\n" + "update!";
        }
        else{
          el_p = el_p + atb[now][1] + "-->" + atb[now][0] + " + " + atb[now][0] + "-->" + atb[now][2] + " < " + atb[now][1] + "-->" + atb[now][2] ;
          el_p = el_p + "\n" + "not change!";
        }
        document.getElementsByClassName("path")[0].innerHTML = document.getElementsByClassName("path")[0].innerHTML + el_p;
        await wait(1000);
        if (isPaused) {
            return; // 如果需要暂停，则跳出循环
        }
        clearScreen();
    }
    showResult();
}

const astatus = () =>{
    isPaused = !isPaused;
    if(isPaused === false){
        document.getElementsByClassName("left-btn")[0].disabled = true;
        document.getElementsByClassName("right-btn")[0].disabled = true;
        document.getElementsByClassName("result-btn")[0].disabled = true;
        document.getElementsByClassName("stop-btn")[0].innerHTML = "stop";
        clearScreen();
        run();
    } else{
      document.getElementsByClassName("left-btn")[0].disabled = false;
      document.getElementsByClassName("right-btn")[0].disabled = false;
      document.getElementsByClassName("result-btn")[0].disabled = false;
      document.getElementsByClassName("stop-btn")[0].innerHTML = "continue";
    }
}

const backward = async () => {
  document.getElementsByClassName("stop-btn")[0].innerHTML = "continue";
  now--;
  document.getElementsByClassName("stop-btn")[0].disabled = false;
  show_single();
}

const forward = async () => {
  document.getElementsByClassName("stop-btn")[0].innerHTML = "continue";
  now++;
  document.getElementsByClassName("stop-btn")[0].disabled = false;
  show_single();
}

const showResult = async () => {
  clearScreen();
  now = cnt_round-1;
  updateDisplay();
  document.getElementsByClassName("left-btn")[0].disabled = false;
  let source = Number(document.getElementById("source-node").value);
  let target = Number(document.getElementById("target-node").value);
  indicatePath(p_load[cnt_round],cost_load[cnt_round], source,target,1);
}

const updateDisplay = () => {
  var displayElement = document.getElementById("progress");
  displayElement.textContent = (now+1) + "/" + cnt_round;

  if(now === 0){
    document.getElementsByClassName("left-btn")[0].disabled = true;
  }
  if(now === cnt_round-1){
    document.getElementsByClassName("result-btn")[0].disabled = false;
    document.getElementsByClassName("stop-btn")[0].disabled = true;
    document.getElementsByClassName("right-btn")[0].disabled = true;
  }
}

const wait = async (t) => {
  let pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, t);
  });
  res = await pr;
};

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

const clearScreenAll = () => {
  document.getElementsByClassName("path")[0].innerHTML = "";
  now = 0
  cnt_round = 0;
  p_load = []
  cost_load =[]
  cnt_round = 0
  atb =[]
  isPaused = false;
  document.getElementsByClassName("left-btn")[0].disabled = true;
  document.getElementsByClassName("right-btn")[0].disabled = true;
  document.getElementsByClassName("result-btn")[0].disabled = true;
  document.getElementsByClassName("stop-btn")[0].disabled = true;
  document.getElementsByClassName("stop-btn")[0].innerHTML = "stop";
  var displayElement = document.getElementById("progress");
  displayElement.textContent = " ";
};