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
      it "validates the presence of username and password" do
        post :create, params: { user: { username: 'tester', password: '' } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end

      it "validates that password is at least 6 characters long" do
        post :create, params: { user: { username: 'tester', password: '12345' } }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end
    end

    context "with valid params" do
      it "redirects to goals index page" do
        post :create, params: { user: { username: 'tester', password: '123456' } }
        expect(response).to redirect_to(goals_url)
      end
    end
  end
end
