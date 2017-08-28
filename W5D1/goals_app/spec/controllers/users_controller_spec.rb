require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "renders the sign up page" do
      get :new
      expect(response).to render_template('new')
    end
  end

  describe "POST #create" do
    context 'with invalid params'do
      post :create, params: { user: { username: 'tester', password: '12345' } }
      expect(response).to render_template('new')
      expect(flash[:errors]).to be_present
    end
  end
end
