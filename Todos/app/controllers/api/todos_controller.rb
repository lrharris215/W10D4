class Api::TodosController < ApplicationController


  def index
    @todos = Todo.all
    render json: @todos
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo && @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo
      @todo.destroy
      render json: @todo
    else
      # render json: @todo.errors.full_messages
    end
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    render json: Todo.find(params[:id])
  end

  def todo_params()
    params.require(:todo).permit(:title, :body, :done)
  end

end