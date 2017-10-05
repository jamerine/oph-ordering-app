class Api::V1::ProductsController < ApplicationController

  def index
    @products = Product.where(online_order_item: true).order(:product_type)
    render json: @products.to_json
  end

  def show
    @product = Product.find(params[:id])
    render json: @product.to_json
  end

  
end
