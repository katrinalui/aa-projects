require 'spec_helper'
require 'rails_helper'

feature 'creating a goal' do
  before(:each) do
    sign_up_as_ricksanchez
    visit new_goal_url
  end

  scenario 'has a new goal page' do
    expect(page).to have_content 'Add New Goal'
  end

  scenario 'it takes a title and details' do
    expect(page).to have_content 'Title'
    expect(page).to have_content 'Details'
  end

  scenario 'it has a public/private option' do
    expect(page).to have_content 'Private'
    expect(page).to have_content 'Public'
  end

  scenario 'redirects to the goal show page on success' do
    fill_in 'title', with: 'Improve Cooking Skills'
    fill_in 'details', with: 'I would like to not poison people with my cooking.'
    click_button 'Add Goal'

    expect(current_url).to eq(goal_url(Goal.last))
  end

  scenario 'defaults to public setting' do
    fill_in 'title', with: 'Improve Cooking Skills'
    fill_in 'details', with: 'I would like to not poison people with my cooking.'
    click_button 'Add Goal'

    expect(page).to have_content 'Public'
  end

  scenario 'makes goal private if selected' do
    fill_in 'title', with: 'Improve Cooking Skills'
    fill_in 'details', with: 'I would like to not poison people with my cooking.'
    choose('Private')
    click_button 'Add Goal'

    expect(page).to have_content 'Private'
  end
end

feature 'editing a goal' do
  before(:each) do
    sign_up_as_ricksanchez
    add_goal('Improve Cooking Skills', 'I would like to not poison people with my cooking.')
    visit goals_url
    click_link 'Improve Cooking Skills'
  end

  scenario 'shows a form to edit a goal' do
    click_link 'Edit Goal'
    expect(page).to have_content 'Title'
    expect(page).to have_content 'Details'
  end

  scenario 'has all of the data prefilled' do
    click_link 'Edit Goal'
    expect(find_field('title').value).to eq('Improve Cooking Skills')
    expect(find_field('details').value).to eq('I would like to not poison people with my cooking.')
  end

  scenario 'shows errors if editing fails' do
    click_link 'Edit Goal'
    fill_in 'title', with: ''
    click_button 'Edit Goal'
    expect(page).to have_content 'Edit Goal'
    expect(page).to have_content 'Title can\'t be blank'
  end
end
