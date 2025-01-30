const path = require("node:path");
const express = require("express");
const { default: mongoose } = require("mongoose");
const authRouter = require(path.join(__dirname, 'routes', 'auth.js'));
const projectsRoutes = require(path.join(__dirname, 'routes', 'projectRoutes'));
const deploymentRoutes = require(path.join(__dirname, 'routes', 'deploymentRoutes'));
const pipelineRoutes = require(path.join(__dirname, 'routes', 'pipelineRoutes'));
const userRoutes = require(path.join(__dirname, 'routes', 'userRoutes'));

const app = new express();

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/:username/projects', projectsRoutes);
app.use('/api/:username/deployments', deploymentRoutes);
app.use('/api/:username/pipelines', pipelineRoutes);
app.use('/api/user', userRoutes);


const CONNECTION_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => console.log("Connected to MongoDB successfully!"))
    .then(() => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
    .catch((error) => console.error(error.message));