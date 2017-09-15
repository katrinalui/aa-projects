class Api::ItemsController < ApplicationController
  def index
    @items = Pokemon.find(params[:pokemon_id]).items
  end

  def show
    @item = Item.find(params[:id])
  end
end
