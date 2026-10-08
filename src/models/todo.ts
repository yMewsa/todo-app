// Modelo para representar a tarefa no banco de dados

import mongoose, { Model, Schema } from "mongoose";

// Classe modelo do banco
export interface ITodo extends Document{
    title: string;
    completed: boolean;
    createdAT: Date;
}

const todoSchema: Schema<ITodo> = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "O titulo da Tarefa é obrigatório"],
        trim: true,
        maxLength: [100, "O titulo da tarefa não pode ter mais de 100 caracteres"]
    },
    completed:{ 
        type: Boolean,
        default: true
    },
    createdAT: {
        type: Date,
        default: Date.now
    }
});

const Todo: Model<ITodo> = mongoose.models.Todo || mongoose.model<ITodo>("Todo", todoSchema);

// Exporta o modelo
export default Todo;