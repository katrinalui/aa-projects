require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content 'Sign Up'
  end

  feature 'signing up a user' do
    before(:each) do
      visit new_user_url
      fill_in 'username', with: 'tester'
      fill_in 'password', with: 'password'
      click_on 'Create User'
    end

    scenario 'redirects to goals index page after signup' do
      expect(page).to have_content 'Goals'
    end

    scenario 'shows username on the homepage after signup' do
      expect(page).to have_content 'tester'
    end
  end

  feature 'invalid signup' do
    before(:each) do
      visit new_user_url
      fill_in 'username', with: 'tester'
      click_on 'Create User'
    end

    scenario 're-renders the new user page after failed signup' do
      expect(page).to have_content "Password is too short (minimum is 6 characters)"
    end
  end

  feature 'logging in' do
    scenario 'shows username on page after login' do
      User.create!(username: 'ricksanchez', password: 'wubbalubbadubdub')
      visit new_session_url
      fill_in 'username', with: 'ricksanchez'
      fill_in 'password', with: 'wubbalubbadubdub'
      click_on 'Sign In'

      expect(page).to have_content 'ricksanchez'
    end
  end

  feature 'logging out' do
    before(:each) do
      User.create!(username: 'ricksanchez', password: 'wubbalubbadubdub')
      visit new_session_url
      fill_in 'username', with: 'ricksanchez'
      fill_in 'password', with: 'wubbalubbadubdub'
      click_on 'Sign In'
    end

    scenario 'begins with a logged out state' do
      click_on 'Sign Out'
      expect(page).to have_content 'Sign In'
    end

    scenario 'does not show username on the homepage after logout' do
      click_on 'Sign Out'
      expect(page).to_not have_content 'ricksanchez'
    end
  end
end
