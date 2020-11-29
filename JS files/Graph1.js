class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
 
    // functions to be implemented
 
    // addVertex(v)
    addVertex(v)
    {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
    }
    // addEdge(v, w)
    addEdge(v, w)
    {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
 
   
    }
    // printGraph()
 
    // bfs(v)
    bfs(startingNode)
    {
 
    // create a visited object
    var visited = {};
 
    // Create an object for queue
    var q = new Queue();
 
    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);
 
    // loop until queue is element
    while (!q.isEmpty()) {
        // get the element from the queue
        var getQueueElement = q.dequeue();
 
        // passing the current vertex to callback funtion
        console.log(getQueueElement);
 
        // get the adjacent list for current vertex
        var get_List = this.AdjList.get(getQueueElement);
 
        // loop through the list and add the element to the
        // queue if it is not processed yet
        for (var i in get_List) {
            var neigh = get_List[i];
 
            if (!visited[neigh]) {
                visited[neigh] = true;
                q.enqueue(neigh);
            }
        }
    }
}
    // dfs(v)
}
module.exports = Graph1;