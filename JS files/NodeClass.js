class NodeClass{
    constructor(id, name, duration){
        this.parents = [];
        this.children = [];
        this.name = name;
        this.id = id;
        this.start = false;
        this.finish = false;
        this.duration = duration;

        this.task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.name)
            }, this.duration);
        });
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
