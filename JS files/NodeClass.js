class NodeClass{
    constructor(id, name, duration){
        this.parents = [];
        this.children = [];
        this.name = name;
        this.id = id;
        this.duration = duration;

        this.task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.name)
            }, this.duration);
        });

        this.httpRequest = 0;
    }

    setParents(Parent){
        this.parents.push(Parent)
    }

    setChildren(childrenArray){
        this.children = childrenArray;
    }

    getParents(){
        return this.parents;
    }

    getChildren(){
        return this.children;
    }

}

module.exports = NodeClass;
