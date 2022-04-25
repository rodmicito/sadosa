const Task = require("./models/Task");
//  que se va dovolver cuando se pide algo
const resolvers = {
  Query: {
    hello: () => "Hello world",
    getAllTasks: async () => {
      const tasks = await Task.find();
      return tasks;
    },
    async getTask(_, { id }) {
      return await Task.findById(id);
    },
  },
  Mutation: {
    async createTask(_,args) {
      const { title, description } = args;
      const newTask = new Task({ title, description });
      console.log(newTask);
      await newTask.save();
      return newTask;
    },
    async deleteTask(_, { id }) {
      const taskDelete=await Task.findByIdAndDelete(id);
      return taskDelete;
    },
    async updateTask(_, { id, task }) {
      const { title, description } = task;
      const newTask = await Task.findByIdAndUpdate(
        id,
        {
          $set: {
            title,
            description,
          },
        },
        {
          new: true,
        }
      );
      return newTask;
    },
  },
  
};

module.exports = {
  resolvers,
};
